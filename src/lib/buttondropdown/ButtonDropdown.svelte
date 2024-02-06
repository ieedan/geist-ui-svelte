<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import { createEventDispatcher, onMount } from "svelte";
	import Dropdown from "$lib/dropdown/Dropdown.svelte";

	const dispatch = createEventDispatcher();

	export let disabled: boolean = false;
	export let initialShow = false;
	let show = initialShow;
	let buttonRef: HTMLButtonElement;
	let ref: HTMLDivElement;
	export let shadow: boolean = false;
	let width = "150px";

	const toggleShow = () => {
		show = !show;
	};

	const clicked = () => {
		dispatch("clicked");
	};

	onMount(() => {
		width = ref.offsetWidth + "px";
	});
</script>

<svelte:window
	on:resize={() => {
		width = ref.offsetWidth + "px";
	}}
/>

<div
	class="flex place-items-center justify-between border border-gray-100 w-fit
	rounded-md dark:border-gray-900 aria-disabled:bg-gray-50 aria-disabled:dark:bg-gray-950 overflow-hidden"
	aria-disabled={disabled}
	bind:this={ref}
>
	<button
		on:click={clicked}
		{disabled}
		class="px-4 h-8 disabled:hover:cursor-not-allowed font-light text-sm text-gray-700 dark:text-gray-500
		enabled:hover:bg-gray-50 enabled:hover:dark:bg-gray-950 transition-all"><slot name="main" /></button
	>
	<button
		on:click={toggleShow}
		{disabled}
		bind:this={buttonRef}
		class="flex place-items-center justify-center size-8
		disabled:hover:cursor-not-allowed border-l border-gray-100 text-gray-700 dark:text-gray-500
		dark:border-gray-900 enabled:hover:bg-gray-50 enabled:hover:dark:bg-gray-950 transition-all"
	>
		<slot name="icon">
			<ChevronIcon rotation="90deg" size={16} />
		</slot>
	</button>
</div>

<Dropdown
	offset={{ x: 0, y: 2 }}
	anchor={ref}
	{width}
	{shadow}
	bind:visible={show}
	placement="bottom-end"
>
	<slot />
</Dropdown>

<!--
@component
Display related but alternate actions for a button.

[See Docs](https://geist-ui-svelte.dev/components/button) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
