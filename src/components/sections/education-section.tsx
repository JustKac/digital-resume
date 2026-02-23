"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function EducationSection() {
  const { locale } = useLocale();
  const { education } = getResumeData(locale);

  return (
    <Section title={education.title}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-semibold">{education.degree}</h3>
        <span className="text-sm text-muted-foreground italic">
          {education.period}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{education.institution}</p>
    </Section>
  );
}
