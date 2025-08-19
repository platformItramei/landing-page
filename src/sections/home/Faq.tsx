import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet";

const faqs = [
  {
    question: "What is Itramei and how does it support sales teams?",
    answer:
      "Itramei is an AI-powered sales simulation platform that helps enterprise teams master conversations before they go live. Reps practice real-world sales scenarios with lifelike AI buyers, it’s like a flight simulator, but for selling. Whether you're onboarding new hires, launching new messaging, or preparing for high-stakes meetings, Itramei gives your team a safe, scalable environment to build skills, consistency, and confidence.",
  },
  {
    question: "How is Itramei different from traditional sales training methods? ",
    answer:
      "Traditional training is passive: reps sit through slide decks, lectures, or one-off role-plays. Itramei flips that model. Reps actively engage in realistic sales simulations, speaking live with life like buyers, handling objections, and getting objective feedback. This immersive, hands-on approach drives faster learning, deeper retention, and real behavioral change. In short, Itramei makes sales training something reps actually remember and use.",
  },
  {
    question: "How realistic are Itramei’s video role-play simulations? ",
    answer:
      "Itramei’s simulations are built to feel just like real sales conversations. Our AI-powered personas speak naturally, respond dynamically, and challenge reps with objections and follow-up questions, all in real time. Every scenario is designed to mirror actual customer behavior, not a scripted playbook. The result: reps develop the confidence and agility they need for high-stakes meetings.",
  },
  {
    question: "What kind of coaching feedback does Itramei’s AI provide? ",
    answer:
      "Itramei’s AI delivers objective coaching after every simulation. It analyzes each conversation across 40+ key dimensions including objection handling, agenda-setting, and delivery tone. Reps receive clear, personalized feedback on what they did well and what to improve, with examples pulled directly from their own responses. Because the feedback loop is automated and consistent, every rep gets high-quality coaching, not just the top 10%. Managers can then focus on strategic development, while Itramei ensures no critical learning moments are missed.",
  },
  {
    question: "Can I customize the training scenarios to fit our business? ",
    answer:
      "Absolutely. Itramei gives you full control to create and tailor simulations around your specific products, buyers, and messaging. Whether you're rolling out a new narrative, launching into a new market, or reinforcing key skills, you can build scenarios that reflect the real conversations your team faces. This level of customization ensures every rep practices what matters and performs with confidence when it counts.",
  },
  {
    question: "Will Itramei work with our existing tools and data? ",
    answer:
      "Itramei is designed with integration in mind. While we don’t yet offer standard plug-and-play integrations, we work closely with each customer to configure the platform to their tech stack, content, and workflows. If there’s a system you rely on like CRM, LMS, or content repository, we’ll find a solution together. Our priority is making training seamless, relevant, and aligned with how your team already works.",
  },
  {
    question: "How does Itramei scale coaching across the team? ",
    answer:
      "Itramei democratizes coaching by automating it. Instead of relying on scarce manager time, every rep can train and be evaluated 24/7. The AI coach provides personalized, objective scoring (on things like tonality, empathy, etc.) This ensures all reps get feedback, not just the few who catch a manager’s attention. This scalability lets leaders maintain a consistent training experience across the whole organization, regardless of team size or location.",
  },
  {
    question: "What results or improvements can I expect with Itramei? ",
    answer:
      "Itramei is designed to accelerate skill development, increase rep confidence, and improve sales readiness before reps ever get in front of a live customer. Simulation-based training is proven to enhance retention and performance in high-stakes roles across industries. By allowing teams to practice, get feedback, and track progress, Itramei helps reps show up sharper, better prepared, and more consistent in critical sales conversations.",
  },
  {
    question: "How does Itramei accelerate sales onboarding? ",
    answer:
      "Itramei allows new reps to practice customer conversations before ever joining a live call. Instead of waiting for real pipeline, they can run through dozens of realistic sales scenarios handling objections, refining messaging, and building confidence in a safe environment. This simulation-based ramp-up helps reps internalize key skills faster, so they’re better prepared and more consistent from day one.",
  },
  {
    question: "How does Itramei ensure continuous improvement and progress tracking?",
    answer:
      "Itramei tracks skill development over time, helping both reps and leaders measure progress with clarity. Each team member receives monthly progress reports, highlighting strengths, areas for improvement, and trends across key performance dimensions. Admins get visibility into individual and team-level growth so coaching can be proactive, not reactive. As your messaging or market evolves, new scenarios can be added instantly to keep training aligned with real-world needs. It’s a continuous learning loop designed to drive consistent, long-term performance.",
  },
  {
    question: "How do I see Itramei in action or get started? ",
    answer:
      "Getting started is simple. Request a personalized demo to experience how Itramei works from live simulations to scenario creation, admin tools, and performance reporting. Our team will tailor the walkthrough to your use case and show how the platform fits your current workflows. A quick session is often all it takes to see how Itramei can accelerate onboarding, improve rep performance, and make coaching scalable across your team.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Helmet>
        {/* ✅ SEO Meta Tags */}
        <title>
          Top Roleplay & Communication Training Platform | Itramei FAQ
        </title>
        <meta
          name="description"
          content="Explore Itramei's AI-powered FAQ: one of the top roleplay and communication training platforms for sales teams. Learn how simulations, feedback, and onboarding accelerate performance."
        />
        <meta
          name="keywords"
          content="top communication websites, roleplay training, sales training, AI coaching, best sales platforms, Itramei roleplay"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Itramei – Top Roleplay & Communication Training Platform"
        />
        <meta
          property="og:description"
          content="Itramei is an AI-powered roleplay simulator for sales teams. Practice conversations, handle objections, and build communication skills faster than ever."
        />
        <meta property="og:url" content="https://www.itramei.com/faq" />
        <meta property="og:image" content="https://www.itramei.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Itramei – Roleplay & Communication Training Platform"
        />
        <meta
          name="twitter:description"
          content="Practice sales conversations with lifelike AI buyers. Learn how Itramei helps scale coaching, onboarding, and performance."
        />
        <meta
          name="twitter:image"
          content="https://www.itramei.com/og-image.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.itramei.com/faq" />

        {/* FAQ Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Helmet>

      <div className="pt-32 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div
            ref={ref}
            className={`scroll-reveal ${isVisible ? "revealed" : ""}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-bold text-center ">
              Frequently Asked Questions
            </h1>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/40 rounded-2xl overflow-hidden premium-shadow animate-fade-in-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl md:max-w-xl lg:max-w-xl font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="flex-shrink-0" size={24} />
                    ) : (
                      <ChevronDown className="flex-shrink-0" size={24} />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700/30 pt-4">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}