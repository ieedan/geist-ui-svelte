<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import type { ShortRoute } from "$lib/types.js";

	export let last: ShortRoute | undefined = undefined;
	export let next: ShortRoute | undefined = undefined;

	const handleDocumentKeydown = (e: KeyboardEvent) => {
		if (e.key == "ArrowRight" && e.ctrlKey && next) {
			goto(next?.slug);
		} else if (e.key == "ArrowLeft" && e.ctrlKey && last) {
			goto(last?.slug);
		}
	};

	onMount(() => {
		document.addEventListener("keydown", handleDocumentKeydown);

		return () => {
			document.removeEventListener("keydown", handleDocumentKeydown);
		};
	});
</script>

<div class="flex w-full place-items-center justify-between py-8">
	{#if last}
		<div class="flex flex-col place-items-start justify-start">
			<small class="px-6 text-xs text-gray-600 dark:text-gray-400">Last</small>
			<a
				href={last.slug}
				class="flex place-items-center gap-2 hover:underline text-gray-999 dark:text-gray-0"
			>
				<ChevronIcon size={16} rotation="180deg" />
				{last?.name}
			</a>
		</div>
	{:else}
		<div></div>
	{/if}
	{#if next}
		<div class="flex flex-col place-items-end justify-end">
			<small class="px-6 text-xs text-gray-600 dark:text-gray-400">Next</small>
			<a
				href={next.slug}
				class="flex place-items-center gap-2 hover:underline text-gray-999 dark:text-gray-0"
			>
				{next.name}
				<ChevronIcon size={16} rotation="0deg" />
			</a>
		</div>
	{:else}
		<div></div>
	{/if}
</div>
