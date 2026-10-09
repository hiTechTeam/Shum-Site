import Link from "next/link";
import { Arrow } from "@/components/pixel";
import { Badge, DocsLayout, Note } from "@/components/ui";
import { dict, href, type Lang } from "@/lib/i18n";
import { specUrl } from "@/lib/site";

const TOC_IDS = ["version", "concepts", "spec", "stable", "compat"];
const SPEC_FILES = [
  "00-overview.md",
  "01-keys-identity.md",
  "02-contact-card.md",
  "03-envelope.md",
  "04-packets.md",
  "05-rules.md",
  "06-transport-bluetooth.md",
  "07-transport-nostr.md",
  "08-push-api.md",
  "09-storage.md",
  "10-devices.md",
  "11-relays.md",
  "12-v1-stable.md",
];

export function Protocol({ lang }: { lang: Lang }) {
  const t = dict[lang].protocol;
  const toc = TOC_IDS.map((id, i) => ({ id, label: t.toc[i] }));
  return (
    <div className="docs-page">
      <DocsLayout lang={lang} current="/protocol/" toc={toc}>
        <span className="label">{t.eyebrow}</span>
        <h1 className="h2">{t.title}</h1>
        <p className="lead">{t.lead}</p>

        <div id="version" className="version-box">
          <Badge>v1</Badge>
          <div>
            <strong>{t.version[0]}</strong>
            <p className="muted">{t.version[1]}</p>
          </div>
        </div>

        <section className="doc-step">
          <h2 className="h3">{t.how[0]}</h2>
          <p>{t.how[1]}</p>
        </section>

        <dl id="concepts" className="concepts">
          {t.concepts.map(([term, text]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>

        <section id="spec" className="doc-step">
          <h2 className="h3">{t.specTitle}</h2>
          {t.specNote && <p className="note-sm">{t.specNote}</p>}
          <div className="spec-list">
            {t.spec.map((title, i) => (
              <a key={SPEC_FILES[i]} href={specUrl(SPEC_FILES[i])} className="spec-row" target="_blank" rel="noreferrer">
                <span className="label">{String(i).padStart(2, "0")}</span>
                <span>{title}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <div id="stable">
          <Note title={t.stable[0]}>{t.stable[1]}</Note>
        </div>

        <section id="compat" className="doc-step">
          <h2 className="h3">{t.compat[0]}</h2>
          <p>{t.compat[1]}</p>
        </section>

        <Link href={href(lang, "/security/")} className="link-more">{t.next} →</Link>
      </DocsLayout>
    </div>
  );
}
