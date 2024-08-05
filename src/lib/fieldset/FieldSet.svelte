<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { cva, type VariantProps } from "class-variance-authority";

	const style = cva("border rounded-lg overflow-hidden", {
		variants: {
			color: {
				default: "bg-gray-50 dark:bg-gray-950 border-gray-100 dark:border-gray-900",
				success:
					"border-blue-600 bg-blue-600 bg-opacity-50 dark:border-blue-600 dark:bg-blue-600 dark:bg-opacity-35",
				warning:
					"border-orange-300 bg-orange-300 bg-opacity-50 dark:border-orange-400 dark:bg-orange-400 dark:bg-opacity-35",
				error: "border-red-600 bg-red-600 bg-opacity-50 dark:border-red-600 dark:bg-red-600 dark:bg-opacity-35",
				transparent: "border-gray-100 dark:border-gray-900",
			},
		},
	});

	type Props = VariantProps<typeof style>;

	export let color: Props["color"] = "default";
</script>

<div class={cn(style({ color }))}>
	<div class="px-4 py-3 bg-gray-0 dark:bg-gray-999">
		<slot />
	</div>
	<div class="px-4 py-2 border-t border-inherit dark:border-inherit bg-transparent">
		<slot name="footer" />
	</div>
</div>

<!--
@component
An organizational layout component to group related information.

[See Docs](https://geist-ui-svelte.dev/components/fieldset) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
