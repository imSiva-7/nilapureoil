// components/sections/Values.tsx
"use client";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Flame, Leaf, Package } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: Leaf,
    title: "Sourced with intent",
    description:
      "We source directly from trusted farmers and pay fair prices. Every batch is tested before it earns a place in our range.",
  },
  {
    icon: Flame,
    title: "Pressed in small batches",
    description:
      "Nothing sits on a shelf. We cold-press weekly, filter naturally, and package each batch with the date it was pressed.",
  },
  {
    icon: Package,
    title: "Made to be repeated",
    description:
      "Three products, not thirty. Each one is designed to be the oil you reach for without thinking about it.",
  },
];

export function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-white">
      <div ref={ref}>
        <SectionHeading
          eyebrow="Why Nila"
          title="A short range, made properly."
          description="We'd rather make three things well than thirty things quickly. Here's what that means in practice."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-accent-500/20 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <motion.span 
                className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-900"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="h-5 w-5" />
              </motion.span>
              <h3 className="mt-6 font-display text-xl text-brand-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-900">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
