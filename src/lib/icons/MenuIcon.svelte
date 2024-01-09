<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="menu"
	style="transform: rotate({rotation});"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect x="16" y="55" width="320" height="40" rx="20" fill="currentColor" />
	<rect x="15" y="155" width="320" height="40" rx="20" fill="currentColor" />
	<rect x="14" y="255" width="320" height="40" rx="20" fill="currentColor" />
</svg>
