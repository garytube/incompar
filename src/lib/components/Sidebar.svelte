<script>
	import { scale, fly } from 'svelte/transition';
	import Hamburger from './Hamburger.svelte';
	import Logo from './Logo.svelte';
	import { quintOut } from 'svelte/easing';
	export let open = false;
</script>

<div class="sm:hidden">
	<Hamburger bind:open />
	{#if open}
		<aside
			on:click={() => (open = !open)}
			in:scale={{ duration: 500, opacity: 0.5, start: 0.5, easing: quintOut }}
			out:scale
			class="absolute left-0 top-0  h-full z-50 w-full p-8 bg-white "
		>
			<div in:fly={{ delay: 300, duration: 600, x: -40, y: 0, easing: quintOut }}>
				<Logo on:on:click />
			</div>
			<nav
				in:fly={{ delay: 400, duration: 600, x: -10, y: 0, easing: quintOut }}
				class="text-white flex flex-col space-y-5 text-xl my-4"
			>
				<slot />
			</nav>
		</aside>
	{/if}
</div>

<style>
	aside {
		right: -100%;
		transition: left 0.3s ease-in-out;
	}
</style>
