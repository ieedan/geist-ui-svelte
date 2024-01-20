<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="search"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_15_2)">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M203.611 184.805C200.993 188.204 198.126 191.474 
			195.011 194.589C190.913 198.687 186.548 202.355 
			181.972 205.593L271.378 294.999C277.236 300.856 
			286.734 300.856 292.591 294.999C298.449 289.141 
			298.449 279.643 292.591 273.785L203.611 184.805Z"
			fill="currentColor"
		/>
		<circle
			cx="126.421"
			cy="126"
			r="85"
			transform="rotate(-45 126.421 126)"
			stroke="currentColor"
			stroke-width="30"
		/>
	</g>
	<defs>
		<clipPath id="clip0_15_2">
			<rect width="350" height="350" fill="white" />
		</clipPath>
	</defs>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=search) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->