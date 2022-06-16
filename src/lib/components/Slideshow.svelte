<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let slides = [];

	let index = 0;
	let paused = false;

	onMount(() => {
		const counter = setInterval(() => {
			if (paused) return;
			if (index == slides.length - 1) {
				index = 0;
			} else {
				++index;
			}
		}, 3000);
		return () => clearInterval(counter);
	});
</script>

{#if slides.length > 0}
	<!-- content here -->

	<div
		on:focus={() => (paused = true)}
		on:mouseover={() => (paused = true)}
		on:mouseleave={() => (paused = false)}
	>
		<div
			class="md:w-full lg:w-[550px] mx-0 md:mx-2 lg:mx-0 h-64 sm:h-72 md:h-96 md:my-8 lg:my-0   7xl:pr-0 md:shadow-hard-blue-left bg-slate-50 relative overflow-hidden"
			class:paused
		>
			{#each [slides[index]] as src (index)}
				<img
					transition:fade|local
					class="h-full w-full object-cover absolute inset-0 z-50"
					{src}
					alt={index.toString()}
				/>
			{/each}
		</div>
		<div class="flex flex-row space-x-2 mt-4 mx-auto w-max duration-200">
			{#each slides as src, i}
				<div
					data-name={src}
					on:click={() => (index = i)}
					class="w-2 h-2  block rounded-full bg-slate-100  duration-500"
					class:active={i == index}
				/>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	.active {
		background-color: rgba(144, 158, 179, 0.473) !important;
	}
</style>
