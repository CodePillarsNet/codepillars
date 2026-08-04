"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Code2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  Smartphone,
  Sparkles,
} from "lucide-react";
import {
  FaWhatsapp,
} from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  "Mobile App Development",
  "Website Development",
  "E-commerce Development",
  "UI/UX Design",
  "Backend & API Development",
  "Other",
];

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@codepillars.net",
    href: "mailto:hello@codepillars.net",
    description: "Send your project requirements",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 79707 31851",
    href: "https://wa.me/qr/Q3DNGFRTK4URF1",
    description: "Monday to Saturday",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jabalpur, Madhya Pradesh",
    href: "#",
    description: "Working with clients worldwide",
  },
  {
    icon: Clock3,
    title: "Response time",
    value: "Within 24 hours",
    href: "#",
    description: "Usually much faster",
  },
];

const benefits = [
  "Clear project planning",
  "Modern responsive design",
  "Complete source-code ownership",
  "Regular development updates",
  "Secure backend integration",
  "Post-launch technical support",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-violet-500/40">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-5 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-44">
  <div className="pointer-events-none absolute left-1/2 top-0 size-[360px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:size-[560px] sm:blur-[140px] lg:size-[760px] lg:blur-[170px]" />

  <div className="pointer-events-none absolute right-0 top-72 hidden size-[420px] rounded-full bg-cyan-400/10 blur-[140px] sm:block" />

  <div className="relative mx-auto max-w-7xl text-center">
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300 sm:px-4 sm:text-xs sm:tracking-[0.16em]">
      <Sparkles className="size-3.5 shrink-0" />
      <span className="truncate">Contact CodePillars</span>
    </div>

    <h1 className="mx-auto mt-6 max-w-5xl text-[40px] font-black leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:mt-7 lg:text-[76px]">
      Let&apos;s build your next{" "}
      <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent sm:inline">
        digital product.
      </span>
    </h1>

    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8">
      Tell us about your app, website or software idea. We will help you
      plan the right features, technology and development approach.
    </p>

    <div className="mx-auto mt-7 grid max-w-sm gap-3 text-left text-xs text-white/45 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-6 sm:text-sm">
      {[
        "Free project discussion",
        "No obligation",
        "Response within 24 hours",
      ].map((item) => (
        <span key={item} className="flex items-center gap-2">
          <Check className="size-4 shrink-0 text-emerald-400" />
          {item}
        </span>
      ))}
    </div>
  </div>
</section>

      <section className="px-4 pb-16 sm:px-5 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          <div className="space-y-6">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:rounded-[32px] sm:p-8">
              <div className="grid size-14 place-items-center rounded-2xl bg-violet-400/10 text-violet-300">
                <MessageCircle className="size-7" />
              </div>

              <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] sm:mt-7 sm:text-3xl">
                Start a conversation
              </h2>

              <p className="mt-4 leading-7 text-white/45">
                Share your requirements, current challenges and goals. Even if
                your idea is still early, we can help you define the next step.
              </p>

              <div className="mt-8 grid gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
  key={item.title}
  href={item.href}
  className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-black/15 p-3.5 transition hover:border-violet-400/30 hover:bg-white/[0.05] sm:gap-4 sm:p-4"
>
  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300 sm:size-12">
    <Icon className="size-4.5 sm:size-5" />
  </div>

  <div className="min-w-0 flex-1">
    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35 sm:text-xs sm:tracking-[0.14em]">
      {item.title}
    </p>

    <p className="mt-1 truncate text-sm font-bold text-white/80">
      {item.value}
    </p>

    <p className="mt-1 truncate text-[11px] text-white/35 sm:text-xs">
      {item.description}
    </p>
  </div>

  <ArrowRight className="size-4 shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-white" />
