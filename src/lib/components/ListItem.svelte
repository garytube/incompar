<script>
	export let title;
</script>

<div>
	<div class="text-lg  md:text-2xl  text-primary tracking-tight mb-2">{title}</div>
	<p class="text-lg  text-primary  ">
		<slot />
	</p>
</div>
