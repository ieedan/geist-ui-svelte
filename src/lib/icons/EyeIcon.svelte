<script lang="ts">
	import type { Rotation } from "$lib/types.js";

	export let rotation: Rotation = "0deg";
	export let size: number = 24;
</script>

<svg
	aria-label="eye"
	style="transform: rotate({rotation}); display: inline;"
	width={size}
	height={size}
	viewBox="0 0 350 350"
	fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M290.564 175C284.751 162.553 277.892 151.125 270.18 140.939C244.789 
        107.405 210.817 88 174.5 88C138.183 88 104.211 107.405 78.8203 140.939C71.1079 
        151.125 64.2487 162.553 58.4355 175H42C68.1572 114.094 117.695 73 174.5 73C231.305
         73 280.843 114.094 307 175H290.564Z"
		fill="currentColor" />
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M58.4355 175C64.2487 187.447 71.1079 198.875 78.8203 209.061C104.211 242.595 
        138.183 262 174.5 262C210.817 262 244.789 242.595 270.18 209.061C277.892 198.875
         284.751 187.447 290.564 175H307C280.843 235.906 231.305 277 174.5 277C117.695 
         277 68.1572 235.906 42 175H58.4355Z"
		fill="currentColor" />
	<circle cx="174.5" cy="174.5" r="55" stroke="currentColor" stroke-width="15" />
</svg>
