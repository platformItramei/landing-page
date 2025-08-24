import { useState, useEffect } from "react";
import { useScrollAnimation } from "../../hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    id: "rapid-onboarding",
    title: "Onboard in Record Time",
    description:
      "Accelerate ramp-up for new sales hires with immersive role-play training. Reps engage in realistic phone and video call simulations from day one, shortening the time it takes to become fully productive.",
    gradient: "from-electric-blue/20 to-glow-purple/10",
  },
  {
    id: "upskilling-sellers",
    title: "Sharpen Senior Sales Executives",
    description:
      "Enable your team to practice handling objections, pitching, and discovery in a risk-free environment. Regular simulated calls and AI-driven feedback turn training into an ongoing process.",
    gradient: "from-glow-purple/20 to-electric-blue/10",
    featured: true,
  },
  {
    id: "scaleable-enablement",
    title: "Optimize Every Customer Interaction",
    description:
      "Ensure every real sales meeting is a success. By practicing with ideal customer personas and scenarios, reps enter live calls prepared for anything.",
    gradient: "from-green-400/20 to-glow-purple/10",
  },
];

export default function UseCases() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % useCases.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const getPosition = (index: number) => {
    const diff = (index - currentSlide + useCases.length) % useCases.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === 2) return "left";
    return "hidden";
  };

  return (
    <section
      className="py-16 bg-gray-950 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8"
      id="use-cases"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Key Benefits
            </h2>
          </motion.div>

          {/* Mobile Carousel (stacked cards) */}
          <div className="lg:hidden space-y-6 mb-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`
                  bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm
                  border rounded-2xl p-6 h-full
                  ${index === currentSlide
                    ? "border-2 border-sky-500"
                    : "border border-gray-700/40"
                  }
                `}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                  {useCase.title}
                </h3>
                <div className="border-t border-blue-500 my-4 w-full"></div>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop 3D Carousel */}
          <div className="hidden lg:block relative perspective-1000 h-[400px] md:h-[500px] lg:h-[600px] mb-12 md:mb-16 overflow-hidden">
            <div className="flex justify-center items-center h-full relative">
              {useCases.map((useCase, index) => {
                const position = getPosition(index);
                if (position === "hidden") return null;

                return (
                  <div
                    key={useCase.id}
                    className={`card-3d ${position} absolute w-72 md:w-80 lg:w-96 h-[360px] md:h-[450px] lg:h-[520px] cursor-pointer`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <div
                      className={`
                        relative backdrop-blur-sm
                        border rounded-3xl p-6 md:p-8 h-full premium-shadow
                        ${position === "center"
                          ? "border-2 border-sky-500"
                          : "border border-gray-700/40"}
                      `}
                    >
                      <div className="relative z-10 h-full flex flex-col">
                        <h3
                          className={`
                            font-bold mb-4 text-center
                            ${position === "center"
                              ? "text-2xl md:text-3xl"
                              : "text-xl text-gray-200"}
                          `}
                        >
                          {useCase.title}
                        </h3>

                        <div className="border-t border-blue-500 my-4 w-full"></div>

                        <p
                          className={`
                            text-gray-400 mb-6 leading-relaxed flex-grow
                            ${position === "center" ? "text-lg" : "text-base"}
                          `}
                        >
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls — only visible on desktop */}
          <div className="hidden lg:flex justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <button
              onClick={prevSlide}
              className="p-3 sm:p-4 rounded-full bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            <div className="flex space-x-2 sm:space-x-4">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "scale-125"
                      : "bg-gray-600 hover:bg-sky-400"
                  }`}
                  style={{
                    background:
                      index === currentSlide
                        ? "linear-gradient(125deg, rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6))"
                        : undefined,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 sm:p-4 rounded-full bg-gray-800/60 hover:bg-gray-700/80 border border-gray-600 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}