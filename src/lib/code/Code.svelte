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

<div class="rounded-lg overflow-hidden px-4 py-4" style="background-color: #07090F;">
	{@html highlightedCode}
</div>
