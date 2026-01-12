import React, { useState } from 'react';
import { DEVELOPER_SERVICES, INVESTOR_SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'developer' | 'investor'>('developer');

  const activeServices = activeTab === 'developer' ? DEVELOPER_SERVICES : INVESTOR_SERVICES;

  return (
    <div className="pt-20 bg-brand-lightbg dark:bg-brand-midnight min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-lightsec dark:bg-brand-deep/30 dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] dark:from-brand-deep/30 dark:to-brand-midnight transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">World-Class Services</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            AI-powered marketing for developers. Intelligent wealth creation for investors.
            Choose your path below.
          </p>
        </div>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="glass-card rounded-2xl p-2 max-w-md mx-auto flex bg-white dark:bg-transparent">
          <button
            onClick={() => setActiveTab('developer')}
            className={`flex-1 py-4 px-6 rounded-xl text-sm font-bold tracking-wide transition-all ${
              activeTab === 'developer'
                ? 'bg-brand-deep text-white shadow-lg'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            For Developers
          </button>
          <button
            onClick={() => setActiveTab('investor')}
            className={`flex-1 py-4 px-6 rounded-xl text-sm font-bold tracking-wide transition-all ${
              activeTab === 'investor'
                ? 'bg-brand-orange text-white shadow-lg'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            For Investors
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              {activeTab === 'developer' ? 'Scale Faster, Sell Smarter' : 'Find Your Perfect Investment'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              {activeTab === 'developer' 
                ? 'From land identification to 3D virtual tours and global investor targeting.' 
                : 'Access 20,000+ listings and off-market opportunities with expert guidance.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activeServices.map((service, index) => (
              <div key={index} className="glass-card p-10 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 group border border-slate-200 dark:border-white/5 hover:border-brand-bright/30">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${activeTab === 'developer' ? 'bg-brand-deep/10 text-brand-deep dark:bg-brand-deep/20 dark:text-brand-bright' : 'bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20'}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${activeTab === 'developer' ? 'bg-brand-deep/10 text-brand-deep dark:bg-brand-deep/30 dark:text-brand-bright' : 'bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/30'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
             <div className="bg-gradient-to-r from-brand-deep to-brand-midnight rounded-3xl p-16 relative overflow-hidden border border-white/10">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white mb-8">
                    {activeTab === 'developer' ? 'Ready to Launch Your Project?' : 'Start Your Investment Journey'}
                  </h3>
                  <Link 
                    to="/contact"
                    className={`inline-block px-10 py-5 rounded-full font-bold text-white transition-transform hover:scale-105 shadow-xl ${
                      activeTab === 'developer' ? 'bg-brand-bright hover:bg-blue-400' : 'bg-brand-orange hover:bg-brand-redorange'
                    }`}
                  >
                    Get a Free Consultation
                  </Link>
                </div>
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-bright/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;