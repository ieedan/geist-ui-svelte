<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Card from "$lib/card/Card.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Spacer</Text>
<Spacer h={10} />
<Text>A layout component to space your content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Spacer } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Vertical Spacing</Text>
<Spacer h={10} />
<Playground
	code={`<Card></Card>
<Spacer h={30}/>
<Card></Card>
<Spacer h={10}/>
<Card></Card>`}
>
	<Card></Card>
	<Spacer h={30} />
	<Card></Card>
	<Spacer h={10} />
	<Card></Card>
</Playground>
<Spacer h={30} />
<Text type="h4">Horizontal Spacing</Text>
<Spacer h={10} />
<Playground
	class="flex-row"
	code={`<Card></Card>
<Spacer w={30} />
<Card></Card>
<Spacer w={10} />
<Card></Card>`}
>
	<Card></Card>
	<Spacer w={30} />
	<Card></Card>
	<Spacer w={10} />
	<Card></Card>
</Playground>
