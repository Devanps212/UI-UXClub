// components/showcase/CategoryCards.tsx
import { categories } from "../../constants/user/projects/projects";
import { mockProjects } from "../../constants/user/projects/projects";
import { FaArrowRight } from "react-icons/fa";

export default function CategoryCards() {
  return (
    <section className="py-14 px-6 bg-blue-50 border-t border-blue-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-slate-800 mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.slice(1).map((cat) => {
            const count = mockProjects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => {
                  document
                    .getElementById("browse")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 bg-blue-100 text-blue-600`}
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
  );
}
