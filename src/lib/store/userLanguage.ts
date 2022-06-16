import { browser } from '$app/env';
import { session } from '$app/stores';
import type { Lang } from 'src/global';
import type { Writable } from 'svelte/store';
import { derived } from 'svelte/store';

export const userLanguage = derived<Writable<App.Session>, Lang>(session, ($session, set) => {
	if ($session.lang) {
		set($session.lang);
	} else if (browser) {
		set('en');
	}
});

export const setLang = (lang: Lang) => {
	session.update(($session) => ({ ...$session, lang }));
	fetch('/lang', { method: 'PUT', body: lang });
};
