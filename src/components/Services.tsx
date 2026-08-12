import React from 'react';
import { Video, Film, Image, Layout, Share2, Sparkles, TrendingUp, Target, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { services, servicesDisclaimer } = portfolioData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-purple-400" />;
      case 'Image':
        return <Image className="w-6 h-6 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-3 font-hind">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-hind text-slate-900 dark:text-white">
            Services & Learning Capabilities
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
            Practical creative services and project assistance I offer as an aspiring video editor, graphic designer, and digital marketing learner.
          </p>
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-10 p-4 sm:p-5 bg-purple-950/30 dark:bg-purple-950/40 border border-purple-500/30 rounded-2xl flex items-start gap-3.5 text-xs sm:text-sm text-purple-200 shadow-lg">
          <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold uppercase tracking-wider text-[11px] text-purple-300 block mb-0.5 font-hind">Professional Disclosure</span>
            <p className="leading-relaxed font-medium">
              {servicesDisclaimer}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-purple-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 font-hind">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-hind">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Status footer tag */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-purple-600 dark:text-purple-400">
                <span>Entry Level</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Learning
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action card */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/20 via-slate-900/50 to-purple-900/20 border border-purple-500/20 rounded-3xl p-8 shadow-xl">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-2 font-hind">
            Interested in collaborating on a practice project or task?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
            I am eager to apply my learning, complete assignments, and assist with beginner editing or design requests.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-900/40"
          >
            Contact Anas Mahmud
          </a>
        </div>

      </div>
    </section>
  );
};
