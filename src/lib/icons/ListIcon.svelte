<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="list"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<rect x="32" y="148" width="50" height="50" rx="15" fill="currentColor" />
	<rect x="32" y="66" width="50" height="50" rx="15" fill="currentColor" />
	<rect x="103" y="66" width="215" height="50" rx="15" fill="currentColor" />
	<rect x="103" y="148" width="215" height="50" rx="15" fill="currentColor" />
	<rect x="32" y="234" width="50" height="50" rx="15" fill="currentColor" />
	<rect x="103" y="234" width="215" height="50" rx="15" fill="currentColor" />
</svg>
