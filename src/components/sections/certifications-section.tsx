"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function CertificationsSection() {
  const { locale } = useLocale();
  const { certifications } = getResumeData(locale);

  return (
    <Section title={certifications.title}>
      <ul className="space-y-1.5 list-disc list-outside ml-5 text-sm text-muted-foreground">
        {certifications.items.map((item, i) => (
          <li key={i} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
