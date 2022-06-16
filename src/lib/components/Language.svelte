<script lang="ts">
	import { browser } from '$app/env';
	import { locale } from '$lib/translations';
	import { setLang } from '$lib/store/userLanguage';
	import { userLanguage } from '$lib/store/userLanguage';

	userLanguage.subscribe(() => {
		return;
	});

	$: browser && setLang($locale);
</script>

<button
	class="font-medium mb-6 ml-auto text-right mr-2 flex text-secondary-600 py-1 text-sm lg:text-xs  px-2  bg-secondary-200 max-w-max items-center justify-end opacity-50 hover:opacity-100"
	on:click={() => ($locale == 'de' ? setLang('en') : setLang('de'))}
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
	{$locale == 'de' ? 'English' : 'Deutsch'}
</button>
