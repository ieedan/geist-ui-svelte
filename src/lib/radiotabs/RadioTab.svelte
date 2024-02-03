<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/* Sets the initial selected state */
	export let initialSelected: boolean = false;
	/* Use ids to differentiate tabs */
	export let id: string = "";

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
	class="transition-all px-3 py-1 rounded-md h-full

	group-data-[color='primary']:text-gray-400 group-data-[color='primary']:dark:text-gray-600
  group-data-[color='primary']:aria-selected:bg-gray-999 group-data-[color='primary']:hover:text-gray-999
  group-data-[color='primary']:dark:hover:text-gray-0
  group-data-[color='primary']:aria-selected:text-gray-0 group-data-[color='primary']:aria-selected:dark:bg-gray-0
  group-data-[color='primary']:aria-selected:dark:text-gray-999
  
    group-data-[color='secondary']:aria-selected:dark:bg-gray-900 group-data-[color='secondary']:aria-selected:bg-gray-100
	group-data-[color='secondary']:aria-selected:dark:text-gray-0 group-data-[color='secondary']:aria-selected:text-gray-999
	group-data-[color='secondary']:hover:dark:text-gray-0 group-data-[color='secondary']:hover:text-gray-999
	group-data-[color='secondary']:text-gray-400 group-data-[color='secondary']:dark:text-gray-600"
>
	<slot />
</button>

<!--
@component
The tab component for the RadioTabs component.

[See Docs](https://geist-ui-svelte.dev/components/radiotabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
