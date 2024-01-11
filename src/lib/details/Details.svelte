<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import { fade } from "svelte/transition";
	import { onMount, tick } from "svelte";

	let show = false;
	export let label: string;
	/** Adds animation to the open and close of the content */
	// export let animate: boolean = false;

	// let contentElement: HTMLDivElement;
	// let contentHeight: number = 0;

	// const updateHeight = async () => {
	// 	await tick(); // Ensures DOM is updated
	// 	contentHeight = contentElement.scrollHeight;
	// };

	// $: if (show) {
	// 	updateHeight();
	// }

	// onMount(updateHeight);
</script>

<div data-show={show} class="group/details flex flex-col gap-2">
	<button
		on:click={() => (show = !show)}
		class="flex place-items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
		<div class="data-[show=true]:rotate-90">
			<ChevronIcon size={16} />
		</div>
		{label}
	</button>
	{#key show}
		<div class="hidden group-data-[show=true]/details:block" in:fade={{ duration: 300 }}>
			<slot />
		</div>
	{/key}
	<!-- <div
		bind:this={contentElement}
		class="group-data-[transition=true]/details:transition-all overflow-hidden group-data-[show=false]/details:opacity-0"
		style="height: {show ? `${contentHeight}px` : '0px'};">
		<slot />
	</div> -->
</div>
