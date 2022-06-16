<script lang="ts">
	import Logo from './Logo.svelte';
	import Sidebar from './Sidebar.svelte';
	import NavLinks from './Nav/NavLinks.svelte';
	import Language from './Language.svelte';
	import { t } from '$lib/translations';

	let open = true;
</script>

<div class="max-w-7xl w-full mx-auto px-4 pt-4  ">
	<header
		tabindex="0"
		role="button"
		aria-label="go to home"
		class="md:h-32 md:mb-12 flex flex-1 flex-row items-end justify-center md:justify-start"
	>
		<a href="/" alt="Home">
			<Logo />
		</a>
		<div class="flex ml-auto  hidden md:block">
			<Language />
			<nav class=" ">
				<NavLinks />
			</nav>
		</div>
	</header>
</div>
<Sidebar bind:open>
	<NavLinks />
	<div class="text-black text-right text-sm flex pt-2">
		{$t('change_language')}
		<Language />
	</div>
</Sidebar>
