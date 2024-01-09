<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Checkbox from "$lib/checkbox/Checkbox.svelte";
</script>

<Text type="h3">Checkbox</Text>
<Spacer h={10} />
<Text>The checkbox is an input with a true / false state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Checkbox } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Checkbox>Notifications</Checkbox>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Checkbox>Notifications</Checkbox>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Checkbox disabled>Notifications</Checkbox>
		<Checkbox disabled checked={true}>Notifications</Checkbox>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Checkbox disabled>Notifications</Checkbox>
<Checkbox disabled checked={true}>Notifications</Checkbox>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Checkbox checked={true}>Default</Checkbox>
		<Checkbox color="success" checked={true}>Success</Checkbox>
		<Checkbox color="warning" checked={true}>Warning</Checkbox>
		<Checkbox color="error" checked={true}>Error</Checkbox>
		<Checkbox color="secondary" checked={true}>Secondary</Checkbox>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Checkbox checked={true}>Default</Checkbox>
<Checkbox color="success" checked={true}>Success</Checkbox>
<Checkbox color="warning" checked={true}>Warning</Checkbox>
<Checkbox color="error" checked={true}>Error</Checkbox>
<Checkbox color="secondary" checked={true}>Secondary</Checkbox>`}
			/>
		</Details>
	</div>
</FieldSet>
