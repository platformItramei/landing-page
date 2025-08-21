import { useScrollAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "24/7 Availability",
    itramei: "On-demand, whenever needed",
    traditional: "Limited to calendar availability & headcount",
    itrameiBetter: true
  },
  {
    feature: "Personalised Feedback",
    itramei: "Personalized, AI-driven, objective",
    traditional: "Delayed, subjective, and inconsistent",
    itrameiBetter: true
  },
  {

    feature:"Skill Assessment Depth",
    itramei:"Analyzes 40+ dimensions, e.g., tone, reflective listening, speech rate, clarity, etc.",
    traditional:"Relies on manual notes and subjective memory",
    itrameiBetter: true
  },
  {
    feature: "Customized Scenarios",
    itramei: "Fully customizable",
    traditional: "Limited by time, headcount and trainer effort",
    itrameiBetter: true
  },
  {
    feature: "Realistic Roleplay",
    itramei: "Advanced AI mimics real buyers",
    traditional: "Depends heavily on trainer skill",
    itrameiBetter: true
  },
  {
    feature: "Scalability",
    itramei: "Effortless across entire teams",
    traditional: "Not scalable, requires manual effort",
    itrameiBetter: true
  },

];

export default function Comparison() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                <span>Itramei</span> vs <span className="text-red-400">Traditional Training</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                See how Itramei's AI-powered training compares to traditional role-play methods
              </p>
            </motion.div>

            {/* Comparison Table */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden premium-shadow">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-3 sm:p-4 md:p-6">
                <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">Feature</div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-center">
                  <span>Itramei</span>
                </div>
                <div className="text-sm sm:text-base md:text-lg font-semibold text-center text-red-400">Traditional</div>
              </div>

              {/* Comparison Rows */}
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`grid grid-cols-3 p-3 sm:p-4 md:p-6 border-t border-gray-700/30 ${
                    index % 2 === 0 ? "bg-gray-800/20" : "bg-gray-900/20"
                  }`}
                >
                  <div className="font-medium text-white pr-2 sm:pr-4 text-xs sm:text-sm md:text-base">
                    {row.feature}
                  </div>
                  <div className="text-center px-1 sm:px-2 md:px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <Check className="text-green-400 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span className="font-medium text-xs sm:text-sm md:text-base">
                        Itramei
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {row.itramei}
                    </p>
                  </div>
                  <div className="text-center px-1 sm:px-2 md:px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <X className="text-red-400 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      <span className="font-medium text-xs sm:text-sm md:text-base">
                        Traditional
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {row.traditional}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-12 sm:mt-16 md:mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: comparisonData.length * 0.1 + 0.2, duration: 0.5 }}
            >
              <Button
                onClick={() => {
                  document.getElementById("request-demo-form")?.scrollIntoView({behavior: "auto",block: "start",});
                }}
                className="text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl micro-interaction premium-shadow"
                style={{background: "linear-gradient(125deg,rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6)" }}
              >
                Request Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}