import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Params {
  id: string;
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
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
