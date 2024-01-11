<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Text</Text>
<Spacer h={10} />
<Text>The text component displays non-interactive text.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Text } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Tag Types</Text>
<Spacer h={5} />
<Text
	>Thanks to <code>{`<svelte:element>`}</code> the text component renders with different html tags.</Text>
<Spacer h={10} />
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
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Text type="h1">Text</Text>
<Text type="h2">Text</Text>
<Text type="h3">Text</Text>
<Text type="h4">Text</Text>
<Text type="h5">Text</Text>
<Text type="h6">Text</Text>
<Text>Text</Text>
<Text type="span">Text</Text>
<Text type="small">Text</Text>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={5} />
<Text>Text elements can come in a few different colors.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<Text color="default">Text</Text>
		<Text color="secondary">Text</Text>
		<Text color="success">Text</Text>
		<Text color="error">Text</Text>
		<Text color="warning">Text</Text>
		<Text color="abort">Text</Text>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Text color="default">Text</Text>
<Text color="secondary">Text</Text>
<Text color="success">Text</Text>
<Text color="error">Text</Text>
<Text color="warning">Text</Text>
<Text color="abort">Text</Text>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Blockquote</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<Text blockquote>The best text is less text</Text>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Text blockquote>The best text is less text</Text>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Types</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col">
		<Text>
			<Text b color="abort">geist</Text>
			<Text color="success">-</Text>
			<Text color="warning" i>ui</Text>
			<Text color="success">-</Text>
			<Text color="error" del>svelte</Text>
		</Text>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Text>
	<Text b>geist</Text>
	<Text color="success">-</Text>
	<Text color="warning" i>ui</Text>
	<Text color="success">-</Text>
	<Text color="error">svelte</Text>
</Text>`} />
		</Details>
	</div>
</FieldSet>
