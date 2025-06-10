import React from 'react';
import { motion } from 'framer-motion';

interface CircularTimelineProps {
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const CircularTimeline: React.FC<CircularTimelineProps> = ({ currentStep, onStepClick }) => {
  const steps = [
    { num: '01', name: 'Create', color: 'success' },
    { num: '02', name: 'Simulate', color: 'primary' },
    { num: '03', name: 'Feedback', color: 'secondary' },
    { num: '04', name: 'Track', color: 'accent' }
  ];

  const getStepPosition = (index: number) => {
    switch (index) {
      case 0: return { top: '0', left: '50%', transform: 'translateX(-50%)' };
      case 1: return { top: '50%', right: '0', transform: 'translateY(-50%)' };
      case 2: return { bottom: '0', left: '50%', transform: 'translateX(-50%)' };
      case 3: return { top: '50%', left: '0', transform: 'translateY(-50%)' };
      default: return {};
    }
  };

  const getActiveTransform = (index: number) => {
    switch (index) {
      case 0: return 'translateX(-50%) scale(1.2)';
      case 1: return 'translateY(-50%) scale(1.2)';
      case 2: return 'translateX(-50%) scale(1.2)';
      case 3: return 'translateY(-50%) scale(1.2)';
      default: return 'scale(1)';
    }
  };

  const getInactiveTransform = (index: number) => {
    switch (index) {
      case 0: return 'translateX(-50%) scale(1)';
      case 1: return 'translateY(-50%) scale(1)';
      case 2: return 'translateX(-50%) scale(1)';
      case 3: return 'translateY(-50%) scale(1)';
      default: return 'scale(1)';
    }
  };

  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96">
      {/* Connection Lines */}
      <div className={`connection-line w-24 h-24 rounded-tr-full border-l-0 border-b-0 top-16 right-16 ${currentStep >= 1 ? 'active' : ''}`}>
        <div className="line-progress" />
      </div>
      <div className={`connection-line w-24 h-24 rounded-br-full border-l-0 border-t-0 bottom-16 right-16 ${currentStep >= 2 ? 'active' : ''}`}>
        <div className="line-progress" />
      </div>
      <div className={`connection-line w-24 h-24 rounded-bl-full border-r-0 border-t-0 bottom-16 left-16 ${currentStep >= 3 ? 'active' : ''}`}>
        <div className="line-progress" />
      </div>
      
      {/* Step Circles */}
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        
        return (
          <motion.div
            key={index}
            className="absolute w-20 h-20 rounded-full glassmorphism flex flex-col items-center justify-center transition-all duration-800 hover:scale-110 cursor-pointer z-20"
            style={getStepPosition(index)}
            animate={{
              transform: isActive ? getActiveTransform(index) : getInactiveTransform(index),
              boxShadow: isActive 
                ? '0 0 40px hsla(249, 82%, 68%, 0.8)' 
                : isCompleted 
                ? '0 0 20px hsla(142, 76%, 36%, 0.5)' 
                : 'none'
            }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => onStepClick(index)}
          >
            <motion.div
              className="absolute inset-0 rounded-full transition-opacity duration-500"
              style={{
                background: isActive 
                  ? `linear-gradient(135deg, hsl(var(--${step.color})) 0%, hsl(var(--${step.color})) 100%)`
                  : isCompleted
                  ? 'linear-gradient(135deg, hsl(var(--success)) 0%, hsl(var(--success)) 100%)'
                  : 'transparent'
              }}
              animate={{ opacity: isActive ? 1 : isCompleted ? 0.8 : 0 }}
            />
            <span className="text-lg font-bold relative z-10">{step.num}</span>
            <span className="text-xs font-semibold relative z-10">{step.name}</span>
            
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.2, opacity: 0.7 }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut", 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CircularTimeline;
