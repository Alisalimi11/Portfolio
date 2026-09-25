import Reveal from "./Reveal";
import profile from "@/data/profile.json";

export default function Hero() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="mx-auto w-full max-w-[1280px] px-gutter"
    >
      <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
        {/* Eyebrow */}
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
              01
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
              {profile.name} — Portfolio ’26
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal as="h1" id="intro-heading" delay={80}>
          <span className="sr-only">
            {profile.name}, {profile.role}. {profile.hero.lines.join(" ")}
          </span>
          <span
            aria-hidden="true"
            className="mt-8 block text-balance text-[clamp(2.25rem,7vw,5rem)] font-medium leading-[1.02] tracking-[-0.02em]"
          >
            {profile.hero.lines.map((line, i) => (
              <span key={i} className="block">
                {i === profile.hero.lines.length - 1 ? (
                  <>
                    {line.replace(/exploring intelligent systems\.$/, "")}
                    <span className="text-accent">exploring intelligent systems.</span>
                  </>
                ) : (
                  line
                )}
              </span>
            ))}
          </span>
        </Reveal>

        {/* Supporting sentence */}
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            {profile.hero.supporting}
          </p>
        </Reveal>

        {/* Actions */}
        <Reveal delay={220}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-text"
            >
              <span className="relative">
                Selected work
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-text transition-transform duration-300 group-hover:scale-x-0" />
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-text transition-transform duration-300 delay-150 group-hover:scale-x-100" />
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-text"
            >
              Get in touch
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>

        {/* Status */}
        <Reveal delay={280}>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden border-t border-border sm:grid-cols-3">
            {profile.status.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-b border-border py-5 sm:border-b-0 sm:pr-8"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
                  {item.label}
                </dt>
                <dd className="text-sm text-text">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
