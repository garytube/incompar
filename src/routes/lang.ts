import type { RequestHandler } from '@sveltejs/kit';
import type { Lang } from 'src/global';

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
