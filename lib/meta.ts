import type { Metadata } from "next";
import { dict, href, type Lang } from "./i18n";

/**
 * Per-page metadata: title, canonical address, the same page in the other
 * language and the link preview.
 */
export function pageMeta(lang: Lang, path: string, title?: string): Metadata {
  const t = dict[lang].meta;
  const url = href(lang, path);
  return {
    ...(title ? { title } : {}),
    alternates: {
      canonical: url,
      languages: { ru: path, en: href("en", path), "x-default": path },
    },
    openGraph: {
      type: "website",
      siteName: "Shum",
      url,
      title: title ? `${title} | Shum` : t.title,
      description: t.description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
    },
  };
}
