// components/sections/PageHeader.tsx
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-900/10 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-900/5 blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-900">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-brand-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-900">{description}</p>
        )}
      </Container>
    </section>
  );
}
