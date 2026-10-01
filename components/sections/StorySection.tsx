// components/sections/StorySection.tsx
"use client";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="story" className="bg-white">
      <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-brand-50">
            <Image
              src="/images/story.jpg"
              alt="The Nila oil pressing space"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <motion.div 
            className="absolute -bottom-8 -right-4 hidden w-52 rounded-2xl border border-brand-900/10 bg-white p-5 shadow-xl shadow-brand-900/5 sm:block lg:-right-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-display text-3xl text-brand-900">100%</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Pure, cold-pressed oils with no additives or chemicals.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
            Our story
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            It started with one drum and a rented corner.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              Nila began in 2019 as a weekend experiment — a traditional oil press, a small
              warehouse near the harbour, and a stubborn belief that pure, cold-pressed oils deserved
              more attention than they were getting.
            </p>
            <p>
              We named it after the blue that shows up everywhere here: the water, the shutters, the
              dusk. The palette stayed. The product list stayed short on purpose.
            </p>
            <p>
              Today we supply pure oils to families, local restaurants, and anyone who values
              quality over shortcuts — one bottle at a time.
            </p>
          </div>

          <ButtonLink href="/contact" variant="outline" className="mt-8">
            Visit the facility
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </div>
    </Section>
  );
}