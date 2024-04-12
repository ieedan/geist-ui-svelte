<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("transition-all border p-4", {
		variants: {
			color: {
				transparent: "ring-gui-border border-gui-border text-gui-foreground-primary",
				dark: "bg-gui-foreground-primary text-gui-background border-gui-background ring-gui-foreground-primary",
				secondary:
					"bg-gui-foreground-secondary text-gui-background border-gui-background ring-gui-foreground-secondary",
				success: "bg-gui-success border-gui-success text-white ring-gui-success",
				warning: "bg-gui-warning border-gui-warning text-white ring-gui-warning",
				error: "bg-gui-error border-gui-error text-white ring-gui-error",
				abort: "bg-gui-component-background border-gui-component-background text-gui-foreground-primary ring-gui-component-background",
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
				true: "shadow-md border-transparent dark:border-gui-border",
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
	class={cn(style({ color, rounded, hoverable, shadow }), className)}>
	<slot />
</div>

<!--
@component
A common organizational layout component.

[See Docs](https://geist-ui-svelte.dev/components/card) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
