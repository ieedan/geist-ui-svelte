<script lang="ts">
	import type { Color, Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let type: Color = "default";
	export let size: number = 24;
	export let ghost: boolean = false;
	export let color: string = "auto";
</script>

<svg
	style="transform: rotate({rotation});"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<rect
		x="103.5"
		y="69.5"
		width="200"
		height="265"
		rx="27.5"
		data-color={type}
		data-ghost={ghost}
		style="stroke: {color};"
		class="stroke-gray-999 dark:stroke-gray-0 data-[color='success']:stroke-blue-500
	data-[color='warning']:stroke-orange-300 transition-all
	data-[color='secondary']:stroke-gray-200 data-[color='secondary']:dark:stroke-gray-800
	data-[ghost=true]:dark:stroke-gray-999 data-[ghost=true]:stroke-gray-0
	data-[color='warning']:dark:stroke-orange-400 data-[color='error']:stroke-red-500
	data-[color='error']:dark:stroke-red-600"
		stroke-width="25" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M73 28H218C226.284 28 233 34.7157 233 43V57H258V43C258 20.9086 240.091 
		3 218 3H73C50.9086 3 33 20.9086 33 43V253C33 275.091 50.9086 293 
		73 293H91V268H73C64.7157 268 58 261.284 58 253V43C58 34.7157 64.7157 28 73 28Z"
		data-color={type}
		data-ghost={ghost}
		style="fill: {color};"
		class="fill-gray-999 dark:fill-gray-0 data-[color='success']:fill-blue-500
	data-[color='warning']:fill-orange-300 transition-all
	data-[color='secondary']:fill-gray-200 data-[color='secondary']:dark:fill-gray-800
	data-[ghost=true]:dark:fill-gray-999 data-[ghost=true]:fill-gray-0
	data-[color='warning']:dark:fill-orange-400 data-[color='error']:fill-red-500
	data-[color='error']:dark:fill-red-600" />
</svg>
