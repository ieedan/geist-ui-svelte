<script lang="ts">
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";
	import { createEventDispatcher } from "svelte";

	const style = cva(`flex place-items-center justify-center border rounded-md size-4 
	aria-[checked=false]:border-gray-200 dark:aria-[checked=false]:border-gray-800 group
	transition-all relative outline-none focus:outline-none text-gray-0 dark:text-gray-999`, {
		variants: {
			color: {
				default: "aria-checked:bg-gray-999 dark:aria-checked:bg-gray-0 aria-checked:border-gray-999 dark:aria-checked:border-gray-0",
				success: "aria-checked:bg-blue-600 aria-checked:dark:bg-blue-600 aria-checked:border-blue-600 aria-checked:dark:border-blue-600",
				warning: "aria-checked:bg-orange-300 aria-checked:dark:bg-orange-400 aria-checked:border-orange-300 aria-checked:dark:border-orange-400",
				error: "aria-checked:bg-red-500 aria-checked:dark:bg-red-600 aria-checked:border-red-500 aria-checked:dark:border-red-600",
				secondary: "aria-checked:bg-gray-200 dark:aria-checked:bg-gray-800 aria-checked:border-gray-200 dark:aria-checked:border-gray-800"
			},
			disabled: {
				true: `aria-checked:bg-gray-200 aria-checked:border-gray-200 aria-[checked=false]:border-gray-50 dark:aria-[checked=false]:border-gray-925 
				aria-checked:dark:bg-gray-600 aria-checked:dark:border-gray-600 hover:cursor-not-allowed`,
				false: ""
			}
		}
	});

	const ringStyle = cva(`absolute size-6 rounded-lg border-2 left-1/2 
	top-1/2 transition-all -translate-y-1/2 -translate-x-1/2 
	group-focus:opacity-100 opacity-0`,{
		variants: {
			color: {
				default: "border-gray-999 dark:border-gray-0",
				success: "border-blue-600 dark:border-blue-600",
				warning: "border-orange-300 dark:border-orange-400",
				error: "border-red-500 dark:border-red-600",
				secondary: "border-gray-200 dark:border-gray-800"
			}
		}
	});

	interface Props extends VariantProps<typeof style>{};

	const dispatch = createEventDispatcher();

	export let checked = false;
	export let id: string | undefined = undefined;
	export let color: Props["color"] = "default";
	export let disabled: boolean = false;
	export let ring: boolean = false;

	const toggle = () => {
		checked = !checked;
		dispatch("click");
		dispatch("change", { checked });
	};
</script>

<input {...$$restProps} on:click on:change class="hidden" type="checkbox" bind:checked />
<label
	for={id}
	class="flex place-items-center gap-2 group aria-disabled:hover:cursor-not-allowed select-none hover:cursor-pointer w-fit"
	aria-disabled={disabled}
>
	<button
		type="button"
		on:click|preventDefault|stopPropagation={toggle}
		{id}
		role="checkbox"
		aria-checked={checked}
		{disabled}
		class={cn(style({ color, disabled }))}
	>
		{#if ring}
			<div class={cn(ringStyle({ color }))}/>
		{/if}
		{#if checked}
			<CheckMarkIcon size={16} />
		{/if}
	</button>
	<span
		class="flex place-items-center justify-start group-aria-disabled:text-gray-400 group-aria-disabled:dark:text-gray-600">
		<slot />
	</span>
</label>

<!--
@component
An input with a true / false state.

[See Docs](https://geist-ui-svelte.dev/components/checkbox) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
