import type { Metadata } from "next";
import { Docs } from "@/components/pages/Docs";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = { title: dict.en.docs.meta };

export default function Page() {
  return <Docs lang="en" />;
}
