export const locales = ["en", "pt-br", "sv"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  {
    readonly htmlLang: string;
    readonly ogLocale: string;
    readonly label: string;
    readonly name: string;
  }
> = {
  en: { htmlLang: "en", ogLocale: "en_US", label: "EN", name: "English" },
  "pt-br": { htmlLang: "pt-BR", ogLocale: "pt_BR", label: "PT-BR", name: "Português (Brasil)" },
  sv: { htmlLang: "sv", ogLocale: "sv_SE", label: "SV", name: "Svenska" },
};

/** Prefixes a locale-neutral path ("/resume/") with the locale segment; English lives at the root. */
export const localePath = (locale: Locale, path = "/") =>
  locale === defaultLocale ? path : `/${locale}${path}`;

/** Params for `[...lang]` routes: English renders at the root (undefined), others under their prefix. */
export const localeParams = () =>
  locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));

export const resumePdf = (locale: Locale) =>
  locale === defaultLocale ? "/joao-navarro-resume.pdf" : `/joao-navarro-resume-${locale}.pdf`;
