<script>
	export let open = false;
</script>

<button
	on:click={() => (open = !open)}
	class="absolute top-2 right-2 w-max py-1 px-2  h-max z-[100] uppercase "
	class:open
>
	{open ? 'X' : 'Menu'}
</button>
