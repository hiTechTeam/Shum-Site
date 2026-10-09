"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./pixel";
import { sections } from "@/lib/site";

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="nav">
      <Link href="/" className="brand" aria-label="Shum, на главную">
        <Logo />
        <span>Shum</span>
      </Link>
      <nav className="nav-links" aria-label="Разделы">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className={active(s.href) ? "is-active" : undefined}>
            {s.label}
          </Link>
        ))}
      </nav>
      <span className="locale" title="Английская версия появится позже">EN</span>
      <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        Меню <span aria-hidden>{open ? "×" : "☰"}</span>
      </button>
      {open && (
        <nav className="menu" aria-label="Разделы сайта">
          <span className="label">Разделы сайта</span>
          {sections.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className={active(s.href) ? "is-active" : undefined}>
              {s.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
