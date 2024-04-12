<script lang="ts">
	import { scale } from "svelte/transition";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import { cva, type VariantProps } from "class-variance-authority";
	import { cn } from "$lib/util/utils.js";

	const background = cva(
		"flex justify-between place-items-start font-serif transition-all border px-3 py-[10px] rounded-md font-light",
		{
			variants: {
				color: {
					default: "border-gui-foreground-primary",
					dark: "border-gui-border bg-gui-foreground-primary",
					lite: "bg-gui-component-background",
					subtle: "bg-gui-component-background-active border-gui-component-background-active",
					transparent: "border-gui-border",
					success: "border-gui-success bg-gui-success bg-opacity-25",
					warning: "border-gui-warning bg-gui-warning bg-opacity-25",
					error: "border-gui-error bg-gui-error bg-opacity-25",
				},
			},
			defaultVariants: {
				color: "default",
			},
		},
	);

	const textColor = cva("", {
		variants: {
			color: {
				dark: "text-gui-gray-100 enabled:hover:text-opacity-75",
				lite: "",
				subtle: "",
				transparent: "text-gui-foreground-primary enabled:hover:text-opacity-75",
				success: "text-gui-success enabled:hover:text-opacity-75",
				warning: "text-gui-warning enabled:hover:text-opacity-75",
				error: "text-gui-error enabled:hover:text-opacity-75",
				default: "text-gui-foreground-primary enabled:hover:text-opacity-75",
			},
			defaultVariants: {
				color: "default",
			},
		},
	});

	interface Props extends VariantProps<typeof background> {}

	export let text: string | string[];
	export let width: string = "300px";
	export let type: Props["color"] = "default";
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

<div style="width: {width}; max-width: 100%;" class={cn(background({ color: type }))}>
	<code class="flex flex-col">
		{#if Array.isArray(text)}
			{#each text as line}
				<span class={cn(textColor({ color: type }))}>
					{symbol}
					{line}
				</span>
			{/each}
		{:else}
			<span class={cn(textColor({ color: type }))}> {symbol} {text}</span>
		{/if}
	</code>
	<button
		type="button"
		on:click={copy}
		class={cn(
			textColor({ color: type }),
			"flex place-items-center justify-center h-[20px] transition-all",
		)}>
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
