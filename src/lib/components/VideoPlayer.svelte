<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let preview: string;
	export let source: string;
	export let closeButton = 'CLOSE VIDEO';
	let showVideo = false;

	const play = () => {
		showVideo = true;
	};

	const closeWithEscape = (event) => {
		if (event.keyCode == 27) {
			showVideo = false;
		}
	};
</script>

<svelte:window on:keydown={closeWithEscape} />
<div
	style:background-image={`url(${preview})`}
	class="w-96 h-52 md:w-[450px] md:h-[250px] md:hover:w-[500px] md:hover:h-[300px] mix-blend-hard-light bg-cover shadow-xl z-10 absolute rounded-sm flex flex-1 justify-center items-center duration-1000"
>
	<button
		on:click={() => play()}
		class="p-2 rounded-sm font-normal bg-white shadow-lg "
		aria-label="play video"
	>
		Play Video
	</button>
</div>

{#if showVideo}
	<div
		transition:fade
		on:click={() => (showVideo = false)}
		id="modal"
		class="h-screen w-screen bg-slate-800 bg-opacity-90 fixed z-50 inset-0 flex items-center justify-center "
	>
		<button
			in:fly={{ x: -50, duration: 2000, delay: 1500 }}
			on:click={() => (showVideo = false)}
			class="px-4 max-w-max h-8 text-sm   shadow-lg  absolute md:inset-0 bottom-12 mx-auto md:top-8 md:bottom-0 border-2 border-transparent  text-white border-white duration-500"
			aria-label="close video"
		>
			{closeButton}
		</button>
		<iframe
			in:fly={{ y: -200, duration: 1200 }}
			out:fade
			class="aspect-video w-full mx-1 md:w-2/3  max-w-3xl "
			src={source}
			title="Video Player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
{/if}
