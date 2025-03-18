import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, reuired: true },
    currency: { type: String, required: true, default: "ARS" },
  },
  { timestamps: true },
);

const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);

export default Account;
