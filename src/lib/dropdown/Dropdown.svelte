<script lang="ts">
	import { place, type Offset, type Placement } from "$lib/util/place.js";
	import { cn } from "$lib/util/utils.js";
	import { cva } from "class-variance-authority";
	import { onDestroy } from "svelte";

	type DropdownEvent = "click/click" | "mouseenter/mouseleave" | "focus/blur";

	const style = cva(
		"absolute z-[1] border border-gray-100 dark:border-gray-900 bg-gray-0 dark:bg-gray-999 rounded-lg",
		{
			variants: {
				placement: {
					bottom: "",
					"bottom-start": "",
					"bottom-end": "",
					top: "",
					"top-start": "",
					"top-end": "",
					right: "",
					"right-start": "",
					"right-end": "",
					left: "",
					"left-start": "",
					"left-end": "",
				},
				shadow: {
					true: "shadow-md dark:shadow-gray-999",
					false: "",
				},
				visible: {
					true: "opacity-100",
					false: "opacity-0 pointer-events-none",
				},
				animate: {
					true: "transition-all",
					false: "",
				},
			},
			compoundVariants: [
				{
					animate: true,
					visible: false,
					placement: "bottom",
					class: "-translate-y-1",
				},
				{
					animate: true,
					visible: false,
					placement: "bottom-start",
					class: "-translate-y-1 -translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "bottom-end",
					class: "-translate-y-1 translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "top",
					class: "translate-y-1",
				},
				{
					animate: true,
					visible: false,
					placement: "top-start",
					class: "translate-y-1 -translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "top-end",
					class: "translate-y-1 translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "right",
					class: "-translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "right-start",
					class: "-translate-y-1 -translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "right-end",
					class: "translate-y-1 -translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "left",
					class: "translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "left-start",
					class: "-translate-y-1 translate-x-1",
				},
				{
					animate: true,
					visible: false,
					placement: "left-end",
					class: "translate-y-1 translate-x-1",
				},
			],
		},
	);

	export let visible: boolean = false;
	export let shadow: boolean = false;
	export let placement: Placement = "bottom-start";
	export let anchor: HTMLElement | string;
	export let animate = true;
	export let flip = true;
	export let offset: Offset = { x: 0, y: 0 };
	/** This event fires from the anchor element */
	export let event: DropdownEvent | undefined = undefined;
	let className: string = "";
	export { className as class };

	let dropDownRef: HTMLDivElement;
	let currentPlacement: Placement;
	let anchorRef: HTMLElement;

	let hasCreatedListener = false;

	$: {
		if (anchor != undefined && dropDownRef) {
			if (typeof anchor == "string") {
				const element = document.querySelector(anchor) as HTMLElement;
				if (!element)
					throw new Error(
						`The '${anchor}' query does not find an element in the document.`,
					);

				anchorRef = element;
			} else {
				if (anchor) anchorRef = anchor;
			}
		}

		if (anchorRef && event && !hasCreatedListener) {
			switch (event) {
				case "click/click":
					anchorRef.addEventListener("click", toggle);
					break;
				case "focus/blur":
					anchorRef.addEventListener("focus", show);
					anchorRef.addEventListener("blur", hide);
					break;
				case "mouseenter/mouseleave":
					anchorRef.addEventListener("mouseenter", show);
					anchorRef.addEventListener("mouseleave", hide);
					break;
			}

			hasCreatedListener = true;
		}

		if (anchorRef != undefined && dropDownRef != undefined) {
			resize(placement);
		}
	}

	const toggle = () => {
		visible = !visible;
	};

	const show = () => {
		visible = true;
	};

	const hide = () => {
		visible = false;
	};

	onDestroy(() => {
		if (!anchorRef) return;

		switch (event) {
			case "click/click":
				anchorRef.removeEventListener("click", toggle);
				break;
			case "focus/blur":
				anchorRef.removeEventListener("focus", show);
				anchorRef.removeEventListener("blur", hide);
				break;
			case "mouseenter/mouseleave":
				anchorRef.removeEventListener("mouseenter", show);
				anchorRef.removeEventListener("mouseleave", hide);
				break;
		}
	});

	const resize = (p: Placement) => {
		if (anchorRef == undefined || dropDownRef == undefined) return;
		currentPlacement = place(anchorRef, dropDownRef, { placement, flip, offset });
	};

	const docClick = (e: MouseEvent) => {
		const target = e.target as Node;
		if (!dropDownRef.contains(target) && !anchorRef.contains(target)) visible = false;
	};
</script>

<svelte:document on:click={docClick} />
<svelte:window on:resize={() => resize(placement)} on:scroll={() => resize(placement)} />

<div
	bind:this={dropDownRef}
	class={cn(style({ visible, shadow, animate, placement: currentPlacement }), className)}>
	<slot />
</div>

<!--
@component
Displays a popup around an anchor component.

[See Docs](https://geist-ui-svelte.dev/components/dropdown) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