</a>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-700 via-indigo-800 to-cyan-800 p-7 sm:p-8">
              <div className="absolute -right-16 -top-16 size-52 rounded-full border-[30px] border-white/5" />

              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-white/10">
                  <Rocket className="size-7" />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  What happens next?
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      number: "01",
                      title: "We review your message",
                      text: "We understand your idea, requirements and priorities.",
                    },
                    {
                      number: "02",
                      title: "We discuss the project",
                      text: "We clarify features, technology, budget and timeline.",
                    },
                    {
                      number: "03",
                      title: "You receive a proposal",
                      text: "We provide a clear development plan and next steps.",
                    },
                  ].map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-xs font-black">
                        {step.number}
                      </div>

                      <div>
                        <p className="font-bold">{step.title}</p>

                        <p className="mt-1 text-sm leading-6 text-white/55">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-[#0b1728] p-5 shadow-2xl shadow-black/30 sm:rounded-[34px] sm:p-9">
            <div className="flex items-start gap-3 sm:gap-4">
  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 sm:size-13 sm:rounded-2xl">
    <Send className="size-5 sm:size-6" />
  </div>

  <div className="min-w-0">
    <h2 className="text-xl font-black sm:text-3xl">
      Tell us about your project
    </h2>

    <p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
      Complete the form below and we will contact you shortly.
    </p>
  </div>
</div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5 sm:mt-9 sm:space-y-6">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                <FormField label="Your name" required>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Email address" required>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </FormField>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <FormField label="Phone number">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </FormField>

                <FormField label="Required service" required>
                  <select
                    required
                    value={formData.service}
                    onChange={(event) =>
                      updateField("service", event.target.value)
                    }
                    className="form-input"
                  >
                    <option value="" className="bg-[#0b1728]">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#0b1728]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              <FormField label="Estimated budget">
                <select
                  value={formData.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                  className="form-input"
                >
                  <option value="" className="bg-[#0b1728]">
                    Select your budget
                  </option>

                  <option value="Under ₹25,000" className="bg-[#0b1728]">
                    Under $250
                  </option>

                  <option value="₹25,000 – ₹50,000" className="bg-[#0b1728]">
                    $250 – $500
                  </option>

                  <option value="₹50,000 – ₹1,00,000" className="bg-[#0b1728]">
                    $500 – $1000
                  </option>

                  <option value="Above ₹1,00,000" className="bg-[#0b1728]">
                    Above $1000
                  </option>

                  <option value="Not decided" className="bg-[#0b1728]">
                    Not decided yet
                  </option>
                </select>
              </FormField>

              <FormField label="Project details" required>
                <textarea
                  required
                  rows={7}
                  value={formData.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  placeholder="Describe your project, important features and expected outcome..."
                  className="form-input resize-none"
                />
              </FormField>

              {submitted && (
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300">
                  <Check className="mt-0.5 size-5 shrink-0" />

                  <p>
                    Your message was sent successfully. We will contact you
                    shortly.
                  </p>
                </div>
              )}

              {error && (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
  type="submit"
  disabled={loading}
  className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#07111f] transition hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Sending message..." : "Send project enquiry"}

  {!loading && (
    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
  )}
</button>

              <p className="text-center text-xs leading-5 text-white/30">
                By submitting this form, you agree that CodePillars may contact
                you regarding your project enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
              <Code2 className="size-4" />
              Complete development support
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] sm:mt-7 sm:text-5xl">
              One team for design, development and launch
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/50">
              We handle the complete product development process so you can
              focus on your business and customers.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-400/10">
                    <Check className="size-4 text-emerald-400" />
                  </div>

                  <span className="text-sm text-white/65">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-[#162440] to-[#0b1728] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
              What we build
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile applications",
                  text: "Android and iOS applications with modern, responsive interfaces.",
                },
                {
                  icon: Globe2,
                  title: "Websites and web apps",
                  text: "Fast business websites, dashboards, SaaS and e-commerce products.",
                },
                {
                  icon: Code2,
                  title: "Backend and APIs",
                  text: "Authentication, databases, payments, chat and secure integrations.",
                },
              ].map((service) => {
                const Icon = service.icon;

                return (
                  <div
  key={service.title}
  className="flex gap-3 rounded-2xl border border-white/10 bg-black/15 p-4 sm:gap-4 sm:p-5"
>
  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300 sm:size-12">
    <Icon className="size-5 sm:size-6" />
  </div>

  <div className="min-w-0">
    <h3 className="text-sm font-bold sm:text-base">
      {service.title}
    </h3>

    <p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
      {service.text}
    </p>
  </div>
</div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-sm font-semibold text-white/70">
        {label}

        {required && <span className="ml-1 text-violet-400">*</span>}
      </span>

      {children}
    </label>
  );
}