// components/products/ProductCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { ArrowRight } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-brand-900/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-brand-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {product.category}
        </p>
        <h3 className="mt-2.5 font-display text-xl text-brand-950">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{product.tagline}</p>

        <Link
          href={`/products/${product.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition group-hover:gap-2.5 hover:text-brand-900"
        >
          View details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}