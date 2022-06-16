<script lang="ts">
	import { goto } from '$app/navigation';
	import ButtonBlack from './ButtonBlack.svelte';

	export let image = '';
	export let title = '';
	export let cta = '';
	export let src: string;
</script>

<div
	on:click={() => goto(src)}
	class="text-center py-4 md:py-2 px-4 md:px:-8 lg:pb-8 mb-12 lg:mb-2 relative hover:md:bg-gray-100 hover:md:text-primary rounded-sm cursor-pointer duration-500 group"
>
	<img
		class="h-[400px]  aspect-video rounded-sm p-0 md:px-0 object-cover  mx-auto relative z-10  duration-500"
		src={image}
		alt="bild"
	/>

	<h4 class="text-4xl text-primary group-hover:text-primary md:text-5xl mt-12 my-8 ">
		{title}
	</h4>
	<slot />
	<div class="mt-8">
		<ButtonBlack href={src}>{cta}</ButtonBlack>
	</div>
</div>
