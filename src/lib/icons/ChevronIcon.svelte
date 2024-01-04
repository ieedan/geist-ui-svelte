<script lang="ts">
	import type { IconColor, Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let color: IconColor = "default";
</script>

<svg
	width="24"
	style="transform: rotate({rotation});"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M9 18l6-6-6-6"
		data-color={color}
		class="stroke-gray-999 dark:stroke-gray-0 data-[color='success']:stroke-blue-500 data-[color='warning']:stroke-orange-300
		data-[color='secondary']:stroke-gray-200 data-[color='secondary']:dark:stroke-gray-800
        data-[color='warning']:dark:stroke-orange-400 data-[color='error']:stroke-red-500 data-[color='error']:dark:stroke-red-600"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
