import React from 'react';
import { BookOpen, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { learningExperience, learningAreas } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 font-hind">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Learning Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-hind text-slate-900 dark:text-white">
            {learningExperience.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            My structured course progression and hands-on skill development journey in video editing, graphic design, and digital marketing.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Institute Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-600 dark:text-purple-400 shrink-0 mt-1">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30 text-[10px] font-extrabold uppercase tracking-widest font-hind">
                      Ongoing Course
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-hind">
                    {learningExperience.institute}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-bold mt-0.5 font-hind">
                    {learningExperience.location}
                  </p>
                </div>
              </div>

              <div className="self-start sm:self-auto px-4 py-2 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 font-hind">
                {learningExperience.period}
              </div>
            </div>

            {/* Content Paragraph */}
            <div className="py-6 border-b border-slate-200 dark:border-slate-800">
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {learningExperience.description}
              </p>
            </div>

            {/* Course Curriculum & Exercises */}
            <div className="pt-6">
              <h4 className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 font-hind">
                Practical Course Highlights & Key Learning Milestones:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {learningExperience.highlights.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 rounded-2xl flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-bold leading-relaxed font-hind">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Core Learning Focus Areas Grid */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2 font-hind">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Core Competency Development Areas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {learningAreas.map((area, idx) => (
                <div 
                  key={idx} 
                  className="p-3 bg-purple-500/5 dark:bg-purple-950/30 border border-purple-500/20 rounded-xl flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 font-hind"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
