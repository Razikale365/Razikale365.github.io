import { mkdir, writeFile } from "node:fs/promises";
import lighthouse from "lighthouse";
import { chromium } from "playwright";
const paths = ["/", "/work/dispensamais/", "/work/regmais/", "/work/fiscal-brain/", "/resume/"];
const base = process.env.TEST_URL || "http://127.0.0.1:4322";
const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--remote-debugging-port=9337"],
});
const dir = "output/lighthouse";
await mkdir(dir, { recursive: true });
const rows = [];
try {
  for (const path of paths) {
    for (const mode of ["mobile", "desktop"]) {
      const runs = [];
      for (let run = 0; run < 3; run++) {
        const flags = {
          port: 9337,
          output: "json",
          logLevel: "error",
          onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
          ...(mode === "desktop"
            ? { preset: "desktop" }
            : {
                formFactor: "mobile",
                screenEmulation: {
                  mobile: true,
                  width: 390,
                  height: 844,
                  deviceScaleFactor: 1,
                  disabled: false,
                },
              }),
        };
        const result = await lighthouse(`${base}${path}`, flags);
        if (!result) throw new Error("No Lighthouse result");
        const scores = Object.fromEntries(
          Object.entries(result.lhr.categories).map(([key, value]) => [
            key,
            Math.round(value.score * 100),
          ]),
        );
        const name = path === "/" ? "home" : path.replaceAll("/", "-").replace(/^-|-$/g, "");
        await writeFile(`${dir}/${name}-${mode}-${run}.json`, JSON.stringify(result.lhr));
        runs.push(scores);
      }
      const medians = Object.fromEntries(
        Object.keys(runs[0]).map((key) => [
          key,
          runs.map((row) => row[key]).sort((a, b) => a - b)[1],
        ]),
      );
      rows.push({ path, mode, scores: medians });
      console.log(JSON.stringify(rows.at(-1)));
    }
  }
  await writeFile(`${dir}/summary.json`, JSON.stringify(rows, null, 2));
} finally {
  await browser.close();
}
