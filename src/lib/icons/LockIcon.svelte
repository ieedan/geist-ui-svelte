<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="lock"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M37 186C37 163.909 54.9086 146 77 146H272C294.091 146 
		312 163.909 312 186V281C312 303.091 294.091 321 272 321H77C54.9086 321 37 303.091 37 281V186Z"
		fill="currentColor"
	/>
	<rect x="102" y="48" width="144" height="169" rx="72" stroke="currentColor" stroke-width="40" />
</svg>
