import Icon from "@/components/ui/icon";
import { PROJECTS, FIRE_COLOR } from "./constants";

interface ProjectsTabProps {
  hoveredProject: number | null;
  setHoveredProject: (id: number | null) => void;
}

export default function ProjectsTab({ hoveredProject, setHoveredProject }: ProjectsTabProps) {
  return (
    <section className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-white/30"
            style={{
              animationDelay: `${i * 0.15}s`,
              boxShadow: hoveredProject === project.id ? `0 0 40px #ff6b0030` : "none",
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs text-white/70 font-light">
                {project.year}
              </div>
            </div>

            <div className="p-6 bg-[#111]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="font-bebas text-2xl tracking-wider text-white leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-white/40 text-xs tracking-wide mt-1">{project.subtitle}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45"
                  style={{ background: "rgba(255,107,0,0.15)", color: FIRE_COLOR }}
                >
                  <Icon name="ArrowUpRight" size={16} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border font-light tracking-wide"
                    style={{
                      borderColor: "rgba(255,107,0,0.3)",
                      color: FIRE_COLOR,
                      background: "rgba(255,107,0,0.08)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4 text-white/20">
        <div className="h-[1px] flex-1 bg-white/10" />
        <span className="text-xs tracking-widest uppercase font-light">
          {PROJECTS.length} проекта
        </span>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>
    </section>
  );
}
