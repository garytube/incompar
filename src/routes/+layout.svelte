<script context="module">
	import { loadTranslations } from '$lib/translations';

	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ session }) => {
		await loadTranslations(session.lang);
		return {};
	};
</script>

<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';
</script>

<div class="layout min-h-screen ">
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.layout {
		width: 100%;

		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
