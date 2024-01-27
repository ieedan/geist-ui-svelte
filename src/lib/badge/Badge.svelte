<script lang="ts">
	import type { Color, Size } from "$lib/types.js";
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "$lib/util/utils.js";

	const style = cva("border rounded-2xl", {
		variants: {
			color: {
				default: "bg-gray-999 text-gray-0 dark:text-gray-999 dark:bg-gray-0",
				success:
					"bg-blue-600 border-blue-600 dark:bg-blue-600 dark:border-blue-600 text-gray-0 dark:text-gray-0",
				warning:
					"bg-orange-300 border-orange-300 dark:bg-orange-400 dark:border-orange-400 text-gray-0 dark:text-gray-0",
				error: "bg-red-500 border-red-500 dark:bg-red-600 dark:border-red-600 text-gray-0 dark:text-gray-0",
				secondary:
					"bg-gray-200 border-gray-200 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-0",
			},
			size: {
				xs: "text-xs",
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
				xl: "text-xl",
			},
			ghost: {
				true: "",
				false: "",
			},
      padding: {
        true: "px-2",
        false: ""
      }
		},
		defaultVariants: {
			color: "default",
			size: "md",
			ghost: false,
      padding: true
		},
		compoundVariants: [
			{
				color: "default",
				ghost: true,
				class: "bg-transparent border-gray-999 text-gray-999 dark:bg-transparent dark:text-gray-0 dark:border-gray-0",
			},
			{
				color: "success",
				ghost: true,
				class: "",
			},
			{
				color: "warning",
				ghost: true,
				class: "",
			},
			{
				color: "error",
				ghost: true,
				class: "",
			},
			{
				color: "secondary",
				ghost: true,
				class: "",
			},
		],
	});

	interface Props extends VariantProps<typeof style> {}

	export let color: Props["color"] = "default";
	export let size: Props["size"] = "md";
  export let padding: boolean = true;
	export let ghost: boolean = false;
</script>

<span {...$$restProps} class={cn(style({ color: color, size, ghost, padding }), $$restProps.class)}>
	<slot />
</span>

<!--
@component
A simple component for status indicators or notification markers.

[See Docs](https://geist-ui-svelte.dev/components/badge) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
