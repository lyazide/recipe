import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Fetch all recettes
    const recettes = await prisma.recette.findMany(/*{
      include: {
        recettes: true,
      },
    }*/);

    if (!recettes || recettes.length === 0) {
      return NextResponse.json(
        { error: "No recettes found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: recettes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching recettes:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the recettes." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { description, difficulty, time, ingredients, etapes, authorId } =
    await req.json();
  try {
    const newRecette = await prisma.recette.create({
      data: {
        description,
        difficulty,
        time,
        ingredients,
        etapes,
        authorId,
      },
    });
    return NextResponse.json({ data: newRecette }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { description, difficulty, time, ingredients, etapes, authorId, id } =
    await req.json();
  try {
    const newRecette = await prisma.recette.update({
      where: { id: id },
      data: {
        description,
        difficulty,
        time,
        ingredients,
        etapes,
        authorId,
      },
    });
    return NextResponse.json({ data: newRecette }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const deletedRecette = await prisma.recette.delete({
      where: { id: id },
    });
    return NextResponse.json({ data: deletedRecette }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
