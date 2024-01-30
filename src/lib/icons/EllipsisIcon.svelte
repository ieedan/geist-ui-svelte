<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="ellipsis"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="53" cy="175" r="40" fill="currentColor" />
	<circle cx="297" cy="175" r="40" fill="currentColor" />
	<circle cx="175" cy="175" r="40" fill="currentColor" />
</svg>
