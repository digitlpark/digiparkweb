// lib/crypto.ts
import crypto from "crypto";

export function verifyRazorpaySignature(orderId: string, paymentId: string, signature: string, keySecret?: string) {
  const secret = keySecret ?? process.env.RAZORPAY_KEY_SECRET!;
  const generated = crypto.createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest("hex");
  // timingSafeEqual requires buffers of same length
  const a = Buffer.from(generated);
  const b = Buffer.from(signature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function verifyWebhookSignature(rawBody: string | Buffer, signature: string, webhookSecret?: string) {
  const secret = webhookSecret ?? process.env.RAZORPAY_WEBHOOK_SECRET!;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
