// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import viteImagemin from 'vite-plugin-imagemin';

import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

const today = new Date().toLocaleDateString();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],

	kit: {
		alias: {
			$assets: 'src/assets'
		},
		adapter: adapter(),
		methodOverride: {
			allowed: ['PUT']
		},
		files: {
			assets: 'src/static'
		},
		vite: defineConfig({
			plugins: [
				banner('Generated incopmpar.es:' + today),
				viteImagemin({
					optipng: {
						optimizationLevel: 7
					},
					mozjpeg: {
						progressive: true,
						quality: 70,
						quantTable: 3,
						smooth: 60
					},
					pngquant: {
						quality: [0.8, 0.9],
						speed: 4
					}
				}),
				ViteWebfontDownload([
					'https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;400;700;900&display=swap'
					// 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
				])
			]
		})
	}
};

export default config;
