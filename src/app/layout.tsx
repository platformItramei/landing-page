import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Script from "next/script"; // Import Next.js Script component

// Define GTM_ID here or in your environment variables
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

function GTMNoscript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-NQ8CBNMN`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NQ8CBNMN');
            `,
          }}
        />
      </head>
      <body className="bg-gray-950 text-white">
        <GTMNoscript />
        
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </QueryClientProvider>
        
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-NQ8CBNMN');
            `,
          }}
        />
      </body>
    </html>
  );
}