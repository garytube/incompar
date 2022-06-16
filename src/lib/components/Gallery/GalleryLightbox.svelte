<script lang="ts">
	import { t } from '$lib/translations';
	import Lightbox from './Lightbox.svelte';

	export let slides: string[];
	export let thumbs: string[];
	let activeSlide: string;

	const openLightbox = (index: number) => {
		if (window.visualViewport.width >= 768) {
			activeSlide = slides[index];
		}
	};
</script>

<h1 class="text-2xl tracking-tight text-primary sm:text-5xl mb-16">
	{$t('impressions')}
</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
	{#each thumbs as thumb, index}
		<img
			on:click={() => openLightbox(index)}
			src={thumb}
			class="rounded-sm"
			loading="lazy"
			alt="incompar"
		/>
	{/each}
</div>

{#if activeSlide}
	<Lightbox on:thumbClick={(e) => openLightbox(e.detail)} bind:src={activeSlide} {thumbs} />
{/if}
