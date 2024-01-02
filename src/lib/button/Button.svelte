<script lang="ts">
	import Loading from "$lib/utils/Loading.svelte";
	import type { ColorState, Size } from "$lib/types.js";
	export let disabled = false;

	export let type: ColorState = "primary";
	export let width: string | null = null;
	export let loading: boolean = false;

	export let size: Size = "md";

	//data-[type='default']:
</script>

<button
	disabled={disabled || loading}
	data-type={type}
	data-size={size}
	style="width: {width ? width : 'auto'};"
	class="rounded-md border border-gray-100 bg-gray-0 px-2 py-1 text-gray-999 transition-all
    enabled:hover:bg-gray-100 data-[size='lg']:h-[38px] data-[size='md']:h-[34px] data-[size='sm']:h-[30px] data-[size='xl']:h-[42px]
    data-[size='xs']:h-[26px] data-[type='primary']:border-black
    data-[type='primary']:bg-black data-[size='lg']:text-lg data-[size='sm']:text-sm data-[size='xl']:text-2xl data-[size='xs']:text-xs
    data-[type='primary']:text-gray-0 data-[type='primary']:enabled:hover:bg-gray-900
    dark:border-gray-900 dark:bg-gray-999
	dark:text-gray-0 dark:enabled:hover:bg-gray-900 data-[type='primary']:dark:border-gray-0
	data-[type='primary']:dark:bg-gray-0 data-[type='primary']:dark:text-gray-999 data-[type='primary']:enabled:hover:dark:bg-gray-100">
	{#if loading}
		<Loading />
	{/if}
	<slot />
</button>

<!--
@component
To do: Docs 
-->
