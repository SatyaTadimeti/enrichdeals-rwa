import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = true // Default to light text for dark mode (deprecated prop logic but kept for interface compat, we use classes now)
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight transition-colors">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} text-slate-600 dark:text-slate-300 transition-colors`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-24 bg-gradient-to-r from-brand-yellow to-brand-redorange rounded-full ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;