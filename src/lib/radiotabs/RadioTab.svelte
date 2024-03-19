<script lang="ts">
	import type { Size } from "$lib/types.js";
	import { cn } from "$lib/util/utils.js";
	import { cva } from "class-variance-authority";
	import { createEventDispatcher, getContext } from "svelte";

	const dispatch = createEventDispatcher();

	/* Sets the initial selected state */
	export let initialSelected: boolean = false;
	/* Use ids to differentiate tabs */
	export let id: string = "";

	const style = cva("transition-all px-3 py-1 rounded-md h-full", {
		variants: {
			color: {
				primary: `text-gray-400 dark:text-gray-600 aria-selected:bg-gray-999 
				hover:text-gray-999 dark:hover:text-gray-0 aria-selected:text-gray-0 
				aria-selected:dark:bg-gray-0 aria-selected:dark:text-gray-999`,
				secondary: `aria-selected:dark:bg-gray-900 aria-selected:bg-gray-100 aria-selected:dark:text-gray-0 
				aria-selected:text-gray-999 hover:dark:text-gray-0 hover:text-gray-999 
				text-gray-400 dark:text-gray-600`,
				ghost: `text-gray-999 dark:text-gray-0 aria-selected:dark:bg-gray-999 
				aria-selected:text-gray-999 aria-selected:bg-gray-0 aria-selected:dark:text-gray-0`,
			},
			size: {
				xs: "text-xs",
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
				xl: "text-xl",
			},
		},
	});

	$: color = getContext<"primary" | "secondary" | "ghost">("geist-radio-tab-color");
	$: size = getContext<Size>("geist-radio-tab-size");

	let tabRef: HTMLButtonElement;

	const click = () => {
		const parent = tabRef.parentElement;
		if (!parent) return;

		const peers = Array.from(parent.children);
		peers.forEach((peer) => {
			peer.setAttribute("aria-selected", "false");
		});

		tabRef.setAttribute("aria-selected", "true");

		dispatch("selected");
	};
</script>

<button
	type="button"
	role="tab"
	bind:this={tabRef}
	on:click={click}
	{id}
	aria-selected={initialSelected}
	class={cn(style({ color, size }))}
>
	<slot />
</button>

<!--
@component
The tab component for the RadioTabs component.

[See Docs](https://geist-ui-svelte.dev/components/radiotabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
