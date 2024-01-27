<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("transition-all border p-4", {
		variants: {
			color: {
				transparent: `ring-gray-100 dark:ring-gray-900 border-gray-100 dark:border-gray-900 
				text-gray-999 dark:text-gray-0`,
				dark: `bg-gray-999 border-gray-999 dark:bg-gray-0 dark:border-gray-0 text-gray-0 
				dark:text-gray-999 ring-gray-800 dark:ring-gray-200`,
				secondary: `bg-gray-700 border-gray-700 dark:bg-gray-300 dark:border-gray-300 text-gray-0 
				dark:text-gray-999 ring-gray-500 dark:ring-gray-500`,
				success: `bg-blue-600 border-blue-600 dark:bg-blue-600 dark:border-blue-600 text-gray-0 
				dark:text-gray-0 ring-blue-500 dark:ring-blue-500`,
				warning: `bg-orange-300 border-orange-300 dark:bg-orange-400 dark:orange-red-400 text-gray-0 
				dark:text-gray-0 ring-orange-500 dark:ring-orange-500`,
				error: `bg-red-500 border-red-500 dark:bg-red-600 dark:border-red-600 text-gray-0 dark:text-gray-0 
				ring-red-600 dark:ring-red-700`,
				abort: `bg-gray-50 border-gray-50 dark:bg-gray-950 dark:border-gray-950 text-gray-999 dark:text-gray-0 
				ring-gray-100 dark:ring-gray-900`,
			},
			rounded: {
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				xl: "rounded-xl",
				"2xl": "rounded-2xl",
				"3xl": "rounded-3xl",
				full: "rounded-full",
				none: "",
			},
			hoverable: {
				true: "hover:ring-2",
				false: "",
			},
			shadow: {
				true: "shadow-md border-transparent dark:border-gray-900",
				false: "",
			},
		},
		defaultVariants: {
			color: "transparent",
			rounded: "lg",
		},
	});

	interface Props extends VariantProps<typeof style> {}

	export let color: Props["color"] = "transparent";
	export let rounded: Props["rounded"] = "lg";
	export let hoverable = false;
	export let shadow = false;

	let className: string = "";
	export { className as class };
</script>

<div
	data-hoverable={hoverable}
	data-shadow={shadow}
	data-color={color}
	data-rounded={rounded}
	class={cn(style({ color, rounded, hoverable, shadow }), className)}
>
	<slot />
</div>

<!--
@component
A common organizational layout component.

[See Docs](https://geist-ui-svelte.dev/components/card) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
