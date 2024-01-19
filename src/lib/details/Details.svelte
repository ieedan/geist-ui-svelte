<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import { onMount, tick } from "svelte";

	export let initialShow = false;
	let show = initialShow;
	export let label: string;
	/** Adds animation to the open and close of the content */
	export let animate: boolean = false;

	let contentElement: HTMLDivElement;
	let contentHeight: number = 0;

	const updateHeight = async () => {
		await tick(); // Ensures DOM is updated
		contentHeight = contentElement.scrollHeight;
	};

	$: if (show) {
		updateHeight();
	}

	onMount(updateHeight);
</script>

<div
	data-transition={animate}
	data-show={show}
	class="group/details flex flex-col data-[show=true]:gap-2 data-[transition=true]:transition-all gap-0"
>
	<button
		type="button"
		on:click={() => (show = !show)}
		class="flex place-items-center gap-2 text-sm text-gray-600 dark:text-gray-500"
	>
		<div class="data-[show=true]:rotate-90">
			<ChevronIcon size={16} />
		</div>
		{label}
	</button>
	<div
		bind:this={contentElement}
		class="group-data-[transition=true]/details:transition-all overflow-hidden group-data-[show=false]/details:opacity-0"
		style="height: {show ? `${contentHeight}px` : '0px'};"
	>
		<slot />
	</div>
</div>
