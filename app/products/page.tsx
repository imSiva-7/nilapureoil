// app/products/page.tsx
import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/lib/products";
import { site, priceDisclaimer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our range of pure, traditional oils and products.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our products"
        title="Pure tradition in every bottle."
        description="We craft a thoughtful range of pure oils and traditional products — each one made with care, tested by time, and trusted by families."
      />

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-900/10 bg-sand-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            <strong className="text-brand-900">Note:</strong> {priceDisclaimer}
          </p>
        </div>
      </Section>
    </>
  );
}
