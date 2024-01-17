<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ButtonGroup from "$lib/buttongroup/ButtonGroup.svelte";
	import ButtonGroupButton from "$lib/buttongroup/ButtonGroupButton.svelte";
	import type { ButtonColor } from "$lib/types.js";

	const colors: ButtonColor[] = [
		"default",
		"secondary",
		"success",
		"warning",
		"error",
		"abort",
		"secondary-light",
		"success-light",
		"warning-light",
		"error-light",
	];

	/* eslint-disable no-useless-escape */
	const colorExampleCode = `<script lang="ts">
    import { ButtonGroup, ButtonColor } from "geist-ui-svelte";

    const colors: ButtonColor[] = [
		"default",
		"secondary",
		"success",
		"warning",
		"error",
		"abort",
		"secondary-light",
		"success-light",
		"warning-light",
		"error-light",
	];
<\/script>

{#each colors as color}
	<ButtonGroup {color}>
		<ButtonGroupButton>Code</ButtonGroupButton>
		<ButtonGroupButton>Svelte</ButtonGroupButton>
		<ButtonGroupButton>Group</ButtonGroupButton>
	</ButtonGroup>
{/each}`;

	/* eslint-disable no-useless-escape */
	const ghostExampleCode = `<script lang="ts">
    import { ButtonGroup, ButtonColor } from "geist-ui-svelte";

    const colors: ButtonColor[] = [
		"default",
		"secondary",
		"success",
		"warning",
		"error",
		"abort",
		"secondary-light",
		"success-light",
		"warning-light",
		"error-light",
	];
<\/script>

{#each colors as color}
	<ButtonGroup {color} ghost>
		<ButtonGroupButton>Code</ButtonGroupButton>
		<ButtonGroupButton>Svelte</ButtonGroupButton>
		<ButtonGroupButton>Group</ButtonGroupButton>
	</ButtonGroup>
{/each}`;
</script>

<Text type="h3">ButtonGroup</Text>
<Spacer h={10} />
<Text>A set of related buttons.</Text>
<Spacer h={20} />
<Snippet
	width="650px"
	type="lite"
	text={`import { ButtonGroup, ButtonGroupButton } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap justify-start gap-2">
		<ButtonGroup>
			<ButtonGroupButton>Code</ButtonGroupButton>
			<ButtonGroupButton>Svelte</ButtonGroupButton>
			<ButtonGroupButton>Group</ButtonGroupButton>
		</ButtonGroup>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonGroup>
    <ButtonGroupButton>Code</ButtonGroupButton>
    <ButtonGroupButton>Svelte</ButtonGroupButton>
    <ButtonGroupButton>Group</ButtonGroupButton>
</ButtonGroup>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled Button</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap justify-start gap-2">
		<ButtonGroup>
			<ButtonGroupButton disabled>Code</ButtonGroupButton>
			<ButtonGroupButton>Svelte</ButtonGroupButton>
			<ButtonGroupButton>Group</ButtonGroupButton>
		</ButtonGroup>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonGroup>
    <ButtonGroupButton disabled>Code</ButtonGroupButton>
    <ButtonGroupButton>Svelte</ButtonGroupButton>
    <ButtonGroupButton>Group</ButtonGroupButton>
</ButtonGroup>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap justify-start gap-2">
		{#each colors as color}
			<ButtonGroup {color}>
				<ButtonGroupButton>Code</ButtonGroupButton>
				<ButtonGroupButton>Svelte</ButtonGroupButton>
				<ButtonGroupButton>Group</ButtonGroupButton>
			</ButtonGroup>
		{/each}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={colorExampleCode} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Ghost</Text>
<Spacer h={5} />
<Text>
	Add <code>`ghost`</code> to invert the background of the button.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap justify-start gap-2">
		{#each colors as color}
			<ButtonGroup {color} ghost>
				<ButtonGroupButton>Code</ButtonGroupButton>
				<ButtonGroupButton>Svelte</ButtonGroupButton>
				<ButtonGroupButton>Group</ButtonGroupButton>
			</ButtonGroup>
		{/each}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" edits={[{ number: 19, type: "add" }]} code={ghostExampleCode} />
		</Details>
	</div>
</FieldSet>
