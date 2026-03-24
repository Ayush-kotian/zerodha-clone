const { Schema } = require("mongoose");

const HoldingsSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
  { timestamps: true }
);

HoldingsSchema.index({ userId: 1, name: 1, createdAt: 1, _id: 1 });

module.exports = HoldingsSchema;
