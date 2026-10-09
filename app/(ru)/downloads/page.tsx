import { Downloads } from "@/components/pages/Downloads";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ru", "/downloads/", dict.ru.downloads.meta);

export default function Page() {
  return <Downloads lang="ru" />;
}
