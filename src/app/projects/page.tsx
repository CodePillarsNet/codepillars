import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Code2,
  ExternalLink,
  Globe2,
  Layers3,
  MessageCircle,
  Paintbrush,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Maktyle",
    category: "E-commerce",
    description:
      "A personalized gift store where customers can explore custom products, upload their designs and order gifts online.",
    tags: ["Next.js", "Supabase", "E-commerce"],
    icon: ShoppingBag,
    gradient: "from-[#7c3aed] via-[#9333ea] to-[#ec4899]",
    href: "https://www.maktyle.com",
    ghref: "https://github.com/CodePillarsNet/maktyle",
    featured: true,
    type: "website",
  },
  {
    title: "Note Canvas",
    category: "Mobile App",
    description:
      "A creative Android note application for adding movable text and images, building multi-page notes and saving designs offline.",
    tags: ["Kotlin", "Jetpack Compose", "Room"],
    icon: Layers3,
    gradient: "from-[#db2777] via-[#9333ea] to-[#4f46e5]",
    href: "https://play.google.com/store/apps/details?id=com.codepillars.notecanvas&pli=1",
    ghref: "https://github.com/CodePillarsNet/ANoteCanvas",
    featured: true,
    type: "android",
  },
  {
    title: "Removebg",
    category: "Mobile App",
    description:
      "An AI-powered photo editor with automatic background removal, erase and restore brushes, background replacement and high-quality PNG export.",
    tags: ["Kotlin", "Jetpack Compose", "AI"],
    icon: Paintbrush,
    gradient: "from-[#059669] via-[#0d9488] to-[#0891b2]",
    href: "https://play.google.com/store/apps/details?id=com.codepillars.removebg",
    ghref: "https://github.com/CodePillarsNet/ARemovebg",
    featured: true,
    type: "android",
  },
  {
    title: "iFocus",
    category: "Mobile App",
    description:
      "A productivity and app-locking application that helps users reduce distractions by controlling app access and daily usage limits.",
    tags: ["Kotlin", "Jetpack Compose", "Android"],
    icon: Smartphone,
    gradient: "from-[#2563eb] via-[#4f46e5] to-[#7c3aed]",
    href: "https://play.google.com/store/apps/details?id=com.codepillars.ifocus",
    ghref: "https://github.com/CodePillarsNet/AiFocus",
    featured: false,
    type: "android",
  },
  {
    title: "UI Three",
    category: "Website",
    description:
      "A modern responsive UI concept demonstrating premium layouts, typography, components and interactive website sections.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe2,
    gradient: "from-[#ea580c] via-[#f97316] to-[#facc15]",
    href: "https://uithree.codepillars.net",
    ghref: "https://github.com/CodePillarsNet/WUIThree",
    featured: false,
    type: "website",
  },
  {
    title: "UI Two",
    category: "Website",
    description:
      "A polished frontend design project featuring responsive layouts, modern cards and visually engaging sections.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    icon: Code2,
    gradient: "from-[#0891b2] via-[#2563eb] to-[#4f46e5]",
    href: "https://uitwo.codepillars.net",
    ghref: "https://github.com/CodePillarsNet/WUITwo",
    featured: false,
    type: "website",
  },
  {
    title: "UI One",
    category: "Website",
    description:
      "A clean website UI experiment created to demonstrate responsive development and modern visual design.",
    tags: ["Next.js", "React", "Responsive UI"],
    icon: Paintbrush,
    gradient: "from-[#7c3aed] via-[#c026d3] to-[#ec4899]",
    href: "https://uione.codepillars.net",
    ghref: "https://github.com/CodePillarsNet/WUIOne",
    featured: false,
    type: "website",
  },
];

const stats = [
  {
    value: "50+",
    label: "Projects delivered",
  },
  {
    value: "25+",
    label: "Business clients",
  },
  {
    value: "4.9/5",
    label: "Average rating",
  },
  {
    value: "100%",
    label: "Source-code ownership",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white selection:bg-violet-500/40">
      <Navbar />

      <section className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-10 size-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />

        <div className="pointer-events-none absolute right-0 top-40 size-[400px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
            <Sparkles className="size-3.5" />
            Our projects
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-black leading-[1.05] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
            Digital products built for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              real business growth.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/50">
            Explore mobile applications, business websites, e-commerce
            platforms and AI products designed and developed by CodePillars.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#07111f] transition hover:bg-violet-200"
            >
              Explore projects
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold transition hover:bg-white/10"
            >
              Start your project
              <Rocket className="size-4 text-violet-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-black">{item.value}</p>

              <p className="mt-2 text-sm text-white/40">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-300">
                <Code2 className="size-3.5" />
                Selected work
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Products designed with purpose
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/50">
                Every project combines thoughtful design, reliable development
                and technology selected around the product requirements.
              </p>
            </div>

            {/* <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    index === 0
                      ? "bg-white text-[#07111f]"
                      : "border border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1728] transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid ${
                      index === 0
                        ? "lg:grid-cols-[1.05fr_0.95fr]"
                        : "grid-cols-1"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
                        index === 0 ? "min-h-[400px]" : "min-h-[300px]"
                      }`}
                    >
                      <div className="absolute -right-20 -top-20 size-72 rounded-full border-[46px] border-white/10" />

                      <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-black/10" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-7 sm:p-9">
                        <div className="flex items-center justify-between">
                          <div className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl">
                            <Icon className="size-7" />
                          </div>

                          {project.featured && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
                              <BadgeCheck className="size-3.5" />
                              Featured
                            </span>
                          )}
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                            {project.category}
                          </p>

                          <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-7 sm:p-9">
                      <p className="text-base leading-8 text-white/50">
                        {project.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/55"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-9 flex flex-wrap items-center gap-3">
                        <Link
                          href={project.href}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#07111f] transition hover:bg-violet-200"
                        >
                          View case study
                          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                        </Link>

                        <Link
                          href={project.ghref}
                          target="_blank"
                          className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                <BadgeCheck className="size-4" />
                Our development approach
              </div>

              <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                More than a beautiful interface
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/50">
                We build complete products with responsive interfaces, scalable
                architecture, secure integrations and maintainable source code.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Smartphone,
                    title: "Responsive design",
                  },
                  {
                    icon: Layers3,
                    title: "Scalable architecture",
                  },
                  {
                    icon: Globe2,
                    title: "Production deployment",
                  },
                  {
                    icon: Code2,
                    title: "Clean source code",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                        <Icon className="size-5" />
                      </div>

                      <p className="text-sm font-semibold text-white/70">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#162440] to-[#0b1728] p-7 sm:p-10">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-300">
                  Technology stack
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  Modern tools for modern products
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Kotlin",
                    "Jetpack Compose",
                    "SwiftUI",
                    "Supabase",
                    "Firebase",
                    "MongoDB",
                    "FastAPI",
                    "Node.js",
                    "Tailwind CSS",
                  ].map((technology) => (
                    <div
                      key={technology}
                      className="rounded-xl border border-white/10 bg-black/15 px-3 py-4 text-center text-xs font-semibold text-white/55"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-violet-400/20 bg-gradient-to-br from-violet-700 via-indigo-800 to-cyan-800 px-6 py-16 text-center sm:px-10 lg:px-14">
          <div className="absolute -right-28 -top-28 size-80 rounded-full border-[48px] border-white/5" />

          <div className="absolute -bottom-28 -left-24 size-72 rounded-full border-[40px] border-white/5" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-white/10">
              <Rocket className="size-8" />
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Share your idea and we will help you plan, design, develop and
              launch the right digital solution.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#07111f] transition hover:bg-violet-200"
            >
              Discuss your project
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}