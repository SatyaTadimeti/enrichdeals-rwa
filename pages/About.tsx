import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-lightbg dark:bg-brand-midnight min-h-screen text-slate-900 dark:text-white transition-colors duration-300">
      <div className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-lightsec dark:bg-brand-deep/10 transition-colors duration-300"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">About EnrichDeals</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Bridging Global Capital with Local Opportunity through AI Innovation.
          </p>
        </div>
      </div>

      <div className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Mission" alignment="left" />
          <div className="prose prose-lg text-slate-600 dark:text-slate-300">
            <p className="mb-6 leading-relaxed">
              EnrichDeals was founded on a simple insight: Real estate transactions fail not from lack of supply or demand, but from inefficient matchmaking. Developers struggle to reach qualified international buyers. Investors waste months sifting through mismatched properties.
            </p>
            <p className="mb-6 leading-relaxed">
              We solve both problems with a hybrid model that combines cutting-edge AI profiling with boots-on-the-ground service.
            </p>
            <p className="leading-relaxed">
              Our mission is to democratize access to premium real estate opportunities while providing developers with the marketing firepower and investor networks traditionally available only to large corporations.
            </p>
          </div>

          <div className="mt-24">
            <SectionTitle title="The Hybrid Advantage" alignment="left" />
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="glass-card p-8 rounded-2xl border-t-4 border-brand-bright">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI Efficiency</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Automated property matching, market analytics, and campaign optimization analyzing thousands of data points.</p>
              </div>
              <div className="glass-card p-8 rounded-2xl border-t-4 border-brand-orange">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Human Expertise</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">On-ground site visits, face-to-face negotiations, and relationship management by local market experts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;