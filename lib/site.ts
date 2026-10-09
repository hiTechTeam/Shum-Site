export const sections = [
  { href: "/", label: "Обзор" },
  { href: "/downloads/", label: "Загрузки" },
  { href: "/docs/", label: "Документация" },
  { href: "/protocol/", label: "Протокол" },
  { href: "/security/", label: "Безопасность" },
] as const;

const github = "https://github.com/hiTechTeam";

export const repos = [
  { name: "Shum-iOS", href: `${github}/Shum-iOS` },
  { name: "Shum-CLI", href: `${github}/Shum-CLI` },
  { name: "Shum-Core", href: `${github}/Shum-Core` },
  { name: "Shum-Protocol", href: `${github}/Shum-Protocol` },
] as const;

export const specUrl = (file: string) =>
  `${github}/Shum-Protocol/blob/main/spec/${file}`;
