/// <reference types="@sveltejs/kit" />
declare module '*&imagetools' {
	const out;
	export default out;
}

export interface Model {
	image: string;
	type: 'triangular' | 'rectangular' | string;
	title: string;
	text: {
		de: string;
		en: string;
		es: string;
	};
}
export type Lang = 'de' | 'en' | string;
