import { useState, type JSX } from "react";
import {
  FaArrowRight,
  FaGithub,
  FaGlobe,
  FaBehance,
  FaDribbble,
  FaFigma,
  FaPlus,
  FaTimes,
  FaSearch,
  FaFilter,
  FaStar,
  FaHeart,
  FaEye,
  FaTrash,
} from "react-icons/fa";

const categories = [
  "All",
  "UI/UX Design",
  "Web Development",
  "App Development",
  "Motion Graphics",
  "Graphic Design",
  "Other",
];

const mockProjects = [
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

const linkIcons: Record<string, JSX.Element> = {
  github: <FaGithub />,
  live: <FaGlobe />,
  behance: <FaBehance />,
  dribbble: <FaDribbble />,
  figma: <FaFigma />,
};

const categoryColors: Record<string, string> = {
  "UI/UX Design": "bg-blue-100 text-blue-600",
  "Web Development": "bg-yellow-100 text-yellow-700",
  "App Development": "bg-green-100 text-green-700",
  "Motion Graphics": "bg-purple-100 text-purple-600",
  "Graphic Design": "bg-pink-100 text-pink-600",
};

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [likedProjects, setLikedProjects] = useState<number[]>([]);

  const [form, setForm] = useState({
    title: "",
    category: "UI/UX Design",
    customCategory: "",
    description: "",
    thumbnail: "",
    github: "",
    live: "",
    figma: "",
    behance: "",
    dribbble: "",
  });

  const [additionalLinks, setAdditionalLinks] = useState<
    { label: string; url: string }[]
  >([]);

  const filtered = mockProjects.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = mockProjects.filter((p) => p.featured);

  const toggleLike = (id: number) => {
    setLikedProjects((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addAdditionalLink = () => {
    setAdditionalLinks([...additionalLinks, { label: "", url: "" }]);
  };

  const removeAdditionalLink = (index: number) => {
    setAdditionalLinks(additionalLinks.filter((_, i) => i !== index));
  };

  const handleAdditionalLinkChange = (
    index: number,
    field: "label" | "url",
    value: string,
  ) => {
    const updated = [...additionalLinks];
    updated[index][field] = value;
    setAdditionalLinks(updated);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const finalCategory =
      form.category === "Other" ? form.customCategory : form.category;
    console.log("Submitted Project:", {
      ...form,
      category: finalCategory,
      additionalLinks,
    });
    alert("Project submitted! (Demo only)");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto text-center mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            The{" "}
            <span
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Design Showcase
            </span>
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-lg mb-8">
            Explore stunning projects by our members — designers, developers,
            and motion artists pushing creative boundaries.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold text-black transition-all hover:scale-105"
            style={{
              background: "linear-gradient(to right, #FFD700, #FFF176)",
            }}
          >
            <FaPlus className="text-yellow-700" /> Submit Your Project
          </button>
        </div>
      </section>

      <section className="py-14 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FaStar className="text-yellow-500" />
            <h2 className="text-xl font-bold text-slate-800">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-yellow-200 bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
                    ⭐ Featured
                  </span>
                </div>
                <div className="p-5">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[project.category] || "bg-gray-100 text-gray-600"}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-800 text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-slate-400">
                      by {project.author}
                    </span>
                    <div className="flex gap-3 text-slate-400 text-sm">
                      {Object.entries(project.links).map(([key, val]) => (
                        <a
                          key={key}
                          href={val}
                          className="hover:text-blue-500 transition-colors"
                          title={key}
                        >
                          {linkIcons[key]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-2 w-full md:w-80">
              <FaSearch className="text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search projects or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none text-sm w-full text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <FaFilter className="text-slate-400 text-sm" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === cat
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-slate-200 text-slate-600 hover:border-blue-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-lg font-medium">No projects found.</p>
              <p className="text-sm">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {Object.entries(project.links).map(([key, val]) => (
                        <a
                          key={key}
                          href={val}
                          className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-blue-500 hover:text-white transition-all text-sm"
                          title={key}
                        >
                          {linkIcons[key]}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[project.category] || "bg-gray-100 text-gray-600"}`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-base">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-xs text-slate-400">
                      <span>
                        by{" "}
                        <span className="text-blue-500 font-medium">
                          {project.author}
                        </span>
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <FaEye /> {project.views}
                        </span>
                        <button
                          onClick={() => toggleLike(project.id)}
                          className={`flex items-center gap-1 transition-colors ${
                            likedProjects.includes(project.id)
                              ? "text-red-500"
                              : "hover:text-red-400"
                          }`}
                        >
                          <FaHeart />
                          {project.likes +
                            (likedProjects.includes(project.id) ? 1 : 0)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-14 px-6 bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.slice(1).map((cat) => {
              const count = mockProjects.filter(
                (p) => p.category === cat,
              ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 ${categoryColors[cat] || "bg-gray-100 text-gray-600"}`}
                  >
                    {cat}
                  </span>
                  <span className="text-2xl font-extrabold text-slate-800">
                    {count}
                  </span>
                  <span className="text-xs text-slate-400">projects</span>
                  <FaArrowRight className="mt-2 text-blue-300 group-hover:text-blue-500 text-xs transition-colors" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Showcase
            </span>{" "}
            Your Work?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Whether you're a designer, developer, or motion artist — your work
            deserves to be seen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-black hover:scale-105 transition-all"
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
              }}
            >
              <FaPlus className="text-yellow-700" /> Submit Project
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white border border-yellow-400 hover:bg-yellow-400/10 transition-all">
              Join Club <FaArrowRight className="text-yellow-400 text-sm" />
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
              Submit Your Project
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Share your work with the community.
            </p>

            <div className="space-y-5">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">
                  Project Title *
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="e.g. FinTrack Dashboard"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 bg-white"
                >
                  {categories.slice(1).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                {form.category === "Other" && (
                  <div className="mt-3">
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">
                      Custom Category Name
                    </label>
                    <input
                      name="customCategory"
                      value={form.customCategory}
                      onChange={handleFormChange}
                      placeholder="Enter your category (e.g. 3D Design, Illustration)"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400 resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-1">
                  Thumbnail URL
                </label>
                <input
                  name="thumbnail"
                  value={form.thumbnail}
                  onChange={handleFormChange}
                  placeholder="https://your-image-url.com/thumb.png"
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
                />
              </div>

              <div className="border-t border-slate-100 pt-6">
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-4">
                  Project Links
                </p>

                {[
                  { name: "github", label: "GitHub URL", icon: <FaGithub /> },
                  { name: "live", label: "Live Demo URL", icon: <FaGlobe /> },
                  { name: "figma", label: "Figma URL", icon: <FaFigma /> },
                  {
                    name: "behance",
                    label: "Behance URL",
                    icon: <FaBehance />,
                  },
                  {
                    name: "dribbble",
                    label: "Dribbble URL",
                    icon: <FaDribbble />,
                  },
                ].map((field) => (
                  <div
                    key={field.name}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span className="text-slate-400 w-5">{field.icon}</span>
                    <input
                      name={field.name}
                      value={form[field.name as keyof typeof form] as string}
                      onChange={handleFormChange}
                      placeholder={field.label}
                      className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>
                ))}

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                      Additional / Other Links
                    </p>
                    <button
                      type="button"
                      onClick={addAdditionalLink}
                      className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                    >
                      <FaPlus size={12} /> Add Other Link
                    </button>
                  </div>

                  {additionalLinks.map((link, index) => (
                    <div key={index} className="flex gap-3 mb-4">
                      <input
                        placeholder="Label (e.g. YouTube, LinkedIn)"
                        value={link.label}
                        onChange={(e) =>
                          handleAdditionalLinkChange(
                            index,
                            "label",
                            e.target.value,
                          )
                        }
                        className="w-1/3 border border-slate-200 rounded-lg px-4 py-3 text-sm"
                      />
                      <input
                        placeholder="https://..."
                        value={link.url}
                        onChange={(e) =>
                          handleAdditionalLinkChange(
                            index,
                            "url",
                            e.target.value,
                          )
                        }
                        className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm"
                      />
                      <button
                        onClick={() => removeAdditionalLink(index)}
                        className="text-red-500 hover:text-red-600 p-3"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-xl font-bold text-black mt-4 hover:scale-[1.02] transition-all"
                style={{
                  background: "linear-gradient(to right, #FFD700, #FFF176)",
                }}
              >
                Submit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
