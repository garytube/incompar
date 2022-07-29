<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/H1.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import { locale, t, ReasonsTranslation } from '$lib/translations';
</script>

<Container>
	<H1>{$t('reasons.title')}</H1>
	<div class="block mt-8 lg:mt-12 md:grid md:grid-cols-2 gap-6">
		{#each ReasonsTranslation[$locale] as r}
			<ListItem title={r.title}>
				{r.text}
			</ListItem>
		{/each}
	</div>
</Container>
