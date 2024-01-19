<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let checked = false;

	const toggle = () => {
		checked = !checked;
		dispatch("change", { checked });
	};

	export let color: "secondary" | "success" | "warning" | "error" = "success";
</script>

<button
	type="button"
	{...$$restProps}
	role="checkbox"
	aria-checked={checked}
	on:click
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	class="bg-gray-200 dark:bg-gray-800 h-[16px] w-[30px] rounded-xl group relative disabled:hover:cursor-not-allowed border
    border-transparent dark:border-transparent dark:border-gray-800 disabled:bg-gray-100 disabled:dark:border-gray-800
    disabled:dark:bg-gray-900 disabled:border-gray-200
    aria-checked:disabled:border-gray-600 aria-checked:disabled:dark:border-gray-700
    aria-checked:disabled:bg-gray-600 aria-checked:disabled:dark:bg-gray-700
    aria-checked:data-[color='success']:bg-blue-500 aria-checked:data-[color='secondary']:bg-gray-900
    aria-checked:data-[color='secondary']:dark:bg-gray-0 aria-checked:data-[color='warning']:bg-orange-300
    aria-checked:data-[color='warning']:dark:bg-orange-400 aria-checked:data-[color='error']:bg-red-500
    aria-checked:data-[color='error']:dark:bg-red-600 aria-checked:bg-blue-500 transition-all"
	data-color={color}
	on:click={toggle}
>
	<div
		class="rounded-full size-3 transition-all bg-gray-0 dark:bg-gray-999 absolute
        group-disabled:group-aria-[checked=false]:dark:bg-gray-700 group-disabled:group-aria-checked:dark:bg-gray-900
        group-disabled:group-aria-checked:bg-gray-200 group-disabled:group-aria-[checked=false]:bg-gray-200
    top-1/2 -translate-y-1/2 group-aria-[checked=false]:left-[1px] group-aria-checked:translate-x-[16px]"
	></div>
</button>
