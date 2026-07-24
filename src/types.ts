// Shared TypeScript types for LS Stars website

export interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode; // optional icon component from lucide-react
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string; // URL or local path
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface PricingPlan {
  name: string;
  price?: string; // optional price label
  features: string[];
  highlighted?: boolean; // optional highlight for premium plan
}

export interface Testimonial {
  name: string;
  company: string;
  comment: string;
  avatar?: string; // optional image URL
}
