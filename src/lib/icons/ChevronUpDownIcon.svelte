<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="arrow up and down"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="175.213"
		y="28"
		width="150"
		height="25"
		rx="12.5"
		transform="rotate(45 175.213 28)"
		fill="currentColor"
	/>
	<rect
		x="69"
		y="134.066"
		width="150"
		height="25"
		rx="12.5"
		transform="rotate(-45 69 134.066)"
		fill="currentColor"
	/>
	<rect
		x="175.066"
		y="321.487"
		width="150"
		height="25"
		rx="12.5"
		transform="rotate(-135 175.066 321.487)"
		fill="currentColor"
	/>
	<rect
		x="281.279"
		y="215.421"
		width="150"
		height="25"
		rx="12.5"
		transform="rotate(135 281.279 215.421)"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=chevronupdown) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
