<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Table from "$lib/table/Table.svelte";
	import Text from "$lib/text/Text.svelte";

	let data = [
		{
			property: "`edits`",
            description: "used to highlight sections of code",
            type: "Edit[]"
		},
        {
			property: "`lineNumber`",
            description: "enable / disable line numbers",
            type: "boolean"
		},
	];
</script>

<Text type="h3">Table</Text>
<Spacer h={10} />
<Text>Display table data.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Table } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Table
            bind:data={data}
			columns={[
				{ label: "Property", property: "property" },
				{ label: "Description", property: "description" },
				{ label: "Type", property: "type" },
			]} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Table
    bind:data={data}
    columns={[
        { label: "Property", property: "property" },
        { label: "Description", property: "description" },
    ]} />`} />
		</Details>
	</div>
</FieldSet>
