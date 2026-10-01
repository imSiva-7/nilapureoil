// components/ui/Section.tsx
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}