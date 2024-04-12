<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ButtonGroup from "$lib/buttongroup/ButtonGroup.svelte";
	import ButtonGroupButton from "$lib/buttongroup/ButtonGroupButton.svelte";
	import type { ButtonColor } from "$lib/types.js";
	import Playground from "$lib/docs-components/playground/playground.svelte";

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
		"abort-active",
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
	type="transparent"
	text={`import { ButtonGroup, ButtonGroupButton } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonGroup>
    <ButtonGroupButton>Code</ButtonGroupButton>
    <ButtonGroupButton>Svelte</ButtonGroupButton>
    <ButtonGroupButton>Group</ButtonGroupButton>
</ButtonGroup>`}
>
	<ButtonGroup>
		<ButtonGroupButton>Code</ButtonGroupButton>
		<ButtonGroupButton>Svelte</ButtonGroupButton>
		<ButtonGroupButton>Group</ButtonGroupButton>
	</ButtonGroup>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled Button</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonGroup>
    <ButtonGroupButton disabled>Code</ButtonGroupButton>
    <ButtonGroupButton>Svelte</ButtonGroupButton>
    <ButtonGroupButton>Group</ButtonGroupButton>
</ButtonGroup>`}
>
	<ButtonGroup>
		<ButtonGroupButton disabled>Code</ButtonGroupButton>
		<ButtonGroupButton>Svelte</ButtonGroupButton>
		<ButtonGroupButton>Group</ButtonGroupButton>
	</ButtonGroup>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground code={colorExampleCode} class="flex-row gap-2 flex-wrap">
	{#each colors as color}
		<ButtonGroup {color}>
			<ButtonGroupButton>Code</ButtonGroupButton>
			<ButtonGroupButton>Svelte</ButtonGroupButton>
			<ButtonGroupButton>Group</ButtonGroupButton>
		</ButtonGroup>
	{/each}
</Playground>
<Spacer h={30} />
<Text type="h4">Ghost</Text>
<Spacer h={5} />
<Text>
	Add <code>`ghost`</code> to invert the background of the button.
</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 19, type: "add" }]}
	code={ghostExampleCode}
	class="flex-row gap-2 flex-wrap"
>
	{#each colors as color}
		<ButtonGroup {color} ghost>
			<ButtonGroupButton>Code</ButtonGroupButton>
			<ButtonGroupButton>Svelte</ButtonGroupButton>
			<ButtonGroupButton>Group</ButtonGroupButton>
		</ButtonGroup>
	{/each}
</Playground>
