<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ModeSelector from "$lib/modeselector/ModeSelector.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">ModeSelector</Text>
<Spacer h={10} />
<Text>A component to allow the user to select their dark mode preference.</Text>
<Spacer h={20} />
<Snippet
	width="500px"
	type="transparent"
	text={`import { ModeSelector } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<ModeSelector />`}>
	<ModeSelector />
</Playground>
<Spacer h={30} />
<Text type="h4">No Icon</Text>
<Spacer h={10} />
<Playground code={`<ModeSelector noIcon />`}>
	<ModeSelector noIcon />
</Playground>
<Spacer h={30} />
<Text type="h4">Border</Text>
<Spacer h={10} />
<Playground code={`<ModeSelector border />`}>
	<ModeSelector border />
</Playground>
<Spacer h={30} />
<Text type="h4">Placement</Text>
<Spacer h={5} />
<Text>
	The mode selector uses the dropdown component under the hood so the same placements apply.
</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2"
	code={`<ModeSelector />
<ModeSelector placement="bottom-start" />`}
>
	<ModeSelector />
	<ModeSelector placement="bottom-start" />
</Playground>
