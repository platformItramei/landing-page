import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, MessageCircle, TrendingUp, Trophy, Phone, Video } from 'lucide-react';

interface StepContentProps {
  currentStep: number;
  isTransitioning: boolean;
}

const StepContent: React.FC<StepContentProps> = ({ currentStep, isTransitioning }) => {
  const stepData = [
    {
      icon: PlusCircle,
      step: 'Step 1 of 4',
      title: 'Create Simulation',
      description: 'Enablement can create and invite the entire org in a click and Reps can simulate any meeting before hand to hone their skill. Whether it\'s a phone or video call, from discovery to post sales, Itramei simulation feels like the real thing complete with tough questions and curveball objections.',
      features: [
        { icon: '🎯', label: 'Interactive Setup', color: 'success' },
        { icon: '👥', label: 'Team Collaboration', color: 'primary' }
      ]
    },
    {
      icon: MessageCircle,
      step: 'Step 2 of 4',
      title: 'Simulate Real Conversations',
      description: 'Enablement can created and invite the entire org in a click and Reps can simulate any meeting before hand to hone their skills. Whether it\'s a phone or video call, from discovery to post sales, Itramei simulation feels like the real thing complete with tough questions and curveball objections.',
      cards: [
        { icon: Phone, title: 'Phone Calls', subtitle: 'Voice-based simulations', color: 'primary' },
        { icon: Video, title: 'Video Meetings', subtitle: 'Full video interactions', color: 'secondary' }
      ]
    },
    {
      icon: TrendingUp,
      step: 'Step 3 of 4',
      title: 'Get Personalized Feedback',
      description: 'Right after each session, The conversation gets instantly analyzed. Your team receives an objective and personalized feedback report highlighting of what they did well, and specific areas for improvement. The full transcript is provided, annotated with insights (e.g. missed objection reframing or filler words), and Recommended content to close knowledge gaps.',
      progress: [
        { label: 'Communication Score', value: 85, color: 'success' },
        { label: 'Objection Handling', value: 72, color: 'accent' }
      ]
    },
    {
      icon: Trophy,
      step: 'Step 4 of 4',
      title: 'Track Progress & Improve',
      description: 'Monitor your team\'s development with comprehensive analytics and progress tracking. Identify skill gaps, measure improvement over time, and provide targeted coaching recommendations. Watch as your sales team transforms through consistent practice and data-driven insights.',
      stats: [
        { value: '94%', label: 'Skill Improvement', color: 'success' },
        { value: '127', label: 'Sessions Completed', color: 'primary' },
        { value: '8.9', label: 'Avg Rating', color: 'accent' }
      ]
    }
  ];

  const currentStepData = stepData[currentStep];
  const IconComponent = currentStepData.icon;

  const contentVariants = {
    hidden: { opacity: 0, x: 60, rotateY: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
    },
    exit: { 
      opacity: 0, 
      x: -60, 
      rotateY: -10,
      transition: { duration: 0.5 }
    }
  };

  const slideVariants = {
    0: { x: -100, scale: 0.9 },
    1: { x: 100, scale: 0.9 },
    2: { y: 100, scale: 0.9 },
    3: { y: -100, scale: 0.9 }
  };

  return (
    <div className={`relative space-y-8 ${isTransitioning ? 'pointer-events-none' : ''}`} style={{ perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={contentVariants}
          initial={{ ...contentVariants.hidden, ...slideVariants[currentStep as keyof typeof slideVariants] }}
          animate="visible"
          exit="exit"
          className="space-y-6"
        >
          {/* Step Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full glassmorphism text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <IconComponent className="w-4 h-4 text-primary mr-2" />
            <span>{currentStepData.step}</span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold leading-tight text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {currentStepData.title}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {currentStepData.description}
          </motion.p>

          {/* Step-specific content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            {/* Step 0 - Features */}
            {currentStep === 0 && currentStepData.features && (
              <div className="flex items-center space-x-4">
                {currentStepData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className={`w-2 h-2 bg-${feature.color} rounded-full animate-pulse`} />
                    <span className="text-sm text-gray-400">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Step 1 - Cards */}
            {currentStep === 1 && currentStepData.cards && (
              <div className="grid grid-cols-2 gap-4">
                {currentStepData.cards.map((card, index) => {
                  const CardIcon = card.icon;
                  return (
                    <motion.div
                      key={index}
                      className="glassmorphism rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardIcon className={`text-${card.color} text-xl mb-2`} />
                      <p className="text-sm font-semibold">{card.title}</p>
                      <p className="text-xs text-gray-400">{card.subtitle}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Step 2 - Progress Bars */}
            {currentStep === 2 && currentStepData.progress && (
              <div className="space-y-3">
                {currentStepData.progress.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between glassmorphism rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-sm">{item.label}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r from-${item.color} to-${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className={`text-sm font-semibold text-${item.color}`}>{item.value}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Step 3 - Stats */}
            {currentStep === 3 && currentStepData.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentStepData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glassmorphism rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`text-2xl font-bold text-${stat.color} mb-1`}
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StepContent;
