// app/products/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { CtaBand } from "@/components/sections/CtaBand";
import { getProduct, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Section className="bg-sand-50">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-50 lg:sticky lg:top-28">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-brand-950 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{product.tagline}</p>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Enquire about this
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/products" variant="outline">
                Back to range
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {product.highlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-brand-900/10 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {h.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.description}</p>
                </div>
              ))}
            </div>

            <dl className="mt-10 divide-y divide-brand-900/10 border-t border-brand-900/10">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-6 py-4 text-sm">
                  <dt className="text-slate-500">{spec.label}</dt>
                  <dd className="text-right font-medium text-brand-950">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}