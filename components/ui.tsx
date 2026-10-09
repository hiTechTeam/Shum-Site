import Link from "next/link";
import type { ReactNode } from "react";
import { CopyButton, type CopyLabels } from "./CopyCommand";
import { dict, href, type Lang } from "@/lib/i18n";
import { BandNoise } from "./pixel";

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="page-head">
      <BandNoise variant={0} />
      <div className="container">
        <span className="label">{eyebrow}</span>
        <h1 className="h1">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
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
  lang,
}: {
  system: string;
  tool: string;
  command?: string;
  note: ReactNode;
  lang: Lang;
}) {
  const c = dict[lang].common;
  return (
    <div className="install">
      <span className="label">{system}</span>
      <h3 className="h3">{tool}</h3>
      <div className="command">
        {command ? (
          <>
            <code>{command}</code>
            <CopyButton text={command} labels={c as CopyLabels} />
          </>
        ) : (
          <code className="pending">{c.pending}</code>
        )}
      </div>
      <p className="note-sm">{note}</p>
    </div>
  );
}

/**
 * Documentation layout: section menu, article, table of contents.
 * Links that point at a part of a page are plain anchors: the router does not
 * scroll for a hash on the page that is already open.
 */
export function DocsLayout({
  lang,
  current,
  toc,
  children,
}: {
  lang: Lang;
  current: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  const t = dict[lang].docsMenu;
  const guide = ["/docs/", "/downloads/", "/docs/#contact", "/docs/#message"];
  const technical = ["/protocol/", "/security/", "/protocol/#stable"];
  const item = (path: string, label: string) => {
    const to = href(lang, path);
    const isActive = path === current;
    return path.includes("#") ? (
      <a key={path} href={to}>{label}</a>
    ) : (
      <Link key={path} href={to} className={isActive ? "is-active" : undefined} aria-current={isActive ? "page" : undefined}>
        {label}
      </Link>
    );
  };
  return (
    <div className="container docs">
      <aside className="docs-menu" aria-label={t.menuLabel}>
        <div className="docs-group">
          <span className="label">{t.guide}</span>
          {guide.map((p, i) => item(p, t.guideLinks[i]))}
        </div>
        <div className="docs-group">
          <span className="label">{t.technical}</span>
          {technical.map((p, i) => item(p, t.technicalLinks[i]))}
        </div>
      </aside>
      <article className="docs-article">{children}</article>
      <nav className="docs-toc" aria-label={t.onThisPage}>
        <span className="label">{t.onThisPage}</span>
        {toc.map((x) => (
          <a key={x.id} href={`#${x.id}`}>{x.label}</a>
        ))}
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

export function Terminal({ lines, lang }: { lines: string[]; lang: Lang }) {
  return (
    <div className="terminal">
      <div className="terminal-head">
        <span className="label">Terminal</span>
        <CopyButton text={lines.join("\n")} labels={dict[lang].common as CopyLabels} withLabel />
      </div>
      <pre>{lines.join("\n")}</pre>
    </div>
  );
}
