import { Downloads } from "@/components/pages/Downloads";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/downloads/", dict.en.downloads.meta);

export default function Page() {
  return <Downloads lang="en" />;
}
