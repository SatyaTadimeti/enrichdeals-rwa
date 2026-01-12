import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [userType, setUserType] = useState('investor');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our AI agent has received your request and a specialist will contact you shortly.");
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-lightbg dark:bg-brand-midnight text-slate-900 dark:text-white transition-colors duration-300">
      <div className="py-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-bright/10 dark:bg-brand-deep/20 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h1>
        <p className="text-slate-600 dark:text-slate-300 text-xl">Start your real estate journey today.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">We are here to help</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg leading-relaxed">
              Whether you're a developer seeking to scale or an investor building wealth, EnrichDeals is ready to partner with you.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-brand-orange/10 dark:bg-brand-orange/20 p-4 rounded-xl mr-6 border border-brand-orange/20 dark:border-brand-orange/30">
                  <MapPin className="text-brand-orange w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-1">Headquarters</h4>
                  <p className="text-slate-600 dark:text-slate-400">Koramangala, Bangalore, India</p>
                  <p className="text-slate-500 text-sm mt-1">Regional offices in Dubai, London, SF</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-bright/10 dark:bg-brand-bright/20 p-4 rounded-xl mr-6 border border-brand-bright/20 dark:border-brand-bright/30">
                  <Mail className="text-brand-bright w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">hello@enrichdeals.com</p>
                  <p className="text-slate-500 text-sm mt-1">24-48 hour response time</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-yellow/10 dark:bg-brand-yellow/20 p-4 rounded-xl mr-6 border border-brand-yellow/20 dark:border-brand-yellow/30">
                  <Phone className="text-brand-yellow w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400 block">USA: +1 949 878 5242</p>
                  <p className="text-slate-600 dark:text-slate-400 block">India: +91 99400 40040</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Sat, 9 AM - 7 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card rounded-3xl p-10 border border-slate-200 dark:border-white/10 shadow-2xl">
            <div className="flex mb-10 bg-slate-100 dark:bg-brand-dark p-1.5 rounded-xl border border-slate-200 dark:border-white/5">
              <button
                type="button"
                onClick={() => setUserType('investor')}
                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${userType === 'investor' ? 'bg-brand-orange text-white shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                I'm an Investor
              </button>
              <button
                type="button"
                onClick={() => setUserType('developer')}
                className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${userType === 'developer' ? 'bg-brand-deep text-white shadow-lg' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
              >
                I'm a Developer
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all" />
              </div>

              {userType === 'investor' ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white transition-all appearance-none">
                    <option>Select Budget</option>
                    <option>₹50L - ₹2Cr</option>
                    <option>₹2Cr - ₹10Cr</option>
                    <option>₹10Cr+</option>
                  </select>
                </div>
              ) : (
                 <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white transition-all appearance-none">
                    <option>Select Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Mixed Use</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-white dark:bg-brand-midnight border border-slate-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-brand-orange to-brand-redorange hover:from-brand-redorange hover:to-brand-orange text-white font-bold py-4 rounded-xl transition-all shadow-lg transform hover:scale-[1.02]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;