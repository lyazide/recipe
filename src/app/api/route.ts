// src/app/api/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "hello" }, { status: 200 });
}
