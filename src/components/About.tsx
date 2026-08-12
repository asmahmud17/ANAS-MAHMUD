import React from 'react';
import { User, Sparkles, MapPin, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 font-hind">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-hind text-slate-900 dark:text-white">
            Aspiring Creative & Skill Development Student
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            A look into my background, ongoing studies in Dhaka, Bangladesh, and my passion for video editing and visual design.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl relative">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                My Learning Journey
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.aboutParagraph1}
              </p>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.aboutParagraph2}
              </p>

              <div className="p-4 bg-purple-500/5 dark:bg-purple-950/40 border border-purple-500/20 rounded-2xl flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                <Compass className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Focusing on honest skill building: mastering cut techniques, graphic compositions, color palettes, and digital promotion basics.
                </p>
              </div>
            </div>

            {/* Mindset Card */}
            <div className="bg-gradient-to-r from-purple-900/20 via-slate-900/40 to-purple-900/20 border border-purple-500/20 rounded-3xl p-6 sm:p-8 space-y-3 shadow-xl">
              <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest block font-hind">
                Learner's Commitment
              </span>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-hind">Practical Practice & Continuous Growth</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                I believe in steady improvement through hands-on exercises. By completing assignments at As-Sunnah Skill Development Institute, I am actively building a solid foundation in creative multimedia.
              </p>
            </div>

          </div>

          {/* Right Column: Short Info Card (Prompt Required Specs) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-hind">
                    Information Profile
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-extrabold font-hind">
                    Verified Student Details
                  </p>
                </div>
                <div className="p-2.5 bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400">
                  <User className="w-5 h-5" />
                </div>
              </div>

              {/* Key Value Pairs Card */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-center justify-between">
                  <span className="font-bold text-slate-500 dark:text-slate-400">Name</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{personal.fullName}</span>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-center justify-between">
                  <span className="font-bold text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-500" />
                    {personal.location}
                  </span>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-center justify-between">
                  <span className="font-bold text-slate-500 dark:text-slate-400">Current Role</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{personal.status}</span>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex flex-col gap-1">
                  <span className="font-bold text-slate-500 dark:text-slate-400">Course</span>
                  <span className="font-extrabold text-purple-600 dark:text-purple-300">{personal.course}</span>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex flex-col gap-1">
                  <span className="font-bold text-slate-500 dark:text-slate-400">Institute</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">{personal.institute}</span>
                </div>

                <div className="p-3.5 bg-purple-500/10 dark:bg-purple-950/60 border border-purple-500/30 rounded-2xl flex items-center justify-between">
                  <span className="font-bold text-purple-700 dark:text-purple-300">Experience Level</span>
                  <span className="px-3 py-1 bg-purple-600 text-white font-extrabold rounded-full text-xs uppercase tracking-wider">
                    {personal.experienceLevel}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
