import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface City {
  name: string;
  region: string;
  description: string;
  image: string;
  stats: {
    yield: string;
    growth: string;
  };
  tags: string[];
  factoid: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}