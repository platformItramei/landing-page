import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, TrendingUp, Trophy, Phone, Video, Factory, Handshake, SlidersHorizontal, UserRoundCheck } from 'lucide-react';
import FloatingParticles from '../../components/FloatingParticles';

interface StepContentProps {
  currentStep: number;
  isTransitioning: boolean;
}

const StepContent: React.FC<StepContentProps> = ({ currentStep, isTransitioning }) => {
  const floatingElements = [
    {
      label: "Any Industry",
      className:
        "top-[2%] right-[10%] sm:top-[-4%] sm:right-[24%] lg:top-[-0%] lg:right-[35%]",
      icon: Factory,
    },
    {
      label: "Any Title",
      className:
        "top-[4%] left-[6%] sm:top-[-2%] sm:left-[10%] lg:top-[-0%] lg:left-[14%]",
      icon: UserRoundCheck,
    },
    {
      label: "Fully Customizable!",
      className:
        "top-[23%] right-[25%] sm:top-[20%] sm:right-[28%] lg:top-[28%] lg:right-[42%]",
      icon: SlidersHorizontal,
    },
    {
      label: "Any Company",
      className:
        "top-[45%] left-[6%] sm:top-[50%] sm:left-[10%] lg:top-[52%] lg:left-[14%]",
      icon: Factory,
    },
    {
      label: "Any Sales Stage",
      className:
        "top-[45%] right-[6%] sm:top-[50%] sm:right-[12%] lg:top-[52%] lg:right-[16%]",
      icon: Handshake,
    },
  ];

  const progressData = {
    activeListening: { current: 52, previous: 27, change: 41 },
    valueProposition: { current: 87, previous: 84, change: 3 },
  };

  const colorMap: Record<string, string> = {
    primary: 'bg-blue-300',
    secondary: 'bg-purple-500',
    success: 'bg-green-500',
    red: 'bg-red-600',
    orange: 'bg-orange-500',
    gray: 'bg-gray-500',
    yellow: 'bg-yellow-300',
  };

  const stepData = [
    {
      icon: MessageCircle,
      step: 'Step 1 of 4',
      title: 'Create Simulation',
      description: `Enablement can create and invite the entire org in a click and Reps can simulate any meeting before hand to hone their skill. Whether it's a phone or video call, from discovery to post sales, Itramei simulation feels like the real thing complete with tough questions and curveball objections.`,
    },
    {
      icon: Phone,
      step: 'Step 2 of 4',
      title: 'Simulate Real Conversations',
      description: `Reps engage in lifelike sales conversations with AI-powered buyers. They handle objections, test messaging, share their screen, and sharpen delivery, all in a safe, high-pressure environment. It’s the closest thing to real without risking real pipeline.`,
      cards: [
        { icon: Video, title: 'Video Meetings', subtitle: 'Full video interactions', color: 'primary' },
        { icon: Phone, title: 'Phone Calls', subtitle: 'Voice-based simulations', color: 'secondary' },
      ]
    },
    {
      icon: TrendingUp,
      step: 'Step 3 of 4',
      title: 'Get Personalized Feedback',
      description: `Immediately after each session, Itramei analyzes the conversation and delivers a personalized report. Reps see what they did well, where to improve, and get a fully annotated transcript with AI-generated insights like missed reframes, filler words, and suggested learning content.`,
      progress: [
        { label: 'Vocal Variety', value: 87, color: 'success' },
        { label: 'Objecting Reframing', value: 65, color: 'orange' },
        { label: 'Over 40 More Metrics!', value: 50, color: 'primary' },
      ]
    },
    {
      icon: Trophy,
      step: 'Step 4 of 4',
      title: 'Track Progress & Improve',
      description: `Itramei tracks individual and team-wide performance over time. Leaders can monitor improvement across key skills, spot gaps early, and deliver targeted coaching. Progress becomes visible, measurable, and scalable..`,
    }
  ];

  const currentStepData = stepData[currentStep] ?? {};
  const IconComponent = currentStepData?.icon;

  return (
    <div className={`relative overflow-hidden ${isTransitioning ? 'pointer-events-none' : ''}`} style={{ perspective: '1000px', minHeight: '600px' }}>
      <FloatingParticles />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 space-y-4 sm:space-y-6"
        >
          {/* Step Indicator */}
          <motion.div
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800 text-xs sm:text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span>{currentStepData?.step}</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {currentStepData?.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            {currentStepData?.description}
          </motion.p>

          {/* Dynamic Content Area */}
          <motion.div
            className="pt-2 sm:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {currentStep === 0 && (
              <div className="relative w-full flex flex-col items-center justify-center min-h-[200px] sm:min-h-[320px] space-y-3">
                <div className="absolute inset-0 pointer-events-none">
                  {floatingElements.map((element, i) => {
                    const Icon = element.icon;
                    return (
                      <motion.div
                        key={i}
                        className={`absolute ${element.className} 
              bg-gray-800/80 backdrop-blur-sm border border-gray-700 
              rounded-lg p-1 sm:p-2 shadow-md z-0 
              text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2`}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      >
                        <Icon
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600"
                        />
                        <span>{element.label}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 1 && currentStepData.cards && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {currentStepData.cards.map((card, index) => {
                  const CardIcon = card.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CardIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-1 sm:mb-2" style={{ color: "rgba(0, 128, 255, 0.6)" }} />
                      <p className="text-xs sm:text-sm font-semibold">{card.title}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400">{card.subtitle}</p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {currentStep === 2 && currentStepData.progress && (
              <div className="space-y-2 sm:space-y-3">
                {currentStepData.progress.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between bg-gray-800 rounded-lg p-2 sm:p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-xs sm:text-sm">{item.label}</span>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${colorMap[item.color] || 'bg-gray-500'} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      {
                        item.value == 50 ?
                          <>
                            <span className="text-xs sm:text-sm blur-sm">
                              50%
                            </span>
                          </>
                          :

                          <span className="text-xs sm:text-sm font-semibold">
                            {item.value}%
                          </span>
                      }

                    </div>

                  </motion.div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {['valueProposition', 'activeListening'].map((metricKey, i) => {
                  const data = progressData[metricKey as keyof typeof progressData];
                  const isValue = metricKey === 'valueProposition';

                  return (
                    <motion.div
                      key={metricKey}
                      className="glassmorphism p-3 sm:p-4 rounded-lg sm:rounded-xl space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.2 }}
                    >
                      <h4 className="text-xs sm:text-sm font-semibold">
                        {isValue ? 'Value Proposition Clarity' : 'Active Listening'}
                      </h4>

                      <div className="flex justify-between text-[10px] sm:text-xs text-muted-foreground">
                        <div className="text-center flex-1">
                          <div className="text-xs sm:text-sm md:text-base font-bold text-white">{data.current}</div>
                          <div>Current</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-xs sm:text-sm md:text-base font-bold text-white">{data.previous}</div>
                          <div>Previous</div>
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-xs sm:text-sm md:text-base font-bold text-white ">
                            ↑ {data.change}%
                          </div>
                          <div>Change</div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-700 rounded-full h-1 sm:h-1.5">
                        <motion.div
                          className={`h-full rounded-full ${isValue ? 'bg-green-500' : 'bg-orange-500'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${data.current}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StepContent;