import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import itrameicon from '../img/Itrameicon.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 mt-22 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-br to-secondary rounded-lg flex items-center justify-center">
                <img src={itrameicon} alt="itramei icon" className="w-10 h-10 sm:w-8 sm:h-8" />
              </div>
              <span className="text-lg sm:text-lg font-bold text-foreground">Itramei</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Itramei. All rights reserved.
            </p>
          </div>

          {/* Policy */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">Policy</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=6ce288ef-d8d6-4a7e-bb9c-bcfe35c9aa13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm sm:text-base text-muted-foreground hover:text-primary cursor-pointer transition-colors leading-none"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Privacy Policy</span>
                </motion.a>
              </li>
            </ul>
          </div>

          {/* social media  */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">Socials</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="https://www.linkedin.com/company/itramei/" target="_blank"
                  className="inline-flex items-center space-x-2 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors leading-none"
                  whileHover={{ scale: 1.05 }}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>LinkedIn</span>
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start sm:items-center space-x-2 text-muted-foreground">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <a href="mailto:contact@itramei.com">
                  <span className="text-sm sm:text-base">contact@itramei.com</span>
                </a>
                  
              </li>
              <li className="flex items-start sm:items-center space-x-2 text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-sm sm:text-base">Dublin, Ireland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8  flex flex-col md:flex-row justify-between items-center">

        </div>
      </div>
    </footer>
  );
};

export default Footer;