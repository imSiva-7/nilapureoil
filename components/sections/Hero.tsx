// components/sections/Hero.tsx
"use client";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { motion } from "framer-motion";

const stats = [
  { value: "2019", label: "Crafting since" },
  { value: "6", label: "Pure products" },
  { value: "100%", label: "Pure & natural" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand-600/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-400/10 blur-3xl"
      />

      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-brand-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            Traditional oil · Tamil Nadu
          </motion.span>

          <motion.h1 
            className="mt-7 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Pure oils with the
            <span className="block text-brand-300">essence of tradition.</span>
          </motion.h1>

          <motion.p 
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/75 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Nila crafts a thoughtful range of pure oils and traditional products — groundnut oil, coconut oil, gingelly oil, velakku oil, cow ghee, and naatu sakkarai. Each made with care and integrity.
          </motion.p>

          <motion.div 
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ButtonLink href="/products" variant="light" size="lg">
              EXPLORE
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="border border-white/20 bg-transparent text-white hover:bg-white/10"
            >
            CONTACT US
            </ButtonLink>
          </motion.div>

          <motion.dl 
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <dt className="font-display text-2xl text-white sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-100/60">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-brand-900">
            <Image
              src="/images/hero.jpg"
              alt="Pure Nila groundnut oil in traditional containers"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <motion.div 
            className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/10 bg-brand-900/80 p-5 backdrop-blur-md sm:left-8 sm:right-auto sm:w-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Now pressing</p>
            <p className="mt-2 font-display text-lg text-white">Premium Groundnut Oil</p>
            <p className="mt-1 text-xs leading-relaxed text-brand-100/70">
              Cold-pressed, aromatic, pure. Made fresh in small batches for maximum flavor.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}