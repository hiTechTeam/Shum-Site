import Link from "next/link";
import { Arrow, HeroNoise, PixelStep } from "@/components/pixel";

const clients: { name: string; status: string; ready?: boolean; where: string }[] = [
  { name: "iOS", status: "В разработке", where: "Мобильные устройства" },
  { name: "Android", status: "В разработке", where: "Мобильные устройства" },
  { name: "macOS", status: "В разработке", where: "Десктоп" },
  { name: "Windows", status: "В разработке", where: "Десктоп" },
  { name: "Linux", status: "В разработке", where: "Десктоп" },
  { name: "Браузер", status: "В разработке", where: "Браузер, только через интернет" },
  { name: "CLI для macOS", status: "Превью 0.1.5", ready: true, where: "CLI, через Homebrew" },
  { name: "CLI для Linux и Windows", status: "В разработке", where: "CLI" },
];

const sections = [
  { n: "01", href: "/downloads/", title: "Приложения", text: "Где Shum уже работает и как его поставить." },
  { n: "02", href: "/docs/", title: "Документация", text: "Как создать профиль, найти собеседника и не потерять ключи." },
  { n: "03", href: "/protocol/", title: "Протокол", text: "Как устроены ключи, сообщения и доставка. Для тех, кто пишет свой клиент." },
];

export default function Overview() {
  return (
    <>
      <section className="hero section">
        <HeroNoise />
        <div className="container">
          <div className="hero-main">
            <div className="hero-intro">
              <span className="label">Shum / децентрализованный мессенджер</span>
              <h1 className="h1">
                Разговор
                <br />
                начинается рядом
              </h1>
              <p className="lead">
                Мессенджер без номера телефона и без центрального сервера. По Bluetooth рядом, даже когда нет
                сети, и через интернет на любом расстоянии.
              </p>
              <div className="actions">
                <Link href="/downloads/" className="btn btn-primary">Скачать Shum</Link>
                <Link href="/docs/" className="btn btn-secondary">Начало работы <Arrow /></Link>
              </div>
            </div>

            <div className="route" aria-label="Как проходит сообщение">
              <span className="label">Одно сообщение. Два пути.</span>
              <div className="people">
                <div className="person"><img src="/avatars/igor.svg" alt="" />Вы</div>
                <div className="person"><img src="/avatars/anna.svg" alt="" />Контакт</div>
              </div>
              <div className="transports">
                <div className="transport"><span><span className="arrow">↔</span>&nbsp; Bluetooth</span><span className="label">Рядом, без интернета</span></div>
                <div className="transport"><span><Arrow />&nbsp; Nostr-релеи</span><span className="label">Через интернет, на любом расстоянии</span></div>
              </div>
              <hr />
              <p className="note">Прочитать сообщение может только получатель.</p>
            </div>
          </div>

          <div className="facts">
            <div><span className="label">Личность</span><strong>Ключ на вашем устройстве</strong></div>
            <div><span className="label">Контакты</span><strong>QR-код, ссылка или встреча рядом</strong></div>
            <div><span className="label">Спецификация</span><strong>Открытый протокол</strong></div>
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section">
        <div className="container stack">
          <h2 className="h2">Всё о Shum</h2>
          <div className="cards">
            {sections.map((s) => (
              <Link key={s.n} href={s.href} className="card">
                <span className="label num">{s.n}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
                <span className="more">Перейти в раздел <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--panel)" />

      <section className="section panel">
        <div className="container stack">
          <div className="head-row">
            <h2 className="h2">Клиенты и версии</h2>
            <Link href="/downloads/" className="link-more">Все загрузки <Arrow /></Link>
          </div>
          <table className="clients">
            <tbody>
              {clients.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td><span className={c.ready ? "status is-ready" : "status"}>{c.status}</span></td>
                  <td>{c.where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <PixelStep from="var(--panel)" to="var(--hero)" />

      <section className="section trust">
        <div className="container">
          <div className="intro">
            <span className="label">Безопасность</span>
            <h2 className="h2">
              Понимать, кому
              <br />
              вы доверяете.
            </h2>
          </div>
          <div className="body">
            <p className="lead">
              Сообщения шифруются на вашем устройстве, а релеи видят только закрытые конверты. Мы честно пишем и
              о том, чего Shum пока не скрывает.
            </p>
            <Link href="/security/" className="btn btn-secondary">Модель безопасности <Arrow /></Link>
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--nav)" />
    </>
  );
}
