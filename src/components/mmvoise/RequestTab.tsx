import Icon from "@/components/ui/icon";
import { FIRE, FIRE_VERT, FIRE_COLOR } from "./constants";

interface FormData {
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
}

interface RequestTabProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function RequestTab({ formData, setFormData }: RequestTabProps) {
  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none transition-all duration-300";

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = FIRE_COLOR;
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.1)";
  };

  return (
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
        <p className="text-white/40 text-sm mt-2 font-light">Твой голос для нас важная часть</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Имя</label>
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
              className={inputClass}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Пол</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
              style={{ colorScheme: "dark" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
            className={inputClass}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <label className="text-xs tracking-widest uppercase text-white/30 mb-2 block font-light">Электронная почта</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
  );
}
