import { 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Briefcase, 
  MapPin, 
} from 'lucide-react';
import { City, Service, Stat, Testimonial } from './types';

// Import city images
import bangaloreImg from './assets/img/bangalore.jpg';
import chennaiImg from './assets/img/chennai.jpg';
import hyderabadImg from './assets/img/hyderabad.jpg';
import visakhapatnamImg from './assets/img/visakhapatnam.jpg';
import vijayawadaImg from './assets/img/vijayawada.jpg';
import amaravatiImg from './assets/img/amaravati.jpg';
import dubaiImg from './assets/img/dubai.jpg';
import abuDhabiImg from './assets/img/abu-dhabi.jpg';
import londonImg from './assets/img/london.jpg';
import losAngelesImg from './assets/img/los-angeles.jpg';
import sanDiegoImg from './assets/img/san-diego.jpg';
import sanFranciscoImg from './assets/img/san-francisco.jpg';

export const STATS: Stat[] = [
  { value: "180,000+", label: "Global Investors" },
  { value: "12+", label: "Premium Cities" },
  { value: "20%", label: "Faster Deals" },
  { value: "$500M+", label: "Assets Managed" },
];

export const CITIES: City[] = [
  // India
  {
    name: "Bangalore",
    region: "India",
    description: "The Silicon Valley of Asia. Tech-driven growth in Whitefield & Sarjapur.",
    image: bangaloreImg,
    stats: { yield: "4%", growth: "12%" },
    tags: ["IT Hub", "Startups"],
    factoid: "Home to 40% of India's IT exports, driving consistent rental demand in eastern suburbs."
  },
  {
    name: "Chennai",
    region: "India",
    description: "The Detroit of India. Stable appreciation in OMR and ECR belts.",
    image: chennaiImg,
    stats: { yield: "3.5%", growth: "10%" },
    tags: ["Automobile", "SaaS"],
    factoid: "The ECR coastal stretch offers rare villa appreciation rates of 12% CAGR over the last decade."
  },
  {
    name: "Hyderabad",
    region: "India",
    description: "Biotech & IT powerhouse. Massive infrastructure boom in Gachibowli.",
    image: hyderabadImg,
    stats: { yield: "4%", growth: "15%" },
    tags: ["Pharma", "IT"],
    factoid: "Ranked best Indian city for quality of living by Mercer for 5 consecutive years."
  },
  {
    name: "Visakhapatnam",
    region: "India",
    description: "The Jewel of the East Coast. Rising port city with tourism potential.",
    image: visakhapatnamImg,
    stats: { yield: "3%", growth: "12%" },
    tags: ["Port", "Naval Hub"],
    factoid: "Smart City initiatives are driving 15% YoY appreciation in Beach Road properties."
  },
  {
    name: "Vijayawada",
    region: "India",
    description: "Commercial heart of Andhra Pradesh. Strategic logistics hub.",
    image: vijayawadaImg,
    stats: { yield: "3%", growth: "11%" },
    tags: ["Commerce", "Logistics"],
    factoid: "Strategic proximity to the new capital region makes it a logistics real estate goldmine."
  },
  {
    name: "Amaravati",
    region: "India",
    description: "The greenfield capital. Exceptional long-term land banking opportunity.",
    image: amaravatiImg,
    stats: { yield: "N/A", growth: "25%" },
    tags: ["Capital", "Growth"],
    factoid: "A master-planned sustainable city targeting 3.5M jobs by 2050, ideal for land banking."
  },
  // UAE
  {
    name: "Dubai",
    region: "UAE",
    description: "Global luxury capital. Tax-free returns and world-class infrastructure.",
    image: dubaiImg,
    stats: { yield: "7%", growth: "10%" },
    tags: ["Luxury", "Tax-Free"],
    factoid: "Offers some of the world's highest rental yields, averaging 7-9% in prime zones like Marina."
  },
  {
    name: "Abu Dhabi",
    region: "UAE",
    description: "Cultural and political center. High-end residential islands.",
    image: abuDhabiImg,
    stats: { yield: "6%", growth: "8%" },
    tags: ["Culture", "Island Living"],
    factoid: "The Golden Visa program is attracting record high-net-worth migration to Saadiyat Island."
  },
  // UK
  {
    name: "London",
    region: "UK",
    description: "The world's financial center. Prestigious assets with stable legacy value.",
    image: londonImg,
    stats: { yield: "4%", growth: "5%" },
    tags: ["Finance", "Legacy"],
    factoid: "Zone 1 & 2 properties have historically doubled in value every 10 years despite market cycles."
  },
  // USA
  {
    name: "Los Angeles",
    region: "USA",
    description: "Entertainment capital. High demand in Beverly Hills and Santa Monica.",
    image: losAngelesImg,
    stats: { yield: "3%", growth: "7%" },
    tags: ["Hollywood", "Lifestyle"],
    factoid: "Prop 13 limits property tax increases to 2% annually, favoring long-term asset holding."
  },
  {
    name: "San Diego",
    region: "USA",
    description: "Biotech hub with perfect weather. Coastal luxury living.",
    image: sanDiegoImg,
    stats: { yield: "3.5%", growth: "8%" },
    tags: ["BioTech", "Coastal"],
    factoid: "Top US market for life sciences, creating a stable, high-income tenant base for luxury rentals."
  },
  {
    name: "San Francisco",
    region: "USA",
    description: "Global tech innovation hub. Resilient market with high equity growth.",
    image: sanFranciscoImg,
    stats: { yield: "3%", growth: "9%" },
    tags: ["Tech", "Innovation"],
    factoid: "Severe geographic constraints and limited land supply ensure perpetual high demand and value retention."
  }
];

