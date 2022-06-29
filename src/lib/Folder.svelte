<script>
	export let data;
	$: form = data;
</script>

{#each Object.entries(data) as [key, value]}
	{#if typeof value == 'object'}
		<label class="font-bold text-salte-600 my-4 block" for={key}>{key.toUpperCase()}</label>
		<div class="ml-2 p-1 bg-slate-100 bg-opacity-50">
			<svelte:self bind:data={form[key]} />
		</div>
	{:else}
		<div class="bg-slate-200 block p-2">
			<label class="font-medium text-slate-600" for={key}>{key}</label>
			<textarea bind:value={form[key]} class="w-full p-2" name={key} />
		</div>
	{/if}
{/each}
