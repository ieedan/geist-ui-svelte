<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("border rounded-lg overflow-hidden", {
		variants: {
			color: {
				default: "bg-gui-background-secondary border-gui-border",
				success: "border-gui-success bg-gui-success bg-opacity-50 dark:bg-opacity-35",
				warning: "border-gui-warning bg-gui-warning bg-opacity-50 dark:bg-opacity-35",
				error: "border-gui-error bg-gui-error bg-opacity-50 dark:bg-opacity-35",
				transparent: "border-gui-border bg-transparent",
			},
		},
	});

	interface Props extends VariantProps<typeof style> {}

	export let color: Props["color"] = "default";
	export let inverted = false;
</script>

<div class={cn(style({ color }))}>
	<div
		data-inverted={inverted}
		class="px-4 py-3 bg-gui-background data-[inverted=true]:bg-transparent">
		<slot />
	</div>
	<div
		data-inverted={inverted}
		class="px-4 py-2 border-t border-inherit bg-transparent data-[inverted=true]:bg-gui-background">
		<slot name="footer" />
	</div>
</div>

<!--
@component
An organizational layout component to group related information.

[See Docs](https://geist-ui-svelte.dev/components/fieldset) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
