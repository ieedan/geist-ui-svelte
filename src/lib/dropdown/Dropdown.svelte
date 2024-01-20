<script lang="ts">
	import { onMount } from "svelte";
	import { createPopper, type Placement } from "@popperjs/core";

	export let shadow: boolean = false;
	export let anchorRef: HTMLElement;
	export let visible = false;
	export let width: string = "auto";
	export let placement: Placement = "bottom";

	let dropDownRef: HTMLDivElement;

	const hide = () => {
		visible = false;
	};

	const docClick = (e: MouseEvent) => {
		if (anchorRef.contains(e.target as Node)) return;

		hide();
	};

	onMount(() => {
		const popper = createPopper(anchorRef, dropDownRef, {
			placement,
			modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
		});

		return () => {
			popper.destroy();
		};
	});
</script>

<svelte:document on:click={docClick} />

<div
	data-shadow={shadow}
	data-show={visible}
	style="width: {width};"
	bind:this={dropDownRef}
	class="absolute bg-gray-0 dark:bg-gray-999 border border-gray-100
    dark:border-gray-900 z-[1] transition-all rounded-md data-[show=false]:opacity-0
    data-[show=false]:pointer-events-none data-[shadow=true]:shadow-sm dark:shadow-gray-999"
>
	<slot />
</div>

<!--
@component
Displays a popup around an anchor component.

[See Docs](https://geist-ui-svelte.dev/components/dropdown) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->