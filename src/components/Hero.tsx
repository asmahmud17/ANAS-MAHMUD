import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle Purple Ambient Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Avatar Visual & Student Profile Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-2xl group transition-all hover:border-purple-500/40">
              
              {/* Status Indicator Badge */}
              <div className="w-full mb-4 flex items-center justify-center">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider font-hind">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span>{personal.status}</span>
                </div>
              </div>

              {/* Profile Image with Modern Circular/Rounded Frame & Purple Glow */}
              <div className="relative my-4 group/avatar">
                {/* Purple Glow Ring Background */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-600 rounded-full blur-md opacity-70 group-hover/avatar:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-slate-950 border-2 border-purple-500/40 overflow-hidden shadow-2xl flex items-center justify-center">
                  {personal.profileImage && !imageError ? (
                    <img 
                      src={personal.profileImage} 
                      alt="Anas Mahmud - Video Editing, Graphic Design & Digital Marketing Learner"
                      className="w-full h-full object-cover rounded-full group-hover/avatar:scale-105 transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Fallback Initials Display ONLY rendered if image fails */
                    <div className="flex flex-col items-center justify-center w-full h-full bg-slate-900 text-white rounded-full">
                      <span className="text-4xl font-extrabold tracking-widest font-display text-purple-400">
                        {personal.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name & Role Details */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 font-display">
                {personal.fullName}
              </h1>
              
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4 bg-slate-100 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>{personal.location}</span>
              </div>

              {/* Course Info Badge */}
              <div className="w-full p-3 bg-purple-500/5 dark:bg-purple-950/40 border border-purple-500/20 rounded-2xl text-left text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400 font-hind">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Current Course:</span>
                </div>
                <p className="font-bold text-slate-900 dark:text-slate-200 font-hind">
                  {personal.course}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-hind">
                  {personal.institute}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Hero Headline, Bio & Primary Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              
              <div>
                {/* Decorative Sparkle Label */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-extrabold uppercase tracking-widest mb-6 font-hind">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>Aspiring Creative Professional</span>
                </div>

                {/* Main Headline (Exact Prompt Specification) */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6 font-hind">
                  {personal.headline}
                </h2>

                {/* Supporting Paragraph (Exact Prompt Specification) */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {personal.shortBio}
                </p>

                {/* Learning Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800 mb-8">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 font-hind">
                    <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span className="font-hind">Video Editing & Motion Basics</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 font-hind">
                    <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span className="font-hind">Poster & Thumbnail Graphic Design</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 font-hind">
                    <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span className="font-hind">Basic Meta & Digital Marketing</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 font-hind">
                    <div className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 font-bold">✓</div>
                    <span className="font-hind">Adobe Premiere & Photoshop</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Exact Prompt Specifications: "Contact Me" & "View Skills") */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-900/40 text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>

                <a 
                  href="#skills" 
                  className="w-full sm:w-auto bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-300 px-8 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
                >
                  View Skills
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
