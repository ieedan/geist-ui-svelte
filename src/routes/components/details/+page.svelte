<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import { Edit } from "$lib/types.js";
</script>

<Text type="h3">Details</Text>
<Spacer h={10} />
<Text>An expandable component to hide content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Details } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Details label="See more">
			Some details here
		</Details>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Details label="See more">
	Some details here
</Details>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With animation</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Details label="See more" 
		animate>
			Some details here
		</Details>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{lineNumber: 2, type: Edit.add}]}
				code={`<Details label="See more" 
	animate>
	Some details here
</Details>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Initial show</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Details label="See more" 
		initialShow={true}>
			Some details here
		</Details>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{lineNumber: 2, type: Edit.add}]}
				code={`<Details label="See more" 
	initialShow={true}>
	Some details here
</Details>`}
			/>
		</Details>
	</div>
</FieldSet>
