import type { Locale } from "@/types/resume";
import type { UIStrings } from "@/types/i18n";

const uiStrings: Record<Locale, UIStrings> = {
  "pt-br": {
    languageSwitcher: "EN",
    downloadPdf: "Baixar PDF",
  },
  "en-us": {
    languageSwitcher: "PT",
    downloadPdf: "Download PDF",
  },
};

export function getUIStrings(locale: Locale): UIStrings {
  return uiStrings[locale];
}
