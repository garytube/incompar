import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = event.request.headers.get('cookie');
	const doesUserSpeakGerman = event.request.headers.get('accept-language')?.includes('de-DE');

	const defaultLang = doesUserSpeakGerman ? 'de' : 'en';

	if (cookies) {
		const userCookie = cookie.parse(cookies);
		event.locals.lang = userCookie?.lang || defaultLang;
	} else {
		event.locals.lang = defaultLang;
	}

	const response = await resolve(event);
	return response;
};

export const getSession: GetSession = ({ locals }) => {
	return { lang: locals.lang };
};
