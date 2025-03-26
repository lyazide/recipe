import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Fetch all etapes
    const etapes = await prisma.etape.findMany(/*{
      include: {
        recettes: true,
      },
    }*/);

    if (!etapes || etapes.length === 0) {
      return NextResponse.json({ error: "No etapes found." }, { status: 404 });
    }

    return NextResponse.json({ data: etapes }, { status: 200 });
  } catch (error) {
    console.error("Error fetching etapes:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the etapes." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { instruction, recetteId } = await req.json();
  try {
    const newEtape = await prisma.etape.create({
      data: {
        instruction,
        recetteId,
      },
    });
    return NextResponse.json({ data: newEtape }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { instruction, recetteId, id } = await req.json();
  try {
    const newEtape = await prisma.etape.update({
      where: { id: id },
      data: {
        instruction,
        recetteId,
      },
    });
    return NextResponse.json({ data: newEtape }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const deletedEtape = await prisma.etape.delete({
      where: { id: id },
    });
    return NextResponse.json({ data: deletedEtape }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
