import { Overview } from "@/components/pages/Overview";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("en", "/");

export default function Page() {
  return <Overview lang="en" />;
}
