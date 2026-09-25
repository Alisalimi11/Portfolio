import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import projects from "@/data/projects.json";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-gutter py-20 sm:py-28"
    >
      <div id="work-heading">
        <SectionHeader
          num="02"
          label="Work"
          title="Selected projects — built, shipped, and refined."
        />
      </div>

      <ul className="mt-16 border-t border-border">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={i * 60}>
              <article className="group relative grid grid-cols-1 gap-x-8 gap-y-6 border-b border-border py-10 transition-colors duration-300 md:grid-cols-12 md:py-14">
                {/* Index + title */}
                <div className="md:col-span-6 lg:col-span-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-text-tertiary">
                      {project.index}
                    </span>
                    <div>
                      <h3 className="text-3xl font-medium tracking-tight text-text transition-colors duration-300 group-hover:text-accent sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary sm:text-base">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-text-secondary md:hidden">
                    {project.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="md:col-span-3 lg:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                    Role
                  </p>
                  <p className="mt-2 text-sm text-text">{project.role}</p>
                  {project.year ? (
                    <>
                      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                        Year
                      </p>
                      <p className="mt-2 text-sm text-text">{project.year}</p>
                    </>
                  ) : null}
                </div>

                {/* Stack + links */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-tertiary">
                    Stack
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {project.stack.map((tech) => (
                      <li key={tech} className="font-mono text-xs text-text-secondary">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex w-fit items-center gap-1.5 text-sm text-text transition-colors duration-200 hover:text-accent"
                      >
                        {link.label}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Full description on larger screens */}
                <p className="hidden max-w-2xl text-pretty text-sm leading-relaxed text-text-secondary md:col-span-12 md:block lg:col-span-10">
                  {project.description}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
