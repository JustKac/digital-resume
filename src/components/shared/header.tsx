"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getResumeData } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { LanguageSwitcher } from "@/components/shared/language-switcher";

export function Header() {
  const { locale } = useLocale();
  const data = getResumeData(locale);
  const { header } = data;

  return (
    <header className="relative border-b border-border pb-8">
      <div className="absolute top-0 right-0">
        <LanguageSwitcher />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          {header.name}
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {header.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            {header.phone}
          </span>
          <a
            href={`mailto:${header.email}`}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            {header.email}
          </a>
          <a
            href={header.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            {header.linkedinLabel}
          </a>
          <a
            href={header.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline underline-offset-4"
          >
            {header.githubLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
