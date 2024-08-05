<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("border block px-2 py-2 rounded-md", {
		variants: {
			color: {
				default: "border-gray-100 dark:border-gray-900 text-gray-600 dark:text-gray-400",
				success: "border-blue-600 text-blue-600 dark:border-blue-600 dark:text-blue-600",
				warning:
					"border-orange-300 text-orange-300 dark:border-orange-400 dark:text-orange-400",
				error: "border-red-500 text-red-500 dark:border-red-600 dark:text-red-600",
				secondary: "border-gray-999 text-gray-999 dark:border-gray-0 dark:text-gray-0",
			},
			block: {
				true: "",
				false: "",
			},
		},
		defaultVariants: {
			color: "default",
			block: false,
		},
		compoundVariants: [
			{
				color: "default",
				block: true,
				class: "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100",
			},
			{
				color: "success",
				block: true,
				class: "border-blue-600 bg-blue-600 text-blue-300 dark:border-blue-600 dark:bg-blue-600 dark:text-blue-300",
			},
			{
				color: "warning",
				block: true,
				class: "border-orange-300 bg-orange-300 text-orange-600 dark:border-orange-400 dark:text-orange-700 dark:bg-orange-400",
			},
			{
				color: "error",
				block: true,
				class: "border-red-500 border-opacity-65 text-red-600 bg-opacity-65 bg-red-500 dark:border-red-900 dark:bg-red-500 dark:border-opacity-45 dark:bg-opacity-45 dark:text-red-500",
			},
			{
				color: "secondary",
				block: true,
				class: "bg-gray-999 text-gray-0 dark:bg-gray-0 dark:text-gray-999",
			},
		],
	});

	type Props = VariantProps<typeof style>;

	export let color: Props["color"] = "default";
	export let label: boolean = true;
	export let block: boolean = false;
</script>

<span data-style={color} class={cn(style({ color, block }))}>
	{#if label}
		<slot name="label">NOTE:</slot>
	{/if}
	<slot />
</span>

<!--
@component
A comment that stands out to the user.

[See Docs](https://geist-ui-svelte.dev/components/note) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
