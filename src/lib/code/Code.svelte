<script lang="ts">
	import hljs from "highlight.js";
	import { onMount } from "svelte";
	import "highlight.js/styles/github-dark.css";

	let codeRef: HTMLElement;

	onMount(async () => {
		hljs.highlightElement(codeRef);
	});
</script>

<div class="rounded-lg overflow-hidden">
	<pre><code class="whitespace-pre-wrap" bind:this={codeRef}><slot /></code></pre>
</div>
