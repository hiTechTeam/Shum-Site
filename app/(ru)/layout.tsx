import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";
import { dict } from "@/lib/i18n";

const t = dict.ru.meta;

export const metadata: Metadata = {
  title: { default: t.title, template: "%s | Shum" },
  description: t.description,
  alternates: { languages: { ru: "/", en: "/en/" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080a09" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell lang="ru">{children}</SiteShell>;
}
