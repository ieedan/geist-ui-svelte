<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Loading from "$lib/loading/Loading.svelte";
</script>

<Text type="h3">Loading</Text>
<Spacer h={10} />
<Text>A component to indicate a loading state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Divider } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-3 place-items-end justify-start py-2">
		<Loading size="xs"/>
		<Loading size="sm"/>
		<Loading size="md"/>
		<Loading size="lg"/>
		<Loading size="xl"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Loading size="xs"/>
<Loading size="sm"/>
<Loading size="md"/>
<Loading size="lg"/>
<Loading size="xl"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-3 place-items-end justify-start py-2">
		<Loading />
		<Loading type="success"/>
		<Loading type="warning"/>
		<Loading type="error"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Loading />
<Loading type="success"/>
<Loading type="warning"/>
<Loading type="error"/>`}
			/>
		</Details>
	</div>
</FieldSet>
