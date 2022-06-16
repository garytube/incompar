<script lang="ts">
	export let href: string;
	export let reverse = false;
</script>

<a
	on:click
	{href}
	class="my-4  inline-flex items-center justify-center px-4 py-1.5 sm:px-6 sm:py-2 text-lg sm:text-xl   border border-transparent bg-gray-200 text-primary {$$props.class} hover:opacity-60 duration-300 "
	class:reverse
>
	<slot />
</a>

<style lang="postcss">
	.reverse {
		@apply bg-gray-800 bg-opacity-50 text-white;
	}
</style>
