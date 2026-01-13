import React, { useState } from 'react';
import { 
  Coins, 
  Lock, 
  Globe, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Users, 
  BarChart, 
  CheckCircle2, 
  ArrowRight, 
  X,
  Play,
  Clock,
  Layers,
  ArrowRightLeft,
  Briefcase
} from 'lucide-react';

// --- Visual Asset Components ---

const EnrichToken = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" className="text-brand-yellow opacity-20" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2" className="text-brand-yellow" />
    {/* Hexagon Core */}
    <path d="M50 25L71.65 37.5V62.5L50 75L28.35 62.5V37.5L50 25Z" fill="currentColor" className="text-brand-orange/20" />
    <path d="M50 25L71.65 37.5V62.5L50 75L28.35 62.5V37.5L50 25Z" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
    {/* E Logo */}
    <path d="M40 40H60M40 50H55M40 60H60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-white" />
  </svg>
);

const BlockchainAnimation = () => (
  <div className="relative w-64 h-64 mx-auto mb-8 hidden md:block">
    {/* Central Asset */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-brand-redorange to-brand-orange rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,92,0,0.5)] z-10 animate-pulse-slow">
       <Briefcase size={40} className="text-white" />
    </div>
    
    {/* Orbiting Tokens */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <div 
        key={i}
        className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4"
        style={{ 
          transform: `rotate(${deg}deg) translateX(100px) rotate(-${deg}deg)`,
          animation: `spin 10s linear infinite`,
          animationDelay: `-${i * 1.5}s`
        }}
      >
        <div className="w-full h-full bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,207,33,0.6)] animate-bounce">
           <span className="text-[10px] font-bold text-brand-redorange">E</span>
        </div>
        {/* Connection Line */}
        <div className="absolute top-1/2 left-1/2 w-[100px] h-[1px] bg-gradient-to-r from-brand-redorange/0 via-brand-redorange/50 to-brand-yellow/50 -z-10 origin-left" style={{ transform: `rotate(${deg + 180}deg)` }}></div>
      </div>
    ))}
    
    {/* Rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-redorange/30 rounded-full"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-dashed border-brand-orange/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
  </div>
);

const DashboardMockup = () => (
  <div className="glass-card bg-black/40 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
    {/* Glow effect */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-redorange/20 rounded-full blur-3xl"></div>
    
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white/10"></div>
        <div className="h-4 w-24 bg-white/10 rounded"></div>
      </div>
      <EnrichToken className="w-8 h-8" />
    </div>

    {/* Portfolio Value */}
    <div className="mb-8">
      <div className="text-blue-100 text-xs uppercase tracking-wider mb-1">Total Portfolio Value</div>
      <div className="text-3xl font-bold text-white mb-2">₹ 50,00,000</div>
      <div className="flex items-center gap-2 text-brand-yellow text-sm">
        <div className="bg-brand-yellow/20 px-1.5 py-0.5 rounded text-xs">+12.5%</div>
        <span>vs last month</span>
      </div>
    </div>

    {/* Asset List */}
    <div className="space-y-4">
      {[
        { name: "Gachibowli Office", tokens: "250 Tokens", val: "₹ 25.0L", growth: "+8%" },
        { name: "Whitefield Tech Park", tokens: "100 Tokens", val: "₹ 10.0L", growth: "+15%" },
        { name: "Downtown Dubai", tokens: "150 Tokens", val: "₹ 15.0L", growth: "+5%" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-brand-midnight/50 border border-white/5 hover:bg-white/10 transition-colors">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-redorange to-brand-orange flex items-center justify-center text-white text-xs font-bold">
               {item.name.charAt(0)}
             </div>
             <div>
               <div className="text-sm font-medium text-white">{item.name}</div>
               <div className="text-xs text-blue-200">{item.tokens}</div>
             </div>
           </div>
           <div className="text-right">
             <div className="text-sm font-bold text-white">{item.val}</div>
             <div className="text-xs text-brand-yellow">{item.growth}</div>
           </div>
        </div>
      ))}
    </div>
  </div>
);

