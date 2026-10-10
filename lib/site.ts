export const siteUrl = "https://getshum.tech";

// The protocol lives inside the documentation, so it has no item of its own.
export const sectionPaths = ["/", "/downloads/", "/docs/", "/security/"] as const;

const github = "https://github.com/hiTechTeam";

export const repos = [
  { name: "Shum-iOS", href: `${github}/Shum-iOS` },
  { name: "Shum-CLI", href: `${github}/Shum-CLI` },
  { name: "Shum-Core", href: `${github}/Shum-Core` },
  { name: "Shum-Protocol", href: `${github}/Shum-Protocol` },
] as const;

/** Each repository has README.md in English and README.ru.md in Russian. */
export const readmeUrl = (repoHref: string, lang: "ru" | "en") =>
  lang === "ru" ? `${repoHref}/blob/main/README.ru.md` : repoHref;

/** The specification is published in spec/en and spec/ru. */
export const specUrl = (file: string, lang: "ru" | "en") => `${github}/Shum-Protocol/blob/main/spec/${lang}/${file}`;

// install.sh shipped with Shum-CLI 0.1.6. Set to false to hide the curl card
// if the script is ever pulled.
export const INSTALL_SCRIPT_READY = true;

export const installScript = "https://raw.githubusercontent.com/hiTechTeam/Shum-CLI/main/install.sh";
export const installScriptSource = `${github}/Shum-CLI/blob/main/install.sh`;
