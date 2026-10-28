import type { APIRoute } from "astro";
import { projectSlugs } from "../content/projects";
import { localePath, locales } from "../i18n/locales";
export const GET: APIRoute = ({ site }) => {
  const paths = ["/", "/resume/", ...projectSlugs.map((slug) => `/work/${slug}/`)];
  const entries = site
    ? locales
        .flatMap((locale) => paths.map((path) => localePath(locale, path)))
        .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`)
        .join("")
    : "";
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
