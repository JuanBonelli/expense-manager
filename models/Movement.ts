import mongoose, { Schema } from "mongoose";

const movementSchema: Schema = new Schema(
  {
    
    amount: { type: Number, required: true },
    title : { type: String, required: true},
    description: { type: String },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Movement = mongoose.models.Movement ||mongoose.model("Movement", movementSchema);
export default Movement;