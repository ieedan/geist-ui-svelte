<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import { createEventDispatcher, onMount } from "svelte";
	import { createPopper } from "@popperjs/core";

	const dispatch = createEventDispatcher();

	export let disabled: boolean = false;
	export let initialShow = false;
	let show = initialShow;
	let dropDownRef: HTMLDivElement;
	let buttonRef: HTMLButtonElement;
	let ref: HTMLDivElement;
	export let shadow: boolean = false;

	const docClick = (e: MouseEvent) => {
		if (buttonRef.contains(e.target as Node)) return;

		hide();
	};

	const hide = () => {
		show = false;
	};

	const toggleShow = () => {
		show = !show;
	};

	const clicked = () => {
		dispatch("clicked");
	};

	onMount(() => {
		dropDownRef.style.width = ref.offsetWidth + "px";

		const popper = createPopper(buttonRef, dropDownRef, {
			placement: "bottom-end",
			modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
		});

		return () => {
			popper.destroy();
		};
	});
</script>

<svelte:document on:click={docClick} />
<svelte:window
	on:resize={() => {
		dropDownRef.style.width = ref.offsetWidth + "px";
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
	<div
		data-shadow={shadow}
		data-show={show}
		bind:this={dropDownRef}
		class="absolute bg-gray-0 dark:bg-gray-999 border border-gray-100 dark:border-gray-900 z-[1] transition-all
         rounded-md data-[show=false]:opacity-0 data-[show=false]:pointer-events-none data-[shadow=true]:shadow-sm dark:shadow-gray-999"
	>
		<slot />
	</div>
</div>

<!--
@component
Display related but alternate actions for a button.

[See Docs](https://geist-ui-svelte.dev/components/button) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
