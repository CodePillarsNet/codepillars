"use client";

import Script from "next/script";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Check,
  Coffee,
  Heart,
  Loader2,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Currency = "INR" | "USD";

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  image?: string;

  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };

  notes?: Record<string, string>;

  theme?: {
    color?: string;
  };

  modal?: {
    ondismiss?: () => void;
  };

  handler: (response: RazorpayResponse) => void | Promise<void>;
};

type RazorpayInstance = {
  open: () => void;

  on: (
    event: string,
    callback: (response: {
      error: {
        description?: string;
      };
    }) => void
  ) => void;
};

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

const supportBenefits = [
  "Maintain and improve free applications",
  "Create Jetpack Compose and Next.js tutorials",
  "Cover hosting and infrastructure expenses",
  "Build open-source tools and UI projects",
  "Develop new AI-powered products",
];

const quickAmounts: Record<Currency, number[]> = {
  INR: [100, 300, 500, 1000],
  USD: [2, 5, 10, 20],
};

const router = useRouter();

export default function BuyMeACoffeePage() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [amount, setAmount] = useState("100");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [scriptReady, setScriptReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const paymentAmount = Number(amount);

  const currencySymbol = currency === "INR" ? "₹" : "$";
  const minimumAmount = currency === "INR" ? 10 : 1;
  const maximumAmount = currency === "INR" ? 100000 : 1000;

  useEffect(() => {
  if (typeof window !== "undefined" && window.Razorpay) {
    setScriptReady(true);
    return;
  }

  const interval = setInterval(() => {
    if (window.Razorpay) {
      setScriptReady(true);
      clearInterval(interval);
    }
  }, 200);

  return () => clearInterval(interval);
}, []);

  function formatAmount(value: number) {
    if (!Number.isFinite(value)) {
      value = 0;
    }

    return new Intl.NumberFormat(
      currency === "INR" ? "en-IN" : "en-US",
      {
        style: "currency",
        currency,
        maximumFractionDigits: currency === "INR" ? 0 : 2,
      }
    ).format(value);
  }

  function changeCurrency(value: Currency) {
    setCurrency(value);
    setAmount(value === "INR" ? "100" : "5");
    setError("");
    setSuccess("");
  }

  function selectQuickAmount(value: number) {
    setAmount(String(value));
    setError("");
    setSuccess("");
  }

  async function handlePayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!scriptReady || !window.Razorpay) {
      setError("Payment service is still loading. Please try again.");
      return;
    }

    if (
      !Number.isFinite(paymentAmount) ||
      paymentAmount < minimumAmount
    ) {
      setError(
        `Please enter an amount of at least ${formatAmount(minimumAmount)}.`
      );
      return;
    }

    if (paymentAmount > maximumAmount) {
      setError(
        `The maximum support amount is ${formatAmount(maximumAmount)}.`
      );
      return;
    }

    setLoading(true);

    try {
      const orderResponse = await fetch(
        "/api/payments/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: paymentAmount,
            currency,
            name,
            email,
            message,
          }),
        }
      );

      const orderResult = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(
          orderResult.message || "Unable to create payment order."
        );
      }

      const options: RazorpayOptions = {
        key: orderResult.key,
        amount: orderResult.amount,
        currency: orderResult.currency,
        name: "CodePillars",
        description: "Support independent development",
        order_id: orderResult.orderId,
        image: "/logo.png",

        prefill: {
          name,
          email,
        },

        notes: {
          supporter_name: name.trim() || "Anonymous",
          supporter_message: message.trim(),
          selected_currency: currency,
        },

        theme: {
          color: "#7c3aed",
        },

        handler: async (response) => {
          try {
            const verifyResponse = await fetch(
              "/api/payments/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...response,
                  name,
                  email,
                  message,
                }),
              }
            );

            const verifyResult = await verifyResponse.json();

            if (!verifyResponse.ok) {
              throw new Error(
                verifyResult.message ||
                  "Payment verification failed."
              );
            }

            // setSuccess(
            //   `Thank you${
            //     name.trim() ? `, ${name.trim()}` : ""
            //   }! Your support of ${formatAmount(
            //     paymentAmount
            //   )} was received successfully.`
            // );

            router.replace(
              `/payment/success?paymentId=${response.razorpay_payment_id}`
            );

            setName("");
            setEmail("");
            setMessage("");
            setAmount(currency === "INR" ? "100" : "5");
          } catch (verificationError) {
            setError(
              verificationError instanceof Error
                ? verificationError.message
                : "Unable to verify the payment."
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", (response) => {
        setError(
          response.error.description ||
            "Payment failed. Please try again."
        );

        setLoading(false);
      });

      razorpay.open();
    } catch (paymentError) {
      setError(
        paymentError instanceof Error
          ? paymentError.message
          : "Unable to start the payment."
      );

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-violet-500/40">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() =>
          setError(
            "Unable to load the payment service. Please refresh the page."
          )
        }
      />

      <Navbar />

      <section className="relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[760px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

        <div className="pointer-events-none absolute right-0 top-72 size-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="pointer-events-none absolute left-0 top-56 size-[360px] rounded-full bg-amber-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
            <Coffee className="size-4" />
            Support CodePillars
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
            Buy me a{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-violet-400 bg-clip-text text-transparent">
              coffee.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/50">
            Support independent app development, free tutorials,
            open-source projects and useful digital tools.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-white/45">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400" />
              Secure Razorpay checkout
            </span>

            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400" />
              INR and USD
            </span>

            <span className="flex items-center gap-2">
              <Check className="size-4 text-emerald-400" />
              One-time contribution
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
              <div className="grid size-14 place-items-center rounded-2xl bg-amber-400/10 text-amber-300">
                <Heart className="size-7" />
              </div>

              <h2 className="mt-7 text-3xl font-black tracking-[-0.03em]">
                Your support makes a difference
              </h2>

              <p className="mt-4 leading-7 text-white/45">
                Every contribution helps maintain existing apps,
                cover hosting expenses and create more useful
                development content.
              </p>

              <div className="mt-8 space-y-4">
                {supportBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 p-4"
                  >
                    <div className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-400/10">
                      <Check className="size-4 text-emerald-400" />
                    </div>

                    <p className="text-sm text-white/65">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-700 via-indigo-800 to-cyan-800 p-7 sm:p-8">
              <div className="absolute -right-16 -top-16 size-52 rounded-full border-[30px] border-white/5" />

              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-white/10">
                  <Rocket className="size-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  Thank you for supporting creators
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  Your support allows more time to be spent building,
                  teaching and sharing useful software with the
                  community.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[#0b1728] p-6 shadow-2xl shadow-black/30 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-[#07111f]">
                <Coffee className="size-7" />
              </div>

              <div>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Choose your support
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Select a currency and enter your contribution.
                </p>
              </div>
            </div>

            <form
              onSubmit={handlePayment}
              className="mt-9 space-y-7"
            >
              <div>
                <p className="mb-3 text-sm font-semibold text-white/70">
                  Select currency
                </p>

                <div className="rounded-2xl border border-white/10 bg-black/15 p-1.5">
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => changeCurrency("INR")}
                      className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                        currency === "INR"
                          ? "bg-white text-[#07111f]"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      🇮🇳 INR
                    </button>

                    <button
                      type="button"
                      onClick={() => changeCurrency("USD")}
                      className={`rounded-xl px-5 py-3 text-sm font-bold transition ${
                        currency === "USD"
                          ? "bg-white text-[#07111f]"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      🇺🇸 USD
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white/80">
                      Enter amount
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Minimum {formatAmount(minimumAmount)}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/50">
                    {currency}
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-black text-white/55">
                    {currencySymbol}
                  </span>

                  <input
                    type="number"
                    min={minimumAmount}
                    max={maximumAmount}
                    step={currency === "INR" ? "1" : "0.01"}
                    required
                    value={amount}
                    onChange={(event) => {
                      setAmount(event.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    placeholder={
                      currency === "INR" ? "100" : "5"
                    }
                    className="form-input h-20 pl-14 text-3xl font-black"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickAmounts[currency].map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() =>
                        selectQuickAmount(quickAmount)
                      }
                      className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                        paymentAmount === quickAmount
                          ? "border-amber-300/50 bg-amber-300/10 text-amber-200"
                          : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {formatAmount(quickAmount)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField label="Your name">
                  <input
                    type="text"
                    maxLength={100}
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Anonymous supporter"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Email address">
                  <input
                    type="email"
                    maxLength={320}
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </FormField>
              </div>

              <FormField label="Support message">
                <textarea
                  rows={4}
                  maxLength={500}
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Write an optional message..."
                  className="form-input resize-none"
                />
              </FormField>

              <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-sm text-white/45">
                      Contribution
                    </span>

                    <p className="mt-1 text-xs text-white/30">
                      One-time payment
                    </p>
                  </div>

                  <span className="text-3xl font-black">
                    {formatAmount(paymentAmount)}
                  </span>
                </div>
              </div>

              {success && (
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-300">
                  <Check className="mt-0.5 size-5 shrink-0" />
                  <p>{success}</p>
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm leading-6 text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  loading ||
                  !amount ||
                  paymentAmount < minimumAmount ||
                  paymentAmount > maximumAmount
                }
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-4 text-sm font-black text-[#07111f] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Coffee className="size-4" />
                    Pay {formatAmount(paymentAmount)}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/30">
                <ShieldCheck className="size-4 text-emerald-400" />
                Secure payment powered by Razorpay
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
              <Sparkles className="size-4" />
              Every contribution matters
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Helping create more useful software
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              Supporting CodePillars helps fund development tools,
              hosting, testing devices, tutorials and future
              open-source projects.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                emoji: "📱",
                title: "Free mobile apps",
                description:
                  "Maintain and improve useful Android and iOS applications.",
              },
              {
                emoji: "🎥",
                title: "Developer tutorials",
                description:
                  "Create practical videos about Kotlin, Compose, Next.js and APIs.",
              },
              {
                emoji: "🚀",
                title: "New products",
                description:
                  "Experiment with AI tools, web apps and open-source projects.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 text-center"
              >
                <div className="text-4xl">{item.emoji}</div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-sm font-semibold text-white/70">
        {label}
      </span>

      {children}
    </label>
  );
}