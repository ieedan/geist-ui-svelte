<script lang="ts">
	import { scale } from "svelte/transition";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "$lib/util/utils.js";

	const background = cva(
		"flex justify-between place-items-start font-serif transition-all border px-3 py-[10px] rounded-md",
		{
			variants: {
				intent: {
					dark: "border-gray-999 dark:border-gray-0 bg-gray-999 dark:bg-gray-0 ",
					lite: "dark:border-gray-900 border-gray-200 dark:bg-gray-950 bg-gray-50",
					subtle: "dark:border-gray-900 dark:bg-gray-900 bg-gray-100 border-gray-100",
					transparent: "border-gray-100 dark:border-gray-900",
					success: "dark:border-blue-600 border-blue-600",
					warning: "border-orange-300 dark:border-orange-400",
					error: "dark:border-red-600 border-red-500",
					secondary: "border-gray-300 dark:border-gray-700",
					default: "border-gray-999 dark:border-gray-0",
				},
			},
			defaultVariants: {
				intent: "default",
			},
		},
	);

	const textColor = cva("", {
		variants: {
			intent: {
				dark: "text-gray-0 dark:text-gray-999 enabled:dark:hover:text-gray-800 enabled:hover:text-gray-200",
				lite: "text-gray-999 dark:text-gray-0 enabled:hover:text-gray-800 enabled:dark:hover:text-gray-200",
				subtle: "dark:text-gray-100 text-gray-900 enabled:dark:hover:text-gray-300 enabled:hover:text-gray-700",
				transparent: "text-gray-900 dark:text-gray-100 enabled:hover:text-gray-300 enabled:dark:hover:text-gray-700",
				success: "text-blue-600 dark:text-blue-600 enabled:hover:text-blue-800 enabled:dark:hover:text-blue-800",
				warning: "text-orange-300 dark:text-orange-400 enabled:hover:text-orange-500 enabled:dark:hover:text-orange-600",
				error: "text-red-500 dark:text-red-600 enabled:hover:text-red-700 enabled:dark:hover:text-red-800",
				secondary: "text-gray-300 dark:text-gray-700 enabled:hover:text-gray-500 enabled:dark:hover:text-gray-500",
				default: "text-gray-999 dark:text-gray-0 enabled:hover:text-gray-800 enabled:dark:hover:text-gray-200",
			},
			defaultVariants: {
				intent: "default",
			},
		},
	});

	interface Props extends VariantProps<typeof background> {}

	export let text: string | string[];
	export let width: string = "300px";
	export let type: Props["intent"]  = "default";
	export let symbol: string = "$";

	let copied = false;

	const copy = () => {
		let txt = "";
		if (Array.isArray(text)) {
			for (let i = 0; i < text.length; i++) {
				if (i > 0) {
					txt = txt + "\n" + text[i];
				} else {
					txt = text[i];
				}
			}
		} else {
			txt = text;
		}

		navigator.clipboard.writeText(txt).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 1000);
		});
	};
</script>

<div
	style="width: {width}; max-width: 100%;"
	data-color={type}
	class={cn(background({ intent: type }))}>
	<code class="flex flex-col">
		{#if Array.isArray(text)}
			{#each text as line}
				<span
					data-style={type}
					class={cn(textColor({ intent: type }))}>
					{symbol}
					{line}
				</span>
			{/each}
		{:else}
			<span
				data-style={type}
				class={cn(textColor({ intent: type }))}>
				{symbol} {text}</span>
		{/if}
	</code>
	<button
		type="button"
		on:click={copy}
		data-color={type}
		class={cn(textColor({ intent: type }), "flex place-items-center justify-center h-[20px] transition-all")}>
		{#if copied}
			<div in:scale={{ duration: 200 }}>
				<CheckMarkIcon size={16} />
			</div>
		{:else}
			<div in:scale={{ duration: 100 }}>
				<CloneIcon size={16} />
			</div>
		{/if}
	</button>
</div>

<!--
@component
Displays a code snippet.

[See Docs](https://geist-ui-svelte.dev/components/snippet) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