const TransactionFlow = () => (
  <div className="py-12">
    <h3 className="text-2xl font-bold text-center mb-10 text-white">The Efficiency Leap</h3>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Traditional */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10 opacity-90 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-bold text-white">Traditional Deal</h4>
          <span className="text-xs bg-white/10 text-white px-2 py-1 rounded">6-12 Months</span>
        </div>
        <div className="flex flex-col gap-4 relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10 -z-10"></div>
          {[
            { icon: Users, label: "Find Broker", time: "2-4 weeks" },
            { icon: FileText, label: "Legal & Due Diligence", time: "4-8 weeks" },
            { icon: ShieldCheck, label: "Bank Processing", time: "4-8 weeks" },
            { icon: Clock, label: "Registration & Closing", time: "2-4 weeks" }
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-midnight/30 border border-white/10 flex items-center justify-center text-blue-200">
                <step.icon size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-white">{step.label}</div>
                <div className="text-xs text-blue-200">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tokenized */}
      <div className="bg-gradient-to-br from-brand-redorange/10 to-brand-orange/10 rounded-2xl p-6 border border-brand-redorange/30 relative overflow-hidden shadow-xl shadow-brand-redorange/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-redorange/20 rounded-full blur-3xl"></div>
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-bold text-white flex items-center gap-2">
            <EnrichToken className="w-5 h-5" /> Tokenized Deal
          </h4>
          <span className="text-xs bg-brand-yellow/20 text-brand-yellow px-2 py-1 rounded font-bold">Instant*</span>
        </div>
        
        <div className="flex flex-col gap-6 h-full justify-center">
          <div className="flex items-center gap-4 bg-brand-redorange/10 p-4 rounded-xl border border-brand-redorange/20">
             <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-redorange to-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-redorange/20">
               <Zap size={24} fill="currentColor" />
             </div>
             <div>
               <div className="font-bold text-white text-lg">Smart Contract Execution</div>
               <div className="text-sm text-blue-100">KYC, Payment & Transfer in seconds</div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-3 rounded-lg text-center">
               <div className="text-xs text-blue-200 mb-1">Cost Savings</div>
               <div className="text-brand-yellow font-bold">~40-60%</div>
            </div>
            <div className="bg-white/5 p-3 rounded-lg text-center">
               <div className="text-xs text-blue-200 mb-1">Ownership</div>
               <div className="text-brand-orange font-bold">Fractional</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const RWASection: React.FC = () => {
  const [showDevModal, setShowDevModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="tokenization" className="relative py-24 overflow-hidden bg-brand-deep text-white">
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-midnight via-brand-deep to-brand-bright bg-[length:400%_400%] animate-gradient-flow opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-bright/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-deep/30 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-xs uppercase tracking-widest mb-6">
              <Zap size={14} /> New Service Offering
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-yellow to-brand-redorange">
              Unlock Liquidity with Blockchain
            </h2>
            <p className="text-xl text-blue-50 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Transform your properties into digital securities, attract global investors, and enable fractional ownership through secure blockchain technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={() => setShowDevModal(true)} className="bg-gradient-to-r from-brand-orange to-brand-redorange hover:from-brand-redorange hover:to-brand-orange text-white font-bold px-6 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(255,92,0,0.3)]">Tokenize Your Asset</button>
              <button onClick={() => document.getElementById('investor-form')?.scrollIntoView({behavior: 'smooth'})} className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full transition-all">Invest in Tokens</button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
             <BlockchainAnimation />
          </div>
        </div>

        {/* Explainer Box */}
        <div className="glass-card bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden group hover:border-brand-redorange/30 transition-all shadow-2xl shadow-brand-midnight/30">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Coins size={300} />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <EnrichToken className="w-8 h-8" />
                What is RWA Tokenization?
              </h3>
              <p className="text-blue-50 mb-6 leading-relaxed">
                Real World Asset (RWA) Tokenization converts physical real estate properties into digital tokens on blockchain networks. This innovative process democratizes investment and provides developers with a new, efficient capital raising mechanism.
              </p>
              <button 
                onClick={() => setShowVideoModal(true)}
                className="flex items-center gap-3 text-brand-yellow hover:text-brand-orange font-bold transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={18} fill="currentColor" />
                </span>
                Watch: How it Works
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Fractional Ownership",
                "24/7 Global Trading",
                "Instant Settlement",
                "Automated Compliance",
                "Reduced Costs",
                "Transparent Records"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-colors">
                  <CheckCircle2 className="text-brand-yellow w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Why Tokenize Your Assets?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Access Global Capital",
                desc: "Reach 180,000+ investors plus global crypto markets. Raise funds in 30-60 days.",
                bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" // World map background
              },
              {
                icon: Coins,
                title: "Fractional Sales Strategy",
                desc: "Sell portions of high-value assets. Retain ownership while generating immediate liquidity."
              },
              {
                icon: Zap,
                title: "Reduced Costs",
                desc: "Eliminate 40-60% of traditional fees. Smart contracts automate distributions and compliance."
              },
              {
                icon: ShieldCheck,
                title: "Regulatory Compliance",
                desc: "Built-in KYC/AML and SEBI/SEC compliant frameworks ensure legal safety."
              },
              {
                icon: BarChart,
                title: "Enhanced Marketing",
                desc: "Position as tech-forward. Attract Gen-Z and millennial investors who prefer digital assets."
              },
              {
                icon: Lock,
                title: "Secure & Transparent",
                desc: "Immutable blockchain records provide trust and audit trails for all stakeholders."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/0 p-8 rounded-2xl border border-white/10 hover:border-brand-redorange/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-lg shadow-black/20 hover:shadow-2xl">
                {benefit.bgImage && (
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <img src={benefit.bgImage} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-redorange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-redorange group-hover:text-white transition-all">
                    <benefit.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{benefit.title}</h4>
                  <p className="text-blue-100 text-sm leading-relaxed group-hover:text-white transition-colors">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infographic: Transaction Flow */}
        <TransactionFlow />

        {/* Case Study Banner */}
        <div className="bg-gradient-to-r from-brand-midnight to-brand-deep rounded-3xl p-8 md:p-12 mb-20 border border-brand-bright/30 shadow-[0_0_40px_rgba(0,167,255,0.2)]">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="text-white/80 font-bold uppercase tracking-wider text-xs mb-2">Success Story</div>
              <h4 className="text-2xl font-bold text-white mb-4">Hyderabad Commercial Office</h4>
              <div className="text-4xl font-bold text-brand-yellow mb-2">₹10 Cr</div>
              <p className="text-sm text-white/90">Raised in 45 days</p>
            </div>
            <div className="md:w-2/3 border-l border-white/20 md:pl-10">
              <p className="text-lg text-white italic mb-6">
                "A ₹25 crore commercial office project in Gachibowli tokenized 40% of ownership. Result: Full subscription from 287 investors across 12 countries. Developer retained 60% ownership with 30% lower cost of capital."
              </p>
              <div className="flex gap-4">
                <div className="bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-white/80">Tokens Issued</div>
                  <div className="font-bold text-white">10,000</div>
                </div>
                <div className="bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-xs text-white/80">Ticket Size</div>
                  <div className="font-bold text-white">₹1 Lakh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investor Registration with Dashboard Mockup */}
        <div id="investor-form" className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Left Side: Mockup & Value Prop */}
           <div>
              <h3 className="text-3xl font-bold text-white mb-6">Be First to Access Tokenized Assets</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Register for early access to high-yield, fractional real estate opportunities. Manage your entire property portfolio from a single, secure dashboard.
              </p>
              <DashboardMockup />
           </div>

           {/* Right Side: Form */}
           <div className="glass-card bg-white dark:bg-brand-dark/50 p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/20">
              {isSuccess ? (
                <div className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl p-8 text-center animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-brand-yellow mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2">Registration Successful!</h4>
                  <p className="text-slate-300">You've been added to our priority list. Our team will contact you within 48 hours.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-6 text-brand-orange hover:text-brand-redorange font-bold">Register another</button>
                </div>
              ) : (
                <form onSubmit={handleInvestorSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-orange outline-none" />
                    <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-orange outline-none" />
                  </div>
                  <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-orange outline-none">
                    <option value="">Investment Budget</option>
                    <option value="5-10L">₹5L - ₹10L</option>
                    <option value="10-25L">₹10L - ₹25L</option>
                    <option value="25L+">₹25L+</option>
                  </select>
                  <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-orange outline-none">
                    <option value="">Preferred City</option>
                    <option value="Dubai">Dubai, UAE</option>
                    <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                    <option value="London">London, UK</option>
                    <option value="New York">New York, USA</option>
                    <option value="San Francisco">San Francisco, USA</option>
                    <option value="Los Angeles">Los Angeles, USA</option>
                  </select>
                  <div className="flex items-start gap-3 mt-2">
                    <input type="checkbox" id="terms" required className="mt-1 w-4 h-4 rounded text-brand-orange focus:ring-brand-orange bg-white/5 border-white/10" />
                    <label htmlFor="terms" className="text-sm text-slate-400">I agree to receive updates on tokenized property launches.</label>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-yellow to-brand-orange hover:from-brand-orange hover:to-brand-redorange text-brand-midnight font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Notify Me'} <ArrowRight size={20} />
                  </button>
                </form>
              )}
           </div>
        </div>

        {/* Footer / Disclaimer */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Real estate tokenization is subject to securities regulations in respective jurisdictions. EnrichDeals provides technology and marketing services; investors should consult legal and tax advisors. Cryptocurrency investments carry risks including volatility and regulatory changes. Past performance illustrations are not guarantees of future returns.
          </p>
        </div>
      </div>

      {/* Developer Modal */}
      {showDevModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowDevModal(false)}></div>
          <div className="bg-white dark:bg-brand-midnight border border-slate-200 dark:border-white/10 w-full max-w-lg rounded-3xl p-8 relative z-10 shadow-2xl animate-fade-in max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowDevModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={24} /></button>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Schedule RWA Consultation</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Tell us about your project.</p>
            <form className="space-y-4">
               <input type="text" placeholder="Company Name" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange" />
               <input type="text" placeholder="Contact Person" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange" />
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Property Type" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange" />
                 <input type="text" placeholder="Valuation (Cr)" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange" />
               </div>
               <select className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange">
                 <option>Timeline</option>
                 <option>Urgent (1 month)</option>
                 <option>3 months</option>
                 <option>6 months+</option>
               </select>
               <input type="email" placeholder="Email" className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-brand-orange" />
               <button className="w-full bg-brand-redorange text-white font-bold py-4 rounded-xl hover:bg-brand-orange transition-colors">Submit Request</button>
            </form>
          </div>
        </div>
      )}

      {/* Video Modal (Placeholder) */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowVideoModal(false)}></div>
          <div className="relative z-10 w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/20">
             <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 text-white hover:text-brand-orange z-20"><X size={30} /></button>
             <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                   <Play size={60} className="mx-auto mb-4 opacity-50" />
                   <p className="text-xl">Educational Video Placeholder</p>
                   <p className="text-sm text-slate-400">"How Real Estate Tokenization Works"</p>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RWASection;