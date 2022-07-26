import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = event.request.headers.get('cookie');

	// get the highest priority language from the accept-language header
	const lang = event.request.headers.get('accept-language')?.split(',')?.[0]?.split(';')?.[0];

	const defaultLang = lang;

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
