<script lang="ts">
	import Loading from "$lib/loading/Loading.svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "$lib/util/utils.js";

	const style = cva(
		"transition-all rounded-md border flex place-items-center justify-center text-nowrap whitespace-nowrap group relative",
		{
			variants: {
				color: {
					default: `bg-gray-0 text-gray-999 border-gray-100 data-[a]:hover:bg-gray-100 enabled:hover:bg-gray-100 
						dark:bg-gray-999 dark:border-gray-900 data-[a]:hover:dark:bg-gray-900 enabled:hover:dark:bg-gray-900 dark:text-gray-0`,
					secondary: `bg-gray-999 text-gray-0 border-gray-999 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 
						data-[a]:hover:text-gray-999 enabled:hover:text-gray-999 dark:bg-gray-0 dark:text-gray-999 
						data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999 dark:border-gray-0 
						data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0`,
					success: `bg-blue-600 text-gray-0 border-blue-600 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 data-[a]:hover:text-blue-600 
					enabled:hover:text-blue-600 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999`,
					warning: `bg-orange-300 text-gray-0 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 border-orange-300 data-[a]:hover:text-orange-300 
					enabled:hover:text-orange-300 dark:bg-orange-400 dark:text-gray-0 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999
					dark:border-orange-400 data-[a]:hover:dark:text-orange-400 enabled:hover:dark:text-orange-400`,
					error: `bg-red-500 text-gray-0 data-[a]:hover:text-red-500 enabled:hover:text-red-500 border-red-500 data-[a]:hover:bg-gray-0 
					enabled:hover:bg-gray-0 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999 dark:border-red-600 dark:bg-red-600`,
					abort: `bg-transparent dark:bg-transparent border-transparent text-gray-400 dark:text-gray-600`,

					"abort-active": `bg-transparent dark:bg-transparent border-transparent data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0
				  text-gray-400 dark:text-gray-600 data-[a]:hover:text-gray-999 enabled:hover:text-gray-999`,

					"secondary-light": `border-gray-999 bg-gray-999 text-gray-0 data-[a]:hover:bg-gray-900 enabled:hover:bg-gray-900
					 dark:bg-gray-0 dark:border-gray-0 dark:text-gray-999 data-[a]:dark:bg-gray-100 enabled:hover:dark:bg-gray-100 `,

					"success-light": `bg-blue-600 dark:bg-blue-600 text-gray-0 dark:text-gray-0 dark:border-blue-600 border-blue-600 
					data-[a]:hover:bg-blue-500 enabled:hover:bg-blue-500 data-[a]:hover:border-blue-500 enabled:hover:border-blue-500 
					data-[a]:hover:dark:border-blue-500 enabled:hover:dark:border-blue-500 data-[a]:hover:dark:bg-blue-500 enabled:hover:dark:bg-blue-500`,

					"warning-light": `bg-orange-300 text-gray-0 data-[a]:hover:bg-orange-200 enabled:hover:bg-orange-200 border-orange-300 
					data-[a]:hover:border-orange-200 enabled:hover:border-orange-200 dark:bg-orange-400 dark:text-gray-0 data-[a]:hover:dark:bg-orange-300 
					enabled:hover:dark:bg-orange-300 dark:border-orange-400 data-[a]:hover:dark:border-orange-300 enabled:hover:dark:border-orange-300`,

					"error-light": `bg-red-500 text-gray-0 border-red-500 data-[a]:hover:bg-red-400 enabled:hover:bg-red-400 data-[a]:hover:border-red-400 
					enabled:hover:border-red-400 data-[a]:hover:dark:bg-red-500 enabled:hover:dark:bg-red-500 data-[a]:hover:dark:border-red-500 enabled:hover:dark:border-red-500
					dark:border-red-600 dark:bg-red-600`,
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
			},
			defaultVariants: {
				color: "default",
				size: "md",
				square: false,
				disabled: false,
				ghost: false,
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
					class: `bg-gray-0 text-gray-999 data-[a]:hover:bg-gray-999 enabled:hover:bg-gray-999 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 
					dark:bg-gray-999 dark:text-gray-0 data-[a]:hover:dark:bg-gray-0 enabled:hover:dark:bg-gray-0 data-[a]:hover:dark:text-gray-999 enabled:hover:dark:text-gray-999`,
				},
				{
					color: "success",
					ghost: true,
					class: `bg-gray-0 text-blue-600 border-blue-600 data-[a]:hover:bg-blue-600 enabled:hover:bg-blue-600 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0
					dark:text-blue-600 dark:border-blue-600 data-[a]:hover:dark:bg-blue-600 enabled:hover:dark:bg-blue-600 data-[a]:hover:dark:text-gray-0 
					enabled:hover:dark:text-gray-0 dark:bg-gray-999`,
				},
				{
					color: "warning",
					ghost: true,
					class: `bg-gray-0 text-orange-300 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 data-[a]:hover:bg-orange-300 enabled:hover:bg-orange-300
				  dark:bg-gray-999 dark:text-orange-400 data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0 data-[a]:hover:dark:bg-orange-400 enabled:hover:dark:bg-orange-400`,
				},
				{
					color: "error",
					ghost: true,
					class: `bg-gray-0 text-red-500 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 border-red-500 data-[a]:hover:bg-red-500 
				  enabled:hover:bg-red-500 dark:bg-gray-999 data-[a]:hover:dark:bg-red-600 enabled:hover:dark:bg-red-600
				  dark:text-red-600 dark:border-red-600`,
				},
				{
					color: "abort",
					ghost: true,
					class: "bg-transparent dark:bg-transparent border-transparent text-gray-400 dark:text-gray-600",
				},

				{
					color: "abort-active",
					ghost: true,
					class: `bg-transparent dark:bg-transparent border-transparent data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0
				  text-gray-400 dark:text-gray-600 data-[a]:hover:text-gray-999 enabled:hover:text-gray-999`,
				},
				{
					color: "secondary-light",
					ghost: true,
					class: `bg-gray-0 text-gray-999 data-[a]:hover:bg-gray-999 enabled:hover:bg-gray-999 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 
					dark:bg-gray-999 dark:text-gray-0 data-[a]:hover:dark:bg-gray-0 enabled:hover:dark:bg-gray-0 data-[a]:hover:dark:text-gray-999 enabled:hover:dark:text-gray-999`,
				},
				{
					color: "success-light",
					ghost: true,
					class: `bg-gray-0 text-blue-600 border-blue-600 data-[a]:hover:bg-blue-600 enabled:hover:bg-blue-600 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0
					dark:text-blue-600 dark:border-blue-600 data-[a]:hover:dark:bg-blue-600 enabled:hover:dark:bg-blue-600 data-[a]:hover:dark:text-gray-0 
					enabled:hover:dark:text-gray-0 dark:bg-gray-999`,
				},
				{
					color: "warning-light",
					ghost: true,
					class: `bg-gray-0 text-orange-300 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 data-[a]:hover:bg-orange-300 enabled:hover:bg-orange-300
				    dark:bg-gray-999 dark:text-orange-400 data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0 data-[a]:hover:dark:bg-orange-400 enabled:hover:dark:bg-orange-400`,
				},
				{
					color: "error-light",
					ghost: true,
					class: `bg-gray-0 text-red-500 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 border-red-500 data-[a]:hover:bg-red-500 
				  enabled:hover:bg-red-500 dark:bg-gray-999 data-[a]:hover:dark:bg-red-600 enabled:hover:dark:bg-red-600
				  dark:text-red-600 dark:border-red-600`,
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
					class: "dark:border-gray-900 dark:bg-gray-925 dark:text-gray-600 cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300",
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
	let className: string = "";
	export { className as class };
</script>

{#if href != undefined}
	<a
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
		class={cn(style({ color, disabled, loading, ghost, size, square }), className)}>
		{#if loading}
			<Loading size="sm" />
		{:else}
			<slot />
		{/if}
	</a>
{:else}
	<button
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
		class={cn(style({ color, disabled, loading, ghost, size, square }), className)}>
		{#if loading}
			<Loading
				size="sm"
				class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
		{/if}
		<div data-loading={loading} class="data-[loading=true]:opacity-0 flex place-items-center justify-center">
			<slot />
		</div>
	</button>
{/if}

<!--
@component
The button component is used to trigger an event.

[See Docs](https://geist-ui-svelte.dev/components/button) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
