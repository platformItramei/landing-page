import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CircularTimeline from './CircularTimeline';
import StepContent from './StepContent';

const ScrollAnimation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / sectionHeight, 0),
        1
      );

      setScrollProgress(progress);

      // Map progress to step
      let newStep = 0;
      if (progress < 0.27) {
        newStep = 0;
      } else if (progress < 0.45) {
        newStep = 1;
      } else if (progress < 0.65) {
        newStep = 2;
      } else {
        newStep = 3;
      }

      if (newStep !== currentStep) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(newStep);
          setIsTransitioning(false);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-background"
    >
      {/* Section header */}
      <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience the Future of Sales Readiness in 4 Steps
          </motion.h2>
        </div>
      </div>

      {/* Tall scroll area to allow animation within section */}
      <div className="relative h-[450vh] min-h-[800vh] md:h-[600vh]">
        {/*  scroll progress bar Ask Neda */}
        {/* <div
          className="scroll-indicator"
          style={{
            width: `${Math.min(currentStep, 3) * 25}%`,
            height: '4px',
            background: '#0ea5e9',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 50,
            transition: 'width 0.3s ease',
          }}
        /> */}

        {/* Sticky content */}
        <div className="sticky top-20 h-screen flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
              {/* Left: Circular Timeline */}
              <div className="flex items-center justify-center">
                <CircularTimeline
                  currentStep={currentStep}
                  progress={scrollProgress}
                />
              </div>

              {/* Right: Step content */}
              <div className="relative">
                <StepContent
                  currentStep={currentStep}
                  isTransitioning={isTransitioning}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;