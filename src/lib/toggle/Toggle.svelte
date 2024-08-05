<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";
	import { createEventDispatcher } from "svelte";

	const style = cva(
		"bg-gray-200 dark:bg-gray-800 h-[16px] w-[30px] rounded-xl group relative border border-transparent dark:border-transparent dark:border-gray-800 transition-all",
		{
			variants: {
				color: {
					secondary:
						"enabled:aria-checked:bg-gray-900 enabled:aria-checked:dark:bg-gray-0 enabled:aria-checked:border-gray-900 enabled:aria-checked:dark:border-gray-0",
					success:
						"enabled:aria-checked:bg-blue-600 enabled:aria-checked:dark:bg-blue-600 enabled:aria-checked:border-blue-600 enabled:aria-checked:dark:border-blue-600",
					warning:
						"enabled:aria-checked:bg-orange-300 enabled:aria-checked:dark:bg-orange-400 enabled:aria-checked:border-orange-300 enabled:aria-checked:dark:border-orange-400",
					error: "enabled:aria-checked:bg-red-500 enabled:aria-checked:dark:bg-red-600 enabled:aria-checked:border-red-400 enabled:aria-checked:dark:border-red-600",
				},
				disabled: {
					true: "dark:bg-gray-900 border-gray-200 hover:cursor-not-allowed bg-gray-100 dark:border-gray-800 aria-checked:bg-gray-200 dark:aria-checked:border-gray-700 dark:aria-checked:bg-gray-700",
					false: "",
				},
			},
			defaultVariants: {
				color: "success",
			},
		},
	);

	type Props = VariantProps<typeof style>;

	const dispatch = createEventDispatcher();

	export let checked = false;

	const toggle = () => {
		checked = !checked;
		dispatch("change", { checked });
	};

	export let color: Props["color"] = "success";
	export let disabled = false;
</script>

<input {...$$restProps} on:click on:change class="hidden" type="checkbox" bind:checked />
<button
	type="button"
	{...$$restProps}
	{disabled}
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
	class={cn(style({ color, disabled }))}
	data-color={color}
	on:click={toggle}
>
	<div
		class="rounded-full size-3 transition-all bg-gray-0 dark:bg-gray-999 absolute
        group-disabled:group-aria-[checked=false]:dark:bg-gray-700 group-disabled:group-aria-checked:dark:bg-gray-900
        group-disabled:group-aria-checked:bg-gray-100 group-disabled:group-aria-[checked=false]:bg-gray-200
    top-1/2 -translate-y-1/2 group-aria-[checked=false]:left-[1px] group-aria-checked:translate-x-[16px]"
	></div>
</button>

<!--
@component
An input with a true / false state.

[See Docs](https://geist-ui-svelte.dev/components/toggle) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
