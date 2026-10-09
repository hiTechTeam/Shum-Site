import Link from "next/link";
import { Arrow, Logo } from "./pixel";
import { repos } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href="/" className="brand">
            <Logo />
            <span>Shum</span>
          </Link>
          <p>
            Децентрализованный мессенджер.
            <br />
            Ключи остаются у вас.
          </p>
        </div>
        <div className="footer-col">
          <h2>Продукт</h2>
          <Link href="/downloads/">Загрузки</Link>
          <Link href="/docs/">Начало работы</Link>
        </div>
        <div className="footer-col">
          <h2>Разработчикам</h2>
          <Link href="/protocol/">Открытый протокол</Link>
          <Link href="/docs/">Документация</Link>
          {repos.map((r) => (
            <a key={r.name} href={r.href} className="repo">
              {r.name} <Arrow />
            </a>
          ))}
        </div>
        <div className="footer-col">
          <h2>О Shum</h2>
          <Link href="/security/">Безопасность</Link>
          <Link href="/security/">Модель приватности</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Shum, 2026</span>
        <span>Без номера телефона. С открытым протоколом.</span>
      </div>
    </footer>
  );
}
