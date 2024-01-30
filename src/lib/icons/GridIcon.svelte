<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="grid"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="23" y="23" width="130" height="130" rx="20" stroke="currentColor" stroke-width="20" />
	<rect x="196" y="23" width="130" height="130" rx="20" stroke="currentColor" stroke-width="20" />
	<rect
		x="196"
		y="196"
		width="130"
		height="130"
		rx="20"
		stroke="currentColor"
		stroke-width="20"
	/>
	<rect x="23" y="196" width="130" height="130" rx="20" stroke="currentColor" stroke-width="20" />
</svg>
