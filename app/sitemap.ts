import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const paths = ["/", "/downloads/", "/docs/", "/protocol/", "/security/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    alternates: { languages: { ru: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` } },
  }));
}
