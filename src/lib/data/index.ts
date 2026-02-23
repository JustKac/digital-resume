import type { Locale, ResumeData } from "@/types/resume";
import { resumePtBr } from "./resume-pt-br";
import { resumeEnUs } from "./resume-en-us";

const resumes: Record<Locale, ResumeData> = {
  "pt-br": resumePtBr,
  "en-us": resumeEnUs,
};

export function getResumeData(locale: Locale): ResumeData {
  return resumes[locale];
}
