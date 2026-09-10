import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import sharp from "sharp";
const base = process.env.TEST_URL || "http://127.0.0.1:4322";
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage();
  await page.goto(`${base}/resume/`);
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: "public/joao-navarro-resume.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
  });
} finally {
  await browser.close();
}
await mkdir("public", { recursive: true });
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f7f6f2"/><path d="M70 90h1060" stroke="#245b45" stroke-width="4"/><text x="70" y="155" font-family="Arial,sans-serif" font-size="24" fill="#245b45">JOÃO NAVARRO / SOFTWARE ENGINEER</text><text x="65" y="285" font-family="Georgia,serif" font-size="83" fill="#242824">Real workflows.</text><text x="65" y="375" font-family="Georgia,serif" font-size="83" fill="#242824">Thoughtful systems.</text><text x="70" y="485" font-family="Arial,sans-serif" font-size="25" fill="#5e645e">Full-Stack / Applied AI Engineer</text><path d="M70 530h1060" stroke="#d8ddd5"/><text x="70" y="578" font-family="Arial,sans-serif" font-size="21" fill="#242824">DispensaMais / Fiscal Brain / RegMais</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Public résumé PDF and 1200×630 Open Graph image generated.");
