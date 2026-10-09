import type { Metadata } from "next";
import { Docs } from "@/components/pages/Docs";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: dict.ru.docs.meta };

export default function Page() {
  return <Docs lang="ru" />;
}
