import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Megaphone, TrendingUp } from 'lucide-react';

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

        {/* Use Case Navigation */}
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
                    <p className="text-muted-foreground text-sm">{useCase.description}</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    {React.createElement(useCases[activeCase].icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold">{useCases[activeCase].title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {useCases[activeCase].details}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCases[activeCase].benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <motion.div
                  className="relative aspect-square max-w-md mx-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-gradient-to-br from-background to-muted rounded-3xl p-8 border border-border">
                    <div className="space-y-4">
                      {/* Simulation visualization */}
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full" />
                          <span className="font-medium">AI Trainer</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Active</div>
                      </div>
                      
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="h-3 bg-gradient-to-r from-primary/30 to-transparent rounded-full"
                            style={{ width: `${Math.random() * 60 + 40}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.random() * 60 + 40}%` }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                          />
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;