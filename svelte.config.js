// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],

	kit: {
		prerender: { enabled: true },
		adapter: adapter(),
		methodOverride: {
			allowed: ['PUT']
		},
		files: {
			assets: 'src/static'
		}
	}
};

export default config;
