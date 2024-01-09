<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="lock"
	style="transform: rotate({rotation});"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M169 49H180C221.421 49 255 82.5786 255 124V159H275V124C275 
        71.533 232.467 29 180 29H169C116.533 29 74 71.5329 74 
        124V159H94V124C94 82.5786 127.579 49 169 49Z"
		fill="currentColor"
	/>
	<rect x="23" y="159" width="303" height="174" rx="24" fill="currentColor" />
</svg>
