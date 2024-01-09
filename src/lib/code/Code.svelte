<script lang="ts">
	import { onMount } from "svelte";
	import { codeToHtml, type BundledLanguage } from "shikiji";

	export let lang: BundledLanguage = "javascript";
	export let code: string;
	let highlightedCode: string;

	onMount(async () => {
		highlightedCode = await codeToHtml(code, {
			lang,
			theme: "aurora-x",
		});
	});
</script>

<div class="rounded-lg overflow-x-auto px-4 py-4 scrollbar-hide" style="background-color: #07090F;">
	{@html highlightedCode}
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