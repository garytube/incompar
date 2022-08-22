import type { GetSession, Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {

	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	// get the highest priority language from the accept-language header
	event.locals.lang = event.request.headers.get('accept-language')?.split(',')?.[0]?.split(';')?.[0].split('-')?.[0];



	if (cookies.lang) event.locals.lang = cookies.lang

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${event.locals.lang}">`),
	});

	if (!cookies['lang']) {
		response.headers.set(
			'set-cookie',
			cookie.serialize('lang', event.locals.lang, { path: '/', httpOnly: true, sameSite: 'Strict' }))

	}

	return response
};


