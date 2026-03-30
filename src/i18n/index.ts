import i18n from "./config";

// Keep <html lang="…"> synced for a11y/SEO.
const setHtmlLang = (lng?: string) => {
  const normalized = (lng || "en").split("-")[0];
  document.documentElement.lang = normalized;
};

setHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on("languageChanged", (lng) => setHtmlLang(lng));

export default i18n;

