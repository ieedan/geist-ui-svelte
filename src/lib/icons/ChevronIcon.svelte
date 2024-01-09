<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="arrow"
	style="transform: rotate({rotation});"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M9 18l6-6-6-6"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
