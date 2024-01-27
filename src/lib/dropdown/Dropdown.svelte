<script lang="ts">
	import { place, type Placement } from "$lib/util/place.js";

	export let visible: boolean = false;
	export let shadow: boolean = false;
	export let placement: Placement = "bottom-start";
	export let anchor: HTMLElement;
	export let flip = true;
	let className: string = "";
	export { className as class };

	let dropDownRef: HTMLDivElement;
	let currentPlacement: Placement;

	$: {
		if (anchor != undefined && dropDownRef != undefined) {
			resize(placement);
		}
	}

	const resize = (p: Placement) => {
		if (anchor == undefined || dropDownRef == undefined) return;
		currentPlacement = place(anchor, dropDownRef, { placement: p, flip });
	};

	const docClick = (e: MouseEvent) => {
		const target = e.target as Node;
		if (!dropDownRef.contains(target) && !anchor.contains(target)) visible = false;
	};
</script>

<svelte:document on:click={docClick} />
<svelte:window on:resize={() => resize(placement)} on:scroll={() => resize(placement)} />

<div
	data-show={visible}
	data-shadow={shadow}
	data-placement={currentPlacement}
	bind:this={dropDownRef}
	class="absolute data-[show=false]:pointer-events-none z-[1]
    data-[show=false]:opacity-0 bg-gray-0 dark:bg-gray-999 rounded-lg
	transition-all border border-gray-100 dark:border-gray-900
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
    data-[placement='top-end']:data-[show=false]:translate-x-1
    {className}"
>
	<slot />
</div>

<!--
@component
Displays a popup around an anchor component.

[See Docs](https://geist-ui-svelte.dev/components/dropdown) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
