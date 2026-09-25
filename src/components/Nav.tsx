"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import sections from "@/data/sections.json";
import profile from "@/data/profile.json";

const navLinks = sections.filter((s) => s.id !== "intro");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-gutter"
      >
        <a
          href="#intro"
          className="font-mono text-[13px] uppercase tracking-[0.18em] text-text transition-opacity duration-200 hover:opacity-60"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="group relative font-mono text-[12px] uppercase tracking-[0.16em] text-text-secondary transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-text transition-[width] duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            className="relative z-50 inline-flex h-9 w-9 items-center justify-center text-text sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 z-40 origin-top bg-bg transition-[opacity,transform] duration-300 sm:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-gutter pt-8">
          {navLinks.map((link) => (
            <li key={link.id} className="border-b border-border">
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-6"
              >
                <span className="text-3xl tracking-tight text-text">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-text-tertiary">
                  {link.num}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
