import { motion } from 'framer-motion';

interface CircularTimelineProps {
  currentStep: number;
  progress: number;
}

const CircularTimeline = ({ currentStep, progress }: CircularTimelineProps) => {
  const steps = [
    { num: '01', name: 'Create', color: 'success' },
    { num: '02', name: 'Simulate', color: 'primary' },
    { num: '03', name: 'Feedback', color: 'secondary' },
    { num: '04', name: 'Track', color: 'accent' },
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
    <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
      {/* Line*/}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(215, 27%, 32%)"
            strokeWidth="0.5"
            className="opacity-30"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeDasharray={`${progress * 251.2} 251.2`}
            initial={false}
            animate={{ strokeDasharray: `${progress * 251.2} 251.2` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              filter: currentStep > 0 ? 'drop-shadow(0 0 8px hsl(217, 91%, 60%))' : 'none',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
              <stop offset="50%" stopColor="hsl(214, 95%, 67%)" />
              <stop offset="100%" stopColor="hsl(142, 76%, 36%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Step Circles */}
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <motion.div
            key={index}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full glassmorphism flex flex-col items-center justify-center transition-all duration-800 hover:scale-110 cursor-pointer z-20"
            style={getStepPosition(index)}
            animate={{
              transform: isActive ? getActiveTransform(index) : getInactiveTransform(index),
              boxShadow: isActive
                ? '0 0 20px hsl(217, 91%, 60%)'
                : isCompleted
                  ? '0 0 10px hsla(142, 76%, 36%, 0.5)'
                  : 'none',
            }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-full transition-opacity duration-500"
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(214, 95%, 67%) 100%)'
                  : isCompleted
                    ? 'linear-gradient(135deg, hsl(160, 58%, 52%) 0%, hsla(162, 61%, 34%, 0.7) 100%)'
                    : 'transparent',
              }}
              animate={{ opacity: isActive ? 1 : isCompleted ? 0.8 : 0 }}
            />
            <span className="text-[0.5rem] sm:text-[0.6rem] md:text-xs font-semibold relative z-10">{step.name}</span>

            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                initial={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.2, opacity: 0.7 }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
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