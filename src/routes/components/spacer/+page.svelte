<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Card from "$lib/card/Card.svelte";
</script>

<Text type="h3">Spacer</Text>
<Spacer h={10} />
<Text>A layout component to space your content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Spacer } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Vertical Spacing</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Card></Card>
		<Spacer h={30} />
		<Card></Card>
		<Spacer h={10} />
		<Card></Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card></Card>
<Spacer h={30}/>
<Card></Card>
<Spacer h={10}/>
<Card></Card>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Horizontal Spacing</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex justify-start">
		<Card></Card>
		<Spacer w={30} />
		<Card></Card>
		<Spacer w={10} />
		<Card></Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card></Card>
<Spacer w={30} />
<Card></Card>
<Spacer w={10} />
<Card></Card>`}
			/>
		</Details>
	</div>
</FieldSet>
