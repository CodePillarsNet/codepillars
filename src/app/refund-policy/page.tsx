import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Coffee,
  CreditCard,
  FileText,
  Mail,
  RefreshCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const refundableCases = [
  "A duplicate payment was charged for the same transaction.",
  "Payment was completed, but the agreed service was not started.",
  "CodePillars is unable to deliver the agreed service.",
  "A refund is required under applicable consumer protection law.",
  "A written project agreement specifically allows a refund.",
];

const nonRefundableCases = [
  "Work has already started after the client approved the project.",
  "Design, development, research, consultation, or planning time has already been used.",
  "The client changes their mind after approving the project scope.",
  "Delays are caused by missing content, feedback, credentials, or approvals from the client.",
  "Third-party charges have already been paid, including hosting, domains, plugins, APIs, or software licences.",
  "A support contribution or Buy Me a Coffee payment was made voluntarily.",
  "The delivered work matches the approved scope but the client later requests unrelated changes.",
];

const processSteps = [
  {
    number: "01",
    title: "Send a refund request",
    text: "Contact us with your name, payment ID, order ID, amount, payment date, and reason for the request.",
  },
  {
    number: "02",
    title: "We review the request",
    text: "We review the project status, payment record, delivered work, and applicable agreement.",
  },
  {
    number: "03",
    title: "Receive a decision",
    text: "We will inform you whether the request is approved, partially approved, or declined.",
  },
  {
    number: "04",
    title: "Refund processing",
    text: "Approved refunds are returned to the original payment method through the payment provider.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-violet-500/40">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-5 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[360px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:size-[560px] sm:blur-[140px] lg:size-[760px] lg:blur-[170px]" />

        <div className="pointer-events-none absolute right-0 top-64 hidden size-[420px] rounded-full bg-cyan-400/10 blur-[140px] sm:block" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300 sm:px-4 sm:text-xs sm:tracking-[0.16em]">
            <RefreshCcw className="size-4" />
            Refund Policy
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-[40px] font-black leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:mt-7 lg:text-[76px]">
            Clear and fair{" "}
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent sm:inline">
              refund terms.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8">
            This policy explains when project payments, service fees, and
            support contributions may be eligible for a full or partial refund.
          </p>

          <p className="mt-4 text-xs text-white/30 sm:text-sm">
            Last updated: August 4, 2026
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-5 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
          <PolicyCard
            icon={FileText}
            title="Overview"
          >
            <p>
              CodePillars provides custom software development, website
              development, mobile application development, UI/UX design,
              technical consulting, and related digital services.
            </p>

            <p>
              Because these services involve time, research, planning, design,
              and development work, payments are generally non-refundable once
              work has started. Refund eligibility is reviewed according to the
              project stage, written agreement, delivered work, and reason for
              the request.
            </p>
          </PolicyCard>

          <div className="grid gap-6 lg:grid-cols-2">
            <PolicyCard
              icon={CheckCircle2}
              title="Refunds may be approved"
              iconClassName="bg-emerald-400/10 text-emerald-400"
            >
              <ul className="space-y-4">
                {refundableCases.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicyCard>

            <PolicyCard
              icon={XCircle}
              title="Generally non-refundable"
              iconClassName="bg-red-400/10 text-red-300"
            >
              <ul className="space-y-4">
                {nonRefundableCases.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="mt-0.5 size-5 shrink-0 text-red-300" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PolicyCard>
          </div>

          <PolicyCard
            icon={CreditCard}
            title="Project payments"
          >
            <p>
              Advance payments, milestone payments, retainers, and monthly
              development fees reserve development time and resources.
            </p>

            <p>
              When a project is cancelled after work has started, CodePillars
              may deduct the value of completed work, time already spent, and
              non-recoverable third-party costs. Any remaining eligible balance
              may be refunded at our discretion or according to the written
              project agreement.
            </p>

            <p>
              Work completed before cancellation may be delivered only after
              all applicable charges for that work have been paid.
            </p>
          </PolicyCard>

          <PolicyCard
            icon={Coffee}
            title="Support contributions"
            iconClassName="bg-amber-400/10 text-amber-300"
          >
            <p>
              Payments made through the Buy Me a Coffee or support page are
              voluntary contributions intended to support independent
              development, tutorials, hosting, and open-source projects.
            </p>

            <p>
              These contributions are normally non-refundable. A refund may be
              considered for duplicate payments, an incorrect amount caused by
              a technical error, or an unauthorized transaction reported
              promptly.
            </p>
          </PolicyCard>

          <PolicyCard
            icon={ShieldCheck}
            title="Failed or incomplete payments"
          >
            <p>
              If a payment fails but your bank account shows a debit, the
              payment provider or bank may automatically reverse the amount.
              Processing time depends on the bank and payment method.
            </p>

            <p>
              Please contact us when the amount is not automatically reversed,
              and include the payment ID, order ID, transaction date, amount,
              and a screenshot that does not reveal sensitive banking details.
            </p>
          </PolicyCard>

          <PolicyCard
            icon={Clock3}
            title="Refund processing time"
          >
            <p>
              Approved refunds are issued to the original payment method.
              Razorpay supports full and partial refunds for captured payments.
              Normal refunds are generally returned within 5–7 working days,
              although the final credit time can depend on the customer’s bank
              or payment provider.
            </p>

            <p>
              CodePillars cannot send a refund to a different bank account,
              card, UPI ID, wallet, or payment method.
            </p>
          </PolicyCard>

          <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[32px] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300 sm:size-12 sm:rounded-2xl">
                <RefreshCcw className="size-5 sm:size-6" />
              </div>

              <div>
                <h2 className="text-xl font-black sm:text-2xl">
                  How to request a refund
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/50 sm:text-base">
                  Submit your request as soon as possible after identifying the
                  issue.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-black/15 p-5"
                >
                  <p className="text-3xl font-black text-white/10">
                    {step.number}
                  </p>

                  <h3 className="mt-4 font-black">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <PolicyCard
            icon={AlertTriangle}
            title="Chargebacks and disputes"
            iconClassName="bg-amber-400/10 text-amber-300"
          >
            <p>
              Please contact CodePillars before initiating a payment dispute or
              chargeback so we have an opportunity to investigate and resolve
              the issue.
            </p>

            <p>
              Fraudulent chargebacks, false claims, or misuse of the payment
              dispute process may result in suspension of services and recovery
              action where permitted by law.
            </p>
          </PolicyCard>

          <PolicyCard
            icon={ShieldCheck}
            title="Consumer rights"
          >
            <p>
              Nothing in this policy limits any non-waivable rights available
              under applicable consumer protection law. Where this policy
              conflicts with a mandatory legal requirement, the mandatory
              requirement will apply.
            </p>
          </PolicyCard>

          <section className="relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-700 via-indigo-800 to-cyan-800 p-6 sm:rounded-[36px] sm:p-9">
            <div className="absolute -right-16 -top-16 size-52 rounded-full border-[30px] border-white/5" />

            <div className="relative">
              <div className="grid size-12 place-items-center rounded-2xl bg-white/10">
                <Mail className="size-6" />
              </div>

              <h2 className="mt-6 text-2xl font-black sm:text-3xl">
                Request a refund
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Include your name, email address, Razorpay payment ID, order ID,
                amount, payment date, and the reason for your request.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#07111f] transition hover:bg-violet-200"
                >
                  Email refund request
                  <ArrowRight className="size-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-bold transition hover:bg-white/15"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </section>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-xs leading-6 text-white/35 sm:text-sm">
            This page is a general policy template and not legal advice. Review
            it against your actual pricing, project contracts, business entity,
            and applicable consumer laws before publishing.
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicyCard({
  icon: Icon,
  title,
  children,
  iconClassName = "bg-violet-400/10 text-violet-300",
}: {
  icon: typeof FileText;
  title: string;
  children: React.ReactNode;
  iconClassName?: string;
}) {
  return (
    <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[32px] sm:p-8">
      <div className="flex items-center gap-3 sm:gap-4">
        <div
          className={`grid size-11 shrink-0 place-items-center rounded-xl sm:size-12 sm:rounded-2xl ${iconClassName}`}
        >
          <Icon className="size-5 sm:size-6" />
        </div>

        <h2 className="text-xl font-black sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="mt-5 space-y-4 text-sm leading-7 text-white/55 sm:mt-6 sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}