import { Docs } from "@/components/pages/Docs";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ru", "/docs/", dict.ru.docs.meta);

export default function Page() {
  return <Docs lang="ru" />;
}
