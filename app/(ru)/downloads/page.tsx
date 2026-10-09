import type { Metadata } from "next";
import { Downloads } from "@/components/pages/Downloads";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: dict.ru.downloads.meta };

export default function Page() {
  return <Downloads lang="ru" />;
}
