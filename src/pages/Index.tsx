import { useState } from "react";
import Icon from "@/components/ui/icon";
import { type Tab, FIRE, FIRE_VERT } from "@/components/mmvoise/constants";
import ProjectsTab from "@/components/mmvoise/ProjectsTab";
import RequestTab from "@/components/mmvoise/RequestTab";
import SocialTab from "@/components/mmvoise/SocialTab";
import AboutTab from "@/components/mmvoise/AboutTab";

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mont overflow-x-hidden">
      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Grid lines */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Fire glow ambient */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0 opacity-10 blur-[80px]"
        style={{ background: FIRE_VERT }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="mb-16 animate-fade-in">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="font-bebas text-7xl md:text-9xl leading-none tracking-widest text-white">
                MM
                <span
                  style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  VOISE
                </span>
                <span
                  className="text-4xl md:text-5xl align-super"
                  style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  ™
                </span>
              </h1>
              <p
                className="font-mont text-sm tracking-[0.3em] uppercase mt-2"
                style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Графический & Визуальный Дизайн
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-1 mt-2">
              <div className="w-12 h-[1px]" style={{ background: FIRE }} />
              <p className="text-white/30 text-xs tracking-widest uppercase">Portfolio</p>
              <p className="text-white/30 text-xs">© 2024</p>
            </div>
          </div>

          {/* Accent line */}
          <div className="mt-8 flex items-center gap-4">
            <div
              className="h-[2px] flex-1"
              style={{ background: "linear-gradient(90deg, #ff4500, #ff6b00 40%, transparent)" }}
            />
            <span
              className="text-xs tracking-widest uppercase font-light"
              style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              Select
            </span>
          </div>
        </header>

        {/* Tabs */}
        <nav className="mb-12 flex gap-1 bg-white/5 p-1 rounded-xl w-fit">
          {(
            [
              { id: "projects", label: "Проекты", icon: "Layout" },
              { id: "request", label: "Заявка", icon: "FileText" },
              { id: "social", label: "Соц сети", icon: "Globe" },
              { id: "about", label: "О нас", icon: "Users" },
            ] as { id: Tab; label: string; icon: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
              style={activeTab === tab.id ? { background: FIRE_VERT } : {}}
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab content */}
        {activeTab === "projects" && (
          <ProjectsTab
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
          />
        )}
        {activeTab === "request" && (
          <RequestTab formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "social" && (
          <SocialTab onRequestClick={() => setActiveTab("request")} />
        )}
        {activeTab === "about" && <AboutTab />}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between text-white/20 text-xs font-light">
          <span
            className="font-bebas tracking-widest text-base"
            style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
          >
            MMVOISE™
          </span>
          <span>Все права защищены © 2024</span>
        </footer>
      </div>
    </div>
  );
}
