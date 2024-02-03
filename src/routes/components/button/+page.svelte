<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Button from "$lib/button/Button.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";

	let loading = false;
</script>

<Text type="h3">Button</Text>
<Spacer h={10} />
<Text>The button component is used to trigger an event.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Button } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button>Action</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button>Action</Button>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Loading</Text>
<Spacer h={5} />
<Text>When loading the button will maintain its original size to prevent layout shift.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button loading>Action</Button>
		<Spacer h={5} />
		<Button loading color="success">Action</Button>
		<Spacer h={5} />
		<Button
			color="success-light"
			{loading}
			on:click={() => {
				loading = true;
				setTimeout(() => {
					loading = false;
				}, 500);
			}}
		>
			Click to load
		</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button loading>Action</Button>
<Spacer h={5} />
<Button loading color="success">Action</Button>
<Spacer h={5} />
<Button
	color="success-light"
	{loading}
	on:click={() => {
		loading = true;
		setTimeout(() => {
			loading = false;
		}, 500);
	}}>
	Click to load
</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button disabled>Action</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button disabled>Action</Button>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Button color="secondary">Secondary</Button>
		<Button color="success">Success</Button>
		<Button color="warning">Warning</Button>
		<Button color="error">Error</Button>
		<Button color="abort">Abort</Button>
		<Button color="tab">Tab</Button>
		<Button color="secondary-light">Secondary Light</Button>
		<Button color="success-light">Success Light</Button>
		<Button color="warning-light">Warning Light</Button>
		<Button color="error-light">Error Light</Button>
		<Button color="abort-active">Abort Active</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="abort">Abort</Button>
<Button color="secondary-light">Secondary Light</Button>
<Button color="success-light">Success Light</Button>
<Button color="warning-light">Warning Light</Button>
<Button color="error-light">Error Light</Button>
<Button color="abort-active">Abort Active</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Ghost</Text>
<Spacer h={5} />
<Text>Reverses the color fill.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Button color="secondary" ghost>Secondary</Button>
		<Button color="success" ghost>Success</Button>
		<Button color="warning" ghost>Warning</Button>
		<Button color="error" ghost>Error</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button color="secondary" ghost>Secondary</Button>
<Button color="success" ghost>Success</Button>
<Button color="warning" ghost>Warning</Button>
<Button color="error" ghost>Error</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap place-items-center gap-2">
		<Button size="xs">xs</Button>
		<Button size="sm">sm</Button>
		<Button size="md">md</Button>
		<Button size="lg">lg</Button>
		<Button size="xl">xl</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button size="xs">xs</Button>
<Button size="sm">sm</Button>
<Button size="md">md</Button>
<Button size="lg">lg</Button>
<Button size="xl">xl</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Square</Text>
<Spacer h={5} />
<Text>
	Sometimes you need a button to be square the <code>`square`</code> attribute persists the
	<code>`min-h`</code>
	set by size but also adds a <code>`min-w`</code> matching the <code>`min-h`</code> this gives you
	square buttons without issues with overflow.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap place-items-center gap-2">
		<Button square><XIcon size={18} /></Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button square><XIcon size={18}/></Button>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Use as Link</Text>
<Spacer h={5} />
<Text>
	To use a button as an anchor tag just assign its <code>`href`</code> attribute and it will
	become an a tag. You can also use <code>`target="_blank"`</code> to navigate to the link in a new
	window.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap place-items-center gap-2">
		<Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
			Check this out
		</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button 
	href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
	target="_blank">
	Check this out
</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Align</Text>
<Spacer h={5} />
<Text>
	Sometimes you may want to align the content differently like if you are using the <code
		>`tab`</code
	>
	color. Set <code>`align`</code> to change the alignment.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-1">
		<Button color="tab" align="start" width="200px">Dashboard</Button>
		<Button color="tab" align="start" width="200px">Settings</Button>
		<Button color="tab" align="end" width="200px">Dashboard</Button>
		<Button color="tab" align="end" width="200px">Settings</Button>
		<Button color="tab" align="center" width="200px">Dashboard</Button>
		<Button color="tab" align="center" width="200px">Settings</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button color="tab" align="start" width="200px">
	Dashboard
</Button>
<Button color="tab" align="start" width="200px">
	Settings
</Button>
<Button color="tab" align="end" width="200px">
	Dashboard
</Button>
<Button color="tab" align="end" width="200px">
	Settings
</Button>
<Button color="tab" align="center" width="200px">
	Dashboard
</Button>
<Button color="tab" align="center" width="200px">
	Settings
</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
