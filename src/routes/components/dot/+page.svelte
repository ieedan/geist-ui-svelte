<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import Dot from "$lib/dot/Dot.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Dot</Text>
<Spacer h={10} />
<Text>A circle component great as a status indicator.</Text>
<Spacer h={20} />
<Snippet width="400px" type="lite" text={`import { Dot } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 justify-start place-items-end">
		<Dot />
		<Dot size={16} />
		<Dot size={20} />
		<Dot size={24} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Dot/>
<Dot size={16}/>
<Dot size={20}/>
<Dot size={24}/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 justify-start place-items-end">
		<Dot />
		<Dot type="success" />
		<Dot type="warning" />
		<Dot type="error" />
		<Dot type="secondary" />
		<Dot type="go" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Dot/>
<Dot type="success"/>
<Dot type="warning"/>
<Dot type="error"/>
<Dot type="secondary"/>
<Dot type="go"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Color</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 justify-start place-items-end">
		<Dot color="#ff00ff" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Dot color="#ff00ff"/>`} />
		</Details>
	</div>
</FieldSet>
