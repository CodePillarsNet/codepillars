import { NextResponse } from "next/server";
import Razorpay from "razorpay";

type Currency = "INR" | "USD";

type CreateOrderRequest = {
  amount?: number;
  currency?: Currency;
  name?: string;
  email?: string;
  message?: string;
};

function getRazorpayClient() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error("Razorpay environment variables are not configured.");
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateOrderRequest;

    const amount = Number(body.amount);
    const currency: Currency =
      body.currency === "USD" ? "USD" : "INR";

    const minimumAmount = currency === "INR" ? 10 : 1;
    const maximumAmount = currency === "INR" ? 100000 : 1000;

    if (
      !Number.isFinite(amount) ||
      amount < minimumAmount ||
      amount > maximumAmount
    ) {
      const symbol = currency === "INR" ? "₹" : "$";

      return NextResponse.json(
        {
          message: `Please enter an amount between ${symbol}${minimumAmount} and ${symbol}${maximumAmount.toLocaleString()}.`,
        },
        {
          status: 400,
        }
      );
    }

    const razorpay = getRazorpayClient();

    // Razorpay expects the smallest currency unit.
    // INR: ₹100 becomes 10000 paise.
    // USD: $5 becomes 500 cents.
    const amountInSmallestUnit = Math.round(amount * 100);

    const order = await razorpay.orders.create({
      amount: amountInSmallestUnit,
      currency,
      receipt: `coffee_${currency.toLowerCase()}_${Date.now()}`,

      notes: {
        supporter_name:
          body.name?.trim().slice(0, 100) || "Anonymous",

        supporter_email:
          body.email?.trim().toLowerCase().slice(0, 320) || "",

        supporter_message:
          body.message?.trim().slice(0, 500) || "",

        selected_currency: currency,
      },
    });

    return NextResponse.json(
      {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Razorpay order creation error:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to create payment order.",
      },
      {
        status: 500,
      }
    );
  }
}