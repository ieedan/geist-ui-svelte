<script lang="ts">
	import { getHighlighter, type BundledLanguage } from "shikiji";
	import { onMount } from "svelte";

	export let code: string = "";
	export let lang: BundledLanguage = "js";
	let codeHTML: string = "";

	onMount(async () => {
		const highlighter = await getHighlighter({
			themes: ["light-plus", "dark-plus"],
			langs: [lang],
		});

		codeHTML = highlighter.codeToHtml(code, {
			lang: lang,
			themes: {
				light: "light-plus",
				dark: "dark-plus",
			},
		});
	});
</script>

<pre><code>{@html codeHTML}</code></pre>

<style lang="postcss">
	
</style>
