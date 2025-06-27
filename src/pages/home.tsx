import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../sections/home/HeroSection';
import UseCases from '../sections/home/UseCases';
import Works from '../sections/home/ItrameiWorks';
import BuiltForYou from '../sections/home/BuildForyou';
import Comparison from '../sections/home/Comparison';
import Faq from '../sections/home/Faq';
import Enablement from '../sections/home/Enablement';
import Integreations from '../sections/home/Integreations';
import KeyBenefitsOverview from '../sections/home/KeyBenefitsOverview';
import  RequestDemoSection from '../sections/home/requestDemo';
import { useState } from 'react';

export default function HomePage() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailData, setEmailData] = useState<any>(null);
  const handleDemoSubmit = (data: any) => {
    setEmailData(data);
    setShowEmailModal(true);
  };


// This order:
// 1.Homepage
// 2. What Is Your Enablement Effort Worth Without Adoption?
// 3.Key benefits overview
// 4.How it works
// 5.Usecases
// 6.Itramei vs traditional
// 7.Itramei is built for you
// 8.Flexable integration
// 9.FQA
// 10.Final CTA
  
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Enablement/>
      <UseCases />
      <Works/>
      <KeyBenefitsOverview/>
      <Comparison/>
      <BuiltForYou/>
      <Integreations/>
      <Faq/>
      <RequestDemoSection onDemoSubmit={handleDemoSubmit} />
      <Footer />
    </div>
  );
}