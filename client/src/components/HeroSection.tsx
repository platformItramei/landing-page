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

          {/* Right Visual - Sales Call Simulation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-75" />
              
              {/* Phone/Video Call Interface */}
              <motion.div
                className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-6 border border-border overflow-hidden"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Video Call Header */}
                <div className="flex items-center justify-between mb-4 p-3 bg-muted/50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Sales Simulation Active</span>
                  </div>
                  <div className="text-xs text-muted-foreground">02:47</div>
                </div>

                {/* Conversation Bubbles */}
                <div className="space-y-4 mb-6">
                  <motion.div
                    className="bg-primary/10 p-3 rounded-xl rounded-bl-sm max-w-[80%]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-xs text-primary font-medium mb-1">AI Customer</div>
                    <div className="text-sm">"What makes your solution different?"</div>
                  </motion.div>

                  <motion.div
                    className="bg-secondary/10 p-3 rounded-xl rounded-br-sm max-w-[80%] ml-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="text-xs text-secondary font-medium mb-1">Sales Rep</div>
                    <div className="text-sm">"Great question! Let me show you..."</div>
                  </motion.div>

                  <motion.div
                    className="bg-muted/50 p-2 rounded-xl text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="text-xs text-muted-foreground">AI analyzing response...</div>
                  </motion.div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.div
                    className="text-center p-2 bg-success/10 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                  >
                    <div className="text-lg font-bold text-success">92%</div>
                    <div className="text-xs text-muted-foreground">Confidence</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-2 bg-primary/10 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.7 }}
                  >
                    <div className="text-lg font-bold text-primary">A+</div>
                    <div className="text-xs text-muted-foreground">Response</div>
                  </motion.div>
                  <motion.div
                    className="text-center p-2 bg-accent/10 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.9 }}
                  >
                    <div className="text-lg font-bold text-accent">8.9</div>
                    <div className="text-xs text-muted-foreground">Score</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Skill Indicators */}
              {[
                { label: "Objection Handling", icon: "🎯", position: { top: "10%", right: "10%" } },
                { label: "Active Listening", icon: "👂", position: { top: "50%", left: "5%" } },
                { label: "Value Proposition", icon: "💡", position: { bottom: "20%", right: "15%" } },
                { label: "Closing Technique", icon: "🤝", position: { bottom: "10%", left: "10%" } }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-background/80 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg"
                  style={skill.position}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{skill.icon}</span>
                    <div>
                      <div className="text-xs font-medium">{skill.label}</div>
                      <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 40 + 60}%` }}
                          transition={{ delay: 3 + i * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  </div>
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