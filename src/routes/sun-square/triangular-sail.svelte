<script lang="ts">
	import hero3 from '$assets/sunsquare/tri/3.jpg';
	import hero4 from '$assets/sunsquare/tri/4.jpg';
	import hero5 from '$assets/sunsquare/tri/5.jpg';
	import hero7 from '$assets/sunsquare/tri/7.jpg';
	import hero8 from '$assets/sunsquare/tri/8.jpg';
	import hero10 from '$assets/sunsquare/tri/10.jpg';
	import hero11 from '$assets/sunsquare/tri/11.jpg';
	import Container from '$lib/components/Container.svelte';
	import ButtonBlack from '../../lib/components/ButtonBlack.svelte';
	import FlowerGrid from '$lib/components/Gallery/FlowerGrid.svelte';
	import models from '../models/_models';
	import ModelList from '$lib/components/lists/ModelList.svelte';
	import SunSquareLogo from '$lib/components/SunSquareLogo.svelte';
	import H1 from '$lib/components/H1.svelte';
	import { locale, t } from '$lib/translations';
	import GalleryLightbox from '$lib/components/Gallery/GalleryLightbox.svelte';

	const importedImages = import.meta.globEager('$assets/sunsquare/tri/gallery/*.jpg');
	const importedThumbs = import.meta.globEager('$assets/sunsquare/tri/gallery/thumbs/*.jpg');
	const slides = Object.entries(importedImages).map((i) => i[1].default);
	const thumbs = Object.entries(importedThumbs).map((i) => i[1].default);

	$: triangularModels = models[$locale].filter((m) => m.type === 'triangular');
</script>

<Container>
	<div class="relative ">
		<div class="pt-16 sm:pt-24 pb-24  sm:pb-40  lg:pb-48 ">
			<div class="lg:max-w-md xl:max-w-lg">
				<H1>{@html $t('sails.triangular.premium')}</H1>
				<h3 class="text-xl opacity-60 mt-4">
					{$t('sails.catchFrase')}
				</h3>
				<p class="md:mt-8">
					{@html $t('sails.triangular.content')}
				</p>

				<ButtonBlack class="mt-12" href="/12-reasons">{$t('button.twelve_reasons')}</ButtonBlack>
			</div>

			<FlowerGrid>
				<img src={hero8} alt={$t('imgAlt')} />
				<img src={hero3} alt={$t('imgAlt')} />
				<img src={hero4} alt={$t('imgAlt')} />
				<img src={hero5} alt={$t('imgAlt')} />
				<img src={hero7} alt={$t('imgAlt')} />
				<img src={hero11} alt={$t('imgAlt')} />
				<img src={hero10} alt={$t('imgAlt')} />
			</FlowerGrid>
		</div>
	</div>

	<div id="models" class="max-w-5xl pt-12 pb-24  sm:pb-40  lg:pb-48">
		<div class="flex flex-1 space-x-4 items-center mb-12">
			<SunSquareLogo class="w-20 pb-4 hidden md:block" />
			<H1>{$t('sails.triangular.name')} {$t('sails.models')}</H1>
		</div>
		<div class="mt-12">
			<ModelList models={triangularModels} />
		</div>
	</div>

	<GalleryLightbox {slides} {thumbs} />
</Container>
