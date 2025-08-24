"use client";

import { useState } from "react";
import HeroSection from "../sections/home/HeroSection";
import UseCases from "../sections/home/UseCases";
import Works from "../sections/home/ItrameiWorks";
import BuiltForYou from "../sections/home/BuildForyou";
import Comparison from "../sections/home/Comparison";
import Faq from "../sections/home/Faq";
import Enablement from "../sections/home/Enablement";
import Integreations from "../sections/home/Integreations";
import KeyBenefitsOverview from "../sections/home/KeyBenefitsOverview";
import RequestDemoSection from "../sections/home/requestDemo";

export default function HomePage() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState<any>(null);

  const handleDemoSubmit = (data: any) => {
    setEmailData(data);
    setShowEmailModal(true);
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <Enablement />
      <UseCases />
      <Works />
      <KeyBenefitsOverview />
      <Comparison />
      <BuiltForYou />
      <Integreations />
      <Faq />
      <RequestDemoSection onDemoSubmit={handleDemoSubmit} />
    </div>
  );
}