<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Toggle from "$lib/toggle/Toggle.svelte";
</script>

<Text type="h3">Toggle</Text>
<Spacer h={10} />
<Text>The toggle is an input with a true / false state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Checkbox } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Toggle/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Toggle/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Toggle disabled/>
		<Toggle disabled checked={true}/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Toggle disabled/>
<Toggle disabled checked={true}/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Toggle checked={true}/>
		<Toggle color="secondary" checked={true}/>
		<Toggle color="warning" checked={true}/>
		<Toggle color="error" checked={true}/>
		<Toggle color="success" checked={true}/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Toggle checked={true}/>
<Toggle color="secondary" checked={true}/>
<Toggle color="warning" checked={true}/>
<Toggle color="error" checked={true}/>
<Toggle color="success" checked={true}/>`}
			/>
		</Details>
	</div>
</FieldSet>
