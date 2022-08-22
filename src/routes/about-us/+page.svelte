<script lang="ts">
	import KeyFact from '$lib/components/KeyFact.svelte';
	import Container from '$lib/components/Container.svelte';
	import ListBlock from '$lib/components/Gallery/ListBlock.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { t } from '$lib/translations';
	import hero from '$assets/aboutus/hero.jpg';
	import office1 from '$assets/aboutus/1.jpg';
	import office2 from '$assets/aboutus/2.jpg';
	import office3 from '$assets/aboutus/3.jpg';
	import Slideshow from '$lib/components/Slideshow.svelte';
</script>

<Container>
	<H1>{@html $t('about.title')}</H1>
	<H2 class="md:w-3/4 lg:w-1/2 my-8">
		{$t('about.subtitle')}
	</H2>

	<div class="flex flex-col-reverse lg:flex-row space-x-4">
		<!-- content -->
		<div class="max-w-full lg:max-w-xl">
			{@html $t('about.content')}
		</div>
		<!-- image -->
		<div class="lg:pt-6 lg:pl-8">
			<Slideshow slides={[office3, hero, office1, office2]} />
		</div>
	</div>

	<SectionTitle>{$t('about.values_title')}</SectionTitle>
	<div class="block lg:flex space-x-2 px-4 md:px-0 justify-center items-center ">
		<div>
			<ListBlock title={$t('about.values.SERVICE_TITLE')}>
				{$t('about.values.SERVICE')}
			</ListBlock>
			<ListBlock title={$t('about.values.HOTEL_TITLE')}>
				{$t('about.values.HOTEL')}
			</ListBlock>
		</div>
		<div class="px-12 pb-8 md:pb-0" />
		<div>
			<ListBlock title={$t('about.values.PLANNING_TITLE')}>
				{$t('about.values.PLANNING')}
			</ListBlock>
			<ListBlock title={$t('about.values.ARCHITECTURE_TITLE')}>
				{$t('about.values.ARCHITECTURE')}
			</ListBlock>
		</div>
	</div>

	<SectionTitle>{$t('about.key_facts')}</SectionTitle>

	<div class="grid md:grid-cols-3 my-8 text-center">
		<KeyFact fact="70+" text={$t('about.projectsAnno')} />
		<KeyFact fact="1.5 Mio. €" text={$t('about.sales')} />
		<KeyFact fact={`50 ${$t('about.years')}`} text={$t('about.experience')} />
	</div>
</Container>
