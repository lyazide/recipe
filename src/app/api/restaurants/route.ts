import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Fetch all restaurants
    const restaurants = await prisma.restaurant.findMany();

    console.log(restaurants);
    if (!restaurants || restaurants.length === 0) {
      return NextResponse.json(
        { error: "No restaurants found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: restaurants }, { status: 200 });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the restaurants." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { nom, photos, localisation, horaires } = await req.json();
  try {
    const newRestaurant = await prisma.restaurant.create({
      data: {
        nom,
        photos,
        localisation,
        horaires,
      },
    });
    return NextResponse.json({ data: newRestaurant }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { nom, photos, localisation, horaires, id } = await req.json();
  try {
    const newRestaurant = await prisma.restaurant.update({
      where: { id: id },
      data: {
        nom,
        photos,
        localisation,
        horaires,
      },
    });
    return NextResponse.json({ data: newRestaurant }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const deletedRestaurant = await prisma.restaurant.delete({
      where: { id: id },
    });
    return NextResponse.json({ data: deletedRestaurant }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
