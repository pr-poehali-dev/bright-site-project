import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "projects" | "request" | "social";

const PROJECTS = [
  {
    id: 1,
    title: "The Amazing Digital Circus!",
    subtitle: "Визуальная идентика / Постер",
    year: "2024",
    tags: ["Брендинг", "Иллюстрация", "Типографика"],
    image:
      "https://cdn.poehali.dev/projects/5ffbfd22-a4ca-4435-857b-9de0fde16a3b/files/9fdffa05-0b94-4ea7-b5b1-955134e947d4.jpg",
    color: "#ff6b00",
  },
  {
    id: 2,
    title: "Murder Drones",
    subtitle: "Концепт-арт / Ключевой визуал",
    year: "2024",
    tags: ["Концепт", "Тёмная тема", "Sci-Fi"],
    image:
      "https://cdn.poehali.dev/projects/5ffbfd22-a4ca-4435-857b-9de0fde16a3b/files/98f3ef50-7bac-4106-a195-5bea4644ae34.jpg",
    color: "#ff3c3c",
  },
];

const SOCIALS = [
  {
    name: "TikTok",
    icon: "Music2",
    handle: "@mmvoise",
    color: "#ff0050",
    bg: "rgba(255,0,80,0.1)",
    border: "rgba(255,0,80,0.3)",
    url: "#",
  },
  {
    name: "YouTube",
    icon: "Youtube",
    handle: "MMVOISE™",
    color: "#ff0000",
    bg: "rgba(255,0,0,0.1)",
    border: "rgba(255,0,0,0.3)",
    url: "#",
  },
  {
    name: "Like",
    icon: "Heart",
    handle: "MMVOISE",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.1)",
    border: "rgba(255,107,53,0.3)",
    url: "#",
  },
];

// Огненный градиент — используется везде вместо зелёного
const FIRE = "linear-gradient(90deg, #ff4500, #ff6b00, #ffaa00)";
const FIRE_VERT = "linear-gradient(135deg, #ff4500, #ff6b00, #ffaa00)";
const FIRE_COLOR = "#ff6b00";

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
                MMV
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px transparent",
                    backgroundImage: FIRE,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  OISE
                </span>
                <span
                  className="text-4xl md:text-5xl align-super"
                  style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  ™
                </span>
              </h1>
              <p className="font-mont text-sm tracking-[0.3em] text-white/40 uppercase mt-2">
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
              style={
                activeTab === tab.id
                  ? { background: FIRE_VERT }
                  : {}
              }
            >
              <Icon name={tab.icon} size={15} />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.id}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-white/30"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    boxShadow:
                      hoveredProject === project.id
                        ? `0 0 40px #ff6b0030`
                        : "none",
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
                        <p className="text-white/40 text-xs tracking-wide mt-1">
                          {project.subtitle}
                        </p>
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
        )}

        {/* REQUEST TAB */}
        {activeTab === "request" && (
          <section className="animate-fade-in max-w-xl">
            <div className="mb-8">
              <h2 className="font-bebas text-5xl tracking-wider text-white">
                Оставить{" "}
                <span
                  style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  заявку
                </span>
              </h2>
              <p className="text-white/40 text-sm mt-2 font-light">
                Заполните форму — я свяжусь с вами в ближайшее время
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                  style={{ focusBorderColor: FIRE_COLOR } as React.CSSProperties}
                  onFocus={e => e.target.style.borderColor = "#ff6b00"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Возраст</label>
                  <input
                    type="number"
                    placeholder="Ваш возраст"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                    onFocus={e => e.target.style.borderColor = "#ff6b00"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Пол</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                    onFocus={e => e.target.style.borderColor = "#ff6b00"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                  >
                    <option value="" className="bg-[#111]">Выберите</option>
                    <option value="male" className="bg-[#111]">Мужской</option>
                    <option value="female" className="bg-[#111]">Женский</option>
                    <option value="other" className="bg-[#111]">Другой</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Номер телефона</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                  onFocus={e => e.target.style.borderColor = "#ff6b00"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Электронная почта</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300"
                  onFocus={e => e.target.style.borderColor = "#ff6b00"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              <button
                className="w-full mt-2 text-white font-semibold tracking-widest uppercase text-sm py-4 rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                style={{ background: FIRE_VERT }}
              >
                <Icon name="Send" size={16} />
                Отправить заявку
              </button>
            </div>
          </section>
        )}

        {/* SOCIAL TAB */}
        {activeTab === "social" && (
          <section className="animate-fade-in">
            <div className="mb-8">
              <h2 className="font-bebas text-5xl tracking-wider text-white">
                Социальные{" "}
                <span
                  style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
                >
                  сети
                </span>
              </h2>
              <p className="text-white/40 text-sm mt-2 font-light">
                Следите за новыми работами и обновлениями
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SOCIALS.map((s, i) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="group relative block p-6 rounded-2xl border transition-all duration-500 hover:scale-[1.03] overflow-hidden"
                  style={{
                    background: s.bg,
                    borderColor: s.border,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: s.color }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${s.color}20`, color: s.color }}
                    >
                      <Icon name={s.icon} size={24} />
                    </div>
                    <h3 className="font-bebas text-3xl tracking-wider text-white mb-1">{s.name}</h3>
                    <p className="text-sm font-light" style={{ color: s.color }}>{s.handle}</p>
                    <div
                      className="mt-5 flex items-center gap-2 text-xs font-medium tracking-wide opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ color: s.color }}
                    >
                      <span>Перейти</span>
                      <Icon name="ArrowRight" size={12} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div
              className="mt-8 p-6 rounded-2xl border flex items-center justify-between"
              style={{ borderColor: "rgba(255,107,0,0.25)", background: "rgba(255,107,0,0.07)" }}
            >
              <div>
                <p className="text-white font-medium text-sm">Хочешь сотрудничество?</p>
                <p className="text-white/40 text-xs mt-1 font-light">Оставь заявку и обсудим проект</p>
              </div>
              <button
                onClick={() => setActiveTab("request")}
                className="text-white text-xs font-semibold px-5 py-2.5 rounded-xl tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ background: FIRE_VERT }}
              >
                Оставить заявку
              </button>
            </div>
          </section>
        )}

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
