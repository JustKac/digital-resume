"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { getUIStrings } from "@/lib/i18n/ui-strings";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { locale, toggleLocale } = useLocale();
  const ui = getUIStrings(locale);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {ui.languageSwitcher}
    </Button>
  );
}
