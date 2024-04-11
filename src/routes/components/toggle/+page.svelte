<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Toggle from "$lib/toggle/Toggle.svelte";
</script>

<Text type="h3">Toggle</Text>
<Spacer h={10} />
<Text>An input with a true / false state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Toggle } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<Toggle/>`}>
	<Toggle />
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Toggle disabled/>
<Toggle disabled checked={true}/>`}>
	<Toggle disabled />
	<Toggle disabled checked={true} />
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2 flex-wrap"
	code={`<Toggle checked={true}/>
<Toggle color="secondary" checked={true}/>
<Toggle color="warning" checked={true}/>
<Toggle color="error" checked={true}/>
<Toggle color="success" checked={true}/>`}>
	<Toggle checked={true} />
	<Toggle color="secondary" checked={true} />
	<Toggle color="warning" checked={true} />
	<Toggle color="error" checked={true} />
	<Toggle color="success" checked={true} />
</Playground>
