<script lang="ts">
	import { locale, setLocale } from '$lib/translations';
	import { setLang } from '$lib/store/userLanguage';
	import { invalidate } from '$app/navigation';

	const availableLanguages = ['en', 'de', 'es'];
</script>

{#each availableLanguages as lang}
	<button
		class="font-medium mb-6 ml-auto text-right mr-2 flex text-secondary-400  duration-300 py-1 text-sm lg:text-xs  px-2  bg-secondary-100 max-w-max items-center justify-end  hover:opacity-100 "
		class:active={$locale == lang}
		on:click={() => {
			setLang(lang);
			setLocale(lang);
			// invalidate();
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width={2}
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
			/>
		</svg>
		{#if lang == 'en'}
			English
		{:else if lang == 'de'}
			Deutsch
		{:else if lang == 'es'}
			Español
		{/if}
	</button>
{/each}

<style lang="postcss">
	.active {
		@apply bg-secondary-500 text-secondary-100;
	}
</style>
