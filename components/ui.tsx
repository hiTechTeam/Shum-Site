import Link from "next/link";
import type { ReactNode } from "react";
import { CopyButton } from "./CopyCommand";
import { Arrow } from "./pixel";

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="page-head">
      <div className="container">
        <span className="label">{eyebrow}</span>
        <h1 className="h1">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function Badge({ children, ready = false }: { children: ReactNode; ready?: boolean }) {
  return <span className={ready ? "badge is-ready" : "badge"}>{children}</span>;
}

export function BlockHead({ title, text }: { title: string; text: string }) {
  return (
    <div className="block-head">
      <h2 className="h2">{title}</h2>
      <p className="muted">{text}</p>
    </div>
  );
}

export function Install({
  system,
  tool,
  command,
  note,
  wide = false,
}: {
  system: string;
  tool: string;
  command?: string;
  note: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "install is-wide" : "install"}>
      <span className="label">{system}</span>
      <h3 className="h3">{tool}</h3>
      <div className="command">
        {command ? (
          <>
            <code>{command}</code>
            <CopyButton text={command} />
          </>
        ) : (
          <code className="pending">Пакет готовится</code>
        )}
      </div>
      <p className="note-sm">{note}</p>
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <Arrow />
    </a>
  );
}

type DocLink = { href: string; label: string };

const guide: DocLink[] = [
  { href: "/docs/", label: "Начало работы" },
  { href: "/downloads/", label: "Приложения и версии" },
  { href: "/docs/#contact", label: "Профиль и контакты" },
  { href: "/docs/#message", label: "Bluetooth и релеи" },
];
const technical: DocLink[] = [
  { href: "/protocol/", label: "Открытый протокол" },
  { href: "/security/", label: "Безопасность" },
  { href: "/protocol/#stable", label: "Первая стабильная версия" },
];

/** Documentation layout: section menu, article, table of contents. */
export function DocsLayout({
  current,
  toc,
  children,
}: {
  current: string;
  toc: { id: string; label: string; group?: string }[];
  children: ReactNode;
}) {
  const item = (l: DocLink) => (
    <Link key={l.label} href={l.href} className={l.href === current ? "is-active" : undefined}>
      {l.label}
    </Link>
  );
  return (
    <div className="container docs">
      <aside className="docs-menu" aria-label="Разделы документации">
        <div className="docs-group">
          <span className="label">Руководство</span>
          {guide.map(item)}
        </div>
        <div className="docs-group">
          <span className="label">Технический раздел</span>
          {technical.map(item)}
        </div>
      </aside>
      <article className="docs-article">{children}</article>
      <nav className="docs-toc" aria-label="На этой странице">
        <span className="label">На этой странице</span>
        {toc.map((t) =>
          t.group ? (
            <span key={t.group} className="label toc-group">{t.group}</span>
          ) : (
            <a key={t.id} href={`#${t.id}`}>{t.label}</a>
          ),
        )}
      </nav>
    </div>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="doc-note">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}

export function Terminal({ lines }: { lines: string[] }) {
  return (
    <div className="terminal">
      <div className="terminal-head">
        <span className="label">Terminal</span>
        <CopyButton text={lines.join("\n")} withLabel />
      </div>
      <pre>{lines.join("\n")}</pre>
    </div>
  );
}
