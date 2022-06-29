import type { RequestHandler } from '@sveltejs/kit';
import type { Lang } from 'src/global';

/**
 * This Endpoint soul purpose is to return the current language selected by the user.
 * by setting a cookie with the language code.
 *
 * this endpoints gets called by the src/lib/store/userLanguage.ts Store
 * @param param0
 * @returns
 */
export const put: RequestHandler = async ({ request }) => {
	const lang = (await request.text()) as Lang;

	if (lang == 'de' || lang == 'en') {
		return {
			status: 201,
			headers: {
				'Set-Cookie': `lang=${lang}; SameSite=Strict; HttpOnly; Path=/`
			}
		};
	}

	return {
		status: 400,
		body: `not a valid language value: ${lang}`
	};
};
