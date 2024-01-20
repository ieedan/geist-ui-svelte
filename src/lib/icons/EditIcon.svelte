<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="edit"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		x="211.353"
		y="62.0074"
		width="90"
		height="15"
		transform="rotate(40 211.353 62.0074)"
		fill="currentColor"
	/>
	<path
		d="M68.8591 227.17C69.1471 221.652 73.8545 217.415 79.3734 217.705V217.705C84.8923 217.996 89.1327 222.704 88.8447 228.221L85.3739 294.703C85.0859 300.22 80.3785 304.457 74.8596 304.167V304.167C69.3407 303.877 65.1003 299.168 65.3883 293.651L68.8591 227.17Z"
		fill="currentColor"
	/>
	<rect
		width="20.0132"
		height="86.4294"
		rx="10"
		transform="matrix(0.225436 0.974258 -0.974482 0.224466 147.54 267.207)"
		fill="currentColor"
	/>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M284.955 67.6348L261.974 48.3512C255.628 43.0262 246.167 43.8539 240.842 50.2001L86.2102 234.483L85.5897 233.962C87.2763 229.57 86.5681 224.909 83.4117 222.261C80.2553 219.612 75.5425 219.724 71.5097 222.148L70.8893 221.627L225.521 37.3443C237.946 22.5367 260.022 20.6053 274.83 33.0303L297.811 52.314C312.619 64.739 314.55 86.8155 302.125 101.623L147.494 285.906L146.873 285.385C148.56 280.993 147.852 276.332 144.695 273.684C141.539 271.035 136.826 271.147 132.793 273.571L132.173 273.05L286.804 88.7673C292.129 82.4212 291.302 72.9599 284.955 67.6348Z"
		fill="currentColor"
	/>
</svg>

<!--
@component
[See Docs](https://geist-ui-svelte.dev/components/icons?icon=edit) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
