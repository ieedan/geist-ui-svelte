<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ModeSelector from "$lib/modeselector/ModeSelector.svelte";
</script>

<Text type="h3">ModeSelector</Text>
<Spacer h={10} />
<Text>A component to allow the user to select their dark mode preference.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { ModeSelector } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<ModeSelector />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ModeSelector/>
<!-- Yep just this -->`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Icon</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<ModeSelector noIcon />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<ModeSelector noIcon/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Border</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<ModeSelector border />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<ModeSelector border/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Placement</Text>
<Spacer h={5} />
<Text>
	The mode selector uses the dropdown component under the hood so the same placements apply.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex justify-center place-items-center">
		<ModeSelector />
		<ModeSelector placement="bottom-start" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ModeSelector />
<ModeSelector placement="bottom-start"/>`}
			/>
		</Details>
	</div>
</FieldSet>
