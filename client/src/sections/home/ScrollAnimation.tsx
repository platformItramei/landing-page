import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CircularTimeline from './CircularTimeline';
import StepContent from './StepContent';
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

      let newStep;
      if (progress < 0.27) {
        newStep = 0;
      } else if (progress < 0.35) {
        newStep = 1;
      } else if (progress < 0.40) {
        newStep = 2;
      } else  {
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

    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [currentStep]);



  return (
    <section id="features" className="relative bg-background">
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

          {/* <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          </motion.h2> */}

         
        </div>

      </div>

      {/* Timeline section scroll container */}
      <div className="relative h-[450vh] min-h-[800vh] md:h-[600vh]">
        {/* Sticky pinned scroll UI */}
        <div className="sticky top-20 h-screen flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
              {/* Step left*/}
              <div className="flex items-center justify-center">
                <CircularTimeline currentStep={currentStep}  />
              </div>

              {/* Animated content right */}
              <div className="relative">
                <StepContent currentStep={currentStep} isTransitioning={isTransitioning} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;