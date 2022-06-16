<script>
	import ButtonBlack from '../lib/components/ButtonBlack.svelte';
	import Slideshow from '../lib/components/Slideshow.svelte';
	import ProductCard from '../lib/components/ProductCard.svelte';
	import VideoPlayer from '$lib/components/VideoPlayer.svelte';
	import H1 from '$lib/components/H1.svelte';
	import Pattern from '$lib/components/Pattern.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import rectangular from '$assets/sunsquare/rect/gallery/thumbs/14.jpg';
	import triangular from '$assets/sunsquare/tri/gallery/thumbs/1.jpg';
	import { t } from '$lib/translations';

	const images = import.meta.globEager('$assets/slider_homepage/*.jpg');
	const slides = Object.entries(images).map((i) => i[1].default);
</script>

<div class="max-w-7xl w-full mx-auto px-4">
	<div
		class="relative z-10 pb-8 lg:flex lg:flex-1 lg:flex-row sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32"
	>
		<main class=" mt-8 mr-auto sm:mt-12  md:mt-16 lg:mt-20  xl:mt-16">
			<div class="text-center lg:text-left ">
				<H1>
					{@html $t('home.title')}
				</H1>

				<p class="text-lg leading-7 w-10/12">
					{@html $t('home.intro')}
				</p>
				<div class="max-w-max my-4 mx-auto lg:mx-0 lg:mt-0 ">
					<ButtonBlack href="#premium">{$t('button.explore_sails')}</ButtonBlack>
				</div>
			</div>
		</main>
		<div class="mt-4  sm:mt-8  md:mt-12 lg:mt-16  xl:mt-12">
			<Slideshow {slides} />
		</div>
	</div>
</div>

<div class=" bg-primary ">
	<div class="max-w-7xl mx-auto px-4 pt-16 pb-4 md:py-16 md:flex flex-1">
		<!-- col 1 -->
		<div class="w-full max-w-xs md:max-w-sm">
			<h2 class="text-white text-4xl md:text-6xl tracking-tight mb-4 md:mb-8 ">
				{$t('sunSquare')} <br />
				{$t('home.how_title')}
			</h2>
			<p class="text-white text-xl leading-7">
				{@html $t('home.how_content')}
			</p>
			<div class="max-w-max my-4 md:mx-auto lg:mx-0 lg:mt-8 ">
				<ButtonBlack reverse={true} href="12-reasons">{$t('button.twelve_reasons')}</ButtonBlack>
			</div>
		</div>

		<!-- /1 -->
		<div class="flex items-start md:items-center justify-center p-8 relative">
			<div class="md:block absolute -top-[70vh] right-0 opacity-20 md:opacity-100 md:inset-0 z-0">
				<Pattern />
			</div>

			<img
				src={rectangular}
				alt="video"
				class=" object-cover w-full h-64 md:h-full  border-[15px] border-gray-600  grayscale opacity-30 mix-blend-hard-light hover:opacity-40 hover:border-gray-800 duration-1000 "
			/>
			<VideoPlayer
				preview={triangular}
				source="https://www.youtube-nocookie.com/embed/NO78CpDr0tc"
			/>
		</div>
	</div>
</div>

<div id="premium">
	<div class="my-12">
		<SectionTitle>{@html $t('section_headline')}</SectionTitle>
	</div>
	<div class="max-w-7xl mx-auto px-4 mb-12 lg:flex flex-1">
		<ProductCard
			src="/sun-square/triangular-sail"
			title={$t('sails.triangular.name') + ' ' + $t('sails.models')}
			cta={$t('button.explore_triangular')}
			image={triangular}
		>
			<p class="leading-relaxed md:leading-loose text-lg">
				{$t('sails.triangular.description')}
			</p>
		</ProductCard>
		<ProductCard
			src="/sun-square/rectangular-sail"
			title={$t('sails.rectangular.name') + ' ' + $t('sails.models')}
			cta={$t('button.explore_rectengular')}
			image={rectangular}
		>
			<p class="leading-relaxed md:leading-loose text-lg">
				{$t('sails.rectangular.description')}
			</p>
		</ProductCard>
	</div>
</div>
