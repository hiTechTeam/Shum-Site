// The protocol lives inside the documentation, so it has no item of its own.
export const sectionPaths = ["/", "/downloads/", "/docs/", "/security/"] as const;

const github = "https://github.com/hiTechTeam";

export const repos = [
  { name: "Shum-iOS", href: `${github}/Shum-iOS` },
  { name: "Shum-CLI", href: `${github}/Shum-CLI` },
  { name: "Shum-Core", href: `${github}/Shum-Core` },
  { name: "Shum-Protocol", href: `${github}/Shum-Protocol` },
] as const;

export const specUrl = (file: string) => `${github}/Shum-Protocol/blob/main/spec/${file}`;

export const installScript = "https://raw.githubusercontent.com/hiTechTeam/Shum-CLI/main/install.sh";
export const installScriptSource = `${github}/Shum-CLI/blob/main/install.sh`;
