import Icon from "@/components/ui/icon";
import { SOCIALS, FIRE, FIRE_VERT } from "./constants";

interface SocialTabProps {
  onRequestClick: () => void;
}

export default function SocialTab({ onRequestClick }: SocialTabProps) {
  return (
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
          onClick={onRequestClick}
          className="text-white text-xs font-semibold px-5 py-2.5 rounded-xl tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
          style={{ background: FIRE_VERT }}
        >
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
