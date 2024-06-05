<script lang="ts">
	import Label from "$lib/label/Label.svelte";
	import { createEventDispatcher, onDestroy } from "svelte";

	const dispatch = createEventDispatcher();

	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;
	export let size: "base" | "sm" | "lg" | "xl" = "base";
	export let id: string | undefined = undefined;
	export let debounce: number = 0;
	export let readonly: boolean = false;
	export let required: boolean | undefined = undefined;
	/** The symbol shown when the `required` prop is set to true @default "*" */
	export let requiredSymbol = "*";

	export let value: string = "";

	let debounceTimeout: number;
	let inputRef: HTMLTextAreaElement;

	const input = () => {
		value = inputRef.value;

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

<div>
	<Label for={id} {required} {requiredSymbol}>
		<slot />
	</Label>
	<textarea
		{...$$restProps}
		{id}
		readonly={readonly || null}
		bind:this={inputRef}
		style="width: {width ? width : ''}; height: {height ? height : ''};"
		bind:value
		on:click
		on:change
		on:keydown
		on:keyup
		on:input={input}
		on:touchstart|passive
		on:touchend
		on:touchcancel
		on:mouseenter
		on:mouseleave
		data-size={size}
		class="resize-none bg-gray-0 dark:bg-gray-999 border border-gray-100
		px-2 py-1 disabled:dark:border-gray-900 disabled:dark:bg-gray-925 disabled:dark:text-gray-700
		disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-300
		disabled:placeholder:text-gray-300 disabled:dark:placeholder:text-gray-700
		text-gray-999 placeholder:text-gray-200 dark:placeholder:text-gray-600
		dark:text-gray-0 disabled:hover:cursor-not-allowed
		dark:border-gray-900 outline-none focus:border-gray-200
		dark:focus:border-gray-800 transition-all rounded-md w-fit min-w-0 data-[size='sm']:text-sm
		data-[size='lg']:text-lg data-[size='xl']:text-xl geist-ui-text-area"
	/>
</div>

<!--
@component
A multi-line text input.

[See Docs](https://geist-ui-svelte.dev/components/textarea) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
