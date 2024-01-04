<script lang="ts">
	import Spacer from "$lib/spacer/Spacer.svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";

	export let value: HTMLOptionAttributes["value"];
	export let disabled: boolean = false;
</script>

<button
	role="option"
	data-value={value}
	aria-selected={false}
	{disabled}
	class="enabled:hover:cursor-pointer disabled:cursor-not-allowed px-2 enabled:hover:bg-gray-50 enabled:hover:text-gray-999 enabled:hover:dark:text-gray-0
    enabled:dark:hover:bg-gray-925 aria-selected:text-gray-999 text-gray-300 dark:text-gray-700
    transition-all py-1 aria-selected:bg-gray-100 aria-selected:dark:text-gray-0 z-[11]
    aria-selected:dark:bg-gray-900 flex justify-between place-items-center w-full disabled:bg-gray-50 disabled:dark:bg-gray-950"
>
	<div data-option-html><slot /></div>
	<Spacer w={16} h={16} />
</button>
