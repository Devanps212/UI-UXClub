import type { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  author: string;
  category: string;
  thumbnail: string;
  description: string;
  links: Record<string, string>;
  likes: number;
  views: number;
  featured: boolean;
}

export interface MemberSpotlight {
  name: string;
  role: string;
  avatar: string;
  color: string;
  quote: string;
  projects: number;
  joined: string;
}

export interface HowItWorksStep {
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}
