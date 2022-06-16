<script lang="ts">
	import { onMount, tick } from 'svelte';

	let slotHolder: HTMLElement = null;

	let sources;

	async function Draw() {
		await tick();

		if (!slotHolder) {
			return;
		}
		sources = Array.from(slotHolder.children).filter((child) => child.tagName === 'IMG');
	}
	onMount(Draw);
</script>

<div id="slotHolder" bind:this={slotHolder}>
	<slot />
</div>
{#if sources}
	<div
		class="static hidden lg:block lg:absolute transform sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-8 2xl:translate-x-2  duration-200"
	>
		<div
			id="x"
			class="flex flex-wrap  overflow-hidden justify-center items-start lg:items-center lg:flex-nowrap  lg:space-x-8"
		>
			<div class="flex-shrink-0 flex lg:grid grid-cols-1  lg:gap-y-8">
				<div
					style="animation-delay: 0.5s; animation-direction: alternate-reverse;"
					class=" 
				img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden "
				>
					{#if sources[0]}
						<img
							src={sources[0].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover "
						/>
					{/if}
				</div>
				<div class="img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden">
					{#if sources[1]}
						<img
							src={sources[1].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
				<!-- // extra mobile -->
				<div
					class="block lg:hidden img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden"
				>
					{#if sources[5]}
						<img
							src={sources[5].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
				<!-- // extra mobile -->
			</div>
			<div class="flex-shrink-0 flex lg:grid grid-cols-1  lg:gap-y-8">
				<div
					style="animation-delay: 0.7s; animation-duration: 5s;"
					class="img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden"
				>
					{#if sources[2]}
						<img
							src={sources[2].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
				<div
					style="animation-delay: 0.8s;"
					class="img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden"
				>
					{#if sources[3]}
						<img
							src={sources[3].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
				<div class="img-wrapper w-44 xl:w-52 h-56 xl:h-64 duration-500 rounded-sm overflow-hidden">
					{#if sources[4]}
						<img
							src={sources[4].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
			</div>
			<div style="animation-delay: 3s;" class="flex-shrink-0 flex lg:grid grid-cols-1  lg:gap-y-8 ">
				<div
					class="
				img-wrapper w-44 xl:w-52 h-56 xl:h-64  duration-500 rounded-sm overflow-hidden"
				>
					{#if sources[5]}
						<img
							src={sources[5].src}
							alt=""
							class="w-full border-white border-2  md:border-none h-full object-center object-cover"
						/>
					{/if}
				</div>
				<div
					style="animation-delay: 0.5s;"
					class="img-wrapper  w-44 xl:w-52 h-56 xl:h-64  duration-500 rounded-sm overflow-hidden"
				>
					{#if sources[6]}
						<img src={sources[6].src} alt="" class=" w-full h-full object-center object-cover" />
					{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- mobile -->
	<!-- 2 col grid with images -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:hidden">
		{#each sources as source}
			<img
				src={source.src}
				alt=""
				class="w-full h-full md:h-64 md:object-cover border-white border-2 "
			/>
		{/each}
	</div>
{/if}

<style>
	#slotHolder {
		display: none;
	}

	@media (min-width: 1023px) {
		.img-wrapper {
			transform: translatey(0px);
			animation: float 8s ease-in-out infinite;
		}
	}

	@keyframes float {
		0% {
			/* box-shadow: 0 5px 15px 0px rgba(136, 136, 136, 0.4); */
			transform: translatey(0px);
		}
		50% {
			/* box-shadow: 0 25px 15px 0px rgba(145, 148, 151, 0.2); */
			transform: translatey(-20px);
		}
		100% {
			/* box-shadow: 0 5px 15px 0px rgba(136, 136, 136, 0.4); */
			transform: translatey(0px);
		}
	}
</style>
