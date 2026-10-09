import type { Metadata } from "next";
import { Security } from "@/components/pages/Security";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: dict.en.security.meta };

export default function Page() {
  return <Security lang="en" />;
}
