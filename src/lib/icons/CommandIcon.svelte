<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="command"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="72" y="102" width="204" height="30" fill="currentColor" />
	<rect x="102" y="72" width="30" height="204" fill="currentColor" />
	<rect x="217" y="72" width="30" height="204" fill="currentColor" />
	<rect x="72" y="217" width="204" height="30" fill="currentColor" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M74 217.002C42.4738 217.271 17 242.911 17 274.5C17 306.256 42.7436 332 74.5 332C106.256 332 132 306.256 132 274.5C132 274.333 131.999 274.167 131.998 274H101.996C101.999 274.166 102 274.333 102 274.5C102 289.688 89.6878 302 74.5 302C59.3122 302 47 289.688 47 274.5C47 259.479 59.0429 247.271 74 247.005V217.002Z"
		fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M217.002 274C217.001 274.167 217 274.333 217 274.5C217 306.256 242.744 332 274.5 332C306.256 332 332 306.256 332 274.5C332 242.744 306.256 217 274.5 217C274.333 217 274.167 217.001 274 217.002V247.004C274.166 247.001 274.333 247 274.5 247C289.688 247 302 259.312 302 274.5C302 289.688 289.688 302 274.5 302C259.312 302 247 289.688 247 274.5C247 274.333 247.001 274.166 247.004 274H217.002Z"
		fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M302 74.5C302 89.6878 289.688 102 274.5 102C274.333 102 274.166 101.999 274 101.996V131.998C274.167 131.999 274.333 132 274.5 132C306.256 132 332 106.256 332 74.5C332 42.7436 306.256 17 274.5 17C242.911 17 217.271 42.4738 217.002 74H247.005C247.271 59.0429 259.479 47 274.5 47C289.688 47 302 59.3122 302 74.5Z"
		fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M101.996 74C101.729 59.0429 89.5208 47 74.5 47C59.3122 47 47 59.3122 47 74.5C47 89.5208 59.0429 101.729 74 101.996V131.998C42.4738 131.729 17 106.09 17 74.5C17 42.7436 42.7436 17 74.5 17C106.09 17 131.729 42.4738 131.998 74H101.996Z"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=command) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
