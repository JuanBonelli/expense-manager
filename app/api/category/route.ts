import dbConnect from "@/utils/database";
import Category from "@/models/Category";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const data = await Category.find({});
    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to find Categories" },
      { status: 500 },
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name } = await req.json();
    await dbConnect();
    await Category.create({ name });
    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create Category: "  + err},
      { status: 500 },
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await dbConnect();
    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: "Category Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete Category" },
      { status: 500 },
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const { name } = await req.json();

    await dbConnect();
    await Category.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "Category Updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update Category" },
      { status: 500 },
    );
  }
};
