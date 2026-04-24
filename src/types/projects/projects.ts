import type { JSX } from "react";

export interface Project {
  title: string;
  keywords: string[];
  creator: string;
  stars: number;
  comments: number;
  thumbnail: string;
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
