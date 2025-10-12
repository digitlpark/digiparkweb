import { NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// ⚠️ Razorpay sends raw body — disable Next.js body parsing if needed (handled automatically in App Router)

export async function POST(req: Request) {
  try {
    const rawBody = await req.text(); // must be raw text, not parsed JSON
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    // 1️⃣ Verify webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(rawBody)
      .digest("hex");

    if (expectedSignature !== signature) {
      console.error("❌ Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // 2️⃣ Parse payload
    const event = JSON.parse(rawBody);
    const { event: eventType, payload } = event;

    await connectDB();

    // 3️⃣ Handle payment success
    if (eventType === "payment.captured") {
      const payment = payload.payment.entity;
      const orderId = payment.order_id;

      await Order.findOneAndUpdate(
        { orderId },
        {
          paymentId: payment.id,
          status: "paid",
        },
        { new: true }
      );

      console.log("✅ Payment captured and order updated:", orderId);
    }

    // 4️⃣ Handle payment failure
    if (eventType === "payment.failed") {
      const payment = payload.payment.entity;
      const orderId = payment.order_id;

      await Order.findOneAndUpdate(
        { orderId },
        { status: "failed" }
      );

      console.log("⚠️ Payment failed:", orderId);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
