import type { ReactNode } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/pixelify-sans/600.css";
import "@fontsource/pixelify-sans/700.css";
import "@fontsource/tiny5/400.css";
import "@fontsource/jetbrains-mono/400.css";
import "@/app/globals.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { themeScript } from "./ThemeToggle";
import type { Lang } from "@/lib/i18n";

/** Root document for one language; each language has its own root layout. */
export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
