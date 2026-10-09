"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type MenuItem = {
  href: string;
  label: string;
  /** Sections on this page that make the item active; none means "the page itself". */
  sections?: string[];
  /** The item stands for the page that is open. */
  page?: boolean;
};

export type MenuGroup = { title: string; items: MenuItem[] };

// How long a clicked section keeps the highlight while the page scrolls to it.
const PIN_MS = 900;

/**
 * Which section the reader is at. A clicked or linked section wins at once and
 * holds while the page travels; at the bottom of the page the section from
 * the address wins if it is on screen, since it can never reach the top.
 */
function useCurrentSection(ids: string[]) {
  const [current, setCurrent] = useState<string | null>(null);
  const pin = useRef<{ id: string; until: number } | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      return elements.some((el) => el.id === id) ? id : null;
    };

    const pick = () => {
      const held = pin.current;
      if (held && performance.now() < held.until) {
        setCurrent(held.id);
        return;
      }
      pin.current = null;
      // The last section whose heading has reached the top, where an anchor
      // link puts it (scroll-margin 24px).
      const line = 80;
      let found: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) found = el.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        const linked = fromHash();
        const linkedOnScreen =
          linked !== null && document.getElementById(linked)!.getBoundingClientRect().top < window.innerHeight;
        found = linkedOnScreen ? linked : elements[elements.length - 1].id;
      }
      setCurrent(found);
    };

    const follow = () => {
      const linked = fromHash();
      if (linked) pin.current = { id: linked, until: performance.now() + PIN_MS };
      pick();
    };

    follow();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    window.addEventListener("hashchange", follow);
    // Jumps to an anchor do not always emit a scroll event; crossing these
    // thresholds does.
    const observer = new IntersectionObserver(pick, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
      window.removeEventListener("hashchange", follow);
    };
  }, [key]);

  const choose = (id: string) => {
    pin.current = { id, until: performance.now() + PIN_MS };
    setCurrent(id);
  };

  return [current, choose] as const;
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
  const [current, choose] = useCurrentSection(toc.map((t) => t.id));
  // A hash link to a section on this page highlights it the moment it is clicked.
  const onPick = (target: string) => () => {
    const id = target.split("#")[1];
    if (id && document.getElementById(id)) choose(id);
  };
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
      <a key={item.href} href={item.href} onClick={onPick(item.href)} {...props}>{item.label}</a>
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
          <a key={t.id} href={`#${t.id}`} onClick={onPick(`#${t.id}`)} className={current === t.id ? "is-active" : undefined}>
            {t.label}
          </a>
        ))}
      </nav>
    </>
  );
}
