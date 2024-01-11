<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Card from "$lib/card/Card.svelte";
	import Divider from "$lib/divider/Divider.svelte";
</script>

<Text type="h3">Divider</Text>
<Spacer h={10} />
<Text>A layout component to separate your content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Divider } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>Use the divider to create a header or footer section in a card.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Card>
			<Text
				>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo dicta
				incidunt placeat cupiditate obcaecati laboriosam labore consectetur expedita libero
				tenetur pariatur veniam cumque repudiandae, eligendi aliquid ut ea soluta.</Text
			>
			<Divider margin="md" />
			<Text>Footer</Text>
		</Card>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Card>
	<Text>Lorem, ipsum dol...</Text>
	<Divider margin="md"/>
	<Text>Footer</Text>
</Card>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With Label</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Divider margin="md" label="Your content your way" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Divider margin="md" label="Your content your way"/>`} />
		</Details>
	</div>
</FieldSet>
