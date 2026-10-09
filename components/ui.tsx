import type { ReactNode } from "react";
import { CopyButton, type CopyLabels } from "./CopyCommand";
import { dict, href, type Lang } from "@/lib/i18n";
import { BandNoise } from "./pixel";
import { DocsNav, type MenuItem } from "./DocsNav";

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

export function Badge({ children, tone }: { children: ReactNode; tone?: "review" | "dev" }) {
  return <span className={tone ? `badge is-${tone}` : "badge"}>{children}</span>;
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

/** Documentation layout: section menu, article, table of contents. */
export function DocsLayout({
  lang,
  current,
  toc,
  children,
}: {
  lang: Lang;
  current: "/docs/" | "/protocol/";
  toc: { id: string; label: string }[];
  children: ReactNode;
}) {
  const t = dict[lang].docsMenu;
  const pages: MenuItem[] = [
    { href: href(lang, "/docs/"), label: t.guide, active: current === "/docs/" },
    { href: href(lang, "/protocol/"), label: t.technical, active: current === "/protocol/" },
  ];
  return (
    <div className="container docs">
      <DocsNav pages={pages} toc={toc} menuLabel={t.menuLabel} tocLabel={t.onThisPage} />
      <article className="docs-article">{children}</article>
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
