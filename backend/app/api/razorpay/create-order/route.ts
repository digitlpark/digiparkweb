import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { razorpay } from "@/lib/razorpay";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { amount } = await req.json();
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    await connectDB();

    // Convert to paise
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    // Create order on Razorpay
    const order = await razorpay.orders.create(options);

    // Save order in DB
    await Order.create({
      userId: session.user.id,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "created",
    });

    return NextResponse.json({ order });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
