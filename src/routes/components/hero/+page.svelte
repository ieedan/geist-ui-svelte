<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Page from '$lib/page/Page.svelte'
	import Button from "$lib/button/Button.svelte";
	import { Hero } from "$lib/index.js";

	export let pageVisible = false;
</script>

<Text type="h3">Hero</Text>
<Spacer h={10} />
<Text>A layout component to help you create your hero pages.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Hero } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => pageVisible = true}>Show Example</Button>
		<Page bind:visible={pageVisible}>
			<Hero>
				<Text type="h1">geist-ui-svelte</Text>
			</Hero>
			<Hero type="secondary">
				
			</Hero>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<FieldSet>
	<div class="py-2">
		<Text type="h4">Team Name</Text>
		<Spacer h={5} />
		<Text class="text-sm">
			This is your team's visible name within geist-ui-svelte. For example, the name
			of your company or department.
		</Text>
		<Spacer h={10} />
		<Input value="Aidan's Team Name" />
	</div>
	<div slot="footer" class="flex justify-between place-items-center">
		<Text type="small">Please use 32 characters at maximum.</Text>
		<Button color="secondary-light" size="sm">Save</Button>
	</div>
</FieldSet>`} />
		</Details>
	</div>
</FieldSet>
