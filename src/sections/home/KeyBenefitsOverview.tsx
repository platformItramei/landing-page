import { useScrollAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Onboard New Sales Reps Faster and Smarter",
    description: "Let new hires simulate real calls from day one. Itramei shortens ramp time by letting reps practice product messaging, discovery questions, and objection handling before they ever talk to a real prospect.",
  },
  {
    title: "Reinforce New Messaging Across the Organization",
    description: "Launching a new product, value prop, or narrative? Use Itramei to create targeted scenarios and ensure every rep can confidently deliver the updated message – with consistency and precision.",
  },
  {
    title: "Scale Coaching Without Scaling Headcount",
    description: "Enablement and frontline managers can't be everywhere. Itramei gives every rep access to structured, high-quality practice and feedback 24/7 so training doesn't depend on availability or geography.",
  },
  {
    title: "Develop Senior Reps Through Targeted Coaching",
    description: "Top performers want to stay sharp. Itramei challenges experienced sellers with advanced simulations that stretch their skills and provides data-driven feedback for continuous growth.",
  }
];

export default function BuiltForYou() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mb-6 sm:mb-8">
              Use Cases
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.65, y: 30 }}
                  animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.4, duration: 0.45, ease: "easeOut" }}
                  className="bg-gradient-to-br border border-gray-700/40 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 premium-shadow"
                >
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
                      {role.title}
                    </h2>
                    <div className="border-t border-blue-500 my-5 sm:my-3 md:my-4 mx-auto w-30 sm:w-30"></div>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                className="premium-gradient text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-lg sm:rounded-xl premium-shadow"
                onClick={() => {
                  document.getElementById("request-demo-form")?.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                style={{
                  background: "linear-gradient(125deg,rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6)"
                }}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}