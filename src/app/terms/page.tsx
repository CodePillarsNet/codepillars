// app/terms/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Scale,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By accessing or using the CodePillars website or services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.",
  },
  {
    icon: ShieldCheck,
    title: "Our Services",
    content:
      "CodePillars provides software development services including mobile application development, website development, UI/UX design, backend APIs, AI solutions, and technical consulting.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    content:
      "Project payments and support contributions are securely processed through Razorpay. Payments are subject to the agreed quotation, project scope, and applicable refund policy.",
  },
  {
    icon: AlertTriangle,
    title: "User Responsibilities",
    content:
      "You agree not to misuse our website, upload malicious content, attempt unauthorized access, or use our services for unlawful activities.",
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content:
      "All content, designs, branding, source code, graphics, and materials on this website are owned by CodePillars unless otherwise stated. Unauthorized copying or redistribution is prohibited.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
            <FileText className="size-4" />
            Terms & Conditions
          </div>

          <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-6xl">
            Terms &
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/50">
            Please read these Terms and Conditions carefully before
            using the CodePillars website or our development services.
          </p>

          <p className="mt-4 text-sm text-white/30">
            Last Updated: August 4, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
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

                <p className="mt-6 leading-8 text-white/60">
                  {section.content}
                </p>
              </div>
            );
          })}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Project Delivery
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Delivery timelines are estimates based on the agreed
              project scope. Delays caused by client feedback,
              additional feature requests, or third-party services
              may extend the delivery schedule.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Limitation of Liability
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              CodePillars shall not be liable for indirect,
              incidental, special, or consequential damages arising
              from the use of our website, applications, or
              development services.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Changes to These Terms
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              We may update these Terms and Conditions from time to
              time. Continued use of our website after changes become
              effective constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-black">
              Contact Information
            </h2>

            <div className="mt-6 flex items-center gap-3 text-white/70">
              <Mail className="size-5 text-violet-400" />
              <span>support@codepillars.net</span>
            </div>

            <p className="mt-6 leading-8 text-white/60">
              If you have any questions regarding these Terms and
              Conditions, please contact us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}