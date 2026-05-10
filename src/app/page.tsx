"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhySyntroSection from "@/components/WhySyntroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import CredibilitySection from "@/components/CredibilitySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <WhySyntroSection />
      <HowItWorksSection />
      <HowWeWorkSection />
      <CredibilitySection />
      <CTASection />
    </div>
  );
}
