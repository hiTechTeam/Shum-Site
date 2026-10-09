import { Protocol } from "@/components/pages/Protocol";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ru", "/protocol/", dict.ru.protocol.meta);

export default function Page() {
  return <Protocol lang="ru" />;
}
