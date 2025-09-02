import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Script from "next/script";

const GTM_ID = "GTM-NQ8CBNMN";

export const metadata: Metadata = {
  title: "Itramei – Master Every Sales Call",
  description: "Practice without risking revenue.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#0A84FF", 
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        
        {/* Termly Resource Blocker Script */}
        <Script
          id="termly-script"
          src="https://app.termly.io/resource-blocker/ea0c6fff-69e1-4064-bb45-66e5df41d0b5?autoBlock=on"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-gray-950 text-white">
        {/* GTM Noscript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}