import mongoose, { Schema, models } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: String,
      required: true, // Razorpay order_id
      unique: true,
    },
    paymentId: {
      type: String, // Razorpay payment_id (filled after payment)
      default: null,
    },
    signature: {
      type: String, // Razorpay signature for verification
      default: null,
    },
    amount: {
      type: Number, // amount in paise
      required: true,
    },
    currency: {
      type: String,
      default: "INR",
    },
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
  },
  { timestamps: true, versionKey: false }
);

const Order = models.Order || mongoose.model("Order", OrderSchema);
export default Order;
