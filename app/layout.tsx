import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/pixelify-sans/600.css";
import "@fontsource/pixelify-sans/700.css";
import "@fontsource/tiny5/400.css";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Shum: разговор начинается рядом", template: "%s | Shum" },
  description:
    "Децентрализованный мессенджер без номера телефона. По Bluetooth рядом, даже когда нет сети, и через интернет на любом расстоянии.",
};

export const viewport: Viewport = { themeColor: "#080a09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
