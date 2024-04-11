<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import { cn } from "$lib/util/utils.js";

	type EditType = "add" | "remove";

	type Edit = {
		number?: number;
		/** Start line number if no end is specified will highlight to the end */
		start?: number;
		/** End line number */
		end?: number;
		type: EditType;
	};

	export let code: string;
	export let edits: Edit[] = [];
	/** This is really just here for debugging purposes and should be kept off */
	export let lineNumbers = edits.length > 0;
	let className: string = "";
	export { className as class };
</script>

<FieldSet color="transparent">
	<div class={cn("flex flex-col", className)}>
		<slot />
	</div>
	<div slot="footer" class="py-1">
		<Details label="Show Code" showLabel="Hide Code">
			<Code lang="svelte" {code} {lineNumbers} {edits} />
		</Details>
	</div>
</FieldSet>
