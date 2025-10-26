import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { saveFile } from "../fileupload";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const pizzaId = parseInt(id);
  if (isNaN(pizzaId)) {
    return NextResponse.json({ error: "Invalid pizza ID" }, { status: 400 });
  }

  try {
    const pizza = await prisma.pizza.delete({
      where: { id: pizzaId },
    });
    return NextResponse.json(pizza, { status: 200 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json({ error: "Pizza not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const pizzaId = Number(id);

    if (isNaN(pizzaId)) {
      return NextResponse.json({ error: "Invalid pizza ID" }, { status: 400 });
    }

    const formData = await req.formData();
    const name = formData.get("name") as string;
    const priceStr = formData.get("price") as string;
    const price = parseFloat(priceStr);
    const file =
      (formData.get("file") as File | null) ||
      (formData.get("image") as File | null);

    if (!name || isNaN(price)) {
      return NextResponse.json(
        { error: "Invalid name or price" },
        { status: 400 }
      );
    }

    const existingPizza = await prisma.pizza.findUnique({
      where: { id: pizzaId },
    });
    if (!existingPizza) {
      return NextResponse.json({ error: "Pizza not found" }, { status: 404 });
    }

    // keep current image by default
    let imagePath = existingPizza.image;

    // ✅ only save new file if provided (no deletion)
    if (file) {
      const ext = file.name.split(".").pop();
      const uniqueName = `${Date.now()}.${ext}`;
      const newFile = new File([file], uniqueName, { type: file.type });

      imagePath = await saveFile(newFile); // just save, don't delete old
    }

    // ✅ update database
    const updatedPizza = await prisma.pizza.update({
      where: { id: pizzaId },
      data: {
        name,
        price,
        image: imagePath,
      },
    });

    return NextResponse.json({
      message: "Pizza updated successfully",
      pizza: updatedPizza,
    });
  } catch (err) {
    console.error("Error updating pizza:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
