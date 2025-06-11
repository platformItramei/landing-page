import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CircularTimeline from './CircularTimeline';
import StepContent from './StepContent';
import FloatingParticles from './FloatingParticles';
import { Play } from 'lucide-react';

const ScrollAnimation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollY / totalHeight, 1);
      
      setScrollProgress(progress);
      
      // Determine current step based on scroll progress
      let newStep;
      if (progress < 0.25) {
        newStep = 0;
      } else if (progress < 0.5) {
        newStep = 1;
      } else if (progress < 0.75) {
        newStep = 2;
      } else {
        newStep = 3;
      }

      // Add transition state when step changes
      if (newStep !== currentStep) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(newStep);
          setIsTransitioning(false);
        }, 150);
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [currentStep]);

  const handleStepClick = (stepIndex: number) => {
    const targetScroll = (stepIndex / 4) * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const handleDemoRequest = () => {
    // This would typically open a modal or redirect to a demo request form
    console.log('Demo requested');
    alert('Demo request functionality would be implemented here');
  };

  return (
    <section id="features" className="relative min-h-[400vh]">
      {/* Section Header */}
      <div className="relative z-20 py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the complete sales training journey through our four-step process
          </motion.p>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      {/* Floating Background Particles */}
      <FloatingParticles />
      
      {/* Fixed Content Container */}
      <div className="fixed inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-screen">
            
            {/* Left Side - Circular Timeline */}
            <div className="flex items-center justify-center">
              <CircularTimeline 
                currentStep={currentStep}
                onStepClick={handleStepClick}
              />
            </div>
            
            {/* Right Side - Dynamic Content */}
            <div className="relative">
              <StepContent 
                currentStep={currentStep}
                isTransitioning={isTransitioning}
              />
            </div>
            
          </div>
          
          {/* CTA Button */}
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: scrollProgress > 0.8 ? 1 : 0,
              y: scrollProgress > 0.8 ? 0 : 20
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full glassmorphism hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleDemoRequest}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="flex items-center space-x-3 relative z-10">
                <Play className="w-5 h-5" />
                <span className="font-semibold text-lg">Request Demo</span>
              </div>
            </motion.button>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Spacer */}
      <div className="h-[400vh]" />
    </section>
  );
};

export default ScrollAnimation;
