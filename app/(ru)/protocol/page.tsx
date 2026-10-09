import type { Metadata } from "next";
import { Protocol } from "@/components/pages/Protocol";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: dict.ru.protocol.meta };

export default function Page() {
  return <Protocol lang="ru" />;
}
