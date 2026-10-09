import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, PixelStep } from "@/components/pixel";
import { Badge, BlockHead, Install, PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Загрузки" };

const INSTALL_SCRIPT = "https://raw.githubusercontent.com/hiTechTeam/Shum-CLI/main/install.sh";

const before = [
  { title: "Первый запуск", text: "Придумайте имя и выберите аватар. Ни номера, ни пароля не нужно.", href: "/docs/" },
  { title: "Разрешение Bluetooth", text: "Чтобы видеть людей рядом, разрешите Shum доступ к Bluetooth.", href: "/docs/#message" },
  { title: "Данные и ключи", text: "Ключи хранятся только на устройстве. Узнайте, что будет, если удалить профиль.", href: "/security/" },
];

export default function Downloads() {
  return (
    <>
      <PageHeader
        eyebrow="Приложения / версии"
        title="Скачать Shum"
        lead="Shum пока в разработке. Здесь видно, что уже можно попробовать, а что ещё впереди."
      />
      <PixelStep from="var(--hero)" to="var(--bg)" />

      <section className="section-tight pt-80">
        <div className="container stack-24">
          <BlockHead title="Мобильные устройства" text="Shum в кармане: переписка рядом по Bluetooth и через интернет." />
          <div className="grid-2">
            <div className="platform">
              <div className="platform-head"><h2 className="h2">iOS</h2><Badge>В разработке</Badge></div>
              <h3 className="h3">Shum для iPhone</h3>
              <p className="lead">Переписка, люди рядом и контакты по QR-коду. Готовится к выходу в App Store.</p>
              <span className="meta">Готовится к выходу</span>
            </div>
            <div className="platform">
              <div className="platform-head"><h2 className="h2">Android</h2><Badge>В разработке</Badge></div>
              <h3 className="h3">Shum для Android</h3>
              <p className="lead">Появится после версии для iPhone.</p>
              <span className="meta">В планах</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-24">
          <BlockHead title="Десктоп" text="Shum на компьютере: та же переписка, что на телефоне, и связь рядом по Bluetooth." />
          <div className="grid-3">
            {[
              ["macOS", "Приложение для Mac."],
              ["Windows", "Приложение для Windows."],
              ["Linux", "Приложение для Linux."],
            ].map(([name, text]) => (
              <div key={name} className="platform platform-sm">
                <h3 className="h3 h3-lg">{name}</h3>
                <p className="muted">{text}</p>
                <Badge>В разработке</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-24">
          <BlockHead title="Браузер" text="Откройте вкладку и пишите. Без установки, но и без связи рядом: браузер умеет только интернет." />
          <div className="platform">
            <h3 className="h2">Shum в браузере</h3>
            <p className="muted">Веб-версия в разработке.</p>
            <div className="row-16">
              <Badge>В разработке</Badge>
              <span className="btn btn-secondary is-disabled" aria-disabled>Открыть веб-версию <Arrow /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container stack-24">
          <BlockHead
            title="CLI"
            text="Shum для тех, кто живёт в терминале: команды и полноэкранный интерфейс. Превью 0.1.5 для macOS 15 и новее на Apple Silicon."
          />
          <div className="grid-2">
            <Install
              system="macOS"
              tool="Homebrew"
              command="brew install hitechteam/shum/shum"
              note="macOS 15 и новее, Apple Silicon. Обновление командой brew upgrade."
            />
            <Install
              system="macOS"
              tool="curl"
              command={`curl -fsSL ${INSTALL_SCRIPT} | sh`}
              note={
                <>
                  Скачивает выпуск из GitHub Releases и сверяет SHA-256.{" "}
                  <a href="https://github.com/hiTechTeam/Shum-CLI/blob/main/install.sh" className="inline-link">
                    Посмотреть скрипт <Arrow />
                  </a>
                </>
              }
            />
          </div>
          <div className="grid-3">
            <Install system="Windows" tool="winget" note="Появится вместе с пакетом." />
            <Install system="Debian / Ubuntu" tool="apt" note="Появится вместе с пакетом." />
            <Install system="Fedora" tool="dnf" note="Появится вместе с пакетом." />
          </div>
        </div>
      </section>

      <section className="section-tight pb-80">
        <div className="container stack-28">
          <h2 className="h2">Перед установкой</h2>
          <div className="link-rows">
            {before.map((b) => (
              <Link key={b.title} href={b.href} className="link-row">
                <strong>{b.title}</strong>
                <span>{b.text}</span>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PixelStep from="var(--bg)" to="var(--nav)" />
    </>
  );
}
