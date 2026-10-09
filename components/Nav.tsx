"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./pixel";
import { ThemeToggle } from "./ThemeToggle";
import { dict, href, switchPath, type Lang } from "@/lib/i18n";
import { sectionPaths } from "@/lib/site";

export function Nav({ lang }: { lang: Lang }) {
  const t = dict[lang].nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Path without the language prefix, so both versions share one check.
  const path = lang === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const active = (p: string) =>
    p === "/" ? path === "/" : p === "/docs/" ? /^\/(docs|protocol)\//.test(path) : path.startsWith(p);

  const links = sectionPaths.map((p, i) => (
    <Link
      key={p}
      href={href(lang, p)}
      className={active(p) ? "is-active" : undefined}
      aria-current={active(p) ? "page" : undefined}
      onClick={() => setOpen(false)}
    >
      {t.sections[i]}
    </Link>
  ));

  return (
    <header className="nav">
      <Link href={href(lang, "/")} className="brand" aria-label={t.home}>
        <Logo />
        <span>Shum</span>
      </Link>
      <nav className="nav-links" aria-label={t.siteSections}>{links}</nav>
      <div className="nav-tools">
        <ThemeToggle labels={t.theme} />
        <Link href={switchPath(lang, pathname)} className="locale" hrefLang={lang === "ru" ? "en" : "ru"} aria-label={t.otherLabel}>
          {t.other}
        </Link>
        <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          {t.menu} <span aria-hidden>{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav className="menu" aria-label={t.siteSections}>
          <span className="label">{t.siteSections}</span>
          {links}
        </nav>
      )}
    </header>
  );
}
