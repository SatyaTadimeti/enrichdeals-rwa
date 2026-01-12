import React, { useState } from 'react';
import { CITIES } from '../constants';
import { MapPin, TrendingUp, Wallet, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Locations: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div className="pt-20 bg-brand-lightbg dark:bg-brand-midnight min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-lightsec dark:bg-brand-deep/20 z-0 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Our Global Footprint</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We operate across 12+ high-growth real estate markets, combining global standards with local expertise.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white dark:bg-brand-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20">
            {CITIES.map((city, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} glass-card rounded-3xl overflow-hidden`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
                  <img 
                    src={city.image} 
                    alt={city.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                     <div className="flex gap-2 flex-wrap">
                        {city.tags.map(tag => (
                          <span key={tag} className="bg-black/60 backdrop-blur-md text-brand-bright px-4 py-2 rounded-full text-xs font-bold border border-white/10 uppercase tracking-wide">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative">
                  
                  {/* Info Icon & Tooltip */}
                  <div className="absolute top-8 right-8 z-20">
                    <button
                      onMouseEnter={() => setActiveTooltip(index)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => setActiveTooltip(activeTooltip === index ? null : index)}
                      className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 text-brand-deep dark:text-brand-bright flex items-center justify-center hover:bg-brand-bright hover:text-white transition-all duration-300 shadow-lg"
                      aria-label="City Factoid"
                    >
                      <Info size={20} />
                    </button>
                    
                    {/* Tooltip */}
                    <div className={`absolute right-0 mt-3 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl z-30 transform transition-all duration-300 origin-top-right ${activeTooltip === index ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2">Did You Know?</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {city.factoid}
                      </p>
                      {/* Arrow */}
                      <div className="absolute top-0 right-3 -mt-2 w-4 h-4 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-700 transform rotate-45"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">
                    <MapPin size={16} /> {city.region}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">{city.name}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed">
                    {city.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-2 uppercase tracking-wide">
                        <Wallet size={16} /> Rental Yield
                      </div>
                      <div className="text-3xl font-bold text-brand-yellow">{city.stats.yield}</div>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-2 uppercase tracking-wide">
                        <TrendingUp size={16} /> Growth
                      </div>
                      <div className="text-3xl font-bold text-brand-redorange">{city.stats.growth}</div>
                    </div>
                  </div>

                  <Link 
                    to="/contact"
                    className="self-start px-8 py-4 bg-brand-deep text-white rounded-xl font-bold hover:bg-brand-bright transition-colors shadow-lg hover:shadow-brand-bright/25"
                  >
                    Invest in {city.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;