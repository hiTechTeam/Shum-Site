import { Overview } from "@/components/pages/Overview";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta("ru", "/");

export default function Page() {
  return <Overview lang="ru" />;
}
