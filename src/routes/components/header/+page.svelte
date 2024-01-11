<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Page from "$lib/page/Page.svelte";
	import Button from "$lib/button/Button.svelte";
	import Note from "$lib/note/Note.svelte";
	import Header from "$lib/header/Header.svelte";

	export let firstExamplePage = false;
</script>

<Text type="h3">Header</Text>
<Spacer h={10} />
<Text>A simple header component.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Header } from 'geist-ui-svelte';`} />
<Spacer h={20} />
<Note color="success">Click `Show Example` to see the the full size component.</Note>
<Spacer h={20} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (firstExamplePage = true)}>Show Example</Button>
		<Page bind:visible={firstExamplePage}>
			<div class="max-h-screen overflow-y-auto">
				<Header>
					<Text type="h5">geist-ui-svelte header</Text>
				</Header>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Header>
	<Text type="h5">geist-ui-svelte header</Text>
</Header>`}
			/>
		</Details>
	</div>
</FieldSet>
