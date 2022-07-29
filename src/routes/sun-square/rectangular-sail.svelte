<script lang="ts">
	import hero1 from '$assets/sunsquare/rect/1.jpg';
	import hero2 from '$assets/sunsquare/rect/2.jpg';
	import hero3 from '$assets/sunsquare/rect/3.jpg';
	import hero4 from '$assets/sunsquare/rect/4.jpg';
	import hero5 from '$assets/sunsquare/rect/5.jpg';
	import hero6 from '$assets/sunsquare/rect/6.jpg';
	import hero7 from '$assets/sunsquare/rect/7.jpg';
	import Container from '$lib/components/Container.svelte';
	import GalleryLightbox from '$lib/components/Gallery/GalleryLightbox.svelte';
	import H1 from '$lib/components/H1.svelte';
	import ModelList from '$lib/components/lists/ModelList.svelte';
	import SunSquareLogo from '$lib/components/SunSquareLogo.svelte';
	import { t, ModelsTranslation as models } from '$lib/translations';
	import type { Model } from 'src/global';

	import ButtonBlack from '$lib/components/ButtonBlack.svelte';
	import FlowerGrid from '$lib/components/Gallery/FlowerGrid.svelte';

	const importedImages = Object.values(
		import.meta.glob('$assets/sunsquare/rect/gallery/*.jpg', {
			eager: true,
			as: 'url'
		})
	);
	const importedThumbs = Object.values(
		import.meta.glob('$assets/sunsquare/rect/gallery/thumbs/*.jpg', {
			eager: true,
			as: 'url'
		})
	);
	const slides = Object.values(importedImages);
	const thumbs = Object.values(importedThumbs);

	$: rectangularModels = models.filter((m: Model) => m.type === 'rectangular');
</script>

<Container>
	<div class="relative ">
		<div class="pt-16 pb-24 sm:pt-24 sm:pb-40  lg:pb-48">
			<div class="lg:max-w-md xl:max-w-lg">
				<H1>{@html $t('sails.rectangular.premium')}</H1>
				<h3 class="text-xl opacity-60 mt-4">
					{$t('sails.catchFrase')}
				</h3>
				<p class="md:mt-8">
					{@html $t('sails.rectangular.content')}
				</p>

				<ButtonBlack class="mt-12" href="/12-reasons">{$t('button.twelve_reasons')}</ButtonBlack>
			</div>

			<FlowerGrid>
				<img src={hero1} alt={$t('imgAlt')} />
				<img src={hero2} alt={$t('imgAlt')} />
				<img src={hero3} alt={$t('imgAlt')} />
				<img src={hero4} alt={$t('imgAlt')} />
				<img src={hero5} alt={$t('imgAlt')} />
				<img src={hero6} alt={$t('imgAlt')} />
				<img src={hero7} alt={$t('imgAlt')} />
			</FlowerGrid>
		</div>
	</div>

	<div id="models" class="max-w-5xl  mb-12 pt-12 pb-24  sm:pb-40  lg:pb-48">
		<div class="flex flex-1 space-x-4 items-center mb-12">
			<SunSquareLogo class="w-20 pb-4 hidden md:block" />
			<H1>{$t('sails.rectangular.name_model')}</H1>
		</div>
		<div class="mt-12">
			<ModelList models={rectangularModels} />
		</div>
	</div>

	<GalleryLightbox {slides} {thumbs} />
</Container>
