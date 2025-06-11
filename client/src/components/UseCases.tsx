import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';

interface UseCase {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  benefits: string[];
  color: string;
}

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCase((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const useCases: UseCase[] = [
    {
      id: 0,
      icon: Rocket,
      title: "Rapid Onboarding",
      description: "Perfect for fast-growing sales teams needing quick ramp-up.",
      details: "Get new hires productive faster with structured simulation training that mimics real customer interactions. Our AI-powered scenarios help new team members practice common objections, learn your sales methodology, and build confidence before their first real customer call.",
      benefits: [
        "50% faster time to first deal",
        "Reduced onboarding costs",
        "Consistent training quality",
        "Immediate feedback loops"
      ],
      color: "primary"
    },
    {
      id: 1,
      icon: Users,
      title: "Upskilling Sellers",
      description: "Enhance skills for veteran reps entering new markets or products.",
      details: "Transform experienced sellers into experts in new territories. Practice complex product demonstrations, master new competitive positioning, and develop specialized industry knowledge through realistic scenario-based training.",
      benefits: [
        "Higher win rates in new markets",
        "Confident product positioning",
        "Reduced learning curve",
        "Cross-selling opportunities"
      ],
      color: "secondary"
    },
    {
      id: 2,
      icon: Megaphone,
      title: "Scaleable Enablement",
      description: "Reinforce messaging via safe, repeated AI practice runs before live campaigns.",
      details: "Ensure consistent messaging across your entire sales organization. Practice new campaign launches, test messaging variations, and perfect your value propositions through unlimited simulation runs before rolling out to customers.",
      benefits: [
        "Consistent brand messaging",
        "Risk-free campaign testing",
        "Improved conversion rates",
        "Team-wide best practices"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Use Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Itramei transforms sales training across different scenarios and team needs
          </p>
        </motion.div>

        {/* Fixed Use Case Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            const isActive = activeCase === index;
            
            return (
              <motion.div
                key={useCase.id}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30' 
                    : 'bg-background border-2 border-border hover:border-primary/20'
                }`}
                onClick={() => setActiveCase(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isActive 
                      ? 'bg-gradient-to-br from-primary to-secondary' 
                      : 'bg-muted'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      isActive ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  </div>
                </div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => setActiveCase((prev) => (prev - 1 + 3) % 3)}
            className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCase === index 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveCase((prev) => (prev + 1) % 3)}
            className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Active Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            className="bg-background rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              {/* Description that changes */}
              <motion.p 
                key={activeCase}
                className="text-xl text-muted-foreground leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {useCases[activeCase].description}
              </motion.p>

              {/* Detailed content */}
              <motion.div
                key={`details-${activeCase}`}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCases[activeCase].details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {useCases[activeCase].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-muted/30 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;