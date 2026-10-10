import Link from "next/link";
import { Arrow, BandNoise, HeroNoise, PixelStep } from "@/components/pixel";
import { dict, href, type Lang } from "@/lib/i18n";

// Status of each row in the clients table, by position; the rest are in development.
const STATUS: Record<number, "review" | "ready" | "windows"> = { 0: "review", 6: "ready", 7: "windows" };
const CARD_PATHS = ["/downloads/", "/docs/", "/protocol/"];

export function Overview({ lang }: { lang: Lang }) {
  const t = dict[lang].overview;
  const c = dict[lang].common;
  const to = (p: string) => href(lang, p);
  return (
    <>
      <section className="hero section">
        <HeroNoise />
        <div className="container">
          <div className="hero-main">
            <div className="hero-intro">
              <span className="label">{t.eyebrow}</span>
              <h1 className="h1">
                {t.title[0]}
                <br />
                {t.title[1]}
              </h1>
              <p className="lead">{t.lead}</p>
              <div className="actions">
                <Link href={to("/downloads/")} className="btn btn-primary">{t.get}</Link>
                <Link href={to("/docs/")} className="btn btn-secondary">{t.start} <Arrow /></Link>
              </div>
            </div>

            <div className="route" aria-label={t.routeLabel}>
              <span className="label">{t.route}</span>
              <div className="people">
                <div className="person"><img src="/avatars/igor.svg" alt="" />{t.you}</div>
                <div className="person"><img src="/avatars/anna.svg" alt="" />{t.contact}</div>
              </div>
              <div className="transports">
                <div className="transport">
                  <span><span className="arrow">↔</span>&nbsp; Bluetooth</span>
                  <span className="label">{t.bluetooth}</span>
                </div>
                <div className="transport">
                  <span><Arrow />&nbsp; {t.relays}</span>
                  <span className="label">{t.relaysNote}</span>
                </div>
              </div>
              <hr />
              <p className="note">{t.onlyRecipient}</p>
            </div>
          </div>

          <div className="facts">
            {t.facts.map(([label, value]) => (
              <div key={label}>
                <span className="label">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section">
        <div className="container stack">
          <h2 className="h2">{t.allTitle}</h2>
          <div className="cards">
            {t.all.map(([title, text], i) => (
              <Link key={title} href={to(CARD_PATHS[i])} className="card">
                <span className="label num">0{i + 1}</span>
                <h3 className="h3">{title}</h3>
                <p>{text}</p>
                <span className="more">{c.more} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--panel)" />

      <section className="section panel">
        <div className="container stack">
          <div className="head-row">
            <h2 className="h2">{t.clientsTitle}</h2>
            <Link href={to("/downloads/")} className="link-more">{t.allDownloads} <Arrow /></Link>
          </div>
          <table className="clients">
            <tbody>
              {t.clients.map(([name, where], i) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>
                    {STATUS[i] === "ready" ? (
                      <span className="status is-ready">{t.preview}</span>
                    ) : STATUS[i] === "windows" ? (
                      <span className="status is-ready">{t.windowsPreview}</span>
                    ) : STATUS[i] === "review" ? (
                      <span className="status is-review">{c.review}</span>
                    ) : (
                      <span className="status">{c.inDev}</span>
                    )}
                  </td>
                  <td>{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <PixelStep from="var(--panel)" to="var(--hero)" />

      <section className="section trust">
        <BandNoise variant={1} />
        <div className="container">
          <div className="intro">
            <span className="label">{t.trustLabel}</span>
            <h2 className="h2">
              {t.trustTitle[0]}
              <br />
              {t.trustTitle[1]}
            </h2>
          </div>
          <div className="body">
            <p className="lead">{t.trustText}</p>
            <Link href={to("/security/")} className="btn btn-secondary">{t.trustButton} <Arrow /></Link>
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--nav)" />
    </>
  );
}
