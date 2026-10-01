// components/sections/CtaBand.tsx
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Mail } from "@/components/ui/Icons";
import { site } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Wholesale & enquiries",
  title = "Let's talk oils.",
  description = "Stocking Nila, planning an event, or just curious about a product? Send us a note — we answer every one.",
}: CtaBandProps) {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 px-8 py-14 text-white sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                {eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-100/75 sm:text-base">
                {description}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
              <ButtonLink href="/contact" variant="light" size="lg">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-[15px] text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}