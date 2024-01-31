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
<Text type="h4">Vertical Spacing</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 justify-start">
		<Button id="button-id">Hover me</Button>
		<ToolTip anchor="#button-id">Hovered</ToolTip>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button id="button-id">Hover me</Button>
<ToolTip anchor="#button-id">
    Hovered
</ToolTip>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Placements</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		{#each placements as placement}
			<Button id="placement-{placement}">{placement}</Button>
			<ToolTip anchor="#placement-{placement}" {placement}>
				{placement} Hover
			</ToolTip>
		{/each}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={exampleCode} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Note color="success">The Tooltip component uses the Dropdown component under the hood so it inherits many of its features.</Note>
<Spacer h={20} />
<Text type="h4">Animation</Text>
<Spacer h={5} />
<Text>
	By default the animation is disabled but you can turn it on using the <code>`animate`</code> attribute.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Button id="default-id">Hover me</Button>
		<ToolTip anchor="#default-id">Hovered</ToolTip>
		<Button id="animate-id">Hover me</Button>
		<ToolTip anchor="#animate-id" animate>Hovered</ToolTip>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" edits={[{number: 9, type: "add"}]} code={`<Button id="default-id">Hover me</Button>
<ToolTip 
  anchor="#default-id">
    Hovered
</ToolTip>
<Button id="animate-id">Hover me</Button>
<ToolTip 
  anchor="#animate-id" 
  animate>
  Hovered
</ToolTip>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Shadow</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Button id="shadow-id">Hover me</Button>
		<ToolTip anchor="#shadow-id" shadow>Hovered</ToolTip>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" edits={[{number: 4, type: "add"}]} code={`<Button id="shadow-id">Hover me</Button>
<ToolTip 
  anchor="#shadow-id" 
  shadow>
  Hovered
</ToolTip>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Event</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Button id="hover-id">Hover me</Button>
		<ToolTip anchor="#hover-id" shadow>Hovered</ToolTip>
        <Button id="click-id">Click Me</Button>
		<ToolTip anchor="#click-id" shadow event="click/click">Clicked</ToolTip>
        <Button id="focus-id">Focus Me</Button>
		<ToolTip anchor="#focus-id" shadow event="focus/blur">Focused</ToolTip>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button id="hover-id">Hover me</Button>
<ToolTip anchor="#hover-id" shadow>Hovered</ToolTip>
<Button id="click-id">Click Me</Button>
<ToolTip anchor="#click-id" shadow event="click/click">Clicked</ToolTip>
<Button id="click-id">Focus Me</Button>
<ToolTip anchor="#click-id" shadow event="focus/blur">Focused</ToolTip>`} />
		</Details>
	</div>
</FieldSet>