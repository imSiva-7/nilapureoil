// components/ui/Field.tsx
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded-xl border border-brand-900/20 bg-white px-4 py-3 text-sm text-brand-900 placeholder:text-brand-900 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10";

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-brand-950">
      {children}
    </label>
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(control, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return <textarea className={cn(control, "resize-y", className)} {...props} />;
}