// components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 text-brand-100/70">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl text-white">Nila</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/40 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">Visit</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          {/* <p>Roasted in small batches, by the coast.</p> */}
        </Container>
      </div>
    </footer>
  );
}