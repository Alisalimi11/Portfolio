"use client";

import { useEffect, useState } from "react";
import sections from "@/data/sections.json";

/**
 * Persistent editorial index, fixed to the left edge on large screens.
 * Tracks the section in view and lets it double as quick navigation.
 */
export default function SideIndex() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-4">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-text"
                      : "w-4 bg-border-strong group-hover:w-6 group-hover:bg-text-secondary"
                  }`}
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-text"
                      : "text-text-tertiary group-hover:text-text-secondary"
                  }`}
                >
                  {section.num} {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
