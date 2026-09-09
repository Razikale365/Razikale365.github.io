import { defineConfig } from "astro/config";
const site = process.env.SITE_URL;
if (site && (new URL(site).protocol !== "https:" || new URL(site).pathname !== "/")) {
  throw new Error("SITE_URL must be an HTTPS root URL, without a subpath.");
}
export default defineConfig({
  output: "static",
  ...(site ? { site } : {}),
  devToolbar: { enabled: false },
});
