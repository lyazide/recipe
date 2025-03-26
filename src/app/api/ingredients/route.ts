import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Fetch all Ingredients
    const Ingredients = await prisma.ingredient.findMany(/*{
      include: {
        ingredients: true,
      },
    }*/);

    if (!Ingredients || Ingredients.length === 0) {
      return NextResponse.json(
        { error: "No Ingredients found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: Ingredients }, { status: 200 });
  } catch (error) {
    console.error("Error fetching Ingredients:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the Ingredients." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { name, quantity, recetteId } = await req.json();
  try {
    const newIngredient = await prisma.ingredient.create({
      data: {
        name,
        quantity,
        recette: {
          connect: { id: recetteId },
        },
      },
    });
    return NextResponse.json({ data: newIngredient }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { name, quantity, recetteId, id } = await req.json();
  try {
    const newIngredient = await prisma.ingredient.update({
      where: { id: id },
      data: {
        name,
        quantity,
        recette: {
          connect: { id: recetteId },
        },
      },
    });
    return NextResponse.json({ data: newIngredient }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const deletedIngredient = await prisma.ingredient.delete({
      where: { id: id },
    });
    return NextResponse.json({ data: deletedIngredient }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
