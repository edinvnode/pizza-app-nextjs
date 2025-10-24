import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pizzas = await prisma.pizza.findMany();
    return NextResponse.json(pizzas);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const file = formData.get("file") as File;

    if (!file || !name || isNaN(price)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(process.cwd(), "public", "images", file.name);
    fs.writeFileSync(filePath, buffer);

    const pizza = await prisma.pizza.create({
      data: { name, price, image: `/images/${file.name}` },
    });

    return NextResponse.json(pizza);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
