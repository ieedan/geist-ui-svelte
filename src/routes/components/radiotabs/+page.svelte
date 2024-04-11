<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import RadioTabs from "$lib/radiotabs/RadioTabs.svelte";
	import RadioTab from "$lib/radiotabs/RadioTab.svelte";
	import type { Size } from "$lib/types.js";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	let selected: string = "mobile";

	/* eslint-disable no-useless-escape */
	const secondExampleCode = `<script lang="ts">
	let selected: string = "mobile";
<\/script>
<RadioTabs bind:selected>
	<RadioTab id="desktop">Desktop</RadioTab>
	<RadioTab id="mobile">Mobile</RadioTab>
</RadioTabs>
{#if selected == "mobile"}
	Mobile
{:else}
	Desktop
{/if}`;

	const sizes: Size[] = ["xs", "sm", "md", "lg", "xl"];
</script>

<Text type="h3">RadioTabs</Text>
<Spacer h={10} />
<Text>A component for tab navigation.</Text>
<Spacer h={20} />
<Snippet
	width="550px"
	type="transparent"
	text={`import { RadioTabs, RadioTab } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>If no tab is initially selected the first tab will automatically be selected.</Text>
<Spacer h={10} />
<Playground
	code={`<RadioTabs>
	<RadioTab>Desktop</RadioTab>
	<RadioTab>Mobile</RadioTab>
</RadioTabs>`}>
	<RadioTabs>
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<RadioTabs>
	<RadioTab>Desktop</RadioTab>
	<RadioTab>Mobile</RadioTab>
</RadioTabs>
<RadioTabs color="secondary">
	<RadioTab>Desktop</RadioTab>
	<RadioTab>Mobile</RadioTab>
</RadioTabs>
<RadioTabs color="ghost">
	<RadioTab>Desktop</RadioTab>
	<RadioTab>Mobile</RadioTab>
</RadioTabs>`}>
	<RadioTabs>
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
	<RadioTabs color="secondary">
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
	<RadioTabs color="ghost">
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
</Playground>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`{#each sizes as size}
	<RadioTabs {size}>
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
{/each}`}>
	{#each sizes as size}
		<RadioTabs {size}>
			<RadioTab>Desktop</RadioTab>
			<RadioTab>Mobile</RadioTab>
		</RadioTabs>
	{/each}
</Playground>
<Spacer h={30} />
<Text type="h4">Get selected tab</Text>
<Spacer h={5} />
<Text>
	By adding ids to the tabs you can get the selected tab from RadioTabs. You can also set the
	default selected tab from RadioTabs. Selected from RadioTabs overrides initialSelected from
	RadioTab.
</Text>
<Spacer h={10} />
<Playground code={secondExampleCode}>
	<RadioTabs bind:selected>
		<RadioTab id="desktop">Desktop</RadioTab>
		<RadioTab id="mobile">Mobile</RadioTab>
	</RadioTabs>
	{#if selected == "mobile"}
		Mobile
	{:else}
		Desktop
	{/if}
</Playground>
<Spacer h={30} />
<Text type="h4">More tabs</Text>
<Spacer h={5} />
<Text>You can have as many tabs as you want.</Text>
<Spacer h={10} />
<Playground
	code={`<RadioTabs>
	<RadioTab>Home</RadioTab>
	<RadioTab>Dashboard</RadioTab>
	<RadioTab>Settings</RadioTab>
	<RadioTab>Account</RadioTab>
</RadioTabs>`}>
	<RadioTabs>
		<RadioTab>Home</RadioTab>
		<RadioTab>Dashboard</RadioTab>
		<RadioTab>Settings</RadioTab>
		<RadioTab>Account</RadioTab>
	</RadioTabs>
</Playground>
