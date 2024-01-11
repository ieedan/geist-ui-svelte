<script lang="ts">
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import { fade, scale } from "svelte/transition";

	let show = false;
	export let label: string;
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
</div>
