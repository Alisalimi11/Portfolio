import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import experience from "@/data/experience.json";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-gutter py-20 sm:py-28"
    >
      <div id="experience-heading">
        <SectionHeader
          num="02"
          label="Experience"
          title="Where I've worked and what I built there."
        />
      </div>

      <ul className="mt-16 border-t border-border">
        {experience.map((role, i) => (
          <li key={`${role.company}-${i}`}>
            <Reveal delay={i * 60}>
              <article className="group grid grid-cols-1 gap-x-8 gap-y-4 border-b border-border py-10 md:grid-cols-12 md:py-12">
                {/* Duration */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                    {role.duration}
                  </p>
                </div>

                {/* Role + company + description */}
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-2xl font-medium tracking-tight text-text sm:text-3xl">
                      {role.position}
                    </h3>
                    <span className="text-text-tertiary" aria-hidden="true">
                      ·
                    </span>
                    <p className="text-lg text-text-secondary sm:text-xl">
                      {role.company}
                    </p>
                  </div>
                  <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-text-secondary">
                    {role.description}
                  </p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
