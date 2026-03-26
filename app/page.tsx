import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import SecuritySection from '@/components/sections/SecuritySection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import EstimatorSection from '@/components/sections/EstimatorSection';
import ContactSection from '@/components/sections/ContactSection';
import ProfileSection from '@/components/sections/ProfileSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <SecuritySection />
      <RoadmapSection />
      <EstimatorSection />
      <ContactSection />
      <ProfileSection />
    </>
  );
}
