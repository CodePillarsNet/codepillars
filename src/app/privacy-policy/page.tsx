// app/privacy-policy/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Lock,
  Database,
  CreditCard,
  Mail,
  Cookie,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Name",
      "Email address",
      "Phone number",
      "Company name (optional)",
      "Project requirements",
      "Support messages",
      "Payment information such as Order ID and Payment ID",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments",
    content: [
      "Payments are securely processed through Razorpay.",
      "We never store your debit card, credit card, UPI PIN, CVV or bank details.",
      "We only store transaction information required for accounting and support.",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "Respond to enquiries",
      "Provide quotations",
      "Develop websites and mobile apps",
      "Process payments",
      "Improve our services",
      "Customer support",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: [
      "Improve website performance",
      "Remember preferences",
      "Analytics",
      "Better browsing experience",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-5 pt-32 pb-20 lg:px-8 lg:pt-44">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            <ShieldCheck className="size-4" />
            Privacy Policy
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
            Your Privacy
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Matters
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/50">
            We value your privacy and are committed to protecting your
            personal information.
          </p>

          <p className="mt-4 text-sm text-white/30">
            Last Updated: August 4, 2026
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Introduction
            </h2>

            <p className="mt-4 leading-8 text-white/60">
              CodePillars respects your privacy. This Privacy Policy
              explains what information we collect, how we use it,
              and how we protect your data when you use our website
              and services.
            </p>
          </div>

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Icon className="size-6" />
                  </div>

                  <h2 className="text-2xl font-black">
                    {section.title}
                  </h2>
                </div>

                <ul className="mt-6 space-y-4">
                  {section.content.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/60"
                    >
                      <div className="mt-2 size-2 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-white/60">
              We may use trusted third-party services including
              Supabase, Razorpay, Google Analytics, Google Fonts,
              GitHub and YouTube. These providers have their own
              privacy policies.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Data Security
            </h2>

            <p className="mt-4 leading-8 text-white/60">
              We implement appropriate security measures to protect
              your personal information against unauthorized access,
              alteration, disclosure or destruction.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Contact Us
            </h2>

            <div className="mt-6 flex items-center gap-3 text-white/70">
              <Mail className="size-5 text-violet-400" />
              <span>support@codepillars.net</span>
            </div>

            <p className="mt-6 leading-8 text-white/60">
              If you have any questions regarding this Privacy
              Policy, please contact us and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}