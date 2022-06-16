<script>
	export let title;
</script>

<div class="mb-8 lg:mb-12  text-primary text-center">
	<h5 class="text-lg  mb-1">{title}</h5>
	<p class="text-lg leading-normal">
		<slot />
	</p>
</div>
