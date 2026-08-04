import Link from "next/link";
import { Code2 } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CodePillars",
    icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rakesh-vishwas-8a731a27a/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/CodePillarsNet",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rickyvishwas11?igsh=MXRieGRiMjVoMXB2bA%3D%3D",
    icon: FaInstagram,
  },
];

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Mobile Apps", href: "/#services" },
      { label: "Websites", href: "/#services" },
      { label: "UI/UX Design", href: "/#services" },
      { label: "Backend APIs", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Projects", href: "/projects" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Support", href: "/buy-me-a-coffee" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111f] px-4 py-12 sm:px-5 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl shadow-lg shadow-violet-500/20 sm:size-11">
                {/* <Code2 className="size-5 sm:size-6" /> */}
                <Image
                                  src="/codelogo.png"
                                  alt="Logo"
                                  width={42}
                                  height={42}
                                  priority
                                  className="h-9 w-auto object-contain"
                                />
              </div>

              <div>
                <p className="text-lg font-black tracking-tight sm:text-xl">
                  Code
                  <span className="text-violet-400">Pillars</span>
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-white/35 sm:text-[10px]">
                  Build. Launch. Grow.
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              App, website and custom software development for startups,
              local businesses and growing teams.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs leading-5 text-white/30 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 CodePillars. All rights reserved.</p>

          <p>
            Designed and developed with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  href: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <p className="text-sm font-bold text-white">
        {title}
      </p>

      <div className="mt-4 grid gap-1 sm:mt-5 sm:gap-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="w-fit rounded-lg py-2 text-sm text-white/40 transition hover:translate-x-1 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}