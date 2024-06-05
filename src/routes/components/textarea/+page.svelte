<script lang="ts">
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import TextArea from "$lib/textarea/TextArea.svelte";

	let debounced = true;
</script>

<Text type="h3">TextArea</Text>
<Spacer h={10} />
<Text>A multi-line text input.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { TextArea } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<TextArea placeholder="Some input"/>`}>
	<TextArea placeholder="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<Playground
	code={`<TextArea disabled placeholder="Some input"/>
<TextArea readonly value="Some input"/>`}
>
	<TextArea disabled placeholder="Some input" />
	<TextArea readonly value="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={10} />
<Playground code={`<TextArea width="100%" placeholder="Some input"/>`}>
	<TextArea width="100%" placeholder="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">With Label</Text>
<Spacer h={10} />
<Playground
	code={`<TextArea width="100%" placeholder="Some input">
	Some Text
</TextArea>
<TextArea width="100%" placeholder="Some input" required>
	Some Text
</TextArea>`}
>
	<TextArea width="100%" placeholder="Some input">Some Text</TextArea>
	<TextArea width="100%" placeholder="Some input" required>Some Text</TextArea>
</Playground>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<Playground
	code={`<TextArea placeholder="Some input" size="sm"/>
<TextArea placeholder="Some input" size="base"/>
<TextArea placeholder="Some input" size="lg"/>
<TextArea placeholder="Some input" size="xl"/>`}
>
	<TextArea placeholder="Some input" size="sm" />
	<TextArea placeholder="Some input" size="base" />
	<TextArea placeholder="Some input" size="lg" />
	<TextArea placeholder="Some input" size="xl" />
</Playground>
<Spacer h={30} />
<Text type="h4">Debounce</Text>
<Spacer h={5} />
<Text>
	Sometimes when working with data from a server you want to wait for the user to finish typing
	before making a request. The built in <code>`debounce`</code> property and
	<code>`on:debounce`</code> event make this easy. Try it out below.
</Text>
<Spacer h={10} />
<Playground
	code={`<TextArea
	placeholder="Some input"
	debounce={1000}
	on:input={() => (debounced = false)}
	on:debounce={() => (debounced = true)} />
{#if debounced}
	Debounced
{/if}`}
>
	<TextArea
		placeholder="Some input"
		on:input={() => (debounced = false)}
		debounce={1000}
		on:debounce={() => (debounced = true)}
	/>
	{#if debounced}
		Debounced
	{/if}
</Playground>
