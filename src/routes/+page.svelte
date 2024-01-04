<script>
	import Button from "$lib/button/Button.svelte";
	import Card from "$lib/card/Card.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Text from "$lib/text/Text.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import Toggle from "$lib/toggle/Toggle.svelte";
	import Key from "$lib/key/Key.svelte";
	import Input from "$lib/input/Input.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Loading from "$lib/loading/Loading.svelte";
	import Dot from "$lib/dot/Dot.svelte";
	import CheckMark from "$lib/icons/CheckMarkIcon.svelte";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import Checkbox from "$lib/checkbox/Checkbox.svelte";

	let date = "";
</script>

<div class="flex flex-col place-items-center justify-center gap-5 bg-white dark:bg-gray-999 py-5">
	<button
		on:click={() => {
			document.documentElement.classList.toggle("dark");
		}}
		class="dark:text-white"
	>
		Toggle Mode
	</button>
	<div class="flex place-items-center justify-center flex-col gap-3">
		<Text type="h2">Geist-UI-Svelte</Text>
		<Divider />
		<div class="flex place-items-center justify-center gap-3">
			<Button>Default</Button>
			<Button loading>Do thing</Button>
			<Button disabled color="secondary">Disabled</Button>
			<Button size="xs">xs</Button>
			<Button size="sm">sm</Button>
			<Button size="md">md</Button>
			<Button size="lg">lg</Button>
			<Button size="xl">xl</Button>
			<Button color="secondary">Secondary</Button>
			<Button color="success">Success</Button>
			<Button color="warning">Warning</Button>
			<Button color="error">Error</Button>
			<Button color="abort">Abort</Button>
		</div>
		<div class="flex flex-wrap place-items-center justify-center gap-3">
			<Button color="secondary-light">Secondary Light</Button>
			<Button color="success-light">Success Light</Button>
			<Button color="warning-light">Warning Light</Button>
			<Button color="error-light">Error Light</Button>
			<Button ghost color="secondary">Secondary</Button>
			<Button color="success" ghost>Success</Button>
			<Button color="warning" ghost>Warning</Button>
			<Button color="error" ghost>Error</Button>
			<Button color="abort" ghost>Abort</Button>
			<Button color="secondary-light" ghost>Secondary Light</Button>
			<Toggle checked={false} />
			<Toggle checked={true} color="error" />
			<Toggle checked={true} color="warning" />
			<Toggle checked={true} color="success" />
			<Toggle checked={true} color="secondary" />
			<Toggle disabled />
			<Toggle checked={true} disabled />
		</div>
	</div>
	<Divider />
	<div>
		<Checkbox><Text>Default</Text></Checkbox>
		<Checkbox color="success"><Text>Success</Text></Checkbox>
		<Checkbox color="warning"><Text>Warning</Text></Checkbox>
		<Checkbox color="error"><Text>Error</Text></Checkbox>
		<Checkbox color="error" disabled><Text>Disabled</Text></Checkbox>
		<Checkbox color="error" checked={true} disabled><Text>Disabled</Text></Checkbox>
	</div>
	<Divider />
	<div>
		<CheckMark />
		<CheckMark size={50} />
		<CheckMark size={15} />
		<CheckMark color="success" />
		<CheckMark color="warning" />
		<CheckMark color="error" />
		<CheckMark color="secondary" />
		<ChevronIcon />
		<ChevronIcon rotation="90deg" />
		<ChevronIcon color="warning" />
	</div>
	<Divider />
	<div>
		<Input placeholder="Some text" />
		<Spacer h={10} />
		<Input placeholder="Disabled" disabled />
		<Spacer h={10} />
		<Input placeholder="Readonly" value="readOnly" readonly />
		<Spacer h={10} />
		<Input placeholder="ieedan" containerLabel="username" />
		<Spacer h={10} />
		<Input placeholder="https://github" containerLabel=".com" labelPlacement="end" />
		<Spacer h={10} />
		<Input placeholder="Your secret password" type="password" />
		<Spacer h={10} />
		<Input placeholder="Days to completion" type="number" />
		<Spacer h={10} />
		<Input type="date" bind:value={date} />
		<Text>{date}</Text>
		<Spacer h={10} />
		<Input placeholder="Days to completion" type="number" id="number-input">
			<Text type="small" color="abort">Days to complete</Text>
		</Input>
	</div>
	<Divider />
	<div>
		<Dot style="margin-left: 5px; margin-right: 5px;" /><Text>Secondary</Text>
		<Dot style="margin-left: 5px; margin-right: 5px;" type="success" /><Text>Success</Text>
		<Dot style="margin-left: 5px; margin-right: 5px;" type="warning" /><Text>Warning</Text>
		<Dot style="margin-left: 5px; margin-right: 5px;" type="error" /><Text>Error</Text>
	</div>
	<Divider />
	<div>
		<Loading />
		<Spacer h={30} />
		<Loading type="success" />
		<Spacer h={30} />
		<Loading type="warning" />
		<Spacer h={30} />
		<Loading type="error" />
		<Spacer h={30} />
		<Loading type="secondary" />
	</div>
	<Divider />
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
