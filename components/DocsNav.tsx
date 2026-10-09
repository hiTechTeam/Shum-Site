"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type MenuItem = {
  href: string;
  label: string;
  /** Sections on this page that make the item active; none means "the page itself". */
  sections?: string[];
  /** The item stands for the page that is open. */
  page?: boolean;
};

export type MenuGroup = { title: string; items: MenuItem[] };

/** Watches which section sits near the top of the screen. */
function useCurrentSection(ids: string[]) {
  const [current, setCurrent] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const pick = () => {
      // The last section whose heading has reached the top, where an anchor
      // link puts it (scroll-margin 24px). A lower line would jump ahead to the
      // next short section.
      const line = 80;
      let found: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) found = el.id;
      }
      // At the very bottom the last short sections never reach the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        found = elements[elements.length - 1].id;
      }
      setCurrent(found);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    window.addEventListener("hashchange", pick);
    // Jumps to an anchor do not always emit a scroll event; crossing these
    // thresholds does.
    const observer = new IntersectionObserver(pick, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
      window.removeEventListener("hashchange", pick);
    };
  }, [key]);

  return current;
}

export function DocsNav({
  groups,
  toc,
  menuLabel,
  tocLabel,
}: {
  groups: MenuGroup[];
  toc: { id: string; label: string }[];
  menuLabel: string;
  tocLabel: string;
}) {
  const current = useCurrentSection(toc.map((t) => t.id));
  const items = groups.flatMap((g) => g.items);
  const matched = items.find((i) => current && i.sections?.includes(current));
  const isActive = (item: MenuItem) => (matched ? item === matched : Boolean(item.page));

  const link = (item: MenuItem) => {
    const active = isActive(item);
    const props = {
      className: active ? "is-active" : undefined,
      "aria-current": active ? ("location" as const) : undefined,
    };
    // A hash target is a plain link so the browser scrolls to it.
    return item.href.includes("#") ? (
      <a key={item.href} href={item.href} {...props}>{item.label}</a>
    ) : (
      <Link key={item.href} href={item.href} {...props}>{item.label}</Link>
    );
  };

  return (
    <>
      <aside className="docs-menu" aria-label={menuLabel}>
        {groups.map((g) => (
          <div key={g.title} className="docs-group">
            <span className="label">{g.title}</span>
            {g.items.map(link)}
          </div>
        ))}
      </aside>
      <nav className="docs-toc" aria-label={tocLabel}>
        <span className="label">{tocLabel}</span>
        {toc.map((t) => (
          <a key={t.id} href={`#${t.id}`} className={current === t.id ? "is-active" : undefined}>
            {t.label}
          </a>
        ))}
      </nav>
    </>
  );
}
