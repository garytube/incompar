const colors = require('tailwindcss/colors');

const primary = '#474f53';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		theme: {
			fontFamily: {
				sans: ['Quicksand']
			}
		},
		extend: {
			colors: {
				primary: primary,
				secondary: colors.slate
			},
			boxShadow: {
				'hard-blue-left': '-15px 10px #dce7ee6e',
				'hard-blue-right': '15px 10px #dce7ee6e',
				'hard-black-left': `-15px 10px 0 0 ${primary}`,
				'hard-black-right': `15px 10px 0 0 ${primary}`
			}
		}
	},
	plugins: []
};
