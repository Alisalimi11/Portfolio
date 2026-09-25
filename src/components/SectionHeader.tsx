import Reveal from "./Reveal";

type SectionHeaderProps = {
  num: string;
  label: string;
  title?: string;
};

/**
 * The recurring editorial marker: an index number, a hairline rule, and the
 * section label in mono — the site's one consistent identity device.
 */
export default function SectionHeader({ num, label, title }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 border-t border-border pt-4">
        <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
          {num}
        </span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-text-secondary">
          {label}
        </span>
      </div>
      {title ? (
        <h2 className="mt-10 max-w-3xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      ) : null}
    </Reveal>
  );
}
