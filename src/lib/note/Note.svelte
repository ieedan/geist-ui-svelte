<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("border block px-2 py-2 rounded-md", {
		variants: {
			color: {
				default: "border-gui-border text-gui-foreground-secondary",
				success: "border-gui-success text-gui-success",
				warning: "border-gui-warning text-gui-warning",
				error: "border-gui-error text-gui-error",
				secondary: "border-gui-foreground-primary text-gui-foreground-primary",
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
				class: "bg-gui-component-background-hover text-gui-foreground-secondary border-gui-component-background-hover",
			},
			{
				color: "success",
				block: true,
				class: "border-gui-blue-100 bg-gui-blue-200 text-gui-blue-600",
			},
			{
				color: "warning",
				block: true,
				class: "border-gui-amber-100 bg-gui-amber-300 text-gui-amber-700",
			},
			{
				color: "error",
				block: true,
				class: "border-gui-red-100 bg-gui-red-200 text-gui-red-800",
			},
			{
				color: "secondary",
				block: true,
				class: "bg-gui-foreground-primary border-gui-foreground-primary text-gui-background",
			},
		],
	});

	interface Props extends VariantProps<typeof style> {}

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
