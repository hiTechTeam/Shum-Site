import Link from "next/link";
import { Arrow, Logo } from "./pixel";
import { dict, href, type Lang } from "@/lib/i18n";
import { readmeUrl, repos } from "@/lib/site";

export function Footer({ lang }: { lang: Lang }) {
  const t = dict[lang].footer;
  const to = (p: string) => href(lang, p);
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href={to("/")} className="brand">
            <Logo />
            <span>Shum</span>
          </Link>
          <p>{t.tagline}</p>
        </div>
        <div className="footer-col">
          <h2>{t.product}</h2>
          <Link href={to("/downloads/")}>{t.downloads}</Link>
          <Link href={to("/docs/")}>{t.start}</Link>
        </div>
        <div className="footer-col">
          <h2>{t.developers}</h2>
          <Link href={to("/protocol/")}>{t.protocol}</Link>
          <Link href={to("/docs/")}>{t.docs}</Link>
          {repos.map((r) => (
            <a key={r.name} href={readmeUrl(r.href, lang)} className="repo">
              {r.name} <Arrow />
            </a>
          ))}
        </div>
        <div className="footer-col">
          <h2>{t.about}</h2>
          <Link href={to("/security/")}>{t.security}</Link>
          <Link href={to("/security/")}>{t.privacy}</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          Shum, 2026. {t.author}{" "}
          <a href="https://github.com/r66cha" className="author" rel="author">
            Ruslan Chukavin <Arrow />
          </a>
        </span>
        <span>{t.bottom}</span>
      </div>
    </footer>
  );
}
