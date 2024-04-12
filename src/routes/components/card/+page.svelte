<script lang="ts">
	import Card from "$lib/card/Card.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Card</Text>
<Spacer h={10} />
<Text>A common organizational layout component.</Text>
<Spacer h={20} />
<Snippet width="400px" type="transparent" text={`import { Card } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Card>
	A basic card
</Card>`}
>
	<Card>A basic card</Card>
</Playground>
<Spacer h={30} />
<Text type="h4">Hoverable</Text>
<Spacer h={10} />
<Playground
	code={`<Card hoverable>
	A hoverable card
</Card>`}
>
	<Card hoverable>A hoverable card</Card>
</Playground>
<Spacer h={30} />
<Text type="h4">Shadow</Text>
<Spacer h={10} />
<Playground
	code={`<Card shadow>
	<Text type="h6">This card has a shadow.</Text>
	<Spacer h={10}/>
	<Text>
		Lorem, ipsum ...
	</Text>
</Card>`}
>
	<Card shadow>
		<Text type="h6">This card has a shadow.</Text>
		<Spacer h={10} />
		<Text>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat eum, quia
			aliquam ipsa numquam reprehenderit architecto illo nulla doloremque, dolore id tempore.
			Vitae iusto voluptate laborum voluptatibus dolores aliquid.
		</Text>
	</Card>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={5} />
<Text>
	Cards can have multiple colors. They also set the <code>`text-color`</code> so that your text always
	has a good contrast.
</Text>
<Spacer h={10} />
<Playground
	class="flex-wrap flex-row gap-2"
	code={`<Card color="transparent">
	<Text>Transparent</Text>
</Card>
<Card color="dark">
	<Text>Dark</Text>
</Card>
<Card color="secondary">
	<Text>Secondary</Text>
</Card>
<Card color="success">
	<Text>Success</Text>
</Card>
<Card color="warning">
	<Text>Warning</Text>
</Card>
<Card color="error">
	<Text>Error</Text>
</Card>
<Card color="abort">
	<Text>Abort</Text>
</Card>`}
>
	<Card color="transparent">
		<Text>Transparent</Text>
	</Card>
	<Card color="dark" hoverable>
		<Text>Dark</Text>
	</Card>
	<Card color="secondary" hoverable>
		<Text>Secondary</Text>
	</Card>
	<Card color="success" hoverable>
		<Text>Success</Text>
	</Card>
	<Card color="warning" hoverable>
		<Text>Warning</Text>
	</Card>
	<Card color="error" hoverable>
		<Text>Error</Text>
	</Card>
	<Card color="abort" hoverable>
		<Text>Abort</Text>
	</Card>
</Playground>
<Spacer h={30} />
<Text type="h4">Rounded</Text>
<Spacer h={5} />
<Text>
	Adjust the border radius with the <code>`rounded`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	class="flex-row flex-wrap gap-2"
	code={`<Card shadow>
	<Text type="h6">This card has a shadow.</Text>
	<Spacer h={10}/>
	<Text>
		Lorem, ipsum ...
	</Text>
</Card>`}
>
	<Card rounded="sm">sm</Card>
	<Card rounded="md">md</Card>
	<Card rounded="lg">lg</Card>
	<Card rounded="xl">xl</Card>
	<Card rounded="2xl">2xl</Card>
	<Card rounded="3xl">3xl</Card>
	<Card rounded="full">full</Card>
</Playground>
