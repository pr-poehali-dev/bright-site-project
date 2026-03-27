import Icon from "@/components/ui/icon";
import { FIRE, FIRE_COLOR } from "./constants";

export default function AboutTab() {
  return (
    <section className="animate-fade-in">
      <div
        className="relative rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-end"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <img
          src="https://avatars.mds.yandex.net/i?id=31a26fcacee3e2c5324839600094bf42fe329fc9-4012918-images-thumbs&n=13"
          alt="О нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

        <div className="relative z-10 p-10 md:p-14">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-light">О команде</p>
          <h2 className="font-bebas text-5xl md:text-7xl tracking-wider text-white leading-tight mb-6">
            Мы команда{" "}
            <span
              style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              озвучки
            </span>
            <br />
            ищем людей
          </h2>

          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border mb-8"
            style={{ background: "rgba(0,0,0,0.5)", borderColor: "rgba(255,107,0,0.3)" }}
          >
            <Icon name="Mail" size={16} style={{ color: FIRE_COLOR }} />
            <a
              href="mailto:vetchenkoaloyna0@mail.ru"
              className="text-sm font-light tracking-wide hover:opacity-80 transition-opacity"
              style={{ color: FIRE_COLOR }}
            >
              vetchenkoaloyna0@mail.ru
            </a>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
            <p className="text-white/30 text-xs font-light tracking-widest">
              Поддержка от <span className="text-white/50">molwe</span>
            </p>
            <p
              className="font-bebas text-lg tracking-widest"
              style={{ backgroundImage: FIRE, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              MMvoice™ 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
