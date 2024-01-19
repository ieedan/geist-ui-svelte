<script lang="ts">
	import type { Size } from "$lib/types.js";

	export let vertical: boolean = false;
	export let height = vertical ? "100%" : "1px";
	export let width: string = vertical ? "1px" : "100%";
	export let margin: "none" | Size = "none";
	export let label: string | undefined = undefined;
</script>

<div
	data-vertical={vertical}
	class="data-[vertical=true]:flex-col flex w-full data-[vertical=true]:w-[1px] place-items-center"
>
	<hr
		style="height: {height}; width: {width};"
		data-margin={margin}
		class="bg-gray-100 dark:bg-gray-900 border-none
    data-[margin='xs']:my-1 data-[margin='sm']:my-2 data-[margin='md']:my-3
    data-[margin='lg']:my-4 data-[margin='xl']:my-5"
	/>
	{#if label}
		<small class="px-2 text-gray-500 dark:text-gray-500 whitespace-nowrap">{label}</small>
	{/if}
	<hr
		style="height: {height}; width: {width};"
		data-margin={margin}
		class="bg-gray-100 dark:bg-gray-900 border-none
    data-[margin='xs']:my-1 data-[margin='sm']:my-2 data-[margin='md']:my-3
    data-[margin='lg']:my-4 data-[margin='xl']:my-5"
	/>
</div>
