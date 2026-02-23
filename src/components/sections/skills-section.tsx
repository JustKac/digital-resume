"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const { locale } = useLocale();
  const { skills } = getResumeData(locale);

  return (
    <Section title={skills.title}>
      <div className="space-y-3">
        {skills.categories.map((cat, i) => (
          <div key={i} className="flex flex-wrap items-start gap-2">
            <span className="font-semibold text-sm min-w-[120px]">
              {cat.label}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.split(", ").map((item, j) => (
                <Badge key={j} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