export const DEVELOPER_SERVICES: Service[] = [
  {
    title: "AI Marketing Agency",
    description: "Reach 180,000+ pre-qualified investors with surgical precision.",
    icon: Cpu,
    features: ["Buyer Persona Targeting", "Multi-Channel Campaigns", "CRM Integration"]
  },
  {
    title: "3D Virtual Tours",
    description: "Immersive visualization to sell properties before they are built.",
    icon: Globe,
    features: ["Matterport Tours", "Virtual Staging", "Metaverse Showrooms"]
  },
  {
    title: "Pricing Strategy",
    description: "Maximize margins using AI models on 10,000+ data points.",
    icon: TrendingUp,
    features: ["Dynamic Pricing", "Payment Plan Engineering", "Phased Launches"]
  },
  {
    title: "Legal Due Diligence",
    description: "Navigate complex regulatory landscapes with confidence.",
    icon: ShieldCheck,
    features: ["Title Verification", "RERA Compliance", "Dispute Resolution"]
  }
];

export const INVESTOR_SERVICES: Service[] = [
  {
    title: "AI Property Matching",
    description: "Stop searching, start finding. Matches based on 15+ preference factors.",
    icon: Cpu,
    features: ["Budget & Goal Alignment", "Risk Scoring", "Hidden Gems"]
  },
  {
    title: "White-Glove Site Visits",
    description: "We are your boots on the ground. Expert negotiation included.",
    icon: MapPin,
    features: ["Chauffeured Visits", "Video Inspections", "Price Negotiation"]
  },
  {
    title: "Portfolio Optimization",
    description: "Build wealth with diversified assets across residential and commercial.",
    icon: Briefcase,
    features: ["Tax Optimization", "ROI Projections", "Risk Analysis"]
  },
  {
    title: "Builder Verification",
    description: "Eliminate uncertainty with military-grade due diligence.",
    icon: ShieldCheck,
    features: ["Financial Health Check", "Litigation History", "Track Record"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "EnrichDeals' AI profiling connected us with 23 qualified NRI buyers in 45 days—our Hyderabad project sold 60% faster.",
    author: "Ramesh K.",
    role: "Developer, Hyderabad"
  },
  {
    quote: "As a Silicon Valley investor, I needed someone who understood tech and real estate. They handled everything remotely.",
    author: "Sarah J.",
    role: "Tech Executive, San Jose"
  },
  {
    quote: "The detailed neighborhood analytics helped me choose the right zone in Dubai. The 8% yield is exactly as promised.",
    author: "Ahmed Al-Fayed",
    role: "Investor, UAE"
  }
];