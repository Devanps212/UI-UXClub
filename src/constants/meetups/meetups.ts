export const FILTERS = ["All", "UI/UX", "Web Dev", "App Dev"];

export const TAG_COLORS: Record<string, string> = {
  "UI/UX": "bg-yellow-400 text-black",
  "Web Dev": "bg-black text-yellow-400",
  "App Dev": "bg-black text-yellow-400 border border-yellow-400",
};

export const UPCOMING_MEETUPS = [
  {
    id: 1,
    tag: "UI/UX",
    title: "Design Systems at Scale",
    date: "April 26, 2025",
    time: "6:00 PM – 9:00 PM",
    location: "WeWork, MG Road, Bengaluru",
    attendees: 48,
    capacity: 60,
    speaker: "Riya Nair",
    role: "Senior UX Designer @ Swiggy",
    description:
      "Explore how large product teams build and maintain scalable design systems. Live critique session and hands-on Figma workshop included.",
    featured: true,
  },
  {
    id: 2,
    tag: "Web Dev",
    title: "Micro-Interactions with Framer Motion",
    date: "May 3, 2025",
    time: "5:30 PM – 8:30 PM",
    location: "91springboard, Koramangala",
    attendees: 31,
    capacity: 50,
    speaker: "Arjun Mehta",
    role: "Frontend Engineer @ Razorpay",
    description:
      "Deep-dive into crafting buttery-smooth animations in React. Build a portfolio-worthy component library from scratch during the session.",
    featured: false,
  },
  {
    id: 3,
    tag: "App Dev",
    title: "Flutter UI Patterns for 2025",
    date: "May 10, 2025",
    time: "4:00 PM – 7:00 PM",
    location: "IISc Innovation Centre",
    attendees: 22,
    capacity: 40,
    speaker: "Sneha Rao",
    role: "Mobile Lead @ PhonePe",
    description:
      "Hands-on session covering adaptive layouts, custom painters, and performance profiling. Bring your laptop — we code together.",
    featured: false,
  },
];

export const PAST_MEETUPS = [
  {
    id: 5,
    tag: "UI/UX",
    title: "Accessibility-First Design",
    date: "March 14, 2025",
    attendees: 54,
  },
  {
    id: 6,
    tag: "Web Dev",
    title: "CSS Grid Mastery",
    date: "February 28, 2025",
    attendees: 67,
  },
  {
    id: 7,
    tag: "App Dev",
    title: "React Native vs Flutter",
    date: "February 7, 2025",
    attendees: 43,
  },
];
