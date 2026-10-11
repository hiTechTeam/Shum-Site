export const siteUrl = "https://getshum.tech";

// The protocol lives inside the documentation, so it has no item of its own.
export const sectionPaths = ["/", "/downloads/", "/docs/", "/security/"] as const;

const github = "https://github.com/hiTechTeam";

export const repos = [
  { name: "Shum-iOS", href: `${github}/Shum-iOS` },
  { name: "Shum-CLI", href: `${github}/Shum-CLI` },
  { name: "Shum-Core", href: `${github}/Shum-Core` },
  { name: "Shum-Protocol", href: `${github}/Shum-Protocol` },
  { name: "Shum-App", href: `${github}/Shum-App` },
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
export const windowsInstallScript = "https://raw.githubusercontent.com/hiTechTeam/Shum-CLI/main/install.ps1";
export const windowsInstallScriptSource = `${github}/Shum-CLI/blob/main/install.ps1`;
// The latest desktop release, so the link survives new versions.
const appLatest = `${github}/Shum-App/releases/latest/download`;
export const macAppDownload = `${appLatest}/Shum-macOS.dmg`;
export const appDownloads = {
  windows: [
    ["x64", `${appLatest}/Shum-Windows-x64-setup.exe`],
    ["ARM64", `${appLatest}/Shum-Windows-arm64-setup.exe`],
  ],
  linux: [
    ["x64 .deb", `${appLatest}/Shum-Linux-x64.deb`],
    ["ARM64 .deb", `${appLatest}/Shum-Linux-arm64.deb`],
    ["x64 AppImage", `${appLatest}/Shum-Linux-x64.AppImage`],
    ["ARM64 AppImage", `${appLatest}/Shum-Linux-arm64.AppImage`],
  ],
} as const;
export const appReleases = `${github}/Shum-App/releases`;
