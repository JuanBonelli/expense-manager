import Account from "@/models/Account";
import dbConnect from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { accountId: number } },
) => {
  try {
    const parameters = await params;
    const accountId = parameters.accountId;

    await dbConnect();
    await Account.findByIdAndDelete(accountId);
    return NextResponse.json({ message: "Account Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 500 },
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { accountId: number } },
) => {
  try {
    const parameters = await params;
    const accountId = parameters.accountId;

    const { name, description, currency } = await req.json();

    await dbConnect();
    await Account.findByIdAndUpdate(accountId, {
      name,
      description,
      currency,
    });
    return NextResponse.json({ message: "Account Updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update account" },
      { status: 500 },
    );
  }
};
