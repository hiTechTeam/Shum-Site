import Link from "next/link";
import { Arrow, PixelStep } from "@/components/pixel";
import { PageHeader } from "@/components/ui";
import { dict, href, type Lang } from "@/lib/i18n";

export function Security({ lang }: { lang: Lang }) {
  const t = dict[lang].security;
  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section">
        <div className="container cards">
          {t.pillars.map(([title, text], i) => (
            <div key={title} className="card card-static">
              <span className="label num">0{i + 1}</span>
              <h2 className="h3">{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--panel)" />

      <section className="section panel">
        <div className="container stack">
          <h2 className="h2">{t.dataTitle}</h2>
          <table className="data-table">
            <thead>
              <tr>
                {t.dataHead.map((h) => (
                  <th key={h} className="label">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.data.map(([what, where, note]) => (
                <tr key={what}>
                  <td>{what}</td>
                  <td>{where}</td>
                  <td>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <PixelStep from="var(--panel)" to="var(--bg)" />

      <section className="section">
        <div className="container split">
          <div className="intro">
            <span className="label">{t.limitsLabel}</span>
            <h2 className="h2">
              {t.limitsTitle[0]}
              <br />
              {t.limitsTitle[1]}
            </h2>
          </div>
          <div className="limits">
            {t.limits.map(([title, text]) => (
              <div key={title}>
                <h3 className="h3">{title}</h3>
                <p className="muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--hero)" />

      <section className="section trust">
        <div className="container stack-24 single">
          <h2 className="h2">{t.techTitle}</h2>
          <p className="lead">{t.techText}</p>
          <div className="actions">
            <Link href={href(lang, "/protocol/")} className="btn btn-secondary">{t.protocol} <Arrow /></Link>
            <Link href={href(lang, "/docs/")} className="btn btn-secondary">{t.start}</Link>
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--nav)" />
    </>
  );
}
