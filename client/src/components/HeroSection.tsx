import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full glassmorphism text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              Risk-free sales training
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gradient">Master Every Sales Call</span>
              <br />
              <span className="text-foreground">Before It Happens</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Practice makes perfect. But practicing on real customers is expensive, not just in money, but in 
              missed quotas, damaged trust and lost momentum. Itramei turns practice into progress, without putting 
              your brand or revenue at risk.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="flex items-center space-x-3 relative z-10">
                  <Play className="w-5 h-5" />
                  <span>Request Demo</span>
                </div>
              </motion.button>

              <motion.button
                className="group px-8 py-4 border-2 border-border rounded-xl font-semibold hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">94%</div>
                <div className="text-sm text-muted-foreground">Skill Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50%</div>
                <div className="text-sm text-muted-foreground">Faster Onboarding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">127+</div>
                <div className="text-sm text-muted-foreground">Companies Trust Us</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-75" />
              
              {/* Hand Illustration */}
              <motion.div
                className="relative bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-border"
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Hand SVG */}
                  <motion.path
                    d="M100 50 L120 60 L130 80 L125 100 L110 110 L100 105 L90 110 L75 100 L70 80 L80 60 Z"
                    fill="url(#handGradient)"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  
                  {/* Success indicators */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={120 + i * 15}
                      cy={40 + i * 10}
                      r="3"
                      fill="hsl(var(--success))"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 1 + i * 0.2,
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 2
                      }}
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl glassmorphism flex items-center justify-center"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;