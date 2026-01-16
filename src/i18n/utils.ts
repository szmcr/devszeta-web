import { translations, defaultLang, type Language, type TranslationKey } from "./translations";

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations[defaultLang][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, "").replace(/^(es|en)\//, "");
  
  // For default language (es), don't add prefix
  if (lang === defaultLang) {
    return `/${cleanPath}` || "/";
  }
  
  // For other languages, add prefix
  return `/${lang}/${cleanPath}` || `/${lang}`;
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === "es" ? "en" : "es";
}
