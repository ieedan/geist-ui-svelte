<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Input from "$lib/input/Input.svelte";
</script>

<Text type="h3">Input</Text>
<Spacer h={10} />
<Text>Captures user input.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Input } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Input placeholder="Some input"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Input placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-1">
		<Input disabled placeholder="Some input"/>
		<Input readonly value="Some input"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Input disabled placeholder="Some input"/>
<Input readonly placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input width="100%" placeholder="Some input"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input width="100%" placeholder="Some input"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Inline Label</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input containerLabel="username" placeholder="username"/>
		<Input containerLabel=".com" labelPlacement="end" placeholder="https://github"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input containerLabel="username" placeholder="username"/>
<Input containerLabel=".com" labelPlacement="end" placeholder="https://github"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Input Types</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input type="password" placeholder="Your password" value="987654321"/>
		<Input type="date"/>
		<Input type="number" value={10}/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input containerLabel="username" placeholder="username"/>
<Input containerLabel=".com" labelPlacement="end" placeholder="https://github"/>`}
			/>
		</Details>
	</div>
</FieldSet>
