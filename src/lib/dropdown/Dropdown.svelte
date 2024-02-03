<script lang="ts">
	import { place, type Placement } from "$lib/util/place.js";
	import { cn } from "$lib/util/utils.js";
	import { onDestroy } from "svelte";

	type DropdownEvent = "click/click" | "mouseenter/mouseleave" | "focus/blur";

	export let visible: boolean = false;
	export let shadow: boolean = false;
	export let placement: Placement = "bottom-start";
	export let anchor: HTMLElement | string;
	export let animate = true;
	export let flip = true;
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
		currentPlacement = place(anchorRef, dropDownRef, { placement: p, flip });
	};

	const docClick = (e: MouseEvent) => {
		const target = e.target as Node;
		if (!dropDownRef.contains(target) && !anchorRef.contains(target)) visible = false;
	};
</script>

<svelte:document on:click={docClick} />
<svelte:window on:resize={() => resize(placement)} on:scroll={() => resize(placement)} />

<div
	data-show={visible}
	data-shadow={shadow}
	data-animate={animate}
	data-placement={currentPlacement}
	bind:this={dropDownRef}
	class={cn(
		`absolute data-[show=false]:pointer-events-none z-[1]
		data-[show=false]:opacity-0 bg-gray-0 dark:bg-gray-999 rounded-lg
		data-[animate=true]:transition-all border border-gray-100 dark:border-gray-900
		data-[shadow=true]:shadow-md dark:shadow-gray-999
		data-[placement='bottom-end']:data-[show=false]:-translate-y-1
		data-[placement='bottom-end']:data-[show=false]:translate-x-1
		data-[placement='bottom-start']:data-[show=false]:-translate-y-1
		data-[placement='bottom-start']:data-[show=false]:-translate-x-1
		data-[placement='bottom']:data-[show=false]:-translate-y-1
		data-[placement='top']:data-[show=false]:translate-y-1
		data-[placement='top-start']:data-[show=false]:translate-y-1
		data-[placement='top-start']:data-[show=false]:-translate-x-1
		data-[placement='top-end']:data-[show=false]:translate-y-1
		data-[placement='top-end']:data-[show=false]:translate-x-1`,
		className,
	)}
>
	<slot />
</div>

<!--
@component
Displays a popup around an anchor component.

[See Docs](https://geist-ui-svelte.dev/components/dropdown) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
