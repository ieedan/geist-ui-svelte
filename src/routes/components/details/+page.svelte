<script lang="ts">
	import Details from "$lib/details/Details.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Details</Text>
<Spacer h={10} />
<Text>An expandable component to hide / show content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Details } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Details label="See more">
	Some details here
</Details>`}>
	<Details label="See more">Some details here</Details>
</Playground>
<Spacer h={30} />
<Text type="h4">With animation</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 2, type: "add" }]}
	code={`<Details label="See more" 
	animate>
Some details here
</Details>`}>
	<Details label="See more" animate>Some details here</Details>
</Playground>
<Spacer h={30} />
<Text type="h4">Initial show</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 2, type: "add" }]}
	code={`<Details label="See more" 
	initialShow={true}>
Some details here
</Details>`}>
	<Details label="See more" initialShow={true}>Some details here</Details>
</Playground>
<Spacer h={30} />
<Text type="h4">Different Label When Shown</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 2, type: "add" }]}
	code={`<Details label="Show Code" showLabel="Hide Code">
	<Snippet text="npm i geist-ui-svelte" type="transparent"/>
</Details>`}>
	<Details label="Show Code" showLabel="Hide Code">
		<Snippet text="npm i geist-ui-svelte" type="transparent"/>
	</Details>
</Playground>
