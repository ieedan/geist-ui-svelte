<script lang="ts">
	export let disabled: boolean = false;
</script>

<button
	role="option"
	aria-selected={false}
	{...$$restProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	{disabled}
	class="enabled:hover:cursor-pointer disabled:cursor-not-allowed px-2 enabled:hover:bg-gray-50
    enabled:dark:hover:bg-gray-925 aria-selected:text-gray-999 text-gray-700 dark:text-gray-500
    transition-all py-1 aria-selected:bg-gray-100 aria-selected:dark:text-gray-0 z-[11]
    aria-selected:dark:bg-gray-900 flex justify-center place-items-center w-full
	disabled:bg-gray-50 disabled:dark:bg-gray-950 font-light text-sm text-center"
>
	<slot />
</button>
