import React from 'react';
import { ArrowUp, Youtube, Facebook, Instagram, Linkedin, Shield, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface Props {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 py-12 text-xs text-slate-600 dark:text-slate-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <a href="#home" className="flex items-center gap-2.5 text-slate-900 dark:text-white font-extrabold tracking-tight uppercase font-display text-base">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-md">
                {personal.initials}
              </div>
              <span>{personal.fullName}</span>
            </a>
            <p className="text-xs text-purple-600 dark:text-purple-400 font-extrabold max-w-md font-hind">
              {personal.headline}
            </p>
            <p className="text-[11px] text-slate-500">
              {personal.location}
            </p>
          </div>

          {/* Social Media Inactive Placeholders */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 font-hind">
              Social Profiles (Placeholder)
            </span>
            <div className="flex items-center gap-3">
              <div 
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 opacity-60 cursor-not-allowed group relative"
                title="YouTube link will be updated soon"
              >
                <Youtube className="w-4 h-4" />
              </div>
              <div 
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 opacity-60 cursor-not-allowed group relative"
                title="Facebook link will be updated soon"
              >
                <Facebook className="w-4 h-4" />
              </div>
              <div 
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 opacity-60 cursor-not-allowed group relative"
                title="Instagram link will be updated soon"
              >
                <Instagram className="w-4 h-4" />
              </div>
              <div 
                className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 opacity-60 cursor-not-allowed group relative"
                title="LinkedIn link will be updated soon"
              >
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Action Links & Scroll Top */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact"
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              Contact Me
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white dark:bg-slate-900 hover:bg-purple-600 hover:text-white text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Legal Links & Copyright Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 font-medium"
            >
              <Shield className="w-3 h-3" />
              <span>Privacy Policy</span>
            </button>

            <span className="text-slate-300 dark:text-slate-800">•</span>

            <button
              onClick={onOpenTerms}
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1 font-medium"
            >
              <FileText className="w-3 h-3" />
              <span>Terms and Conditions</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
