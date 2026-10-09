import { Protocol } from "@/components/pages/Protocol";
import { dict } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/protocol/", dict.en.protocol.meta);

export default function Page() {
  return <Protocol lang="en" />;
}
