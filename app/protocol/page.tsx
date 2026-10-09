import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/pixel";
import { Badge, DocsLayout, Note } from "@/components/ui";
import { specUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Протокол" };

const toc = [
  { id: "version", label: "Версия протокола" },
  { id: "concepts", label: "Основные понятия" },
  { id: "spec", label: "Спецификация v1" },
  { id: "stable", label: "v1 stable" },
  { id: "compat", label: "Совместимость" },
];

const spec = [
  ["00", "Обзор и термины", "00-overview.md"],
  ["01", "Ключи и личность", "01-keys-identity.md"],
  ["02", "Карточка контакта и приглашения", "02-contact-card.md"],
  ["03", "Конверт сообщения", "03-envelope.md"],
  ["04", "Виды пакетов", "04-packets.md"],
  ["05", "Правила приёма и слияния", "05-rules.md"],
  ["06", "Транспорт Bluetooth", "06-transport-bluetooth.md"],
  ["07", "Транспорт Nostr", "07-transport-nostr.md"],
  ["08", "API push-сервера", "08-push-api.md"],
  ["09", "Хранилище на устройстве", "09-storage.md"],
  ["10", "Несколько устройств", "10-devices.md"],
  ["11", "Релеи профиля и сети релеев", "11-relays.md"],
  ["12", "Первая стабильная версия", "12-v1-stable.md"],
];

const concepts = [
  ["Shum ID", "Идентификатор на основе публичного Noise-ключа"],
  ["Конверт", "Зашифрованные данные для получателя"],
  ["Транспорт", "Bluetooth рядом или Nostr через интернет"],
];

export default function Protocol() {
  return (
    <div className="docs-page">
      <DocsLayout current="/protocol/" toc={toc}>
        <span className="label">Спецификация / v1</span>
        <h1 className="h2">Протокол Shum</h1>
        <p className="lead">
          Как устроены личность, сообщения и доставка в Shum. Всё, что нужно, чтобы написать совместимый клиент.
        </p>

        <div id="version" className="version-box">
          <Badge>v1</Badge>
          <div>
            <strong>Текущая реализация</strong>
            <p className="muted">Черновик. Первая стабильная версия в работе.</p>
          </div>
        </div>

        <section className="doc-step">
          <h2 className="h3">Как устроен протокол</h2>
          <p>
            Профиль в Shum это набор ключей на устройстве. Каждое сообщение подписано и упаковано в конверт,
            который может открыть только получатель. Конверт одинаков для Bluetooth и Nostr, отличается только
            способ доставки.
          </p>
        </section>

        <dl id="concepts" className="concepts">
          {concepts.map(([term, text]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>

        <section id="spec" className="doc-step">
          <h2 className="h3">Спецификация v1</h2>
          <div className="spec-list">
            {spec.map(([n, title, file]) => (
              <a key={n} href={specUrl(file)} className="spec-row" target="_blank" rel="noreferrer">
                <span className="label">{n}</span>
                <span>{title}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <div id="stable">
          <Note title="В работе: первая стабильная версия">
            Протокол ещё не выпущен. В первую стабильную версию входят несколько устройств одного профиля,
            привязка по QR-коду в обе стороны, синхронизация и свои релеи. Пока эти функции недоступны в
            приложениях.
          </Note>
        </div>

        <section id="compat" className="doc-step">
          <h2 className="h3">Совместимость клиентов</h2>
          <p>
            Все клиенты проверяются на одних и тех же тестовых примерах: подписи, конверты, правила слияния,
            транспорты. Любое изменение формата получает свой номер версии.
          </p>
        </section>

        <Link href="/security/" className="link-more">Перейти к модели безопасности →</Link>
      </DocsLayout>
    </div>
  );
}
