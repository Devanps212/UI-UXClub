import ProjectCard from "./projectCard";

const Projects = () => {
  const PROJECTS = [
    {
      title: "Minimal Portfolio UI",
      keywords: ["UI Design", "Portfolio", "Minimal"],
      creator: "Aarav Mehta",
      stars: 128,
      comments: 24,
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
    {
      title: "Fintech Dashboard",
      keywords: ["Dashboard", "Finance", "UX"],
      creator: "Riya Sharma",
      stars: 342,
      comments: 58,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Travel App Concept",
      keywords: ["Mobile", "Travel", "App Design"],
      creator: "Karan Verma",
      stars: 210,
      comments: 39,
      thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "E-commerce Product Page",
      keywords: ["E-commerce", "UI", "Web"],
      creator: "Neha Kapoor",
      stars: 178,
      comments: 31,
      thumbnail: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    },
    {
      title: "Fitness Tracker UI",
      keywords: ["Health", "Mobile", "UI"],
      creator: "Rahul Nair",
      stars: 265,
      comments: 47,
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      title: "Dark Mode Admin Panel",
      keywords: ["Admin", "Dark UI", "Dashboard"],
      creator: "Sneha Iyer",
      stars: 301,
      comments: 52,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];
  return (
    <div className="grid grid-cols-3 place-items-center gap-4 p-5">
      {PROJECTS.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default Projects;
