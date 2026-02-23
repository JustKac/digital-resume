import { Header } from "@/components/shared/header";
import { SummarySection } from "@/components/sections/summary-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { LanguagesSection } from "@/components/sections/languages-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-6 py-12 space-y-8">
        <Header />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <SkillsSection />
        <LanguagesSection />
      </main>
    </div>
  );
}
