import type { Locale } from "../i18n/locales";
import { getText } from "./index";
import type { OpenWorkId } from "./types";

// Public Nordic work. Describe functionality only: no latency statistics, revision-rate
// conclusions or data-licensing claims. The entsoe-py PR is open, not merged.
const openWorkLinks: Record<OpenWorkId, readonly string[]> = {
  "nordic-balancing": [
    "https://github.com/Razikale365/nordic-balancing",
    "https://pypi.org/project/nordic-balancing/",
  ],
  "nordic-balancing-watch": ["https://nordic-balancing-watch.pages.dev/"],
  "entsoe-py": ["https://github.com/EnergieID/entsoe-py/pull/557"],
};

export const getOpenWork = (locale: Locale) =>
  (Object.keys(openWorkLinks) as OpenWorkId[]).map((id) => {
    const text = getText(locale).openWork[id];
    return {
      ...text,
      links: openWorkLinks[id].map((href, index) => ({ href, label: text.linkLabels[index] })),
    };
  });
