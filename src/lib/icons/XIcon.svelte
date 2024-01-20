<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="x"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="56"
		y="268.132"
		width="300"
		height="35"
		rx="15"
		transform="rotate(-45 56 268.132)"
		fill="currentColor"
	/>
	<rect
		x="81"
		y="56.132"
		width="300"
		height="35"
		rx="15"
		transform="rotate(45 81 56.132)"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=x) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->