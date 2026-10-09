import { Security } from "@/components/pages/Security";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/security/", dict.en.security.meta);

export default function Page() {
  return <Security lang="en" />;
}
