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
	class="hover:bg-gray-100 dark:hover:bg-gray-900 transition-all
px-3 py-2 rounded-md text-sm aria-selected:bg-gray-999
aria-selected:text-gray-0 aria-selected:dark:bg-gray-0 aria-selected:dark:text-gray-999"
>
	<slot />
</button>

<!--
@component
The tab component for the RadioTabs component.

[See Docs](https://geist-ui-svelte.dev/components/radiotabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
