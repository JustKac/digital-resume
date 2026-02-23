"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Section } from "@/components/shared/section";

export function ExperienceSection() {
  const { locale } = useLocale();
  const { experience } = getResumeData(locale);

  return (
    <Section title={experience.title}>
      <div className="space-y-6">
        {experience.entries.map((entry, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-lg font-semibold">{entry.role}</h3>
              <span className="text-sm text-muted-foreground italic">
                {entry.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{entry.company}</p>
            <ul className="mt-2 space-y-1.5 list-disc list-outside ml-5 text-sm text-muted-foreground">
              {entry.bullets.map((bullet, j) => (
                <li key={j} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
