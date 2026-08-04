"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Check,
  ChevronRight,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Fast, polished Android and iOS applications built with Kotlin, Jetpack Compose, SwiftUI and Flutter.",
    features: ["Android & iOS", "Firebase integration", "Payments & notifications"],
  },
  {
    icon: Globe2,
    title: "Website Development",
    description:
      "Responsive business websites, SaaS products and e-commerce platforms built for speed and conversion.",
    features: ["Next.js & React", "SEO-ready pages", "Admin dashboards"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean user experiences with thoughtful layouts, reusable design systems and modern visual direction.",
    features: ["Wireframes", "Interactive prototypes", "Mobile-first design"],
  },
  {
    icon: Blocks,
    title: "Backend & API Development",
    description:
      "Secure APIs and scalable backend systems for authentication, payments, chat and business workflows.",
    features: ["Node.js APIs", "Supabase & Firebase", "MongoDB & PostgreSQL"],
  },
];

const projects = [
  {
    title: "Personalised Gift Store",
    category: "E-commerce platform",
    description:
      "A mobile-first custom product store with photo upload, live previews, payments and an admin panel.",
    tags: ["Next.js", "Supabase", "Razorpay"],
    gradient: "from-[#7c3aed] via-[#9333ea] to-[#ec4899]",
  },
  {
    title: "Realtime Chat Platform",
    category: "Web and mobile product",
    description:
      "Private messaging, online presence, image sharing and persistent conversations across web and mobile.",
    tags: ["Socket.IO", "MongoDB", "Kotlin"],
    gradient: "from-[#0891b2] via-[#2563eb] to-[#4f46e5]",
  },
  {
    title: "AI Background Remover",
    category: "AI utility application",
    description:
      "A practical image-editing product with background removal, erase and restore brushes, export and sharing.",
    tags: ["Android", "ML Kit", "FastAPI"],
    gradient: "from-[#059669] via-[#0d9488] to-[#0891b2]",
  },
];

const process = [
  { number: "01", title: "Discover", text: "We understand your idea, users, goals and must-have features." },
  { number: "02", title: "Design", text: "We plan the flow and create a clean interface before development." },
  { number: "03", title: "Build", text: "We develop the product with modern architecture and regular updates." },
  { number: "04", title: "Launch", text: "We test, deploy and support your product after release." },
];

const testimonials = [
  {
    quote:
      "CodePillars understood the product quickly and delivered a clean, professional application. Communication was clear throughout the project.",
    name: "Startup Founder",
    role: "Mobile application client",
  },
  {
    quote:
      "The new website feels faster, more premium and much easier for customers to understand. The entire process was smooth.",
    name: "Business Owner",
    role: "Website redesign client",
  },
  {
    quote:
      "They handled the UI, backend integration and deployment as one complete solution. That saved us a lot of time.",
    name: "Product Manager",
    role: "Custom software client",
  },
];

export default function CodePillarsHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-violet-500/40">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <PricingCTA />
      <ContactCTA />
      <Footer />
    </main>
  );
}



