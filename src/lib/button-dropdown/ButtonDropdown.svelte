<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let disabled: boolean = false;

	let show = false;

	const toggleShow = () => {
		show = !show;
	};

	const clicked = () => {
		dispatch("clicked");
	};
</script>

<div
	class="flex place-items-center justify-between border border-gray-100 rounded-md dark:border-gray-900 aria-disabled:bg-gray-50 aria-disabled:dark:bg-gray-950 overflow-hidden"
	aria-disabled={disabled}>
	<button
		on:click={clicked}
		{disabled}
		class="px-4 h-8 disabled:hover:cursor-not-allowed text-xs font-light enabled:hover:bg-gray-50 enabled:hover:dark:bg-gray-950 transition-all"
		><slot name="main" /></button>
	<button
		on:click={toggleShow}
		{disabled}
		class="flex place-items-center justify-center size-8 disabled:hover:cursor-not-allowed border-l border-gray-100 dark:border-gray-900 enabled:hover:bg-gray-50 enabled:hover:dark:bg-gray-950 transition-all">
		<slot name="icon">
			<ChevronIcon rotation="90deg" size={16} />
		</slot>
	</button>
	<div>
		<slot />
	</div>
</div>
