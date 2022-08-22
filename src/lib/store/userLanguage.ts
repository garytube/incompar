import type { Lang } from 'src/global';




/**
 * This Endpoint soul purpose is to return the current language selected by the user.
 * by setting a cookie with the language code.
 *
 * this endpoints gets called by the src/lib/store/userLanguage.ts Store
 */
export const setLang = (lang: Lang) => {
  fetch('/lang', { method: 'PUT', body: lang });
};
