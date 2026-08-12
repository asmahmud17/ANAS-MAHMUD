import React, { useState } from 'react';
import { Video, Image, TrendingUp, Sparkles, Search } from 'lucide-react';
import { portfolioData, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Video & Editing', 'Graphic Design', 'Digital Marketing'];

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Video & Editing':
        return <Video className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Graphic Design':
        return <Image className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'Digital Marketing':
        return <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Developing':
        return 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/40 font-bold';
      case 'Learning':
        return 'bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-500/40 font-bold';
      case 'Beginner':
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 font-semibold';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 font-hind">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skill Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-hind text-slate-900 dark:text-white">
            Current Learning & Skill Capabilities
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Honest breakdown of my beginner, learning, and developing technical competencies across editing, design, and digital marketing.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all font-hind ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30 border border-purple-500/40'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/10 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-hind">
                        {skill.name}
                      </h3>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider border font-hind ${getLevelBadgeClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>

                  {skill.description && (
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-3">
                      {skill.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                  <span>{skill.category}</span>
                  <span className="text-purple-600 dark:text-purple-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    In Progress
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/50 rounded-3xl">
              <p className="text-slate-500 dark:text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs text-purple-600 dark:text-purple-400 font-bold underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
