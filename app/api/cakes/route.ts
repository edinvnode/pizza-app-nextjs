import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { saveFile } from "./utils/fileupload";
import { cookieOptions } from "./utils/cookies";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const cookieSortedBy = req.cookies.get("sortedBy")?.value || "{}";
    const sortedBy = JSON.parse(cookieSortedBy);
    const cakes = await prisma.cake.findMany({ orderBy: sortedBy });
    return NextResponse.json(cakes);
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
    const priceStr = formData.get("price") as string;
    const price = parseFloat(priceStr);
    const file = formData.get("file") as File;
    const description = formData.get("description") as string;
    const sortedBy = JSON.parse(formData.get("sortedBy") as string);

    if (!name || isNaN(price) || !file || !description) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const imageUrl = await saveFile(file);

    const cake = await prisma.cake.create({
      data: { name, price, image: imageUrl, description },
    });

    const response = NextResponse.json(cake);
    response.cookies.set("sortedBy", JSON.stringify(sortedBy), {
      ...cookieOptions,
      httpOnly: false,
    });

    return response;
  } catch (err) {
    console.error("Error creating cake:", err);
    return NextResponse.json(
      { error: "Failed to create cake" },
      { status: 500 }
    );
  }
}
