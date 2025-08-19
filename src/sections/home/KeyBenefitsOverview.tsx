import { useScrollAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet"; // If using Next.js, otherwise use React Helmet

const roles = [
  {
    title: "Onboard Faster and Smarter",
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
    <>
      <Helmet>
        <title>Sales Training Use Cases | Onboarding, Coaching & Development | Itramei</title>
        <meta name="description" content="Itramei addresses key sales challenges: faster onboarding, consistent messaging, scalable coaching, and senior rep development. See how our AI sales training platform helps." />
        <meta name="keywords" content="sales training use cases, sales onboarding, sales coaching, sales enablement, sales messaging, sales development, sales ramp time, sales performance, AI sales training" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itramei.com/use-cases" />
        <meta property="og:title" content="Sales Training Use Cases | Onboarding, Coaching & Development | Itramei" />
        <meta property="og:description" content="Discover how Itramei solves key sales challenges: faster onboarding, consistent messaging, scalable coaching, and senior rep development with AI-powered training." />
        <meta property="og:image" content="https://itramei.com/use-cases-og-image.jpg" />
        <meta property="og:site_name" content="Itramei" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://itramei.com/use-cases" />
        <meta property="twitter:title" content="Sales Training Use Cases | Onboarding, Coaching & Development | Itramei" />
        <meta property="twitter:description" content="Discover how Itramei solves key sales challenges: faster onboarding, consistent messaging, scalable coaching, and senior rep development with AI-powered training." />
        <meta property="twitter:image" content="https://itramei.com/use-cases-twitter-image.jpg" />
        
        {/* Additional important tags */}
        <meta name="author" content="Itramei - Sales Training Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://itramei.com/use-cases" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Sales Training Use Cases",
              "description": "Key use cases for Itramei's AI-powered sales training platform",
              "url": "https://itramei.com/use-cases",
              "numberOfItems": 4,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "HowTo",
                    "name": "Onboard Sales Reps Faster and Smarter",
                    "description": "Let new hires simulate real calls from day one. Itramei shortens ramp time by letting reps practice product messaging, discovery questions, and objection handling before they ever talk to a real prospect.",
                    "step": [
                      {
                        "@type": "HowToStep",
                        "text": "New hires practice with AI simulations from day one"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Shorten ramp time with targeted practice scenarios"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Build confidence before talking to real prospects"
                      }
                    ]
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "HowTo",
                    "name": "Reinforce New Messaging Across the Organization",
                    "description": "Launching a new product, value prop, or narrative? Use Itramei to create targeted scenarios and ensure every rep can confidently deliver the updated message – with consistency and precision.",
                    "step": [
                      {
                        "@type": "HowToStep",
                        "text": "Create targeted scenarios for new messaging"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Ensure consistent delivery across all reps"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Maintain precision in value proposition delivery"
                      }
                    ]
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "HowTo",
                    "name": "Scale Coaching Without Scaling Headcount",
                    "description": "Enablement and frontline managers can't be everywhere. Itramei gives every rep access to structured, high-quality practice and feedback 24/7 so training doesn't depend on availability or geography.",
                    "step": [
                      {
                        "@type": "HowToStep",
                        "text": "Provide 24/7 access to practice scenarios"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Deliver structured feedback without manager involvement"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Eliminate geographical constraints for training"
                      }
                    ]
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "HowTo",
                    "name": "Develop Senior Reps Through Targeted Coaching",
                    "description": "Top performers want to stay sharp. Itramei challenges experienced sellers with advanced simulations that stretch their skills and provides data-driven feedback for continuous growth.",
                    "step": [
                      {
                        "@type": "HowToStep",
                        "text": "Challenge top performers with advanced scenarios"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Provide data-driven feedback for skill development"
                      },
                      {
                        "@type": "HowToStep",
                        "text": "Support continuous growth for experienced sellers"
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sales Training Use Cases - Itramei",
              "description": "Discover how Itramei addresses key sales challenges through AI-powered training simulations",
              "url": "https://itramei.com/use-cases",
              "publisher": {
                "@type": "Organization",
                "name": "Itramei",
                "url": "https://itramei.com",
                "logo": "https://itramei.com",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61562944268204",
                  "https://www.linkedin.com/company/itramei/"
                ]
              }
            })
          }}
        />
      </Helmet>

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
    </>
  );
}