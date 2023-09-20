<script>
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/H1.svelte';
	import ListItem from '$lib/components/lists/Item.svelte';
	import { locale, t, ModelsTranslation as models } from '$lib/translations';
</script>

<Container>
	<div class="max-w-5xl  mb-12">
		<H1>{$t('sunSquare')} {$t('sails.models')}</H1>
		<p>
			{$t('models.intro')}
		</p>
	</div>

	<div class="grid md:grid-cols-2 gap-4 max-w-5xl items-start  ">
		{#each models as model, i (model.title)}
			<div class="md:mr-2 col-auto" id="model-{i}">
				<ListItem title={`${model.title} | 	${model.type.toLocaleUpperCase()}`}>
					{@html model.text[$locale]}
				</ListItem>
			</div>
			<img class="mx-auto  h-40 md:h-64" src={model.image} loading="lazy" alt={model.title} />
		{/each}
	</div>
</Container>
