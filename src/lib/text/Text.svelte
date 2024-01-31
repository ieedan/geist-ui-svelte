<script lang="ts">
	import type { TextAlignment } from "$lib/types.js";
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("", {
		variants: {
			color: {
				inherit: "text-inherit dark:text-inherit",
				dark: "text-gray-999 dark:text-gray-0",
				secondary: "text-gray-500 dark:text-gray-500",
				success: "text-blue-600 dark:text-blue-600",
				warning: "text-orange-300 dark:text-orange-400",
				error: "text-red-500 dark:text-red-600",
				abort: "text-gray-300 dark:text-gray-700",
			},
			size: {
				xs: "!text-xs",
				sm: "!text-sm",
				md: "!text-base",
				lg: "!text-lg",
				xl: "!text-xl",
				"2xl": "!text-2xl",
				"3xl": "!text-3xl",
				"4xl": "!text-4xl",
				"5xl": "!text-5xl",
				"6xl": "!text-6xl",
				"7xl": "!text-7xl",
				"8xl": "!text-8xl",
				"9xl": "!text-9xl",
				default: "inherit",
			},
			smSize: {
				xs: "sm:!text-xs",
				sm: "sm:!text-sm",
				md: "sm:!text-base",
				lg: "sm:!text-lg",
				xl: "sm:!text-xl",
				"2xl": "sm:!text-2xl",
				"3xl": "sm:!text-3xl",
				"4xl": "sm:!text-4xl",
				"5xl": "sm:!text-5xl",
				"6xl": "sm:!text-6xl",
				"7xl": "sm:!text-7xl",
				"8xl": "sm:!text-8xl",
				"9xl": "sm:!text-9xl",
				default: "inherit",
			},
			mdSize: {
				xs: "md:!text-xs",
				sm: "md:!text-sm",
				md: "md:!text-base",
				lg: "md:!text-lg",
				xl: "md:!text-xl",
				"2xl": "md:!text-2xl",
				"3xl": "md:!text-3xl",
				"4xl": "md:!text-4xl",
				"5xl": "md:!text-5xl",
				"6xl": "md:!text-6xl",
				"7xl": "md:!text-7xl",
				"8xl": "md:!text-8xl",
				"9xl": "md:!text-9xl",
				default: "inherit",
			},
			lgSize: {
				xs: "lg:!text-xs",
				sm: "lg:!text-sm",
				md: "lg:!text-base",
				lg: "lg:!text-lg",
				xl: "lg:!text-xl",
				"2xl": "lg:!text-2xl",
				"3xl": "lg:!text-3xl",
				"4xl": "lg:!text-4xl",
				"5xl": "lg:!text-5xl",
				"6xl": "lg:!text-6xl",
				"7xl": "lg:!text-7xl",
				"8xl": "lg:!text-8xl",
				"9xl": "lg:!text-9xl",
				default: "inherit",
			},
			del: {
				true: "line-through",
				false: "",
			},
			bold: {
				true: "!font-bold",
				false: "",
			},
			italics: {
				true: "italic",
				false: "",
			},
			noWrap: {
				true: "text-nowrap whitespace-nowrap",
				false: "",
			},
			serif: {
				true: "font-serif",
				false: "",
			},
			blockquote: {
				true: `bg-gray-50 border-gray-100 dark:bg-gray-950 dark:border-gray-900 border px-2 py-1 rounded-md`,
				false: "",
			},
			type: {
				h1: "font-bold text-7xl",
				h2: "font-bold text-5xl",
				h3: "font-bold text-3xl",
				h4: "font-bold text-2xl",
				h5: "font-bold text-xl",
				h6: "font-bold text-lg",
				p: "font-normal text-base inline",
				small: "text-xs inline",
				span: "font-normal text-base inline",
			},
		},
		defaultVariants: {
			type: "p",
			blockquote: false,
			bold: false,
			noWrap: false,
			italics: false,
			del: false,
			size: "default",
			smSize: "default",
			mdSize: "default",
			lgSize: "default",
			color: "inherit",
			serif: false,
		},
	});

	interface Props extends VariantProps<typeof style> {}

	export let type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" = "p";

	/** Size of text by default */
	export let size: Props["size"] = "default";
	/** Size of text above 640px */
	export let smSize: Props["smSize"] = "default";
	/** Size of text above 768px */
	export let mdSize: Props["mdSize"] = "default";
	/** Size of text above 1024px */
	export let lgSize: Props["lgSize"] = "default";
	export let noWrap: boolean = false;

	export let serif: boolean = false;
	export let i = false;
	export let b = false;
	export let del = false;
	export let blockquote = false;
	export let align: TextAlignment = "initial";
	let className = "";
	export { className as class };

	export let color: Props["color"] = "inherit";
</script>

<svelte:element
	this={type}
	style="text-align: {align};"
	class={cn(
		style({
			color,
			del,
			blockquote,
			bold: b,
			italics: i,
			size,
			smSize,
			mdSize,
			lgSize,
			noWrap,
			type,
			serif,
		}),
		className,
	)}
>
	<slot />
</svelte:element>

<!--
@component
Displays non-interactive text.

[See Docs](https://geist-ui-svelte.dev/components/text) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
