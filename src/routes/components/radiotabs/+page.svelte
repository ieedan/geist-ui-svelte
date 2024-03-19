<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import RadioTabs from "$lib/radiotabs/RadioTabs.svelte";
	import RadioTab from "$lib/radiotabs/RadioTab.svelte";
	import type { Size } from "$lib/types.js";

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
	type="lite"
	text={`import { RadioTabs, RadioTab } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>If no tab is initially selected the first tab will automatically be selected.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<RadioTabs>
			<RadioTab>Desktop</RadioTab>
			<RadioTab>Mobile</RadioTab>
		</RadioTabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<RadioTabs>
	<RadioTab>Desktop</RadioTab>
	<RadioTab>Mobile</RadioTab>
</RadioTabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2 justify-start">
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
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</RadioTabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2 justify-start">
		{#each sizes as size}
			<RadioTabs {size}>
				<RadioTab>Desktop</RadioTab>
				<RadioTab>Mobile</RadioTab>
			</RadioTabs>
		{/each}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`{#each sizes as size}
	<RadioTabs {size}>
		<RadioTab>Desktop</RadioTab>
		<RadioTab>Mobile</RadioTab>
	</RadioTabs>
{/each}`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Get selected tab</Text>
<Spacer h={5} />
<Text>
	By adding ids to the tabs you can get the selected tab from RadioTabs. You can also set the
	default selected tab from RadioTabs. Selected from RadioTabs overrides initialSelected from
	RadioTab.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<RadioTabs bind:selected>
			<RadioTab id="desktop">Desktop</RadioTab>
			<RadioTab id="mobile">Mobile</RadioTab>
		</RadioTabs>
		{#if selected == "mobile"}
			Mobile
		{:else}
			Desktop
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={secondExampleCode} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">More tabs</Text>
<Spacer h={5} />
<Text>You can have as many tabs as you want.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<RadioTabs>
			<RadioTab>Home</RadioTab>
			<RadioTab>Dashboard</RadioTab>
			<RadioTab>Settings</RadioTab>
			<RadioTab>Account</RadioTab>
		</RadioTabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<RadioTabs>
	<RadioTab>Home</RadioTab>
	<RadioTab>Dashboard</RadioTab>
	<RadioTab>Settings</RadioTab>
	<RadioTab>Account</RadioTab>
</RadioTabs>`}
			/>
		</Details>
	</div>
</FieldSet>
