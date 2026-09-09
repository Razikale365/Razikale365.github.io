import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
const dir = "output/playwright/primitives";
await mkdir(dir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
for (const width of [375, 768, 1280]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto("http://127.0.0.1:4321/primitives");
  await page.evaluate(() => document.fonts.ready);
  results.push({
    width,
    overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
  });
  await page.screenshot({ path: `${dir}/${width}.png`, fullPage: true });
  await page.keyboard.press("Tab");
  await page.screenshot({ path: `${dir}/${width}-focus.png` });
  await page.getByRole("link", { name: "Case-study link", exact: true }).hover();
  await page.screenshot({ path: `${dir}/${width}-hover.png` });
  await page.getByRole("link", { name: "Case-study link", exact: true }).click();
  results.push({ width, navigation: new URL(page.url()).hash });
  await page.close();
}
await browser.close();
await writeFile(`${dir}/checks.json`, JSON.stringify(results, null, 2));
console.log(results);
