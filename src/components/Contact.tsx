import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import contact from "@/data/contact.json";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-gutter py-20 sm:py-28"
    >
      <div id="contact-heading">
        <SectionHeader num="04" label="Contact" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
        {/* Statement + email */}
        <div className="md:col-span-6 lg:col-span-7">
          <Reveal>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-text-secondary">
              {contact.supporting}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={`mailto:${contact.email}`}
              className="group mt-10 inline-flex items-center gap-2 text-lg font-medium tracking-tight text-text sm:text-xl"
            >
              <span className="relative">
                {contact.email}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-[width] duration-300 group-hover:w-full" />
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal className="md:col-span-6 lg:col-span-5" delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
