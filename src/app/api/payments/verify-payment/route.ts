import crypto from "crypto";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

import { createAdminClient } from "@/lib/supabase/admin";

type VerifyPaymentRequest = {
  razorpay_payment_id?: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;

  name?: string;
  email?: string;
  message?: string;
};

function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay credentials are not configured.");
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as VerifyPaymentRequest;

    const paymentId = body.razorpay_payment_id?.trim();
    const orderId = body.razorpay_order_id?.trim();
    const receivedSignature = body.razorpay_signature?.trim();
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!paymentId || !orderId || !receivedSignature) {
      return NextResponse.json(
        {
          message: "Missing Razorpay payment information.",
        },
        {
          status: 400,
        }
      );
    }

    if (!keySecret) {
      throw new Error("RAZORPAY_KEY_SECRET is not configured.");
    }

    /*
     * Verify the Razorpay checkout signature.
     */
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "utf8");
    const receivedBuffer = Buffer.from(receivedSignature, "utf8");

    const isValid =
      expectedBuffer.length === receivedBuffer.length &&
      crypto.timingSafeEqual(expectedBuffer, receivedBuffer);

    if (!isValid) {
      return NextResponse.json(
        {
          message: "Payment signature verification failed.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Fetch the real order and payment from Razorpay.
     * Never trust amount or currency sent by the browser.
     */
    const razorpay = getRazorpayClient();

    const [order, payment] = await Promise.all([
      razorpay.orders.fetch(orderId),
      razorpay.payments.fetch(paymentId),
    ]);

    if (payment.order_id !== orderId) {
      return NextResponse.json(
        {
          message: "Payment does not belong to this order.",
        },
        {
          status: 400,
        }
      );
    }

    const paymentAmount = Number(payment.amount);
    const orderAmount = Number(order.amount);

    if (
      !Number.isFinite(paymentAmount) ||
      !Number.isFinite(orderAmount) ||
      paymentAmount !== orderAmount
    ) {
      return NextResponse.json(
        {
          message: "Payment amount does not match the order.",
        },
        {
          status: 400,
        }
      );
    }

    const paymentCurrency = String(payment.currency).toUpperCase();
    const orderCurrency = String(order.currency).toUpperCase();

    if (paymentCurrency !== orderCurrency) {
      return NextResponse.json(
        {
          message: "Payment currency does not match the order.",
        },
        {
          status: 400,
        }
      );
    }

    if (!["INR", "USD"].includes(paymentCurrency)) {
      return NextResponse.json(
        {
          message: "Unsupported payment currency.",
        },
        {
          status: 400,
        }
      );
    }

    if (!["authorized", "captured"].includes(payment.status)) {
      return NextResponse.json(
        {
          message: `Payment is not complete. Current status: ${payment.status}.`,
        },
        {
          status: 400,
        }
      );
    }

    const supabase = createAdminClient();

    const databaseStatus =
      payment.status === "captured" ? "paid" : "authorized";

    const { error } = await supabase.from("support_payments").insert({
      supporter_name:
        body.name?.trim().slice(0, 100) || null,

      supporter_email:
        body.email?.trim().toLowerCase().slice(0, 320) || null,

      supporter_message:
        body.message?.trim().slice(0, 500) || null,

      // Stored in paise for INR or cents for USD.
      amount: paymentAmount,
      currency: paymentCurrency,

      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,

      status: databaseStatus,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          message: "Payment was already verified.",
          amount: paymentAmount,
          currency: paymentCurrency,
        });
      }

      console.error("Supabase payment insert error:", error);

      return NextResponse.json(
        {
          message:
            "Payment succeeded, but we could not save the payment record.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      message: "Payment verified successfully.",
      amount: paymentAmount,
      currency: paymentCurrency,
      status: databaseStatus,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to verify payment.",
      },
      {
        status: 500,
      }
    );
  }
}