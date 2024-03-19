<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva } from "class-variance-authority";

	export let sticky: boolean = false;
	export let fixed: boolean = false;
	export let transparent: boolean = true;
	export let noBorder: boolean = false;

	const style = cva(
		`bg-gray-0 dark:bg-gray-999 border-gray-100 dark:border-gray-900 w-full flex justify-center place-items-center py-2`,
		{
			variants: {
				sticky: {
					true: "sticky top-0 z-20",
					false: "",
				},
				fixed: {
					true: "fixed top-0 z-20",
					false: "",
				},
				noBorder: {
					true: "",
					false: "border-b",
				},
				transparent: {
					true: "backdrop-blur-sm",
					false: "bg-opacity-90 dark:bg-opacity-90",
				},
			},
			defaultVariants: {
				sticky: false,
				noBorder: false,
				fixed: false,
				transparent: true,
			},
		},
	);
</script>

<header class={cn(style({ sticky, transparent, fixed, noBorder }))}>
	<slot />
</header>

<!--
@component
A simple header component.

[See Docs](https://geist-ui-svelte.dev/components/header) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