function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-5 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-10 size-[360px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px] sm:size-[560px] lg:size-[760px] lg:blur-[160px]" />

      <div className="pointer-events-none absolute right-0 top-80 hidden size-[420px] rounded-full bg-cyan-400/10 blur-[130px] sm:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300 sm:px-4 sm:text-xs sm:tracking-[0.16em]">
            <Sparkles className="size-3.5 shrink-0" />

            <span className="truncate">
              App & web development studio
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-[40px] font-black leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:mx-0 lg:mt-7 lg:text-[78px]">
            We build digital products that

            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8 lg:mx-0 lg:mt-7">
            CodePillars designs and develops premium mobile apps,
            high-converting websites and custom software for startups,
            local businesses and growing teams.
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/contact"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#07111f] transition hover:bg-violet-200 sm:w-auto sm:px-7"
            >
              Discuss your project

              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="/projects"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold transition hover:bg-white/10 sm:w-auto sm:px-7"
            >
              <span className="grid size-7 place-items-center rounded-full bg-violet-500">
                <Play className="ml-0.5 size-3.5 fill-current" />
              </span>

              View our work
            </a>
          </div>

          <div className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-3 text-left text-xs text-white/45 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-6 sm:text-sm lg:mx-0 lg:justify-start">
            {[
              "Android & iOS",
              "Next.js websites",
              "Backend & APIs",
              "UI/UX design",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <ProductVisual />
      </div>
    </section>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] px-1 sm:px-0">
      <div className="absolute -inset-3 rounded-[34px] bg-gradient-to-br from-violet-500/25 via-transparent to-cyan-400/20 blur-xl sm:-inset-7 sm:rounded-[48px] sm:blur-2xl" />

      <div className="relative rounded-[26px] border border-white/10 bg-white/[0.055] p-2 shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-[34px] sm:p-3">
        <div className="overflow-hidden rounded-[21px] border border-white/10 bg-[#0a1627] sm:rounded-[27px]">
          <div className="flex h-10 items-center justify-between border-b border-white/10 px-3 sm:h-12 sm:px-5">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-red-400 sm:size-2.5" />
              <span className="size-2 rounded-full bg-yellow-400 sm:size-2.5" />
              <span className="size-2 rounded-full bg-green-400 sm:size-2.5" />
            </div>

            <span className="max-w-[150px] truncate text-[9px] text-white/35 sm:max-w-none sm:text-[11px]">
              codepillars-project.tsx
            </span>

            <div className="w-6 sm:w-10" />
          </div>

          <div className="grid min-h-[420px] grid-cols-[48px_1fr] sm:min-h-[490px] sm:grid-cols-[72px_1fr]">
            <aside className="border-r border-white/10 p-2 sm:p-3">
              <div className="mb-5 grid size-8 place-items-center rounded-lg bg-violet-500 sm:mb-7 sm:size-10 sm:rounded-xl">
                <Code2 className="size-4 sm:size-5" />
              </div>

              {[Layers3, MonitorSmartphone, Palette, ShieldCheck].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className={`mb-2 grid size-8 place-items-center rounded-lg sm:mb-3 sm:size-10 sm:rounded-xl ${
                      index === 0
                        ? "bg-white text-[#07111f]"
                        : "text-white/30"
                    }`}
                  >
                    <Icon className="size-3.5 sm:size-4" />
                  </div>
                )
              )}
            </aside>

            <div className="min-w-0 p-3 sm:p-7">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[9px] text-white/35 sm:text-xs">
                    Active project
                  </p>

                  <h3 className="mt-1 truncate text-xs font-bold sm:text-base">
                    Business mobile app
                  </h3>
                </div>

                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 text-[9px] font-black sm:size-10 sm:text-xs">
                  CP
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-700 to-cyan-700 p-4 sm:mt-6 sm:rounded-3xl sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="rounded-full bg-white/15 px-2 py-1 text-[8px] font-bold sm:px-3 sm:text-[10px]">
                      IN DEVELOPMENT
                    </span>

                    <h4 className="mt-4 text-lg font-black sm:mt-5 sm:text-2xl">
                      From idea to launch
                    </h4>

                    <p className="mt-2 text-[10px] leading-4 text-white/65 sm:text-xs sm:leading-5">
                      Design, development, backend integration and deployment
                      in one streamlined workflow.
                    </p>
                  </div>

                  <div className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-white/10 sm:grid">
                    <Rocket className="size-6" />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <div className="mb-2 flex justify-between text-[8px] text-white/60 sm:text-[10px]">
                    <span>Development progress</span>
                    <span>78%</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-black/20">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
                <MiniCard
                  icon={Smartphone}
                  label="Mobile screens"
                  value="28"
                />

                <MiniCard
                  icon={Zap}
                  label="API endpoints"
                  value="16"
                />
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:mt-4 sm:rounded-2xl sm:p-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-400/10 text-emerald-400 sm:size-11 sm:rounded-xl">
                    <BadgeCheck className="size-4 sm:size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-semibold sm:text-sm">
                      Latest milestone completed
                    </p>

                    <p className="mt-1 truncate text-[9px] text-white/35 sm:text-xs">
                      Authentication and dashboard
                    </p>
                  </div>

                  <ChevronRight className="size-3.5 shrink-0 text-white/25 sm:size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-[#102038]/95 p-3 shadow-xl backdrop-blur-xl sm:absolute sm:-bottom-5 sm:-left-10 sm:mt-0 sm:p-4">
        <div className="grid size-10 place-items-center rounded-xl bg-emerald-400/10 sm:size-11">
          <ShieldCheck className="size-5 text-emerald-400 sm:size-6" />
        </div>

        <div>
          <p className="text-[10px] text-white/40 sm:text-xs">
            Built for quality
          </p>

          <p className="mt-1 text-xs font-bold sm:text-sm">
            Secure & scalable
          </p>
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Smartphone;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.035] p-3 sm:rounded-2xl sm:p-4">
      <Icon className="size-3.5 text-violet-400 sm:size-4" />

      <p className="mt-3 text-lg font-black sm:mt-4 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 truncate text-[9px] text-white/35 sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-5 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[['50+','Projects delivered'],['25+','Business clients'],['4.9/5','Client satisfaction'],['100%','Source-code ownership']].map(([value,label]) => (
          <div key={label} className="text-center lg:text-left"><p className="text-3xl font-black">{value}</p><p className="mt-1 text-sm text-white/40">{label}</p></div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-300 sm:px-4 sm:text-xs sm:tracking-[0.16em]">
        <Sparkles className="size-3.5" />
        {eyebrow}
      </div>

      <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:mt-6 sm:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-6 text-white/50 sm:mt-5 sm:text-lg sm:leading-7">
        {text}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Our services" title="Everything needed to build your digital product" text="From the first screen to the final deployment, we handle design, development and technical integration as one complete service." />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => { const Icon = service.icon; return <article key={service.title} className="group rounded-[30px] border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.055] sm:p-8"><div className="flex items-start justify-between"><div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-violet-300"><Icon className="size-7" /></div><ArrowRight className="size-5 -rotate-45 text-white/20 transition group-hover:text-white" /></div><h3 className="mt-8 text-2xl font-black">{service.title}</h3><p className="mt-4 max-w-xl leading-7 text-white/45">{service.description}</p><div className="mt-6 flex flex-wrap gap-2">{service.features.map((feature) => <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/55">{feature}</span>)}</div></article>; })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="Products designed for real business goals" text="A selection of the types of mobile, web and AI products we build for clients and our own product experiments." />
        <div className="mt-16 grid gap-7 lg:grid-cols-3">{projects.map((project) => <article key={project.title} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1728] transition hover:-translate-y-2 hover:border-white/20"><div className={`relative h-60 bg-gradient-to-br ${project.gradient} p-6`}><div className="absolute -right-16 -top-16 size-52 rounded-full border-[32px] border-white/10" /><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/20 p-5 backdrop-blur"><p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">{project.category}</p><p className="mt-3 text-2xl font-black">{project.title}</p></div></div><div className="p-6"><p className="text-sm leading-6 text-white/45">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/45">{tag}</span>)}</div><button className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-violet-300">View case study <ArrowRight className="size-4 transition group-hover:translate-x-1" /></button></div></article>)}</div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = ["Modern, maintainable code", "Clear project communication", "Mobile-first responsive design", "Secure backend integrations", "Complete source-code ownership", "Post-launch technical support"];
  return (
    <section id="about" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2"><div><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55"><ShieldCheck className="size-4 text-emerald-400" />Why CodePillars</div><h2 className="mt-7 text-4xl font-black tracking-[-0.04em] sm:text-5xl">A reliable technical partner, not just a code provider</h2><p className="mt-6 text-lg leading-8 text-white/50">We focus on the full product experience: business goals, interface quality, technical architecture and a smooth path to launch.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{points.map((point) => <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"><div className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-400/10"><Check className="size-4 text-emerald-400" /></div><span className="text-sm text-white/65">{point}</span></div>)}</div></div><div className="relative"><div className="absolute -inset-6 rounded-full bg-violet-500/10 blur-3xl" /><div className="relative rounded-[34px] border border-white/10 bg-gradient-to-br from-[#162440] to-[#0b1728] p-7 sm:p-9"><p className="text-sm font-bold text-violet-300">OUR APPROACH</p><h3 className="mt-4 text-3xl font-black">Build for today. Prepare for tomorrow.</h3><p className="mt-4 leading-7 text-white/45">Your product should look polished now and remain easy to maintain as your business grows.</p><div className="mt-8 space-y-4">{[[MonitorSmartphone,"Product-focused design"],[Layers3,"Scalable architecture"],[MessageCircle,"Regular progress updates"],[Rocket,"Launch and growth support"]].map(([Icon,label]) => { const ItemIcon = Icon as typeof MonitorSmartphone; return <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/15 p-4"><div className="grid size-11 place-items-center rounded-xl bg-violet-400/10 text-violet-300"><ItemIcon className="size-5" /></div><p className="font-semibold">{label as string}</p><ChevronRight className="ml-auto size-4 text-white/20" /></div>; })}</div></div></div></div></section>
  );
}

function Process() {
  return <section id="process" className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Simple process" title="A clear path from idea to launch" text="You always know what is being built, what comes next and where the project currently stands." /><div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{process.map((step) => <article key={step.number} className="rounded-[26px] border border-white/10 bg-[#0b1728] p-6"><p className="text-5xl font-black text-white/10">{step.number}</p><h3 className="mt-7 text-xl font-black">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{step.text}</p></article>)}</div></div></section>;
}

function Testimonials() {
  return <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Client feedback" title="Trusted for quality, clarity and execution" text="We work closely with clients to turn ideas into polished, dependable digital products." /><div className="mt-16 grid gap-6 lg:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7"><div className="flex gap-1">{Array.from({length:5}).map((_,index) => <Star key={index} className="size-4 fill-yellow-400 text-yellow-400" />)}</div><p className="mt-6 text-sm leading-7 text-white/60">“{item.quote}”</p><div className="mt-8 border-t border-white/10 pt-6"><p className="font-bold">{item.name}</p><p className="mt-1 text-xs text-white/35">{item.role}</p></div></article>)}</div></div></section>;
}

function PricingCTA() {
  return <section className="px-5 pb-24 lg:px-8 lg:pb-32"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-violet-400/20 bg-gradient-to-br from-violet-700 via-indigo-800 to-cyan-800 px-6 py-14 sm:px-10 lg:px-14"><div className="absolute -right-28 -top-28 size-80 rounded-full border-[48px] border-white/5" /><div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Flexible development support</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Start small and grow your product step by step.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">Get affordable monthly development support for your website or application, with a scope designed around your current priorities.</p></div><div className="rounded-[28px] border border-white/15 bg-black/15 p-6 backdrop-blur-xl sm:min-w-[300px]"><p className="text-sm text-white/60">Plans starting from</p><div className="mt-2 flex items-end gap-2"><span className="text-5xl font-black">$25</span><span className="mb-1 text-sm text-white/55">/ month</span></div><a href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#07111f]">Discuss your requirements <ArrowRight className="size-4" /></a></div></div></div></section>;
}

function ContactCTA() {
  return <section id="contact" className="border-t border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-4xl text-center"><div className="mx-auto grid size-16 place-items-center rounded-2xl bg-violet-400/10 text-violet-300"><MessageCircle className="size-8" /></div><h2 className="mt-8 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Have an app or website idea?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/50">Tell us what you want to build. We will help you plan the right features, technology and development path.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#07111f]">Start your project <ArrowRight className="size-4" /></a><a href="https://www.youtube.com/@CodePillars" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold hover:bg-white/10"><FaYoutube className="size-5 text-red-500" />Watch our work</a></div></div></section>;
}

