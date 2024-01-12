<script lang="ts">
	import { onMount } from "svelte";
	import { getHighlighter, type BundledLanguage } from "shikiji";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import { scale } from "svelte/transition";
	import dark from "./dark-theme.js";
	import light from "./light-theme.js";

	export let lang: BundledLanguage = "javascript";
	export let code: string;
	let highlightedCode: string;

	let copied = false;
	let copyText = () => {
		navigator.clipboard.writeText(code).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 1000);
		});
	};

	onMount(async () => {
		const highlighter = await getHighlighter({
			themes: [light, dark],
			langs: [lang]
		});

		highlightedCode = highlighter.codeToHtml(code, {
			lang,
			themes: {
				dark: "geist-dark",
				light: "geist"
			}
		});
	});
</script>

<div class="rounded-lg overflow-x-auto px-4 py-4 scrollbar-hide relative bg-gray-0 dark:bg-gray-999">
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
