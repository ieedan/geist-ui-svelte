<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="desktop"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="60" y="72" width="230" height="160" rx="22" stroke="currentColor" stroke-width="20" />
	<rect x="56" y="179" width="238" height="20" fill="currentColor" />
	<rect x="100" y="268" width="150" height="20" rx="10" fill="currentColor" />
	<rect
		x="188"
		y="232.473"
		width="20"
		height="50"
		transform="rotate(-10 188 232.473)"
		fill="currentColor"
	/>
	<rect
		x="143.682"
		y="229"
		width="20"
		height="50"
		transform="rotate(10 143.682 229)"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=desktop) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->