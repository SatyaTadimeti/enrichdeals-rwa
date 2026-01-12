import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-brand-midnight/80 backdrop-blur-xl border-slate-200 dark:border-white/10 py-3 shadow-lg dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-brand-yellow">E</span>
                <span className="text-brand-orange">NRI</span>
                <span className="text-brand-yellow">CH</span>
                <span className="text-brand-bright font-light">DEALS</span>
              </span>
              <span className={`text-2xl font-light ${scrolled ? 'text-slate-300 dark:text-white/30' : 'text-white/30'}`}>|</span>
              <span className={`font-light text-lg tracking-wide ${scrolled ? 'text-slate-600 dark:text-white' : 'text-white'}`}>Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-brand-bright ${
                  location.pathname === link.path 
                    ? 'text-brand-bright scale-105' 
                    : scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-redorange text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,148,9,0.3)] hover:shadow-[0_0_25px_rgba(255,92,0,0.5)] transform hover:-translate-y-0.5 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                scrolled 
                  ? 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300' 
                  : 'bg-white/10 text-white'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-800 dark:text-white' : 'text-white'} hover:text-brand-orange p-2 transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-midnight border-b border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-brand-bright/10 text-brand-bright dark:bg-white/10'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-brand-midnight dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-brand-orange to-brand-redorange text-white px-4 py-4 rounded-lg font-bold shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;