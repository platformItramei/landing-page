import { useScrollAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  SiHubspot, SiSalesforce, SiZoho, SiSlack, SiZoom, SiZapier, 
  SiGooglemeet, SiZendesk, SiGmail, SiMarketo, SiMailchimp, 
  SiGooglecalendar, SiCalendly, SiLooker
} from "react-icons/si";
import { motion } from "framer-motion";

const integrations = [
  { name: "HubSpot", icon: SiHubspot, color: "text-orange-500" },
  { name: "Salesforce", icon: SiSalesforce, color: "text-blue-500" },
  { name: "Zoho CRM", icon: SiZoho, color: "text-blue-600" },
  { name: "Slack", icon: SiSlack, color: "text-blue-500" },
  { name: "Zoom", icon: SiZoom, color: "text-blue-400" },
  { name: "Google Meet", icon: SiGooglemeet, color: "text-green-500" },
  { name: "Zapier", icon: SiZapier, color: "text-orange-600" },
  { name: "Zendesk", icon: SiZendesk, color: "text-teal-500" },
  { name: "Gmail", icon: SiGmail, color: "text-red-500" },
  { name: "Google Calendar", icon: SiGooglecalendar, color: "text-red-400" },
  { name: "Marketo", icon: SiMarketo, color: "text-purple-600" },
  { name: "Mailchimp", icon: SiMailchimp, color: "text-yellow-500" },
  { name: "Looker", icon: SiLooker, color: "text-purple-400" },
  { name: "Calendly", icon: SiCalendly, color: "text-blue-700" },
];

export default function Integrations() {
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                Flexible Integrations
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We work closely with customers to connect Itramei to the tools they already use. Tell us what you need to integrate with and we'll make it happen.
              </p>
            </motion.div>

            {/* Logo Band */}
            <div className="mb-12 sm:mb-16 md:mb-20 overflow-hidden relative">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
              
              <div 
                className="flex space-x-4 sm:space-x-6 md:space-x-8 w-max"
                style={{
                  animation: "scroll-horizontal 60s linear infinite",
                  animationFillMode: "forwards",
                  animationIterationCount: "infinite"
                }}
              >
                {[...integrations, ...integrations, ...integrations].map((integration, index) => {
                  const Icon = integration.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-800/60 border border-gray-700/40 min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
                    >
                      <Icon className={`${integration.color} mb-2 sm:mb-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10`} />
                      <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                        {integration.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 premium-shadow mb-8 sm:mb-12"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6">
                Ready to Connect Your Stack?
              </h2>
              <div className="flex justify-center">
                <Button 
                  onClick={() => {
                    document.getElementById("request-demo-form")?.scrollIntoView({
                      behavior: "auto",
                      block: "start",
                    });
                  }}
                  className="text-white px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl micro-interaction premium-shadow"
                  style={{background: "linear-gradient(125deg,rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6)"}}
                >
                  Schedule Integration Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </div>
  );
}