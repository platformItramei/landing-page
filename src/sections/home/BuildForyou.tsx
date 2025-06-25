import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, DollarSign } from "lucide-react";

const rolesData = [
  {
    id: 1,
    icon: Users,
    title: "Sales Leaders",
    description: "Ensure your team is consistently at the top of their game. Identify who needs help before quotas are missed, and watch well-trained reps crush their numbers",
    animation: "left"
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Enablement Leaders",
    description: "Scale coaching, roll out new initiatives and onboarding effortlessly with AI-driven role-plays, no more worrying about the adoption of your efforts.",
    animation: "right"
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Chief Revenue Officers",
    description: "Drive faster revenue growth by cutting rep ramp time and boosting win rates. Itramei helps create a high-performing sales culture that directly impacts the bottom line.",
    animation: "left"
  }
];

export default function BuiltForYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gray-950 text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            Itramei is built for You
          </h1>
        </motion.div>

        {rolesData.map((role, index) => (
          <div key={role.id}>
            {/* Role Section */}
            <motion.div
              initial={{ opacity: 0, x: role.animation === "left" ? -100 : 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                delay: index * 0.3,
                stiffness: 100,
                damping: 10
              }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <div className={`flex flex-col ${role.animation === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-8 md:gap-12`}>
                {/* Icon Container */}
                {/* <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 shadow-lg">
                  <role.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400" />
                </div> */}

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h1 className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                    {role.title}
                  </h1>
                  <div className="border-t border-blue-500 my-4 sm:my-3 md:my-4 mx-auto w-2/3"></div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider (except after last item) */}
            {/* {index < rolesData.length - 1 && (
              <div className="border-t border-gray-700/50 w-1/2 mx-auto my-8 sm:my-12 md:my-16"></div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}