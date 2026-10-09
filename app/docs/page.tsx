import type { Metadata } from "next";
import Link from "next/link";
import { DocsLayout, Note, Terminal } from "@/components/ui";

export const metadata: Metadata = { title: "Начало работы" };

const toc = [
  { id: "profile", label: "Создание профиля" },
  { id: "contact", label: "Первый контакт" },
  { id: "message", label: "Отправка сообщения" },
  { id: "cli", label: "CLI" },
  { id: "devices", label: "Несколько устройств" },
];

export default function Docs() {
  return (
    <div className="docs-page">
      <DocsLayout current="/docs/" toc={toc}>
        <span className="label">Документация / руководство</span>
        <h1 className="h2">Начало работы</h1>
        <p className="lead">Три шага до первого сообщения: профиль, собеседник, переписка.</p>

        <Note title="Что понадобится">
          Shum у вас и у собеседника. Для переписки рядом включите Bluetooth, для переписки на расстоянии нужен
          интернет.
        </Note>

        <section id="profile" className="doc-step">
          <h2 className="h3">1. Создайте профиль</h2>
          <p>
            При первом запуске придумайте имя и выберите аватар. В этот момент на устройстве создаются ключи
            профиля. Имя видят собеседники, а Shum ID отличает вас от всех остальных.
          </p>
        </section>

        <div className="profile-sample">
          <img src="/avatars/igor.svg" alt="" width={89} height={89} />
          <div>
            <strong className="h3">Алексей</strong>
            <p className="muted">Личный профиль, ключи на устройстве</p>
            <code className="label">Shum ID: 6f8c…2a91</code>
          </div>
        </div>

        <section id="contact" className="doc-step">
          <h2 className="h3">2. Добавьте контакт</h2>
          <p>
            Покажите свой QR-код, отправьте ссылку или найдите человека рядом. Переписка начнётся, когда он
            примет приглашение.
          </p>
        </section>

        <section id="message" className="doc-step">
          <h2 className="h3">3. Отправьте сообщение</h2>
          <p>
            Рядом сообщения идут по Bluetooth, на расстоянии через релеи Nostr. Статус в чате подскажет, какой
            путь сейчас доступен.
          </p>
        </section>

        <section id="cli" className="doc-step">
          <h2 className="h3">Первый запуск в терминале</h2>
          <p>
            <code>shum init</code> создаст профиль. Потом просто <code>shum</code> откроет полноэкранный
            интерфейс, а <code>shum chats</code> покажет чаты прямо в командной строке.
          </p>
        </section>
        <Terminal lines={["shum init", "shum", "shum chats"]} />

        <div id="devices">
          <Note title="Несколько устройств одного профиля">
            Сейчас профиль работает на одном устройстве. В первой стабильной версии протокола один профиль можно
            будет привязать ко всем своим устройствам по QR-коду, в любую сторону: с телефона на компьютер и
            обратно.
          </Note>
        </div>

        <div className="doc-next">
          <span className="label">Далее</span>
          <Link href="/security/" className="link-more">Как Shum защищает переписку →</Link>
        </div>
      </DocsLayout>
    </div>
  );
}
