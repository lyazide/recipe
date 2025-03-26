// src/app/api/users/route.ts

import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    const newUser = await prisma.utilisateur.create({
      data: {
        email,
        password,
      },
    });
    return NextResponse.json({ data: newUser }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
