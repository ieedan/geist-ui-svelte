<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Table from "$lib/table/Table.svelte";
	import Text from "$lib/text/Text.svelte";

	/* eslint-disable no-useless-escape */
	const firstExampleCode = `<script lang="ts">
    import Button from "$lib/button/Button.svelte";
    import Table from "$lib/table/Table.svelte";

    let data = [
		{
			property: "\`edits\`",
			description: "used to highlight sections of code",
			type: "Edit[]",
		},
		{
			property: "\`lineNumber\`",
			description: "enable / disable line numbers",
			type: "boolean",
		},
	];

	const addData = () => {
		data = [
			...data,
			{
				property: "\`lineNumber\`",
				description: "enable / disable line numbers",
				type: "boolean",
			},
		];
	};
<\/script>

<Button on:click={addData}>Add row</Button>
<Table
	bind:data
	columns={[
		{ label: "Property", property: "property" },
		{ label: "Description", property: "description" },
	    { label: "Type", property: "type" },
    ]} />`;

	let data = [
		{
			property: "`edits`",
			description: "used to highlight sections of code",
			type: "Edit[]",
		},
		{
			property: "`lineNumber`",
			description: "enable / disable line numbers",
			type: "boolean",
		},
	];

	let example2Data = [...data];

	const addData = () => {
		data = [
			...data,
			{
				property: "`lineNumber`",
				description: "enable / disable line numbers",
				type: "boolean",
			},
		];
	};

	const addDataExample2 = () => {
		example2Data = [
			...example2Data,
			{
				property: "`lineNumber`",
				description: "enable / disable line numbers",
				type: "boolean",
			},
		];
	};
</script>

<Text type="h3">Table</Text>
<Spacer h={10} />
<Text>Display table data.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Table } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={firstExampleCode} class="justify-center place-items-center gap-2">
	<Button on:click={addData}>Add row</Button>
	<Table
		bind:data
		columns={[
			{ label: "Property", property: "property" },
			{ label: "Description", property: "description" },
			{ label: "Type", property: "type" },
		]} />
</Playground>
<Spacer h={30} />
<Text type="h4">With Animation</Text>
<Spacer h={5} />
<Text>
	Add <code>`animate`</code> attribute to animate the addition / removal of a row.
</Text>
<Spacer h={10} />
<Playground class="justify-center place-items-center gap-2"
	edits={[{ number: 2, type: "add" }]}
	code={`<Table
	animate
	bind:data
	columns={[
	{ label: "Property", property: "property" },
	{ label: "Description", property: "description" },
	{ label: "Type", property: "type" },
	]} />`}>
	<Button on:click={addDataExample2}>Add row</Button>
	<Table
		animate
		bind:data={example2Data}
		columns={[
			{ label: "Property", property: "property" },
			{ label: "Description", property: "description" },
			{ label: "Type", property: "type" },
		]} />
</Playground>
