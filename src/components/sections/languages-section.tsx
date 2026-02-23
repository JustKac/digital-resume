"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function LanguagesSection() {
  const { locale } = useLocale();
  const { languages } = getResumeData(locale);

  return (
    <Section title={languages.title}>
      <ul className="space-y-1 list-disc list-outside ml-5 text-sm text-muted-foreground">
        {languages.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
