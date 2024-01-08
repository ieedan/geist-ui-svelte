<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Text</Text>
<Spacer h={10} />
<Text>The text component displays non-interactive text.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { Button, Text } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Tag Types</Text>
<Spacer h={5} />
<Text
	>Thanks to <code>{`<svelte:element>`}</code> the text component renders with different html tags.</Text>
<FieldSet>
	<div class="flex flex-col">
		<Text type="h1">Text</Text>
		<Text type="h2">Text</Text>
		<Text type="h3">Text</Text>
		<Text type="h4">Text</Text>
		<Text type="h5">Text</Text>
		<Text type="h6">Text</Text>
		<Text>Text</Text>
		<Text type="span">Text</Text>
		<Text type="small">Text</Text>
	</div>
	<div slot="footer">
		<details>
            <summary>Code</summary>
			<Code
				>{`<Text type="h1">Text</Text>
<Text type="h2">Text</Text>
<Text type="h3">Text</Text>
<Text type="h4">Text</Text>
<Text type="h5">Text</Text>
<Text type="h6">Text</Text>
<Text>Text</Text>
<Text type="span">Text</Text>
<Text type="small">Text</Text>`}</Code>
		</details>
	</div>
</FieldSet>
