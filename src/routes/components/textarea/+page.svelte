<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import TextArea from "$lib/textarea/TextArea.svelte";
</script>

<Text type="h3">TextArea</Text>
<Spacer h={10} />
<Text>A multi-line text input.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { TextArea } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<TextArea placeholder="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<TextArea placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-1">
		<TextArea disabled placeholder="Some input" />
		<TextArea readonly value="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<TextArea disabled placeholder="Some input"/>
<TextArea readonly value="Some input"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<TextArea width="100%" placeholder="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<TextArea width="100%" placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
