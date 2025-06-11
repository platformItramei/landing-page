import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ForgettingCurve: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = pathProgress.onChange(setAnimatedProgress);
    return unsubscribe;
  }, [pathProgress]);

  const timelineData = [
    { time: "20 min", retention: 90, position: 20 },
    { time: "2 hours", retention: 70, position: 40 },
    { time: "24 hours", retention: 40, position: 70 },
    { time: "1 week", retention: 16, position: 100 }
  ];

  // SVG path for the forgetting curve
  const curvePath = "M 0 20 Q 25 30 50 50 Q 75 70 100 84";
  const pathLength = 300; // Approximate path length

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Is Your Enablement Effort Worth{' '}
            <span className="text-gradient">Without Adoption?</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>
              According to the forgetting curve, <strong className="text-foreground">84% of new knowledge is lost within seven days</strong> if it's not revisited. 
              That means that your best workshops, messaging rollouts, and onboarding programs are wasted if not effectively implemented.
            </p>
            <p>
              Itramei turns theory into action through repeated, lifelike simulations that makes learning stick.
            </p>
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="bg-background rounded-3xl p-8 lg:p-12 border border-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Timeline Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">The Forgetting Curve</h3>
              <p className="text-muted-foreground">Knowledge retention over time without reinforcement</p>
            </div>

            {/* Chart Area */}
            <div className="relative h-80 mb-8">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-muted-foreground">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Chart container */}
              <div className="ml-12 h-full relative">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="100"
                      y2={y}
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  ))}
                  
                  {/* Vertical time markers */}
                  {timelineData.map((point) => (
                    <line
                      key={point.time}
                      x1={point.position}
                      y1="0"
                      x2={point.position}
                      y2="100"
                      stroke="hsl(var(--border))"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  ))}

                  {/* Background curve (static) */}
                  <path
                    d={curvePath}
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Animated red curve */}
                  <motion.path
                    d={curvePath}
                    stroke="#ef4444"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={pathLength}
                    strokeDashoffset={pathLength * (1 - animatedProgress)}
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))'
                    }}
                  />

                  {/* Data points */}
                  {timelineData.map((point, index) => (
                    <motion.circle
                      key={point.time}
                      cx={point.position}
                      cy={100 - point.retention}
                      r="2"
                      fill="#ef4444"
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: animatedProgress > (index + 1) / timelineData.length ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </svg>

                {/* Time labels */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between transform translate-y-8">
                  {timelineData.map((point) => (
                    <motion.div
                      key={point.time}
                      className="text-center"
                      style={{ marginLeft: `${point.position}%`, transform: 'translateX(-50%)' }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-sm font-medium">{point.time}</div>
                      <div className="text-xs text-muted-foreground">{point.retention}% retained</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-destructive mb-2">84%</div>
                <div className="text-sm text-muted-foreground">Knowledge lost in 7 days</div>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Better retention with practice</div>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-success mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Adoption with Itramei</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForgettingCurve;