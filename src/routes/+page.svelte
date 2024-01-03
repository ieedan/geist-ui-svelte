<script>
	import Button from "$lib/button/Button.svelte";
	import Card from "$lib/card/Card.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Text from "$lib/text/Text.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Toggle from "$lib/toggle/Toggle.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Key from "$lib/key/Key.svelte";
</script>

<div class="flex flex-col place-items-center justify-center gap-5 bg-white dark:bg-gray-999 py-5">
	<div class="flex place-items-center justify-center flex-col gap-3">
		<Text type="h2">Geist-UI-Svelte</Text>
		<Divider/>
		<div class="flex place-items-center justify-center gap-3">
			<Button>Default</Button>
			<Button color="secondary">Start Deploying</Button>
			<Button ghost color="secondary">See docs</Button>
			<Button loading>Do thing</Button>
			<Button disabled color="secondary">Disabled</Button>
			<Button size="xs">xs</Button>
			<Button size="sm">sm</Button>
			<Button size="md">md</Button>
			<Button size="lg">lg</Button>
			<Button size="xl">xl</Button>
		</div>
		<div class="flex flex-wrap place-items-center justify-center gap-3">
			<Button color="success">Success</Button>
			<Button color="warning">Warning</Button>
			<Button color="error">Error</Button>
			<Button color="abort">Abort</Button>
			<Button color="secondary-light">Secondary Light</Button>
			<Button color="success" ghost>Success</Button>
			<Button color="warning" ghost>Warning</Button>
			<Button color="error" ghost>Error</Button>
			<Button color="abort" ghost>Abort</Button>
			<Button color="secondary-light" ghost>Secondary Light</Button>
			<Toggle checked={false}/>
			<Toggle checked={true} color="error" />
			<Toggle checked={true} color="warning" />
			<Toggle checked={true} color="success" />
			<Toggle checked={true} color="secondary" />
			<Toggle disabled />
			<Toggle checked={true} disabled />
		</div>
	</div>
	<Divider />
	<button
		on:click={() => {
			document.documentElement.classList.toggle("dark");
		}}
		class="dark:text-white"
	>
		Toggle Mode
	</button>
	<div>
		<Text type="h1">heading</Text>
		<Text type="h2">heading</Text>
		<Text type="h3">heading</Text>
		<Text type="h4">heading</Text>
		<Text type="h5">heading</Text>
		<Text type="h6">heading</Text>
		<Text type="p">paragraph</Text>
		<Text type="p" blockquote>paragraph blockquote</Text>
		<Text type="span">span</Text>
		<Text type="small">small</Text>
		<Text type="small" color="secondary">small secondary</Text>
		<Text type="small" color="success">small success</Text>
		<Text type="small" color="warning">small warning</Text>
		<Text type="small" color="error">small error</Text>
		<Text type="small" color="abort">small abort</Text>
	</div>
	<Divider />
	<FieldSet>
		<Text type="h5">Heading</Text>
		<Text type="p">Some content here whatever you want really</Text>
		<div slot="footer" class="w-full flex justify-between place-items-center">
			<Text type="small">There was an error with the request</Text>
			<Button color="error" size="xs" ghost>Delete</Button>
		</div>
	</FieldSet>
	<Divider />
	<Card>
		<Text type="h5">Geist UI Svelte</Text>
		<Text>Helping you solve your users problems with powerful UI</Text>
	</Card>
	<Card>
		<Text type="h5">Geist UI Svelte</Text>
		<Text>Helping you solve your users problems with powerful UI</Text>
		<Divider margin="sm" />
		<div class="flex justify-between place-items-center">
			<Text type="small">There was an error with the request</Text>
			<Button color="success" size="xs">Continue</Button>
		</div>
	</Card>
	<Card hoverable>
		<Text type="h5">Geist UI Svelte</Text>
		<Text>Helping you solve your users problems with powerful UI</Text>
	</Card>
	<Card shadow>
		<Text type="h5">Geist UI Svelte</Text>
		<Text>Helping you solve your users problems with powerful UI</Text>
	</Card>
	<Divider />
	<div class="flex flex-col gap-1">
		<div>
			<Key size="xl">Ctrl</Key>
			<Text color="secondary">+</Text>
			<Key size="xl">K</Key>
		</div>
		<div>
			<Key size="lg">Ctrl</Key>
			<Text color="secondary">+</Text>
			<Key size="lg">K</Key>
		</div>
		<div>
			<Key>Ctrl</Key>
			<Text color="secondary">+</Text>
			<Key>K</Key>
		</div>
		<div>
			<Key size="sm">Ctrl</Key>
			<Text color="secondary">+</Text>
			<Key size="sm">K</Key>
		</div>
		<div>
			<Key size="xs">Ctrl</Key>
			<Text color="secondary">+</Text>
			<Key size="xs">K</Key>
		</div>
	</div>
	<Divider />
</div>
