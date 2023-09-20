<script lang="ts">
	import { browser } from '$app/environment';
	// import { t } from '$lib/translations';
	import { createEventDispatcher } from 'svelte';

	import { fade } from 'svelte/transition';

	export let src: string;
	export let thumbs: string[];

	const dispatch = createEventDispatcher();

	const nextSlide = () => {
		const index = thumbs.indexOf(src);
		if (index < thumbs.length - 1) {
			src = thumbs[index + 1];
		} else {
			src = thumbs[0];
		}
	};

	const prevSlide = () => {
		const index = thumbs.indexOf(src);
		if (index > 0) {
			src = thumbs[index - 1];
		} else {
			src = thumbs[thumbs.length - 1];
		}
	};

	const keyboardEvent = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'Escape':
				src = undefined;
				break;
			case 'ArrowLeft':
				prevSlide();
				break;
			case 'ArrowRight':
				nextSlide();
				break;
		}
	};

	$: if (browser) {
		if (src) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	$: fileName = src ? src.split('/').pop() : '';
</script>

<svelte:window on:keydown={keyboardEvent} />

<div
	transition:fade={{ duration: 100 }}
	id="modal"
	on:click|self={() => (src = undefined)}
	class="h-screen w-screen bg-slate-800 bg-opacity-90 fixed z-50 inset-0 flex flex-col items-center justify-center"
>
	<img {src} alt="incompar" class="h-[80vh] lg:h-[85vh] shadow-slate-800 shadow-lg" />
	<div class="flex space-x-2 py-2 mt-2">
		<!-- <button on:click={prevSlide} class="text-white">{$t('prev')}</button> -->
		{#each thumbs as s, index (s)}
			<img
				src={s}
				on:click={() => dispatch('thumbClick', index)}
				class="w-6 h-6 xl:w-12 xl:h-12 rounded ring duration-200 cursor-pointer"
				class:ring-yellow-300={fileName === s.split('/').pop()}
				alt="incompar"
			/>
		{/each}
		<!-- <button on:click={nextSlide} class="text-white">{$t('next')}</button> -->
	</div>
</div>
