<script lang="ts">
	import type { Size } from "$lib/types.js";

	export let height = "1px";
	export let margin: "none" | Size = "none";
	export let label: string | undefined = undefined;
</script>

<div class="flex w-full place-items-center">
	<hr
		style="height: {height};"
		data-margin={margin}
		class="w-full bg-gray-100 dark:bg-gray-900 border-none
    data-[margin='xs']:my-1 data-[margin='sm']:my-2 data-[margin='md']:my-3
    data-[margin='lg']:my-4 data-[margin='xl']:my-5"
	/>
	{#if label}
		<small class="px-2 text-gray-500 dark:text-gray-500 whitespace-nowrap">{label}</small>
	{/if}
	<hr
		style="height: {height};"
		data-margin={margin}
		class="w-full bg-gray-100 dark:bg-gray-900 border-none
    data-[margin='xs']:my-1 data-[margin='sm']:my-2 data-[margin='md']:my-3
    data-[margin='lg']:my-4 data-[margin='xl']:my-5"
	/>
</div>
