// components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-accent-400/20 bg-brand-950 text-white/80">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="Nila home" className="inline-flex">
            <BrandLogo light />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:border-white/40 hover:text-accent-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-accent-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">Visit</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-accent-300">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition hover:text-accent-300">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-accent-400/20">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          {/* <p>Roasted in small batches, by the coast.</p> */}
        </Container>
      </div>
    </footer>
  );
}
