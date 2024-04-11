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
	xmlns="http://www.w3.org/2000/svg">
	<rect
		x="116.5"
		y="112.5"
		width="200"
		height="200"
		rx="27.5"
		stroke="currentColor"
		stroke-width="25" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M61 50H206C214.284 50 221 56.7157 221 65V89.125H246V65C246 42.9086 228.091 25 206
		 25H61C38.9086 25 21 42.9086 21 65V210C21 232.091 38.9086 250 61 250H91.875V225H61C52.7157
		  225 46 218.284 46 210V65C46 56.7157 52.7157 50 61 50Z"
		fill="currentColor" />
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=clone) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
