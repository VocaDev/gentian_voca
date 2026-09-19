import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { BentoGrid } from '@/components/BentoGrid';
import { SkillsSection } from '@/components/SkillsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { StatusFooter } from '@/components/StatusFooter';

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <BentoGrid />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <StatusFooter />
    </main>
  );
}
