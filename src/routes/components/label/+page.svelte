<script lang="ts">
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Label from "$lib/label/Label.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Label</Text>
<Spacer h={10} />
<Text>A component to label things that don't have a built in label.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Label } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Label>
    Options
</Label>
<Select>
    <Option value={1}>Option 1</Option>
    <Option value={2}>Option 2</Option>
</Select>`}
>
	<div>
		<Label>Options</Label>
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
</Playground>
<Spacer h={30} />
<Text type="h4">With spacing</Text>
<Spacer h={5} />
<Text>The first example works but it doesn't look the best lets add some spacing.</Text>
<Spacer h={10} />
<Playground
	code={`<div>
    <Label>
        Options
    </Label>
    <Select>
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
    </Select>
</div>`}
>
	<div>
		<Label>Options</Label>
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
</Playground>
