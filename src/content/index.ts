import type { Locale } from "../i18n/locales";
import { en } from "./locales/en";
import { ptBr } from "./locales/pt-br";
import { sv } from "./locales/sv";
import type { SiteText } from "./types";

const text: Record<Locale, SiteText> = { en, "pt-br": ptBr, sv };

export const getText = (locale: Locale): SiteText => text[locale];
