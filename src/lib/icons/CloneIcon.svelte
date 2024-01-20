<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="copy"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="103.5"
		y="69.5"
		width="200"
		height="265"
		rx="27.5"
		stroke="currentColor"
		stroke-width="25"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M73 28H218C226.284 28 233 34.7157 233 43V57H258V43C258 20.9086 240.091 
		3 218 3H73C50.9086 3 33 20.9086 33 43V253C33 275.091 50.9086 293 
		73 293H91V268H73C64.7157 268 58 261.284 58 253V43C58 34.7157 64.7157 28 73 28Z"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=clone) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->