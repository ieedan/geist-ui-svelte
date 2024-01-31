<script lang="ts">
	import Dropdown from "$lib/dropdown/Dropdown.svelte";
	import { type Placement } from "$lib/util/place.js";
	import { cn } from "$lib/util/utils.js";
	import { cva } from "class-variance-authority";

	const style = cva("inline-block", {
		variants: {
			placement: {
				bottom: "translate-y-2",
				"bottom-end": "translate-y-2",
				"bottom-start": "translate-y-2",
				top: "-translate-y-2",
				"top-end": "-translate-y-2",
				"top-start": "-translate-y-2",
			},
		},
	});

	type DropdownEvent = "click/click" | "mouseenter/mouseleave" | "focus/blur";

	export let visible: boolean = false;
	export let shadow: boolean = false;
	export let placement: Placement = "bottom";
	export let anchor: HTMLElement | string;
	export let animate = false;
	export let flip = true;
	/** This event fires from the anchor element */
	export let event: DropdownEvent = "mouseenter/mouseleave";
	let className: string = "";
	export { className as class };
</script>

<Dropdown
	{anchor}
	{shadow}
	{visible}
	bind:placement
	{flip}
	{event}
	{animate}
	class={cn(style({ placement }), className)}
>
	<div
		data-placement={placement}
		class="relative h-full w-full geist-tool-tip-text bg-gray-0 dark:bg-gray-999 dark:border-gray-900 border-gray-100 rounded-lg px-2 py-1"
	>
		<slot />
	</div>
</Dropdown>

<!--
@component
Displays a tooltip around an anchor component.

[See Docs](https://geist-ui-svelte.dev/components/tooltip) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->

<style>
	.geist-tool-tip-text::after {
		content: " ";
		position: absolute;
		width: 15px;
		height: 15px;
		rotate: 45deg;
		border-radius: 2px;
		background-color: inherit;
		z-index: -1;
		border-color: inherit;
		border-width: 1px;
		border-style: solid;
	}

	.geist-tool-tip-text[data-placement="top"]::after {
		left: 42%;
		top: 65%;
	}

	.geist-tool-tip-text[data-placement="top-end"]::after {
		right: 10%;
		top: 65%;
	}

	.geist-tool-tip-text[data-placement="top-start"]::after {
		left: 10%;
		top: 65%;
	}

	.geist-tool-tip-text[data-placement="bottom"]::after {
		left: 42%;
		top: -11%;
	}

	.geist-tool-tip-text[data-placement="bottom-end"]::after {
		right: 10%;
		top: -11%;
	}

	.geist-tool-tip-text[data-placement="bottom-start"]::after {
		left: 10%;
		top: -11%;
	}
</style>
