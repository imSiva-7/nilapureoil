// components/sections/FeaturedProducts.tsx
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRight } from "@/components/ui/Icons";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <Section id="products">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="The range"
          title="Six pure products. That's the whole list."
          description="Each one is available in multiple sizes. Prices and availability on request."
        />
        <ButtonLink href="/products" variant="outline" className="shrink-0">
          All products
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} index={index} />
        ))}
      </div>
    </Section>
  );
}