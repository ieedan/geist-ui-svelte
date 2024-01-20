<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="plus"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="160" y="15" width="30" height="320" rx="15" fill="currentColor" />
	<rect
		x="15"
		y="190"
		width="30"
		height="320"
		rx="15"
		transform="rotate(-90 15 190)"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=plus) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
