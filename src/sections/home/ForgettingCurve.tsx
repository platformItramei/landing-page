import { useScrollAnimation } from "@/hooks/use-mobile";
import { useCounterAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {Helmet} from "react-helmet"; 

export default function ForgettingCurve() {
  const { ref, isVisible } = useScrollAnimation();
  const knowledgeLost = useCounterAnimation(84, isVisible, 2000);
  const adoptionRate = useCounterAnimation(90, isVisible, 2500);

  return (
    <>
      <Helmet>
        <title>Ebbinghaus Forgetting Curve | Sales Training Retention Solutions | Itramei</title>
        <meta name="description" content="Combat the Ebbinghaus Forgetting Curve with Itramei's sales training platform. 84% of knowledge is lost in just 7 days without proper reinforcement." />
        <meta name="keywords" content="Ebbinghaus forgetting curve, sales training retention, knowledge retention, sales training effectiveness, training reinforcement, memory retention, sales skills retention, training ROI" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itramei.com/forgetting-curve" />
        <meta property="og:title" content="Combat the Ebbinghaus Forgetting Curve | Itramei Sales Training" />
        <meta property="og:description" content="84% of sales training knowledge is lost in 7 days without reinforcement. Itramei helps sales teams retain critical skills through AI-powered practice." />
        <meta property="og:image" content="https://itramei.com/forgetting-curve-og-image.jpg" />
        <meta property="og:site_name" content="Itramei" />
        
        <meta name="author" content="Itramei - Sales Training Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://itramei.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Ebbinghaus Forgetting Curve in Sales Training",
              "description": "Understanding and combating the Ebbinghaus Forgetting Curve in sales training with Itramei's reinforcement platform and how Itramei help teams retain critical skills through AI-powered practice.",
              "url": "https://itramei.com",
              "publisher": {
                "@type": "Organization",
                "name": "Itramei",
                "url": "https://itramei.com",
                "logo": "https://itramei.com/logo.png",
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61562944268204",
                  "https://www.linkedin.com/company/itramei/"
                ]
              }
            })
          }}
        />
      
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://itramei.com/forgetting-curve"
              },
              "headline": "The Ebbinghaus Forgetting Curve in Sales Training",
              "description": "84% of sales training knowledge is lost within 7 days without proper reinforcement. Learn how Itramei combats this phenomenon.",
              "author": {
                "@type": "Organization",
                "name": "Itramei Research Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Itramei",
              },
              "datePublished": "2024-01-01T08:00:00+08:00",
              "dateModified": "2024-01-15T09:00:00+08:00"
            })
          }}
        />
      </Helmet>

      <section className="" id="features">
        <div className="">
          <div
            ref={ref}
            className={`from-gray-900/50 to-gray-800/30 backdrop-blur-sm border-gray-700/30 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 premium-shadow scroll-reveal ${isVisible ? "revealed" : ""
              }`}
          >
            {/* Statistics */}
            <div className="text-center">
              <div className="animate-fade-in-scale" style={{ animationDelay: "2.5s" }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-2 sm:mb-3 md:mb-4 counter-animation">
                  {knowledgeLost}%
                </div>
                <div className="text-gray-400 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Knowledge lost in 7 days</div>
              </div>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <div className="relative">
                {/* Main timeline bar */}
                <div className="w-full h-2 sm:h-3 md:h-4 bg-gray-800 rounded-full relative overflow-hidden">
                  <div
                    className={`timeline-fill ${isVisible ? "animate" : ""}`}
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Timeline markers */}
                <div className="flex justify-between items-center mt-4 sm:mt-6 md:mt-8">
                  {[
                    { time: "20 min", retention: "40%", position: "0%" },
                    { time: "1 hour", retention: "55%", position: "25%" },
                    { time: "24 hours", retention: "68%", position: "50%" },
                    { time: "2 day", retention: "75%", position: "75%" },
                    { time: "1 Week", retention: "84%", position: "100%" }
                  ].map((marker, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center animate-fade-in-scale"
                      style={{ animationDelay: `${1.5 + index * 0.2}s` }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mb-2 sm:mb-3 md:mb-4 shadow-lg"></div>
                      <div className="text-center">
                        <div className="font-semibold text-white text-xs sm:text-sm">{marker.time}</div>
                        <div className="text-xs text-gray-400">~{marker.retention} Lost</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={() => {
                document.getElementById("request-demo-form")?.scrollIntoView({behavior: "auto",block: "start",});
              }} className="text-white px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-lg md:rounded-xl micro-interaction premium-shadow"
                style={{background: "linear-gradient(125deg,rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6)" }}>
                See Itramei in Action
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}