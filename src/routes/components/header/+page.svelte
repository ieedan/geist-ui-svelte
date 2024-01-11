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
	import Hero from "$lib/hero/Hero.svelte";

	export let firstExamplePageVisible = false;
	export let secondExamplePageVisible = false;
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
		<Button on:click={() => (firstExamplePageVisible = true)}>Show Example</Button>
		<Page bind:visible={firstExamplePageVisible}>
			<div class="max-h-screen overflow-y-auto">
				<Header>
					<div class="flex place-items-center justify-between w-full px-6 max-w-5xl">
						<Text type="h5">default</Text>
						<Button on:click={() => (firstExamplePageVisible = false)}
							>Click to close</Button
						>
					</div>
				</Header>
				<Hero>
					<Text type="h1" align="center">Basic example</Text>
					<Text>Press `Esc` to close at anytime</Text>
				</Hero>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Header>
	<div class="flex place-items-center justify-between w-full px-6 max-w-5xl">
		<Text type="h5">default</Text>
		<Button>Click to close</Button>
	</div>
</Header>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Sticky</Text>
<Spacer h={5} />
<Text>Pins the header to the top of the screen and allows content to scroll under it.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (secondExamplePageVisible = true)}>Show Example</Button>
		<Page bind:visible={secondExamplePageVisible}>
			<div class="max-h-screen overflow-y-auto">
				<Header sticky>
					<div class="flex place-items-center justify-between w-full px-6 max-w-5xl">
						<Text type="h5">sticky</Text>
						<Button on:click={() => (secondExamplePageVisible = false)}
							>Click to close</Button
						>
					</div>
				</Header>
				<div class="flex flex-col place-items-center justify-center">
					<div class="bg-blue-500 h-96 w-64 rounded-lg"></div>
					<Spacer h={20} />
					<div class="bg-orange-300 dark:bg-orange-400 h-96 w-64 rounded-lg"></div>
					<Spacer h={20} />
					<div class="bg-red-500 dark:bg-red-600 h-96 w-64 rounded-lg"></div>
					<Spacer h={20} />
					<div class="bg-blue-500 h-96 w-64 rounded-lg"></div>
					<Spacer h={20} />
					<div class="bg-orange-300 dark:bg-orange-400 h-96 w-64 rounded-lg"></div>
					<Spacer h={20} />
					<div class="bg-red-500 dark:bg-red-600 h-96 w-64 rounded-lg"></div>
				</div>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Header sticky>
	<div class="flex place-items-center justify-between w-full px-6 max-w-5xl">
		<Text type="h5">sticky</Text>
		<Button>Click to close</Button>
	</div>
</Header>`}
			/>
		</Details>
	</div>
</FieldSet>
