<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Label from "$lib/label/Label.svelte";
</script>

<Text type="h3">Label</Text>
<Spacer h={10} />
<Text>A component to label things that don't have a built in label.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Label } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Label>Options</Label>
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Label>
    Options
</Label>
<Select>
    <Option value={1}>Option 1</Option>
    <Option value={2}>Option 2</Option>
</Select>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With spacing</Text>
<Spacer h={5} />
<Text>The first example works but it doesn't look the best lets add some spacing.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<div>
			<Label>Options</Label>
			<Select>
				<Option value={1}>Option 1</Option>
				<Option value={2}>Option 2</Option>
			</Select>
		</div>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<div>
    <Label>
        Options
    </Label>
    <Select>
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
    </Select>
</div>`}
			/>
		</Details>
	</div>
</FieldSet>
