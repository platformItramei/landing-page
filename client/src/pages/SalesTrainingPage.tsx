import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import UseCases from '@/components/UseCases';

export default function SalesTrainingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <UseCases />
      <Footer />
    </div>
  );
}