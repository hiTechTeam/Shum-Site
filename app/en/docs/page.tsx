import { Docs } from "@/components/pages/Docs";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/docs/", dict.en.docs.meta);

export default function Page() {
  return <Docs lang="en" />;
}
