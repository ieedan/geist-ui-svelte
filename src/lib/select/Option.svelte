<script lang="ts">
	import Spacer from "$lib/spacer/Spacer.svelte";
import type { HTMLOptionAttributes } from "svelte/elements";

	export let value: HTMLOptionAttributes["value"];
</script>

<button
    role="option"
    data-value={value}
	aria-selected={false}
	class="hover:cursor-pointer px-2 hover:bg-gray-50 hover:text-gray-999 hover:dark:text-gray-0 
    dark:hover:bg-gray-925 aria-selected:text-gray-999 text-gray-300 dark:text-gray-700
    transition-all py-1 aria-selected:bg-gray-100 aria-selected:dark:text-gray-0 z-[11]
    aria-selected:dark:bg-gray-900 flex justify-between place-items-center w-full"
	>
    <div data-option-html><slot/></div>
    <Spacer w={16} h={16}/>
</button>
