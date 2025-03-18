import dbConnect from "@/utils/database";
import Account from "@/models/Account";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await Account.find({});
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to find accounts" },
      { status: 500 },
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, description, currency } = await req.json();
    await dbConnect();
    await Account.create({ name, description, currency });
    return NextResponse.json({ message: "Account Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 },
    );
  }
};

