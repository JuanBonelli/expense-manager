import type { ObjectId } from "mongoose";

import Movement from "@/models/Movement";
import dbConnect from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { movementId: string } },
) => {
  try {
    const parameters = await params;
    const movementId = parameters.movementId;
    console.log(">>>> " + movementId + " <<<<");

    await dbConnect();
    const data = await Movement.find({
      _id: movementId ,
    });

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to get Movement" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { movementId: number } },
) => {
  try {
    const parameters = await params;
    const movementId = parameters.movementId;

    await dbConnect();
    await Movement.findByIdAndDelete(movementId);
    return NextResponse.json({ message: "Movement Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete Movement" },
      { status: 500 },
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { movementId: number } },
) => {
  try {
    const parameters = await params;
    const movementId = parameters.movementId;

    const { title, amount, description, categoryId } = await req.json();

    await dbConnect();
    await Movement.findByIdAndUpdate(movementId, {
      amount,
      title,
      description,
      categoryId,
    });
    return NextResponse.json({ message: "Movement Updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update Movement" },
      { status: 500 },
    );
  }
};
