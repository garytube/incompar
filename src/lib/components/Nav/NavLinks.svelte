<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from '$lib/translations';

	const nav = [
		{ de: 'Dreieck-Segel', en: 'Triangular Sails', href: '/sun-square/triangular-sail' },
		{ de: 'Rechteck-Segel', en: 'Rectangular Sails', href: '/sun-square/rectangular-sail' },
		{ de: 'Modelle', en: 'Models', href: '/models' },
		{ de: 'Über Uns', en: 'About Us', href: '/about-us' },
		{ de: 'Kontakt', en: 'Contact', href: '/contact' }
	];
</script>

{#each nav as item (item)}
	<a
		href={item.href}
		class:active={$page.url.pathname == item.href}
		class="duration-100 py-2 text-md  px-4 mx-2 bg-slate-50   text-primary "
	>
		{item[$locale]}
	</a>
{/each}

<style lang="postcss">
	.active {
		@apply bg-gray-900 text-white;
	}

	.active:hover {
		background: #000 !important;
	}
</style>
