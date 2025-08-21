import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import itrameicon from '../img/Itrameicon.png';
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br to-secondary rounded-lg flex items-center justify-center cursor-pointer">
              <img
                onClick={() => {
                  setLocation("/");
                  document.getElementById("hero-section")?.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                src={itrameicon}
                alt="itramei icon"
                className="w-12 h-12 sm:w-8 sm:h-8 md:w-10 md:h-10"
              />
            </div>

            <span
              onClick={() => {
                setLocation("/");
                document.getElementById("hero-section")?.scrollIntoView({
                  behavior: "auto",
                  block: "start",
                });
              }}
              className="text-lg sm:text-xl font-bold text-foreground cursor-pointer"
            >
              Itramei
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
            <motion.button
              onClick={() => setLocation("/blogs")}
              className="px-4 py-1.5 sm:px-5 sm:py-2 text-primary-foreground rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              Blogs
            </motion.button>

            <motion.button
              onClick={() => window.open('https://www.itramei.ai/', '_blank')}
              className="px-4 py-1.5 sm:px-5 sm:py-2 border-2 border-blue-500 text-primary-foreground rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>

            <motion.button
              onClick={() => {
                document
                  .getElementById("request-demo-form")
                  ?.scrollIntoView({ behavior: "auto", block: "start" });
              }}
              className="px-4 py-1.5 sm:px-5 sm:py-2 text-primary-foreground rounded-lg font-medium sm:font-semibold text-sm sm:text-base hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(125deg, rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6))",
              }}
              whileHover={{ scale: 1.05 }}
            >
              Request Demo
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="py-4 px-4 space-y-4">
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setLocation("/blogs");
                  }}
                  className="w-full py-3 text-sm sm:text-base"
                  variant="outline"
                >
                  Blogs
                </Button>

                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://www.itramei.ai/', '_blank');
                  }}
                  className="w-full py-3 text-sm sm:text-base"
                  variant="outline"
                >
                  Login
                </Button>

                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .getElementById("request-demo-form")
                      ?.scrollIntoView({ behavior: "auto", block: "start" });
                  }}
                  className="w-full py-3 text-sm sm:text-base"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(35, 195, 255, 1), rgba(0, 128, 255, 0.6))",
                  }}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
