
import type { RequestHandler } from './$types';
import type { Lang } from 'src/global';
import { invalidate } from '$app/navigation';

/**
 * This Endpoint soul purpose is to return the current language selected by the user.
 * by setting a cookie with the language code.
 *
 * this endpoints gets called by the src/lib/store/userLanguage.ts Store
 * @param param0
 * @returns
 */
export const PUT: RequestHandler = async ({ request }) => {
	const lang = (await request.text()) as Lang;

	if (lang == 'de' || lang == 'en' || lang == 'es') {
		return new Response(lang, {
			headers: {
				'content-type': 'application/json; charset=utf-8',
				'Set-Cookie': `lang=${lang}; SameSite=Strict; HttpOnly; Path=/`
			}
		})

	} else {
		return new Response('en', {
			headers: {
				'content-type': 'application/json; charset=utf-8',
				'Set-Cookie': `lang=en; SameSite=Strict; HttpOnly; Path=/`
			}
		})
	};
}
