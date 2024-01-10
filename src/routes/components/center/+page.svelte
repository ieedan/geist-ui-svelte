<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Card from "$lib/card/Card.svelte";
	import Center from "$lib/center/Center.svelte";
</script>

<Text type="h3">Center</Text>
<Spacer h={10} />
<Text>A layout component to help you center content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Center } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>Center the content of a card.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Card>
			<Text>Not Centered Text</Text>
		</Card>
		<Card>
			<Center>
				<Text>Centered Text</Text>
			</Center>
		</Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card>
	<Text>Not Centered Text</Text>
</Card>
<Card>
	<Center>
		<Text>Centered Text</Text>
	</Center>
</Card>`} />
		</Details>
	</div>
</FieldSet>