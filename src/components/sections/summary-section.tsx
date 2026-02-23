"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function SummarySection() {
  const { locale } = useLocale();
  const { summary } = getResumeData(locale);

  return (
    <Section title={summary.title}>
      <p className="text-muted-foreground leading-relaxed">{summary.text}</p>
    </Section>
  );
}
