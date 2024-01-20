<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="sun"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="175" cy="175" r="70" stroke="currentColor" stroke-width="20" />
	<rect x="167" y="9" width="16" height="70" rx="8" fill="currentColor" />
	<rect x="167" y="271" width="16" height="70" rx="8" fill="currentColor" />
	<rect
		x="271"
		y="183"
		width="16"
		height="70"
		rx="8"
		transform="rotate(-90 271 183)"
		fill="currentColor"
	/>
	<rect
		x="9"
		y="183"
		width="16"
		height="70"
		rx="8"
		transform="rotate(-90 9 183)"
		fill="currentColor"
	/>
	<rect
		x="50"
		y="61.3137"
		width="16"
		height="70"
		rx="8"
		transform="rotate(-45 50 61.3137)"
		fill="currentColor"
	/>
	<rect
		x="98.4974"
		y="239"
		width="16"
		height="70"
		rx="8"
		transform="rotate(45 98.4974 239)"
		fill="currentColor"
	/>
	<rect
		x="239"
		y="250.314"
		width="16"
		height="70"
		rx="8"
		transform="rotate(-45 239 250.314)"
		fill="currentColor"
	/>
	<rect
		x="288.426"
		y="50"
		width="16"
		height="70"
		rx="8"
		transform="rotate(45 288.426 50)"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=sun) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->