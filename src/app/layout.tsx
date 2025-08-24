"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

// export const metadata: Metadata = {
//   title: "Itramei – Master Every Sales Call",
//   description: "Practice without risking revenue.",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
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