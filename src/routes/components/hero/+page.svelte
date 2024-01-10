<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Page from "$lib/page/Page.svelte";
	import Button from "$lib/button/Button.svelte";
	import { Hero } from "$lib/index.js";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import Note from "$lib/note/Note.svelte";

	export let firstExamplePage = false;
	export let secondExamplePage = false;
</script>

<Text type="h3">Hero</Text>
<Spacer h={10} />
<Text>A layout component to help you create your hero pages.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Hero } from 'geist-ui-svelte';`} />
<Spacer h={20} />
<Note color="success">Click show example to see the the full size component.</Note>
<Spacer h={20}/>
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>Automatically centers content on the screen and takes up the entire page <code>`100svh`</code>.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (firstExamplePage = true)}>Show Example</Button>
		<Page bind:visible={firstExamplePage}>
			<div class="max-h-screen overflow-y-auto">
				<Hero>
					<Text type="h1">geist-ui-svelte</Text>
					<Spacer h={20} />
					<div class="flex place-items-center gap-4">
						<Button color="secondary-light">Get Started</Button>
						<Button>Components</Button>
					</div>
					<Spacer h={150} />
					<Button on:click={() => (firstExamplePage = false)}
						>Click here to close or press `Escape`</Button>
				</Hero>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Hero>
	<Text type="h1">geist-ui-svelte</Text>
	<Spacer h={20} />
	<div class="flex place-items-center gap-4">
		<Button color="secondary-light">Get Started</Button>
		<Button>Components</Button>
	</div>
</Hero>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Secondary</Text>
<Spacer h={5} />
<Text>Uses a different background color to denote a new section.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (secondExamplePage = true)}>Show Example</Button>
		<Page bind:visible={secondExamplePage}>
			<div class="max-h-screen overflow-y-auto">
				<Hero type="secondary">
					<Text type="h1">geist-ui-svelte</Text>
					<Spacer h={20} />
					<div class="flex place-items-center gap-4">
						<Button color="secondary-light">Get Started</Button>
						<Button>Components</Button>
					</div>
					<Spacer h={150} />
					<Button on:click={() => (secondExamplePage = false)}
						>Click here to close or press `Escape`</Button>
				</Hero>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Hero type="secondary">
	<Text type="h1">geist-ui-svelte</Text>
	<Spacer h={20} />
	<div class="flex place-items-center gap-4">
		<Button color="secondary-light">Get Started</Button>
		<Button>Components</Button>
	</div>
</Hero>`} />
		</Details>
	</div>
</FieldSet>