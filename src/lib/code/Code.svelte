<script lang="ts">
	import { onMount } from "svelte";
	import { codeToHtml, type BundledLanguage } from "shikiji";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import { scale } from "svelte/transition";

	export let lang: BundledLanguage = "javascript";
	export let code: string;
	let highlightedCode: string;

	onMount(async () => {
		highlightedCode = await codeToHtml(code, {
			lang,
			theme: "aurora-x",
		});
	});
	
	let copied = false;
	let copyText = () => {
		navigator.clipboard.writeText(code).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 1000);
		});
	};
</script>

<div
	class="rounded-lg overflow-x-auto px-4 py-4 scrollbar-hide relative"
	style="background-color: #07090F;">
	{@html highlightedCode}
	<div class="absolute top-2 right-2 hidden sm:flex">
		<button on:click={copyText}>
			{#if copied}
				<div in:scale={{ duration: 200 }}>
					<CheckMarkIcon size={16} />
				</div>
			{:else}
				<div in:scale={{ duration: 100 }}>
					<CloneIcon size={16} />
				</div>
			{/if}
		</button>
	</div>
</div>

<style lang="postcss">
	.scrollbar-hide {
		-ms-overflow-style: none; /* Internet Explorer and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none; /* Chrome, Safari, and Opera */
	}

	::-webkit-scrollbar-corner {
		background: rgba(0, 0, 0, 0);
	}
</style>
