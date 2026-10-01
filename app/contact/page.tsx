// app/contact/page.tsx
import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone } from "@/components/ui/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nila — wholesale, events, or general enquiries.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Roastery", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello."
        description="We answer every message ourselves — usually within one working day. No forms disappearing into a void."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="font-display text-2xl text-brand-950">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill this in and we&apos;ll get back to you.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="rounded-2xl border border-brand-900/10 bg-sand-50 p-6"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-1.5 block text-sm text-brand-950 transition hover:text-brand-600"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-950">{value}</p>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-brand-900/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Opening hours
              </p>
              <p className="mt-1.5 text-sm text-brand-950">{site.hours}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}