import Link from "next/link";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ paymentId?: string }>;
}) {
  const { paymentId } = await searchParams;

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />

      <section className="flex min-h-[80vh] items-center justify-center px-5 pt-32 pb-20">
        <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">
          <div className="mx-auto grid size-24 place-items-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="size-14 text-emerald-400" />
          </div>

          <h1 className="mt-8 text-4xl font-black">
            Thank You! 🎉
          </h1>

          <p className="mt-5 text-white/60">
            Your payment was completed successfully.
            Thank you for supporting CodePillars.
          </p>

          {paymentId && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase text-white/40">
                Payment ID
              </p>

              <p className="mt-2 break-all font-mono text-violet-300">
                {paymentId}
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-[#07111f]"
            >
              <Home className="size-5" />
              Home
            </Link>

            <Link
              href="/projects"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold"
            >
              View Projects
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}