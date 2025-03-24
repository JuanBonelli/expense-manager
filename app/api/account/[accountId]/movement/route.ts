import Movement from "@/models/Movement";
import dbConnect from "@/utils/database";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await Movement.find({});
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to find Movements" },
      { status: 500 },
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { title, description, amount, accountId, categoryId } =
      await req.json();
    await dbConnect();
    await Movement.create({
      title,
      description,
      amount,
      accountId,
      categoryId,
    });
    return NextResponse.json({ message: "Movement Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create Movement" + err },
      { status: 500 },
    );
  }
};
