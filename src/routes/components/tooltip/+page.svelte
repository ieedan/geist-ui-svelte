<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Button from "$lib/button/Button.svelte";
	import ToolTip from "$lib/tooltip/ToolTip.svelte";
	import Note from "$lib/note/Note.svelte";
	import type { Placement } from "$lib/util/place.js";

	const placements: Placement[] = [
		"top",
		"top-end",
		"top-start",
		"bottom",
		"bottom-end",
		"bottom-start",
	];

	/* eslint-disable no-useless-escape */
	const exampleCode = `<script>
    const placements: Placement[] = [
		"top",
		"top-end",
		"top-start",
		"bottom",
		"bottom-end",
		"bottom-start",
	];
<\/script>

{#each placements as placement}
    <Button id="placement-{placement}">
        {placement}
    </Button>
    <ToolTip anchor="#placement-{placement}" {placement}>
        {placement} Hover
    </ToolTip>
{/each}`;
</script>

<Text type="h3">ToolTip</Text>
<Spacer h={10} />
<Text>A component to show the user additional information.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { ToolTip } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Note color="warning">This component is experimental</Note>
<Spacer h={20} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 justify-start">
		<Button id="button-id">Hover me</Button>
		<ToolTip anchor="#button-id" content='Hovered' config={{ animateFill: false }}/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button id="button-id">Hover me</Button>
<ToolTip anchor="#button-id" content='Hovered'/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Note color="success">
	The Tooltip component uses tippy under the hood 
</Note>
<Spacer h={20} />
<Text type="h4">Placement</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		{#each placements as placement}
			<Button id="placement-{placement}">{placement}</Button>
			<ToolTip anchor="#placement-{placement}" {placement} content="{placement} Hover" />
		{/each}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={exampleCode} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
