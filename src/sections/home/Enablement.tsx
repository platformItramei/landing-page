import { useScrollAnimation } from "@/hooks/use-mobile";
import ForgettingCurve from "./ForgettingCurve";

// If using Next.js:
import Head from "next/head";;

export default function Enablement() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        {/* <title>Itramei | Best AI Sales Roleplay & Communication Enablement Platform</title> */}
        <meta
          name="description"
          content="Itramei is the #1 AI-powered sales roleplay and communication enablement platform. Practice life-like simulations, improve adoption, and make learning stick."
        />
        <meta
          name="keywords"
          content="AI sales roleplay, sales enablement, communication platform, forgetting curve, sales training, onboarding, adoption, Itramei"
        />
        <meta name="author" content="Itramei" />

        <meta name="geo.region" content="IE" />
        <meta name="geo.placename" content="Dublin" />
        <meta name="geo.position" content="53.3331;-6.2489" />
        <meta name="ICBM" content="53.3331, -6.2489" />

        <meta property="og:title" content="Itramei | Best AI Sales Roleplay & Communication Platform" />
        <meta
          property="og:description"
          content="Turn theory into action with Itramei. AI-powered simulations that beat the forgetting curve and ensure sales adoption success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itramei.com" />
        <meta property="og:image" content="https://www.itramei.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Itramei" />
        <meta property="og:locale" content="en_IE" />
        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=61562944268204" />

        <link rel="canonical" href="https://www.itramei.com/enablement" />

        <link rel="me" href="https://www.facebook.com/profile.php?id=61562944268204" />
        <link rel="me" href="https://www.linkedin.com/company/itramei/" />
      </Head>

      <section className="min-h-screen bg-gray-950 flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 md:px-8">
        <div
          ref={ref}
          className={`max-w-7xl mx-auto text-center scroll-reveal ${
            isVisible ? "revealed" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
            What Is Your Enablement Effort Worth Without Adoption?
          </h1>
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              According to the forgetting curve, 84% of new knowledge is lost
              within seven days if it's not revisited. That means that your best
              workshops, messaging rollouts, and onboarding programs are wasted
              if not effectively implemented.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="font-semibold">Itramei</span> turns theory into
              action through repeated, life-like simulations that make learning
              stick.
            </p>
            <div className="px-2 sm:px-4 md:px-8">
              <ForgettingCurve />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}