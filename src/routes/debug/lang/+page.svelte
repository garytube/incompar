<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ url }) => {
		const lang = url.searchParams.get('lang');
		// check if lang is either 'en', 'de' or 'es'
		if (lang && ['en', 'de', 'es'].includes(lang)) {
			return {
				props: {
					lang
				}
			};
		}
		return {
			status: 404
		};
	};
</script>

<script>
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/H1.svelte';
	import Folder from '$lib/Folder.svelte';

	import translations from '$lib/translations/translations';
	export let lang;
	$: data = translations[lang];

	const saveClipboard = () => {
		let text = JSON.stringify(data, null, 2);
		navigator.clipboard.writeText(text).then(() => {
			alert('Text in Zwischenablage kopiert');
		});
	};

	const langs = {
		en: 'English',
		de: 'Deutsch',
		es: 'Español'
	};
</script>

<Container>
	<div class="flex space-x-2 mb-12">
		{#each Object.entries(langs) as [key, value]}
			<a
				href={`/debug/lang?lang=${key}`}
				class:border-slate-700={lang == key}
				class:text-slate-700={lang == key}
				class="max-w-max  py-2 px-3  text-xs border border-slate-300   text-slate-400 {$$props.class} hover:bg-slate-900 duration-300 "
			>
				Übersetzung in für <span class="px-1 font-bold">{value}</span> anpassen
			</a>
		{/each}
	</div>
	<H1>Language [{langs[lang]}]</H1>
	<p>
		Dies ist die Aktuelle Übersetzung für das Sprachpaket [{langs[lang]} - {lang}] <br />

		Auf der Linken Seite musst du nur die passenden Text eintragen. Wenn du das geschafft hast,
		klickst du einfach auf den Button. <br />

		Die Übersetzung wird dann in eine <strong>Zwischenablage</strong> kopiert, welche du einfach an deinen
		Entwickler schickst
	</p>
	<button
		on:click={saveClipboard}
		class="my-4 max-w-max  inline-flex items-center justify-center px-2 py-1.5 sm:px-6 sm:py-2 border border-transparent bg-slate-900 text-white {$$props.class} hover:opacity-60 duration-300 "
	>
		Übersetzung in Zwischenablage kopieren
	</button>

	<div class="grid grid-cols-2 gap-4">
		<div class="col-span-1">
			<Folder bind:data />
		</div>
		<pre class="text-xs cursor-context-menu" on:click={saveClipboard}>{JSON.stringify(
				data,
				null,
				2
			)}</pre>
	</div>
</Container>
