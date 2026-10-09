import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PixelStep } from "@/components/pixel";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Безопасность" };

const pillars = [
  ["01", "Ключи на устройстве", "Профиль создаётся на устройстве. Ни регистрации, ни номера телефона."],
  ["02", "Содержимое зашифровано", "Прочитать сообщение может только получатель. В пути оно остаётся зашифрованным."],
  ["03", "Релеи доставляют данные", "Релеи Nostr передают закрытые конверты через интернет. Если релей недоступен, доставка задержится."],
];

const data = [
  ["Ключи профиля", "На вашем устройстве", "Без ключей профиль не восстановить. Делайте резервную копию."],
  ["История переписки", "Локальное хранилище клиента", "Переписка защищена настолько, насколько защищено устройство."],
  ["Зашифрованные сообщения", "Устройства и релейный транспорт", "Сколько хранить конверты, решает каждый релей."],
  ["Метаданные соединения", "У сетевой инфраструктуры", "Шифрование скрывает текст, но не сам факт соединения."],
  [
    "Уведомления",
    "Push-сервер Shum и Apple",
    "Сервер видит, кто кому отправил уведомление. Apple видит имя отправителя в заголовке. Текст сообщений не передаётся.",
  ],
];

const limits = [
  [
    "Устройство должно быть защищено",
    "Кто держит в руках разблокированный телефон, тот видит переписку. Ставьте блокировку экрана и обновляйте систему.",
  ],
  [
    "Удаление не отзывает доставленные сообщения",
    "Удаление стирает профиль на устройстве. Копии у собеседников и конверты на релеях могут остаться.",
  ],
  [
    "Проверяйте, кого добавляете",
    "Имя и аватар может взять кто угодно. Сверяйте код безопасности при встрече или по каналу, которому доверяете.",
  ],
];

export default function Security() {
  return (
    <>
      <PageHeader
        eyebrow="Безопасность / приватность"
        title="Что защищает Shum"
        lead="Что Shum защищает, где лежат ваши данные и чего он пока не скрывает."
      />
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section">
        <div className="container cards">
          {pillars.map(([n, title, text]) => (
            <div key={n} className="card card-static">
              <span className="label num">{n}</span>
              <h2 className="h3">{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--panel)" />

      <section className="section panel">
        <div className="container stack">
          <h2 className="h2">Где находятся ваши данные</h2>
          <table className="data-table">
            <thead>
              <tr><th className="label">Данные</th><th className="label">Хранение</th><th className="label">Что важно знать</th></tr>
            </thead>
            <tbody>
              {data.map(([what, where, note]) => (
                <tr key={what}><td>{what}</td><td>{where}</td><td>{note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <PixelStep from="var(--panel)" to="var(--bg)" />

      <section className="section">
        <div className="container split">
          <div className="intro">
            <span className="label">Границы защиты</span>
            <h2 className="h2">
              Что важно
              <br />
              учитывать
            </h2>
          </div>
          <div className="limits">
            {limits.map(([title, text]) => (
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
          <h2 className="h2">Технические подробности</h2>
          <p className="lead">Форматы ключей, подписи и правила обработки сообщений описаны в спецификации.</p>
          <div className="actions">
            <Link href="/protocol/" className="btn btn-secondary">Протокол <Arrow /></Link>
            <Link href="/docs/" className="btn btn-secondary">Начало работы</Link>
          </div>
        </div>
      </section>
      <PixelStep from="var(--hero)" to="var(--nav)" />
    </>
  );
}
