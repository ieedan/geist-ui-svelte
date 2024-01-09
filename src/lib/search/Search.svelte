<script lang="ts">
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import Loading from "$lib/loading/Loading.svelte";
	import { createEventDispatcher, onDestroy } from "svelte";

	const dispatch = createEventDispatcher();

	let debounceTimeout: number;
	export let placeholder: string = "";
	export let value: string = "";
	export let loading: boolean = false;
	/** Time after input it takes for 'debounce' event to fire can be useful
	 *   when working with server side search and large data sets.
	 */
	export let debounce: number = 0;

	const input = () => {
		clearTimeout(debounceTimeout);

		dispatch("input", { value });

		debounceTimeout = setTimeout(db, debounce);
	};

	const db = () => {
		dispatch("debounce", { value });
	};

	onDestroy(() => {
		clearTimeout(debounceTimeout);
	});
</script>

<search
	class="flex place-items-center border border-gray-100 transition-all
dark:border-gray-900 text-gray-500 rounded-lg px-2 focus-within:border-gray-200
focus-within:dark:border-gray-800">
	<SearchIcon size={16} />
	<input
		{...$$restProps}
		bind:value
		on:input={input}
		on:click
		on:keydown
		on:keyup
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
        on:change
		type="text"
		autocomplete="off"
		autocorrect="off"
		{placeholder}
		class="bg-transparent outline-none py-2 px-2 text-gray-999 dark:text-gray-0 w-full
        placeholder:font-light placeholder:text-gray-500 placeholder:dark:text-gray-500" />
	{#if loading}
		<Loading size="xs" />
	{/if}
</search>
