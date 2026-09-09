import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";
const base = process.env.TEST_URL || "http://127.0.0.1:4322";
const paths = [
  "/",
  "/work/dispensamais/",
  "/work/regmais/",
  "/work/study-os/",
  "/resume/",
  "/404.html",
];
const dir = "output/playwright/final";
await mkdir(dir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const report = [];
const links = new Set();
try {
  for (const width of [375, 768, 1280, 1536]) {
    for (const path of paths) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      const response = await page.goto(`${base}${path}`);
      assert.equal(response?.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      for (const img of await page.locator("img").all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate((image) => image.decode());
        assert.equal(await img.evaluate((image) => image.complete && image.naturalWidth > 0), true);
      }
      await page.evaluate(() => scrollTo(0, 0));
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      assert.equal(overflow, false, `${path} overflows at ${width}`);
      assert.equal(await page.locator("h1").count(), 1);
      const audit = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      assert.deepEqual(
        audit.violations.map((item) => ({
          id: item.id,
          nodes: item.nodes.map((node) => node.target),
        })),
        [],
        `${path} accessibility at ${width}`,
      );
      for (const href of await page
        .locator("a[href]")
        .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href"))))
        if (href) links.add(new URL(href, page.url()).href);
      const name = path === "/" ? "home" : path.replaceAll("/", "-").replace(/^-|-$/g, "");
      await page.screenshot({ path: `${dir}/${name}-${width}.png`, fullPage: true });
      assert.deepEqual(errors, [], `${path} browser errors`);
      report.push({
        path,
        width,
        overflow,
        axeViolations: audit.violations.length,
        consoleErrors: errors.length,
      });
      await context.close();
    }
  }
  const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Skip to content");
  await page.screenshot({ path: `${dir}/keyboard-skip.png` });
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(":focus").getAttribute("id"), "main");
  await page.getByRole("link", { name: "Read the DispensaMais case study →", exact: true }).click();
  assert.equal(new URL(page.url()).pathname, "/work/dispensamais/");
  await page.getByRole("link", { name: "← All selected work", exact: true }).click();
  assert.equal(new URL(page.url()).hash, "#work");
  await page.getByRole("link", { name: "Résumé", exact: true }).first().click();
  assert.equal(new URL(page.url()).pathname, "/resume/");
  const pdf = await page.request.get(`${base}/joao-navarro-resume.pdf`);
  assert.equal(pdf.status(), 200);
  assert.equal((await pdf.body()).subarray(0, 5).toString(), "%PDF-");
  for (const href of links) {
    const url = new URL(href);
    if (url.origin !== new URL(base).origin) continue;
    const response = await page.request.get(href);
    assert.equal(response.status(), 200, `Broken link: ${href}`);
    if (url.hash) {
      await page.goto(href);
      assert.equal(
        await page.locator(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).count(),
        1,
        `Missing anchor: ${href}`,
      );
    }
  }
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto(base);
  assert.equal(
    await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
    false,
    "320px overflow",
  );
  await page.screenshot({ path: `${dir}/home-320.png`, fullPage: true });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.evaluate(() => {
    document.documentElement.style.zoom = "2";
  });
  assert.equal(
    await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
    false,
    "200% zoom overflow",
  );
  await page.screenshot({ path: `${dir}/home-zoom200.png`, fullPage: true });
  await page.close();
  await writeFile(
    `${dir}/checks.json`,
    JSON.stringify(
      {
        pages: report,
        internalLinks: "PASS",
        keyboard: "PASS",
        navigation: "PASS",
        pdf: "PASS",
        zoom200: "PASS",
        width320: "PASS",
        links: [...links],
      },
      null,
      2,
    ),
  );
  console.log(
    `PASS: ${report.length} route/viewport combinations, axe, console, links, keyboard, navigation, PDF, 320px and 200% zoom.`,
  );
} finally {
  await browser.close();
}
