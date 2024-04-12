<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Button from "$lib/button/Button.svelte";
	import ToolTip from "$lib/tooltip/ToolTip.svelte";
	import Note from "$lib/note/Note.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import Link from "$lib/link/Link.svelte";
	import type { Placement } from "$lib/util/place.js";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	const placements: Placement[] = [
		"top",
		"top-end",
		"top-start",
		"bottom",
		"bottom-end",
		"bottom-start",
	];

	/* eslint-disable no-useless-escape */
	const exampleCode = `<script lang="ts">
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
	<Button id="placement-{placement}">{placement}</Button>
	<ToolTip anchor="#placement-{placement}" {placement} content="{placement} Hover" />
{/each}`;

	let copied = false;
	const copy = () => {
		copied = true;
		setTimeout(() => (copied = false), 1000);
	};
</script>

<Text type="h3">ToolTip</Text>
<Spacer h={10} />
<Text>A component to show the user additional information.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { ToolTip } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Button id="button-id">Hover me</Button>
<ToolTip anchor="#button-id" content='Hovered'/>`}
>
	<Button id="button-id">Hover me</Button>
	<ToolTip anchor="#button-id" content="Hovered" />
</Playground>
<Spacer h={30} />
<Note color="success">
	The Tooltip component uses
	<Text serif b>
		<Link to="https://atomiks.github.io/tippyjs/" target="_blank" color underline>
			tippy.js
		</Link>
	</Text> under the hood meaning it inherits many of its properties including placement.
</Note>
<Spacer h={20} />
<Text type="h4">Placement</Text>
<Spacer h={10} />
<Playground code={exampleCode} class="gap-2 flex-row flex-wrap">
	{#each placements as placement}
		<Button id="placement-{placement}">{placement}</Button>
		<ToolTip anchor="#placement-{placement}" {placement} content="{placement} Hover" />
	{/each}
</Playground>
<Spacer h={30} />
<Text type="h4">Dynamically Set Content</Text>
<Spacer h={5} />
<Text>
	This is really the only reason you'd need to use this component anyways outside of the styling.
	Sometimes you need to set the content of a tooltip dynamically.
</Text>
<Spacer h={10} />
<Playground
	code={`<Button square id="copy-button" on:click={copy}>
	<CloneIcon size={16} />
</Button>
<ToolTip 
  anchor="#copy-button" 
  hideOnClick={false}
  content={copied ? "Copied!" : "Copy"} />`}
>
	<Button square id="copy-button" on:click={copy}>
		<CloneIcon size={16} />
	</Button>
	<ToolTip anchor="#copy-button" content={copied ? "Copied!" : "Copy"} hideOnClick={false} />
</Playground>
