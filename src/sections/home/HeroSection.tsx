import React from 'react';
import { color, motion } from 'framer-motion';
import { Play, ArrowRight, Percent } from 'lucide-react';
import {Helmet} from "react-helmet";

const colorMap: Record<string, string> = {
  primary: 'from-blue-500 to-blue-500',
  secondary: 'from-purple-500 to-purple-500',
  success: 'from-green-500 to-green-500',
  accent: 'from-pink-500 to-pink-500',
  red: 'from-red-600 to-red-600',
};

<Helmet>
<title>Itramei - AI Sales Training Simulation Platform | Master Sales Calls</title>
<meta name="description" content="Itramei's AI-powered sales training platform helps sales teams practice calls with simulated customers. Improve objection handling, active listening, and closing techniques risk-free." />
<meta name="keywords" content="sales training, role play, communication skills, sales simulation, AI sales training, objection handling, active listening, sales coaching, sales performance, customer communication" />
<meta name="robots" content="index, follow" />

{/* Open Graph / Facebook */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://itramei.com/" />
<meta property="og:title" content="Itramei - AI Sales Training Simulation Platform" />
<meta property="og:description" content="Practice sales calls with AI-powered simulations. Master objection handling, active listening, and closing techniques without risking real customers. Top 10 communication and sales training platform" />
<meta property="og:image" content="https://itramei.com/og-image.jpg" />

{/* Twitter */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://itramei.com/" />
<meta property="twitter:title" content="Itramei - AI Sales Training Simulation Platform" />
<meta property="twitter:description" content="Practice sales calls with AI-powered simulations. Master objection handling, active listening, and closing techniques without risking real customers." />
<meta property="twitter:image" content="https://itramei.com/twitter-image.jpg" />

{/* Additional important tags */}
<meta name="author" content="Itramei" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href="https://itramei.com/" />

{/* Structured data for better SEO */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Itramei",
      "url": "https://itramei.com/",
      "logo": "https://itramei.com/",
      "description": "AI-powered sales top training simulation platform",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "City",
        "addressCountry": "Country"
      },
      "sameAs": [
        "https://www.linkedin.com/company/itramei",
        "https://www.facebook.com/profile.php?id=61562944268204"
      ]
    })
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Itramei Sales Training Simulation",
      "image": "https://itramei.com/",
      "description": "AI-powered sales top training simulation platform",
      "brand": {
        "@type": "Brand",
        "name": "Itramei"
      }
    })
  }}
/>
</Helmet>


const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
              className="inline-flex items-center rounded-full glassmorphism font-medium
             px-3 py-1.5 text-xs mt-4 
             sm:px-4 sm:py-2 sm:text-sm sm:mt-6
             md:px-5 md:py-2.5 md:text-sm
             lg:px-6 lg:py-3 lg:text-base"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              Risk-free sales training
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className='text-gradient'>Master Every Sales Call</span>
              <br />
              <span className="text-foreground">Before It Happens</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Practice makes perfect. But practicing on real customers is expensive, not just in money, but in
              missed quotas, damaged trust and lost momentum. <span >Itramei</span>  turns practice into progress, without putting
              your brand or revenue at risk.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ background: "linear-gradient(125deg,rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                onClick={() => {
                  document.getElementById("request-demo-form")?.scrollIntoView({ behavior: "auto", block: "start", });
                }}
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    transform: "none"
                  }} />
                <div className="flex items-center space-x-3 relative z-10">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="text-sm sm:text-base">Request Demo</span>
                </div>
              </motion.button>

              <motion.button
                  onClick={() => {
                    document.getElementById("works")?.scrollIntoView({ behavior: "auto", block: "start", });
                  }}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-border rounded-xl font-semibold hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm sm:text-base">Learn More</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
              {/* <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gradient"> number</div>
                <div className="text-xs sm:text-sm text-muted-foreground">some good thing </div>
              </div>
              */}
            </motion.div>
          </motion.div>

          {/* Right Visual - Sales Call Simulation */}
          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl scale-75" />

              {/* Video Call Interface */}
              <motion.div
                className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-border overflow-hidden"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 p-3 sm:p-5 bg-muted/50 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 bg-success rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">Simulated Customer Meeting</span>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4 mb-6">
                  <motion.div
                    className="bg-primary/10 p-3 sm:p-5 rounded-xl rounded-bl-sm max-w-[80%]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-xs sm:text-sm text-primary font-medium mb-1">AI Customer</div>
                    <div className="text-xs sm:text-sm">"What would the time-to-value look like if we rolled this out globally?"</div>
                  </motion.div>

                  <motion.div
                    className="bg-secondary/10 p-3 sm:p-5 rounded-xl rounded-br-sm max-w-[80%] ml-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <div className="text-xs sm:text-sm text-secondary font-medium mb-1">Sales Rep</div>
                    <div className="text-xs sm:text-sm">"Great question! Ehmm... teams begin seeing results within..."</div>
                  </motion.div>

                  <motion.div
                    className="bg-muted/50 p-2 sm:p-3 rounded-xl text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="text-xs sm:text-sm mt-8 text-muted-foreground">
                      AI evaluating over <span className="text-gradient">40+</span> performance metrics from delivery to objection handling
                    </div>
                  </motion.div>
                </div>

                {/* Footer Text */}
                <div className="text-xs sm:text-sm text-center text-cyan-400">
                  Practice. Feedback. Progress. That's how performance improves.
                </div>
              </motion.div>

              {/* Floating Skills */}
              {/* Objection Reframing */}
              <motion.div
                className="absolute top-[14%] right-[4%] sm:top-[14%] sm:right-[10%] bg-background/80 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 shadow-lg w-30 max-w-[45vw] text-xs sm:text-sm"
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">🎯</span>
                  <div>
                    <div className="font-medium text-xs sm:text-sm lg:text-base">Objection Reframing</div>
                    <div className="w-12 sm:w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{ delay: 3, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Active Listening */}
              <motion.div
                className="absolute top-[60%] left-[12%] sm:top-[60%] sm:left-[-8%] bg-background/80 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 shadow-lg w-30 max-w-[45vw] text-xs sm:text-sm"
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">👂</span>
                  <div>

                    <div className="font-medium text-xs sm:text-sm lg:text-base">Active Listening</div>
                    <div className="w-12 sm:w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "30%" }}
                        transition={{ delay: 3.2, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Value Proposition */}
              <motion.div
                className="absolute bottom-[52%] left-[50%] sm:bottom-[53%] sm:left-[65%] 
             bg-background/80 backdrop-blur-sm border border-border 
             rounded-xl p-2 sm:p-3 shadow-lg w-34 max-w-[45vw] 
             text-xs sm:text-sm"
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">💡</span>
                  <div>
                    <div className="font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      value proposition
                    </div>
                    <div className="w-12 sm:w-24 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ delay: 3.4, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Urgency Creation and Close */}
              <motion.div
                className="absolute bottom-[-8%] left-[8%] sm:bottom-[-10%] sm:left-[10%] bg-background/80 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 shadow-lg w-30 max-w-[45vw] text-xs sm:text-sm"
                animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2.9, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base sm:text-lg">🤝</span>
                  <div>
                    <div className="font-medium text-xs sm:text-sm lg:text-base">Urgency Creation</div>
                    <div className="w-12 sm:w-16 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "45%" }}
                        transition={{ delay: 3.6, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;