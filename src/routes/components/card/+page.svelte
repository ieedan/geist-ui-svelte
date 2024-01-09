<script lang="ts">
	import Card from "$lib/card/Card.svelte";
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Card</Text>
<Spacer h={10} />
<Text>A common organizational layout component.</Text>
<Spacer h={20} />
<Snippet width="400px" type="lite" text={`import { Card } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Card>A basic card</Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card>
	A basic card
</Card>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Hoverable</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Card hoverable>A hoverable card</Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card hoverable>
	A hoverable card
</Card>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Shadow</Text>
<Spacer h={10} />
<FieldSet>
	<div>
		<Card shadow>
			<Text type="h6">This card has a shadow.</Text>
			<Spacer h={10}/>
			<Text>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat eum,
				quia aliquam ipsa numquam reprehenderit architecto illo nulla doloremque, dolore id
				tempore. Vitae iusto voluptate laborum voluptatibus dolores aliquid.
			</Text>
		</Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card shadow>
	<Text type="h6">This card has a shadow.</Text>
	<Spacer h={10}/>
	<Text>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat eum,
		quia aliquam ipsa numquam reprehenderit architecto illo nulla doloremque, dolore id
		tempore. Vitae iusto voluptate laborum voluptatibus dolores aliquid.
	</Text>
</Card>`} />
		</Details>
	</div>
</FieldSet>
