<script lang="ts">
	import type { Model } from 'src/global';
	import ListItem from '../ListItem.svelte';
	import { locale } from '$lib/translations';

	export let models: Model[];
</script>

<div class="grid md:grid-cols-2 gap-4 max-w-5xl items-start  ">
	{#each models as model, i (model.title)}
		<div class="md:mr-2 col-auto" id="model-{i}">
			<ListItem title={model.title}>
				{@html model.text[$locale]}
			</ListItem>
		</div>
		<img class="mx-auto  h-40 md:h-52" src={model.image} loading="lazy" alt={model.title} />
	{/each}
</div>
