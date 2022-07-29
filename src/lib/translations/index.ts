import i18n from 'sveltekit-i18n';
import translations from './translations';
import ReasonsTranslation from './12reasons';
import ModelsTranslation from './models';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	initLocale: 'en',
	translations
};

export const { t, l, locales, locale, loadTranslations } = new i18n(config);

export { ModelsTranslation, ReasonsTranslation };