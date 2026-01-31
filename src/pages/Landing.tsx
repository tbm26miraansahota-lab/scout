import { FoundersSection } from "../components/FoundersSection";
import { Hero } from '../components/sections/Hero';
import { SocialProof } from '../components/sections/SocialProof';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { FeatureShowcase } from '../components/sections/FeatureShowcase';
import { KPIStrip } from '../components/sections/KPIStrip';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';

export default function Landing() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <FeatureShowcase />
      <FoundersSection />
      <KPIStrip />
      <Testimonials />
      <CTASection />
    </>
  );
}
