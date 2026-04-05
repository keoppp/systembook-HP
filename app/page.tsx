import HeroSection from '@/components/sections/HeroSection';
import WhySection from '@/components/sections/WhySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import ROISection from '@/components/sections/ROISection';
import SecuritySection from '@/components/sections/SecuritySection';
import EstimatorSection from '@/components/sections/EstimatorSection';
import ContactSection from '@/components/sections/ContactSection';
import ProfileSection from '@/components/sections/ProfileSection';
import StickyBanner from '@/components/StickyBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <BenefitsSection />
      <BeforeAfterSection />
      <ROISection />
      <SecuritySection />
      <EstimatorSection />
      <ContactSection />
      <ProfileSection />
      <StickyBanner />
    </>
  );
}
