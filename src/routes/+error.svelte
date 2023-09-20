<script>
	import { page } from '$app/stores';
	import ButtonBlack from '$lib/components/ButtonBlack.svelte';
	import H1 from '$lib/components/H1.svelte';

</script>

<div class="max-w-7xl w-full mx-auto px-4 text-center">
<div class="pt-32">

	<H1>
		Ohhhhh no!!! {$page.status}
	</H1>
	<ButtonBlack reverse href="/">Back to Home</ButtonBlack>
</div>


</div>
