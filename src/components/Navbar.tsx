"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Code2,
  Coffee,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/buy-me-a-coffee" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <div className="grid size-10 shrink-0 place-items-center rounded-xl  shadow-lg shadow-violet-500/20 sm:size-11 sm:rounded-2xl">
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

          <div className="min-w-0">
            <p className="truncate text-lg font-black tracking-tight sm:text-xl">
              Code
              <span className="text-violet-400">Pillars</span>
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.22em] text-white/40 min-[360px]:block sm:text-[10px] sm:tracking-[0.25em]">
              Build. Launch. Grow.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#07111f] transition hover:bg-violet-200 lg:inline-flex"
        >
          Start a project
          <ArrowRight className="size-4" />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 sm:size-11 lg:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[#07111f] px-4 py-5 sm:top-20 sm:h-[calc(100dvh-5rem)] sm:px-5 lg:hidden">
          <nav className="mx-auto flex min-h-full max-w-lg flex-col">
            <div className="grid gap-2">
              {links.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-14 items-center justify-between rounded-2xl border px-4 py-3.5 text-base font-semibold transition ${
                      active
                        ? "border-violet-400/30 bg-violet-400/10 text-white"
                        : "border-white/10 bg-white/[0.035] text-white/65 hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>

                    <ArrowRight
                      className={`size-4 ${
                        active ? "text-violet-300" : "text-white/25"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#07111f]"
              >
                Start a project
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/buy-me-a-coffee"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-sm font-bold text-amber-300"
              >
                <Coffee className="size-4" />
                Buy me a coffee
              </Link>
            </div>

            <div className="mt-auto pt-10 text-center">
              <p className="text-xs leading-5 text-white/30">
                Mobile apps, websites and custom software
              </p>

              <p className="mt-2 text-xs text-white/20">
                © 2026 CodePillars
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}