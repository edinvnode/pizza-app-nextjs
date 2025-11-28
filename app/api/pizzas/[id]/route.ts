import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { saveFile } from "../utils/fileupload";
import { cookieOptions } from "../utils/cookies";

const prisma = new PrismaClient();

export async function PATCH(
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
    const name = formData.get("name") as string | null;
    const priceStr = formData.get("price") as string | null;
    const price = priceStr ? parseFloat(priceStr) : undefined;
    const file = formData.get("file") as File | null;
    const description = formData.get("description") as string | null;
    const sortedBy = JSON.parse(formData.get("sortedBy") as string);

    if (!name && !price && !file && !description) {
      return NextResponse.json(
        { error: "No fields provided to update" },
        { status: 400 }
      );
    }

    const existingPizza = await prisma.pizza.findUnique({
      where: { id: pizzaId },
    });
    if (!existingPizza) {
      return NextResponse.json({ error: "Pizza not found" }, { status: 404 });
    }

    const updateData: Record<string, any> = {};
    if (name) updateData.name = name;
    if (price !== undefined && !isNaN(price)) updateData.price = price;
    if (file) updateData.image = await saveFile(file);
    if (description) updateData.description = description;

    const updatedPizza = await prisma.pizza.update({
      where: { id: pizzaId },
      data: updateData,
    });

    const response = NextResponse.json({
      message: "Pizza updated successfully",
      pizza: updatedPizza,
    });

    response.cookies.set("sortedBy", JSON.stringify(sortedBy), {
      ...cookieOptions,
      httpOnly: false,
    });
    return response;
  } catch (err) {
    console.error("Error updating pizza:", err);
    return NextResponse.json(
      { error: "Failed to update pizza" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params;

  const pizzaId = parseInt(id);

  const url = new URL(req.url);
  const sortedBy = url.searchParams.get("sortedBy");
  const sortedByObj = sortedBy ? JSON.parse(sortedBy) : null;

  if (isNaN(pizzaId)) {
    return NextResponse.json({ error: "Invalid pizza ID" }, { status: 400 });
  }

  try {
    const pizza = await prisma.pizza.delete({ where: { id: pizzaId } });
    const response = NextResponse.json(pizza, { status: 200 });
    response.cookies.set("sortedBy", JSON.stringify(sortedByObj), {
      ...cookieOptions,
      httpOnly: false,
    });
    return response;
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
