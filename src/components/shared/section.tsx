import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <Separator className="my-3" />
      {children}
    </section>
  );
}
