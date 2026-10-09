import Link from "next/link";
import { Arrow, PixelStep } from "@/components/pixel";
import { Badge, BlockHead, Install, PageHeader } from "@/components/ui";
import { dict, href, type Lang } from "@/lib/i18n";
import { INSTALL_SCRIPT_READY, installScript, installScriptSource } from "@/lib/site";

const BEFORE_PATHS = ["/docs/", "/docs/#message", "/security/"];

export function Downloads({ lang }: { lang: Lang }) {
  const t = dict[lang].downloads;
  const c = dict[lang].common;
  const mobile = [
    { name: "iOS", info: t.ios },
    { name: "Android", info: t.android },
  ];
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section-tight pt-80">
        <div className="container stack-24">
          <BlockHead title={t.mobile[0]} text={t.mobile[1]} />
          <div className="grid-2">
            {mobile.map(({ name, info: [title, text, meta] }) => (
              <div key={name} className="platform">
                <div className="platform-head">
                  <h2 className="h2">{name}</h2>
                  <Badge>{c.inDev}</Badge>
                </div>
                <h3 className="h3">{title}</h3>
                <p className="lead">{text}</p>
                <span className="meta">{meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-24">
          <BlockHead title={t.desktop[0]} text={t.desktop[1]} />
          <div className="grid-3">
            {t.desktopApps.map(([name, text]) => (
              <div key={name} className="platform platform-sm">
                <h3 className="h3 h3-lg">{name}</h3>
                <p className="muted">{text}</p>
                <Badge>{c.inDev}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-24">
          <BlockHead title={t.browser[0]} text={t.browser[1]} />
          <div className="platform">
            <h3 className="h2">{t.web[0]}</h3>
            <p className="muted">{t.web[1]}</p>
            <div className="row-16">
              <Badge>{c.inDev}</Badge>
              <span className="btn btn-secondary is-disabled" aria-disabled>{t.web[2]} <Arrow /></span>
            </div>
          </div>
        </div>
      </section>

      <section id="cli" className="section-tight">
        <div className="container stack-24">
          <BlockHead title={t.cli[0]} text={t.cli[1]} />
          <div className={INSTALL_SCRIPT_READY ? "grid-2" : "grid-1"}>
            <Install lang={lang} system="macOS" tool="Homebrew" command="brew install hitechteam/shum/shum" note={t.brewNote} />
            {INSTALL_SCRIPT_READY && (
            <Install
              lang={lang}
              system="macOS"
              tool="curl"
              command={`curl -fsSL ${installScript} | sh`}
              note={
                <>
                  {t.curlNote}{" "}
                  <a href={installScriptSource} className="inline-link">{t.viewScript} <Arrow /></a>
                </>
              }
            />
            )}
          </div>
          <div className="grid-3">
            <Install lang={lang} system="Windows" tool="winget" note={t.soon} />
            <Install lang={lang} system="Debian / Ubuntu" tool="apt" note={t.soon} />
            <Install lang={lang} system="Fedora" tool="dnf" note={t.soon} />
          </div>
        </div>
      </section>

      <section className="section-tight pb-80">
        <div className="container stack-28">
          <h2 className="h2">{t.beforeTitle}</h2>
          <div className="link-rows">
            {t.before.map(([title, text], i) => {
              const to = href(lang, BEFORE_PATHS[i]);
              const body = (
                <>
                  <strong>{title}</strong>
                  <span>{text}</span>
                  <Arrow />
                </>
              );
              // A hash target is a plain link so the browser scrolls to it.
              return to.includes("#") ? (
                <a key={title} href={to} className="link-row">{body}</a>
              ) : (
                <Link key={title} href={to} className="link-row">{body}</Link>
              );
            })}
          </div>
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--nav)" />
    </>
  );
}
