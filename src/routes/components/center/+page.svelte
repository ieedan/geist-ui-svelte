<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Card from "$lib/card/Card.svelte";
	import Center from "$lib/center/Center.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Center</Text>
<Spacer h={10} />
<Text>A layout component used to center content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Center } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>Center the content of a card.</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Card>
	<Text>Not Centered Text</Text>
</Card>
<Card>
	<Center>
		<Text>Centered Text</Text>
	</Center>
</Card>`}
>
	<Card>
		<Text>Not Centered Text</Text>
	</Card>
	<Card>
		<Center>
			<Text>Centered Text</Text>
		</Center>
	</Card>
</Playground>
