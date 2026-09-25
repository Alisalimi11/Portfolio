import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import about from "@/data/about.json";
import skills from "@/data/skills.json";
import interests from "@/data/interests.json";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-gutter py-20 sm:py-28"
    >
      <div id="about-heading">
        <SectionHeader num="03" label="About" />
      </div>

      {/* Lead + body */}
      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
        <Reveal className="md:col-span-7 lg:col-span-8">
          <p className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            {about.lead}
          </p>
          <div className="mt-8 max-w-xl space-y-5">
            {about.body.map((paragraph, i) => (
              <p key={i} className="text-pretty leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Toolkit / skills index */}
        <Reveal className="md:col-span-5 lg:col-span-4" delay={120}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary">
            Toolkit
          </p>
          <dl className="mt-6 space-y-6">
            {skills.map((group) => (
              <div
                key={group.group}
                className="grid grid-cols-3 gap-4 border-t border-border pt-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
                  {group.group}
                </dt>
                <dd className="col-span-2 flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-sm text-text">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Currently exploring / interests */}
      <div className="mt-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary">
            Currently exploring
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-px border-t border-border sm:grid-cols-2">
          {interests.map((interest, i) => (
            <Reveal
              key={interest.title}
              delay={i * 80}
              className="border-b border-border py-8 sm:odd:pr-10 sm:even:border-l sm:even:pl-10"
            >
              <span className="font-mono text-xs text-text-tertiary">
                {interest.index}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">
                {interest.title}
              </h3>
              <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-text-secondary">
                {interest.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
