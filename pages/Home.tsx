import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import RWASection from '../components/RWASection';
import { STATS, CITIES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Group cities by region/country for display
  const countries = ['India', 'UAE', 'UK', 'USA'];
  
  return (
    <div className="flex flex-col min-h-screen bg-brand-lightbg dark:bg-brand-midnight text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover scale-105"
          >
            <source src="https://cdn.pixabay.com/video/2023/10/22/186175-877660723_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for Readability (Same for both modes as video needs contrast) */}
          <div className="absolute inset-0 bg-brand-midnight/60 dark:bg-brand-midnight/80 backdrop-blur-[2px]"></div>
          {/* Gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-lightbg dark:from-brand-midnight via-transparent to-brand-midnight/50"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md animate-fade-in">
            <span className="text-brand-yellow font-bold tracking-widest text-xs uppercase">Premium Real Estate Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight animate-slide-up tracking-tight shadow-xl">
            Invest in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-bright via-white to-brand-bright">
              Global Skylines
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-100 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up [animation-delay:200ms]">
            Exclusive access to <strong>12+ premium markets</strong> across India, UAE, UK, and USA.<br />
            AI-driven insights for the tech-savvy investors & developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up [animation-delay:400ms]">
            <Link 
              to="/contact" 
              className="bg-brand-orange hover:bg-brand-redorange text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,148,9,0.4)] hover:shadow-[0_0_50px_rgba(255,92,0,0.6)] hover:scale-105"
            >
              Start Investing
            </Link>
            <Link 
              to="/services" 
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:border-brand-bright/50"
            >
              Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Glassmorphism */}
      <section className="relative z-20 -mt-24 pb-20">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-white/10">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-bright transition-colors duration-300 drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 relative">
         <div className="absolute inset-0 bg-brand-lightsec dark:bg-brand-dark/50 skew-y-3 transform origin-top-left -z-10 transition-colors duration-300"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Global Investment Hotspots" 
            subtitle="Curated opportunities in the world's most resilient real estate markets."
          />

          <div className="space-y-24">
            {countries.map((country) => {
              const countryCities = CITIES.filter(c => c.region === country);
              if (countryCities.length === 0) return null;

              return (
                <div key={country} className="animate-fade-in">
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-3xl font-bold text-brand-bright">{country}</h3>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-brand-bright/50 to-transparent"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countryCities.map((city, index) => (
                      <div key={index} className="glass-card group relative rounded-2xl overflow-hidden h-[450px] transition-all duration-500 hover:-translate-y-2">
                        {/* Image */}
                        <div className="absolute inset-0 h-full w-full">
                           <img 
                            src={city.image} 
                            alt={city.name} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex gap-2 mb-3">
                               {city.tags.slice(0, 2).map(tag => (
                                 <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-brand-bright/20 border border-brand-bright/30 text-brand-bright px-2 py-1 rounded backdrop-blur-sm">
                                   {tag}
                                 </span>
                               ))}
                            </div>
                            <h4 className="text-3xl font-bold text-white mb-2">{city.name}</h4>
                            <p className="text-slate-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                              {city.description}
                            </p>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                              <div>
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Yield</div>
                                <div className="text-brand-yellow font-bold text-xl">{city.stats.yield}</div>
                              </div>
                              <div>
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Growth</div>
                                <div className="text-brand-redorange font-bold text-xl">{city.stats.growth}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Prop Split */}
      <section className="py-32 bg-white dark:bg-brand-dark relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-lightsec dark:bg-brand-deep/5 skew-x-12 transform origin-top transition-colors duration-300"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="Precision. Privacy. Profit." 
            subtitle="The only platform bridging the gap between developers and global capital."
          />
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* For Developers */}
            <div className="glass-card p-12 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-500">
              <div className="w-16 h-16 bg-brand-deep/20 rounded-2xl flex items-center justify-center mb-8 border border-brand-deep/30">
                <Building2 className="w-8 h-8 text-brand-deep dark:text-brand-bright" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">For Developers</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                Stop relying on local networks. Access our proprietary database of 180,000+ HNIs seeking assets in your specific geography.
              </p>
              <ul className="space-y-5 mb-10">
                {['AI-Driven Investor Matching', 'End-to-End Sales Lifecycle', 'Global Roadshows & Events'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-brand-bright mr-4 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-brand-deep dark:text-brand-bright font-bold hover:text-brand-bright dark:hover:text-white flex items-center text-lg tracking-wide transition-colors">
                Developer Services <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>

            {/* For Investors */}
            <div className="glass-card p-12 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-500">
              <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-8 border border-brand-orange/30">
                <CheckCircle2 className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">For Investors</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-lg">
                Your portfolio deserves better than random listings. Get curated, off-market opportunities vetted by our legal and financial teams.
              </p>
              <ul className="space-y-5 mb-10">
                {['Exclusive Pre-Launch Access', 'Zero-Conflict Advisory', 'Rental Management Solutions'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange mr-4 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-brand-orange font-bold hover:text-brand-redorange flex items-center text-lg tracking-wide transition-colors">
                Investor Services <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RWA Tokenization Section */}
      <RWASection />

      {/* Testimonials */}
      <section className="py-32 bg-brand-lightbg dark:bg-brand-midnight relative transition-colors duration-300">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Client Success" />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass-card p-10 rounded-2xl border-t border-slate-200 dark:border-white/10 hover:border-brand-yellow/50 transition-colors duration-300">
                <div className="text-brand-yellow text-6xl font-serif leading-none mb-6 opacity-50">"</div>
                <p className="text-slate-600 dark:text-slate-300 mb-8 italic min-h-[80px] text-lg font-light leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-deep to-brand-bright flex items-center justify-center font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{t.author}</div>
                    <div className="text-sm text-brand-bright">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep to-brand-dark"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">Your Portfolio Awaits</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the elite circle of investors and developers transforming the skyline.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-white text-brand-deep px-10 py-5 rounded-lg font-bold shadow-2xl hover:bg-slate-100 transition-transform hover:scale-105">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;