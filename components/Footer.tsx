import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-brand-midnight text-slate-600 dark:text-slate-400 pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold">
                  <span className="text-brand-yellow">E</span>
                  <span className="text-brand-orange">NRI</span>
                  <span className="text-brand-yellow">CH</span>
                  <span className="text-brand-bright font-light">DEALS</span>
                </span>
                <span className="text-slate-400 dark:text-white/30 text-xl font-light">|</span>
                <span className="text-slate-800 dark:text-white font-light text-base tracking-wide">Real Estate</span>
              </div>
            </Link>
            <p className="mb-8 leading-relaxed">
              Bridging global capital with local opportunity. We connect visionary developers with affluent investors through AI-powered intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-deep hover:text-white dark:hover:bg-brand-deep dark:hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-redorange hover:text-white dark:hover:bg-brand-redorange dark:hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-brand-bright hover:text-white dark:hover:bg-brand-bright dark:hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/50 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-all"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="hover:text-brand-bright transition-colors">For Developers</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition-colors">For Investors</Link></li>
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">Locations</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-bright transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">Key Markets</h3>
            <ul className="space-y-4">
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">Bangalore, India</Link></li>
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">Dubai, UAE</Link></li>
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">London, UK</Link></li>
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">San Francisco, USA</Link></li>
              <li><Link to="/locations" className="hover:text-brand-bright transition-colors">Hyderabad, India</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-brand-orange shrink-0 mt-0.5" />
                <span>Koramangala, Bangalore<br />Karnataka, India</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-brand-orange shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span>USA: +1 949 878 5242</span>
                  <span>Ind: +91 99400 40040</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-brand-orange shrink-0" />
                <span>hello@enrichdeals.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} EnrichDeals. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-midnight dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-midnight dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;