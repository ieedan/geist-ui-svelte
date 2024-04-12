<script lang="ts">
	import Loading from "$lib/loading/Loading.svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "$lib/util/utils.js";

	const style = cva(
		"transition-all rounded-md border flex place-items-center text-nowrap whitespace-nowrap group relative",
		{
			variants: {
				color: {
					default: `border-gui-border enabled:hover:bg-gui-component-background-active
					data-[a]:hover:bg-gui-component-background-active text-gui-foreground-primary`,

					secondary: `bg-gui-foreground-primary text-gui-background enabled:hover:bg-transparent 
					border-gui-foreground-primary enabled:hover:text-gui-foreground-primary data-[a]:hover:bg-transparent
					data-[a]:hover:text-gui-foreground-primary`,

					success: `bg-gui-success text-white enabled:hover:bg-transparent border-gui-success 
					enabled:hover:text-gui-success data-[a]:hover:bg-transparent data-[a]:hover:text-gui-success`,

					warning: `bg-gui-warning text-white enabled:hover:bg-transparent border-gui-warning 
					enabled:hover:text-gui-warning data-[a]:hover:bg-transparent data-[a]:hover:text-gui-warning`,

					error: `bg-gui-error text-white enabled:hover:bg-transparent border-gui-error 
					enabled:hover:text-gui-error data-[a]:hover:bg-transparent data-[a]:hover:text-gui-error`,

					tab: `border-transparent text-gui-foreground-primary enabled:hover:bg-gui-component-background-active
					enabled:hover:border-gui-component-background-active data-[a]:hover:bg-gui-component-background-active
					data-[a]:hover:border-gui-component-background-active`,

					abort: `bg-transparent border-transparent text-gui-foreground-secondary`,

					"abort-active": `bg-transparent border-transparent text-gui-foreground-secondary 
					enabled:hover:text-gui-foreground-primary data-[a]:hover:text-gui-foreground-primary`,

					"secondary-light": `border-gui-foreground-primary bg-gui-foreground-primary 
					text-gui-background enabled:hover:bg-opacity-95 enabled:hover:border-opacity-95
					data-[a]:hover:bg-opacity-95 data-[a]:hover:border-opacity-95`,

					"success-light": `bg-gui-success text-white border-gui-success enabled:hover:bg-opacity-95 
					enabled:hover:border-opacity-95 data-[a]:hover:bg-opacity-95 data-[a]:hover:border-opacity-95`,

					"warning-light": `bg-gui-warning text-white border-gui-warning enabled:hover:bg-opacity-95 
					enabled:hover:border-opacity-95 data-[a]:hover:bg-opacity-95 data-[a]:hover:border-opacity-95`,

					"error-light": `bg-gui-error text-white border-gui-error enabled:hover:bg-opacity-95 
					enabled:hover:border-opacity-95 data-[a]:hover:bg-opacity-95 data-[a]:hover:border-opacity-95`,
				},
				ghost: {
					true: "",
					false: "",
				},
				disabled: {
					true: "",
					false: "",
				},
				loading: {
					true: "",
					false: "",
				},
				square: {
					true: "p-1",
					false: "px-4",
				},
				size: {
					xs: "text-xs min-h-[28px]",
					sm: "text-sm min-h-[32px]",
					md: "text-base min-h-[36px]",
					lg: "text-lg min-h-[40px]",
					xl: "text-xl min-h-[44px]",
				},
				align: {
					center: "justify-center",
					start: "justify-start",
					end: "justify-end",
				},
			},
			defaultVariants: {
				color: "default",
				size: "md",
				square: false,
				disabled: false,
				ghost: false,
				align: "center",
			},
			compoundVariants: [
				{
					color: "default",
					ghost: true,
					class: "",
				},
				{
					color: "secondary",
					ghost: true,
					class: `text-gui-foreground-primary bg-transparent enabled:hover:bg-gui-foreground-primary 
					border-gui-foreground-primary enabled:hover:text-gui-background data-[a]:hover:bg-gui-foreground-primary
					data-[a]:hover:text-gui-background`,
				},
				{
					color: "success",
					ghost: true,
					class: `bg-transparent text-gui-success enabled:hover:bg-gui-success border-gui-success 
					enabled:hover:text-white data-[a]:hover:bg-gui-success data-[a]:hover:text-white`,
				},
				{
					color: "warning",
					ghost: true,
					class: `bg-transparent text-gui-warning enabled:hover:bg-gui-warning border-gui-warning 
					enabled:hover:text-white data-[a]:hover:bg-gui-warning data-[a]:hover:text-white`,
				},
				{
					color: "error",
					ghost: true,
					class: `bg-gui-transparent text-gui-error enabled:hover:bg-gui-error border-gui-error 
					enabled:hover:text-white data-[a]:hover:bg-gui-error data-[a]:hover:text-white`,
				},
				{
					color: "secondary-light",
					ghost: true,
					class: `text-gui-foreground-primary bg-transparent enabled:hover:bg-gui-foreground-primary
					border-gui-foreground-primary enabled:hover:text-gui-background data-[a]:hover:bg-gui-foreground-primary 
					data-[a]:hover:text-gui-background`,
				},
				{
					color: "success-light",
					ghost: true,
					class: `bg-transparent text-gui-success enabled:hover:bg-gui-success border-gui-success 
					enabled:hover:text-white data-[a]:hover:bg-gui-success data-[a]:hover:text-white`,
				},
				{
					color: "warning-light",
					ghost: true,
					class: `bg-transparent text-gui-warning enabled:hover:bg-gui-warning border-gui-warning 
					enabled:hover:text-white data-[a]:hover:bg-gui-warning data-[a]:hover:text-white`,
				},
				{
					color: "error-light",
					ghost: true,
					class: `bg-gui-transparent text-gui-error enabled:hover:bg-gui-error border-gui-error 
					enabled:hover:text-white data-[a]:hover:bg-gui-error data-[a]:hover:text-white`,
				},
				{
					square: true,
					size: "xs",
					class: "min-w-[28px]",
				},
				{
					square: true,
					size: "sm",
					class: "min-w-[32px]",
				},
				{
					square: true,
					size: "md",
					class: "min-w-[36px]",
				},
				{
					square: true,
					size: "lg",
					class: "min-w-[40px]",
				},
				{
					square: true,
					size: "xl",
					class: "min-w-[44px]",
				},
				{
					disabled: true,
					loading: false,
					class: "hover:cursor-not-allowed bg-gui-component-background-hover text-gui-foreground-muted border-gui-border",
				},
			],
		},
	);

	interface Props extends VariantProps<typeof style> {}

	export let disabled = false;
	export let color: Props["color"] = "default";
	export let loading: boolean = false;
	export let ghost: boolean = false;
	export let size: Props["size"] = "md";
	export let type: HTMLButtonAttributes["type"] = "button";
	export let href: string | undefined = undefined;
	export let width: string = "fit-content";
	export let square: boolean = false;
	export let align: Props["align"] = "center";
	export let ref: HTMLButtonElement | HTMLAnchorElement | undefined = undefined;
	let className: string = "";
	export { className as class };
</script>

{#if href != undefined}
	<a
		bind:this={ref}
		{href}
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
		data-a
		style="width: {width};"
		class={cn(style({ color, disabled, loading, ghost, size, square, align }), className)}>
		{#if loading}
			<Loading size="sm" />
		{:else}
			<slot />
		{/if}
	</a>
{:else}
	<button
		bind:this={ref}
		{type}
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
		disabled={disabled || loading}
		style="width: {width};"
		class={cn(style({ color, disabled, loading, ghost, size, square, align }), className)}>
		{#if loading}
			<Loading
				size="sm"
				class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
		{/if}
		<div
			data-loading={loading}
			class="data-[loading=true]:opacity-0 flex place-items-center justify-center">
			<slot />
		</div>
	</button>
{/if}

<!--
@component
The button component is used to trigger an event.

[See Docs](https://geist-ui-svelte.dev/components/button) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
