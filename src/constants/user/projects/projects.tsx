import type { JSX } from "react";
import {
  FaGithub,
  FaGlobe,
  FaBehance,
  FaDribbble,
  FaFigma,
} from "react-icons/fa";

export const categories = [
  "All",
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Motion Graphics",
  "Graphic Design",
];

export const linkIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  live: <FaGlobe />,
  behance: <FaBehance />,
  dribbble: <FaDribbble />,
  figma: <FaFigma />,
};

export const categoryColors: Record<string, string> = {
  "UI/UX Design": "bg-blue-100 text-blue-600",
  "Web Development": "bg-yellow-100 text-yellow-700",
  "App Development": "bg-green-100 text-green-700",
  "Motion Graphics": "bg-purple-100 text-purple-600",
  "Graphic Design": "bg-pink-100 text-pink-600",
};

// components/showcase/data.ts
export const mockProjects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    author: "Arya Krishnan",
    category: "UI/UX Design",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    description:
      "A modern finance tracking dashboard with intuitive data visualization and clean UX patterns.",
    links: { figma: "#", behance: "#" },
    likes: 142,
    views: 1230,
    featured: true,
  },
  {
    id: 2,
    title: "Luminary Portfolio",
    author: "Meera Nair",
    category: "Web Development",
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    description:
      "A slick, animated personal portfolio built with React and GSAP, featuring scroll-triggered effects.",
    links: { github: "#", live: "#" },
    likes: 98,
    views: 870,
    featured: false,
  },
  {
    id: 3,
    title: "Verdant App",
    author: "Rohit Menon",
    category: "App Development",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    description:
      "Plant care companion app with AI-based diagnosis, watering reminders and community features.",
    links: { github: "#", live: "#" },
    likes: 211,
    views: 2100,
    featured: true,
  },
  {
    id: 4,
    title: "Kinetic Brand Intro",
    author: "Sana Faris",
    category: "Motion Graphics",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    description:
      "A dynamic brand reveal animation created in After Effects with fluid liquid morphing transitions.",
    links: { live: "#" },
    likes: 176,
    views: 1540,
    featured: false,
  },
  {
    id: 5,
    title: "NeoBank Redesign",
    author: "Aditi Pillai",
    category: "UI/UX Design",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    description:
      "Complete UX overhaul of a neobanking app, focusing on accessibility and conversion optimization.",
    links: { figma: "#", dribbble: "#" },
    likes: 305,
    views: 3400,
    featured: true,
  },
  {
    id: 6,
    title: "CodeCollab Platform",
    author: "Vishnu Das",
    category: "Web Development",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=600&q=80",
    description:
      "Real-time collaborative coding platform with syntax highlighting and voice chat built on WebRTC.",
    links: { github: "#", live: "#" },
    likes: 89,
    views: 765,
    featured: false,
  },
];

export const memberSpotlights = [
  {
    name: "Aditi Pillai",
    role: "UI/UX Designer",
    avatar: "AP",
    color: "from-pink-400 to-rose-500",
    quote:
      "This club gave me the confidence to share work I'd kept hidden for months. The feedback here is genuinely constructive.",
    projects: 4,
    joined: "Jan 2024",
  },
  {
    name: "Rohit Menon",
    role: "App Developer",
    avatar: "RM",
    color: "from-green-400 to-emerald-500",
    quote:
      "Seeing other members' projects pushed me to explore new technologies. Verdant App wouldn't exist without this community.",
    projects: 3,
    joined: "Mar 2024",
  },
  {
    name: "Sana Faris",
    role: "Motion Designer",
    avatar: "SF",
    color: "from-purple-400 to-violet-500",
    quote:
      "Motion graphics is a niche skill — finding people who appreciate and critique it properly is rare. Found that here.",
    projects: 5,
    joined: "Nov 2023",
  },
];

export const howItWorksSteps = [
  {
    icon: "👥",
    title: "Join the Club",
    desc: "Sign up as a member of the UI/UX Club. Open to designers, developers, and creatives of all skill levels.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "📤",
    title: "Submit Your Project",
    desc: "Fill out a quick form with your project details, links, and a thumbnail. Review takes 24–48 hours.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "✅",
    title: "Get Reviewed",
    desc: "Our team reviews submissions for quality and relevance. Featured projects are hand-picked weekly.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: "🏆",
    title: "Get Recognized",
    desc: "Top projects earn a Featured badge and are highlighted across our channels and newsletters.",
    color: "bg-purple-100 text-purple-600",
  },
];
