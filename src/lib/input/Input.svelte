<script lang="ts">
	import { createEventDispatcher, onDestroy } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";

	const dispatch = createEventDispatcher();

	export let value: HTMLInputAttributes["value"] = "";
	export let type: HTMLInputAttributes["type"] = "text";
	export let placeholder: string = "";
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let containerLabel: string = "";
	export let labelPlacement: "start" | "end" = "start";
	export let id: string | undefined = undefined;
	export let width: string | undefined = undefined;
	export let debounce: number = 0;

	let inputRef: HTMLInputElement;
	let debounceTimeout: number;

	export const focus = () => inputRef.focus();

	const change = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
		dispatch("change", { value });
	};

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

<div>
	<label for={id}><slot /></label>
	<div
		style="width: {width ? width : ''};"
		aria-disabled={disabled}
		data-placement={labelPlacement}
		data-has-label={containerLabel.length > 0}
		class="flex place-items-center w-fit
    group/geist-input aria-disabled:bg-gray-50 aria-disabled:dark:bg-gray-950 transition-all">
		{#if containerLabel}
			<span
				class="dark:bg-gray-950 bg-gray-50 font-medium py-1 px-2 text-gray-300 dark:text-gray-500 h-[34px] text-sm
			border-y border-gray-100 group-data-[placement='end']/geist-input:order-2 dark:border-gray-900 flex place-items-center justify-center
			group-data-[placement='start']/geist-input:rounded-l-md group-data-[placement='end']/geist-input:rounded-r-md
			group-data-[placement='start']/geist-input:border-l group-data-[placement='end']/geist-input:border-r"
				>{containerLabel}</span>
		{/if}
		{#if type == "text"}
			<input
				{...$$restProps}
				{id}
				bind:this={inputRef}
				on:click
				on:keydown
				on:keyup
				on:input={input}
				on:touchstart|passive
				on:touchend
				on:touchcancel
				on:mouseenter
				on:mouseleave
				bind:value
				type="text"
				{placeholder}
				autocomplete="off"
				class="bg-transparent outline-none px-2 py-1 border-gray-100 dark:border-gray-900 placeholder:text-gray-200 rounded-none
            flex-grow border group-data-[placement='start']/geist-input:rounded-r-md group-data-[placement='end']/geist-input:rounded-l-md
            group-data-[has-label=false]/geist-input:rounded-md disabled:placeholder:text-gray-300 dark:placeholder:text-gray-600
          focus:border-gray-200 focus:dark:border-gray-800 disabled:hover:cursor-not-allowed transition-all
          disabled:dark:placeholder:text-gray-600 dark:text-gray-0 text-gray-999 min-w-0"
				{disabled}
				{readonly} />
		{:else if type == "password"}
			<input
				{...$$restProps}
				{id}
				bind:this={inputRef}
				on:click
				on:keydown
				on:keyup
				on:input
				on:touchstart|passive
				on:touchend
				on:touchcancel
				on:mouseenter
				on:mouseleave
				bind:value
				type="password"
				{placeholder}
				{disabled}
				{readonly}
				autocomplete="off"
				class="bg-transparent outline-none px-2 py-1 border-gray-100 dark:border-gray-900 placeholder:text-gray-200 rounded-none
            flex-grow border group-data-[placement='start']/geist-input:rounded-r-md group-data-[placement='end']/geist-input:rounded-l-md
            group-data-[has-label=false]/geist-input:rounded-md disabled:placeholder:text-gray-300 dark:placeholder:text-gray-600
          focus:border-gray-200 focus:dark:border-gray-800 disabled:hover:cursor-not-allowed transition-all
          disabled:dark:placeholder:text-gray-600 dark:text-gray-0 text-gray-999 min-w-0" />
		{:else if type == "number"}
			<input
				{...$$restProps}
				{id}
				bind:this={inputRef}
				on:click
				on:keydown
				on:keyup
				on:input
				on:touchstart|passive
				on:touchend
				on:touchcancel
				on:mouseenter
				on:mouseleave
				bind:value
				type="number"
				{placeholder}
				{disabled}
				{readonly}
				class="bg-transparent outline-none px-2 py-1 border-gray-100 dark:border-gray-900 placeholder:text-gray-200 rounded-none
            flex-grow border group-data-[placement='start']/geist-input:rounded-r-md group-data-[placement='end']/geist-input:rounded-l-md
            group-data-[has-label=false]/geist-input:rounded-md disabled:placeholder:text-gray-300 dark:placeholder:text-gray-600
          focus:border-gray-200 focus:dark:border-gray-800 disabled:hover:cursor-not-allowed transition-all
          disabled:dark:placeholder:text-gray-600 dark:text-gray-0 text-gray-999 min-w-0" />
		{:else}
			<input
				{...$$restProps}
				{id}
				bind:this={inputRef}
				on:click
				on:keydown
				on:keyup
				on:input
				on:touchstart|passive
				on:touchend
				on:touchcancel
				on:mouseenter
				on:mouseleave
				{value}
				{type}
				on:change={change}
				{placeholder}
				{disabled}
				{readonly}
				class="bg-transparent outline-none px-2 py-1 border-gray-100 dark:border-gray-900 placeholder:text-gray-200 rounded-none
            flex-grow border group-data-[placement='start']/geist-input:rounded-r-md group-data-[placement='end']/geist-input:rounded-l-md
            group-data-[has-label=false]/geist-input:rounded-md disabled:placeholder:text-gray-300 dark:placeholder:text-gray-600
          focus:border-gray-200 focus:dark:border-gray-800 disabled:hover:cursor-not-allowed transition-all
          disabled:dark:placeholder:text-gray-600 dark:text-gray-0 text-gray-999 min-w-0 dark:scheme-dark" />
		{/if}
	</div>
</div>
