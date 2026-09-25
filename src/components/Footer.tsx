import profile from "@/data/profile.json";
import contact from "@/data/contact.json";

const emailLink = { label: "Email", url: `mailto:${contact.email}` };
const links = [...contact.socials, emailLink];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-[1280px] px-gutter pb-12 pt-8">
      <div className="flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-text">{profile.name}</p>
          <p className="mt-1 text-sm text-text-secondary">{profile.role}</p>
        </div>

        <nav aria-label="Social and contact links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1 text-sm text-text-secondary transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="text-text-tertiary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mt-10 font-mono text-[11px] tracking-[0.14em] text-text-tertiary">
        © {year} {profile.name} — Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
