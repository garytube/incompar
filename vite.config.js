// vite.config.js

import { sveltekit } from '@sveltejs/kit/vite';
import banner from 'vite-plugin-banner';
import viteImagemin from 'vite-plugin-imagemin';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import path from 'path';

const today = new Date().toLocaleDateString();

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
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
	],
	resolve: {
		alias: {
			$assets: path.resolve('src/assets')
		}
	},
	server: {
		port: 3000
	}
};

export default config;
