<script lang="ts">
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
	import Loading from "$lib/loading/Loading.svelte";
	import { createEventDispatcher, onDestroy } from "svelte";

	const dispatch = createEventDispatcher();

	let debounceTimeout: number;
	export let placeholder: string = "";
	export let value: string = "";
	export let loading: boolean = false;
	export let noIcon: boolean = false;
	/** Time after input it takes for 'debounce' event to fire can be useful
	 *   when working with server side search and large data sets.
	 */
	export let debounce: number = 0;
	export let clearable: boolean = false;
	export let noBorder = false;

	let inputRef: HTMLInputElement;

	export const focus = () => inputRef.focus();

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
	data-border={!noBorder}
	class="flex place-items-center border-gray-100 transition-all
dark:border-gray-900 text-gray-500 rounded-lg px-2 focus-within:border-gray-200
focus-within:dark:border-gray-800 w-full data-[border=true]:border"
>
	{#if !noIcon}
		<SearchIcon size={16} />
	{/if}
	<input
		{...$$restProps}
		bind:this={inputRef}
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
        placeholder:font-light placeholder:text-gray-500 placeholder:dark:text-gray-500"
	/>
	{#if clearable}
		<button
			type="button"
			tabindex="-1"
			data-has-value={value.length > 0}
			class="flex place-items-center h-full justify-center px-2
					transition-all hover:text-gray-999 dark:hover:text-gray-0
				  text-gray-400 dark:text-gray-600 data-[has-value=false]:opacity-0"
			on:click={() => (value = "")}
		>
			<XIcon size={14} />
		</button>
	{/if}
	{#if loading}
		<Loading size="xs" />
	{/if}
</search>

<!--
@component
A component for searching.

[See Docs](https://geist-ui-svelte.dev/components/search) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
