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
	import Note from "$lib/note/Note.svelte";

	let firstExamplePage = false;
	let secondExamplePage = false;
	let thirdExamplePage = false;
</script>

<Text type="h3">Hero</Text>
<Spacer h={10} />
<Text>A layout component to help you create your hero pages.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Hero } from 'geist-ui-svelte';`} />
<Spacer h={20} />
<Note color="success">Click `Show Example` to see the the full size component.</Note>
<Spacer h={20} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text
	>Automatically centers content on the screen and takes up the entire page <code>`100svh`</code
	>.</Text
>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (firstExamplePage = true)}>Show Example</Button>
		<Page bind:visible={firstExamplePage}>
			<div class="max-h-screen overflow-y-auto">
				<Hero>
					<Text align="center" type="h1">geist-ui-svelte</Text>
					<Spacer h={20} />
					<div class="flex place-items-center gap-4">
						<Button color="secondary-light">Get Started</Button>
						<Button>Components</Button>
					</div>
					<Spacer h={150} />
					<Button on:click={() => (firstExamplePage = false)}
						>Click here to close or press `Escape`</Button
					>
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
</Hero>`}
			/>
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
					<Text align="center" type="h1">geist-ui-svelte</Text>
					<Spacer h={20} />
					<div class="flex place-items-center gap-4">
						<Button color="secondary-light">Get Started</Button>
						<Button>Components</Button>
					</div>
					<Spacer h={150} />
					<Button on:click={() => (secondExamplePage = false)}
						>Click here to close or press `Escape`</Button
					>
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
</Hero>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<!-- This Example is Responsive for Small devices we use type="h2" and for Medium & Large Devices we use type="h1" -->
<!-- Changes : type="p" is added under h1  -->
<Text type="h4">Hero with description</Text>
<Spacer h={5} />
<Text>Uses Description to describe your Project</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button on:click={() => (thirdExamplePage = true)}>Show Example</Button>
		<Page bind:visible={thirdExamplePage}>
			<div class="max-h-screen overflow-y-auto">
				<Hero>
					<div class="hidden sm:flex">
						<Text type="h1" align="center">geist-ui-svelte</Text>
					</div>
					<div class="flex sm:hidden">
						<Text type="h2" align="center">geist-ui-svelte</Text>
					</div>
					<Spacer h={20} />
					<div class="px-2 text-center sm:text-left">
						<Text type="p" color="secondary"
							>Geist UI Svelte is An open source design system for building modern
							websites and applications</Text
						>
					</div>
					<Spacer h={20} />
					<div class="flex place-items-center gap-4">
						<Button color="secondary-light">Get Started</Button>
						<Button>Components</Button>
					</div>
					<Spacer h={150} />
					<Button on:click={() => (thirdExamplePage = false)}
						>Click here to close or press `Escape`</Button
					>
				</Hero>
			</div>
		</Page>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Hero>
  <div class="hidden sm:flex">
	<Text type="h1" align="center">geist-ui-svelte</Text>
  </div>
  <div class="flex sm:hidden">
	<Text type="h2" align="center">geist-ui-svelte</Text>
  </div>
  <Spacer h={20} />
  <div class="px-2 text-center sm:text-left">
  	<Text type="p" color="secondary"
  	>Geist UI Svelte is An open source design system for building modern
  	websites and applications</Text>
  </div>
  <Spacer h={20} />
  <div class="flex place-items-center gap-4">
	<Button color="secondary-light">Get Started</Button>
	<Button>Components</Button>
  </div>
</Hero>`}
			/>
		</Details>
	</div>
</FieldSet>
