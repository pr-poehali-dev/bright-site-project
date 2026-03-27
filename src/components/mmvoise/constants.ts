export type Tab = "projects" | "request" | "social" | "about";

export const FIRE = "linear-gradient(90deg, #ff4500, #ff6b00, #ffaa00)";
export const FIRE_VERT = "linear-gradient(135deg, #ff4500, #ff6b00, #ffaa00)";
export const FIRE_COLOR = "#ff6b00";

export const PROJECTS = [
  {
    id: 1,
    title: "The Amazing Digital Circus!",
    subtitle: "Визуальная идентика / Постер",
    year: "2024",
    tags: ["Брендинг", "Иллюстрация", "Типографика"],
    image: "https://avatars.mds.yandex.net/get-entity_search/1974363/807790801/SUx150_2x",
    color: "#ff6b00",
  },
  {
    id: 2,
    title: "Murder Drones",
    subtitle: "Концепт-арт / Ключевой визуал",
    year: "2024",
    tags: ["Концепт", "Тёмная тема", "Sci-Fi"],
    image: "https://avatars.mds.yandex.net/i?id=31a26fcacee3e2c5324839600094bf42fe329fc9-4012918-images-thumbs&n=13",
    color: "#ff3c3c",
  },
];

export const SOCIALS = [
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
