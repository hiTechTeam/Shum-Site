import Link from "next/link";
import { DocsLayout, Note, Terminal } from "@/components/ui";
import { dict, href, type Lang } from "@/lib/i18n";

const TOC_IDS = ["profile", "contact", "message", "transports", "cli", "devices"];

export function Docs({ lang }: { lang: Lang }) {
  const t = dict[lang].docs;
  const toc = TOC_IDS.map((id, i) => ({ id, label: t.toc[i] }));
  return (
    <div className="docs-page">
      <DocsLayout lang={lang} current="/docs/" toc={toc}>
        <span className="label">{t.eyebrow}</span>
        <h1 className="h2">{t.title}</h1>
        <p className="lead">{t.lead}</p>

        <Note title={t.need[0]}>{t.need[1]}</Note>

        <section id="profile" className="doc-step">
          <h2 className="h3">{t.profile[0]}</h2>
          <p>{t.profile[1]}</p>
        </section>

        <div className="profile-sample">
          <img src="/avatars/igor.svg" alt="" width={89} height={89} />
          <div>
            <strong className="h3">{t.sample[0]}</strong>
            <p className="muted">{t.sample[1]}</p>
            <code className="label">Shum ID: 6f8c…2a91</code>
          </div>
        </div>

        <section id="contact" className="doc-step">
          <h2 className="h3">{t.contact[0]}</h2>
          <p>{t.contact[1]}</p>
        </section>

        <section id="message" className="doc-step">
          <h2 className="h3">{t.message[0]}</h2>
          <p>{t.message[1]}</p>
        </section>

        <section id="transports" className="doc-step">
          <h2 className="h3">{t.transports[0]}</h2>
          {t.transports.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section id="cli" className="doc-step">
          <h2 className="h3">{t.cliTitle}</h2>
          <p>{t.cli.intro}</p>
          <p>
            {t.cli.before} <Link href={href(lang, "/downloads/#cli")} className="inline-link">{t.cli.link}</Link>
            {t.cli.after}
          </p>
          <ul className="steps">
            <li><code>shum init</code> {t.cli.steps[0]}</li>
            <li><code>shum</code> {t.cli.steps[1]}</li>
            <li><code>shum chats</code> {t.cli.steps[2]}</li>
          </ul>
        </section>
        <Terminal lang={lang} lines={t.cli.lines} />

        <div id="devices">
          <Note title={t.devices[0]}>{t.devices[1]}</Note>
        </div>

        <div className="doc-next">
          <span className="label">{t.next[0]}</span>
          <Link href={href(lang, "/security/")} className="link-more">{t.next[1]} →</Link>
        </div>
      </DocsLayout>
    </div>
  );
}
