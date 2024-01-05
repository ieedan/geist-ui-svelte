<script lang="ts">
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
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import Checkbox from "$lib/checkbox/Checkbox.svelte";
	import Modal from "$lib/modal/Modal.svelte";
	import TextArea from "$lib/textarea/TextArea.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import toMap from "$lib/util/to-map.js";
	import Badge from "$lib/badge/Badge.svelte";
	import Code from "$lib/code/Code.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import demoImage from "$lib/assets/snippets.png";
	import demoImage2 from "$lib/assets/snippets-dark.png";
	import Image from "$lib/image/Image.svelte";
	import Center from "$lib/center/Center.svelte";
	import Display from "$lib/display/Display.svelte";
	import Tabs from "$lib/tabs/Tabs.svelte";
	import TabItem from "$lib/tabs/TabItem.svelte";

	let date = "";

	let modalRef: Modal;

	let textAreaValue = "";

	const buildings = toMap(
		[
			{
				name: "PC",
				areas: [
					{
						name: "780 Doors",
						machines: [
							{
								name: "1LHF",
							},
							{
								name: "2LHR",
							},
							{
								name: "3RHR",
							},
							{
								name: "4RHF",
							},
						],
					},
					{
						name: "920 Doors",
						machines: [
							{
								name: "3LHF",
							},
							{
								name: "2RHF",
							},
							{
								name: "1RR",
							},
						],
					},
				],
			},
			{
				name: "SouthPort",
				areas: [
					{
						name: "Metals",
						machines: [
							{
								name: "Machine 1",
							},
							{
								name: "Machine 2",
							},
							{
								name: "Machine 3",
							},
							{
								name: "SPOT",
							},
						],
					},
					{
						name: "920 Seats",
						machines: [
							{
								name: "Front Driver",
							},
							{
								name: "Front Passenger",
							},
							{
								name: "Rear 40%",
							},
							{
								name: "Rear 60%",
							},
						],
					},
				],
			},
			{
				name: "JIT",
				areas: [
					{
						name: "Headliners",
						machines: [
							{
								name: "HL Press 1",
							},
							{
								name: "HL Press 2",
							},
						],
					},
					{
						name: "780/660 Seats",
						machines: [
							{
								name: "Front Driver",
							},
							{
								name: "Front Passenger",
							},
							{
								name: "Rear 40%",
							},
							{
								name: "Rear 60%",
							},
						],
					},
				],
			},
		],
		(a) => {
			return { key: a.name, value: a };
		},
	);

	let selectedBuilding = "PC";
	let selectedArea = "780 Doors";
	let selectedMachine = "1LHF";
	$: selectedBuildingObject = buildings.get(selectedBuilding);
	$: selectedAreaObject = buildings
		.get(selectedBuilding)
		?.areas.find((a) => a.name == selectedArea);
</script>

<div class="flex flex-col place-items-center justify-center gap-5 bg-white dark:bg-gray-999 py-5">
	<Center>
		<button
			on:click={() => {
				document.documentElement.classList.toggle("dark");
			}}
			class="dark:text-white"
		>
			Toggle Mode
		</button>
		<Text type="h2">Geist-UI-Svelte</Text>
		<Divider margin="lg" />
		<div class="flex flex-wrap place-items-center justify-center gap-3">
			<Button>Default</Button>
			<Button href="https://google.com" target="_blank">https://google.com</Button>
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
	</Center>
	<Divider />
	<Tabs>
		<TabItem href="/">Page 1</TabItem>
		<TabItem href="/place2">Page 2</TabItem>
		<TabItem href="/place3">Page 3</TabItem>
	</Tabs>
	<Tabs>
		<TabItem>Overview</TabItem>
		<TabItem>About</TabItem>
		<TabItem>About Us</TabItem>
		<TabItem initialSelected>Features</TabItem>
		<TabItem>Pricing</TabItem>
		<TabItem>Docs</TabItem>
		<TabItem>Profile</TabItem>
		<TabItem>Settings</TabItem>
	</Tabs>
	<Divider />
	<Display caption="The different options for code snippets.">
		<Image src={demoImage} alt="Testing picture of geist-ui" width="250px" height="63.2px" />
	</Display>
	<Divider />
	<div>
		<Center class="w-full">
			<Image
				src={demoImage}
				alt="Testing picture of geist-ui"
				width="250px"
				height="63.2px"
			/>
		</Center>
		<Spacer h={10} />
		<Image
			src={demoImage}
			alt="Testing picture of geist-ui"
			width="500px"
			height="126.4px"
			browserURL="https://aidanbleser.com"
		/>
		<Spacer h={10} />
		<Image
			src={demoImage}
			alt="Testing picture of geist-ui"
			width="500px"
			height="126.4px"
			browserURL="http://aidanbleser.com"
			browserInvert
		/>
		<Spacer h={10} />
		<Image
			src={demoImage2}
			alt="Testing picture of geist-ui"
			width="500px"
			height="126.4px"
			browserURL="https://aidanbleser.com"
		/>
		<Spacer h={10} />
		<Image
			src={demoImage2}
			alt="Testing picture of geist-ui"
			width="500px"
			height="126.4px"
			browserURL="https://aidanbleser.com"
			browserInvert
		/>
	</div>
	<Divider />
	<div>
		<Button><CloneIcon /></Button>
		<Button color="warning"><CloneIcon /></Button>
		<CloneIcon size={16} />
		<CheckMarkIcon />
		<CheckMarkIcon size={50} />
		<CheckMarkIcon size={15} />
		<ChevronIcon />
		<ChevronIcon rotation="90deg" />
	</div>
	<Divider />
	<Snippet text="npm i geist-ui-svelte" />
	<Snippet text="npm i geist-ui-svelte" type="subtle" />
	<Snippet text="npm i geist-ui-svelte" type="success" />
	<Snippet text="npm i geist-ui-svelte" type="error" />
	<Snippet text="npm i geist-ui-svelte" type="warning" />
	<Snippet text="npm i geist-ui-svelte" type="secondary" />
	<Snippet text="npm i geist-ui-svelte" type="dark" />
	<Snippet text="npm i geist-ui-svelte" type="lite" />
	<Snippet text={["npm create vite@latest", "npm i geist-ui-svelte"]} type="lite" />
	<Divider />
	<div>
		<Code
			>{@html `const thing = (): number => {
	let thisThing = thing();
	return thisThing;
}`}
		</Code>
	</div>
	<Divider />
	<div>
		<Select placeholder="Choose one" allowNone allowXSS={true}>
			<Option value={1}><Dot style="margin-right: 6px;" type="success" />Option 1</Option>
			<Option value={2}><Dot style="margin-right: 6px;" type="warning" />Option 2</Option>
			<Divider />
			<Option value={3}><Dot style="margin-right: 6px;" type="error" />Option 3</Option>
		</Select>
		<Spacer h={10} />
		<Select placeholder="Choose one" allowNone allowXSS={false}>
			<Option value={1}><Dot style="margin-right: 6px;" type="success" />Option 1</Option>
			<Option value={2}><Dot style="margin-right: 6px;" type="warning" />Option 2</Option>
			<Divider />
			<Option value={3}><Dot style="margin-right: 6px;" type="error" />Option 3</Option>
		</Select>
		<Spacer h={10} />
		<Select allowXSS={true}>
			<Option value={0}>None</Option>
			<Option value={1} disabled
				><Dot style="margin-right: 4px;" type="success" />Option 1</Option
			>
			<Option value={2}><Dot style="margin-right: 4px;" type="warning" />Option 2</Option>
			<Option value={3}><Dot style="margin-right: 4px;" type="error" />Option 3</Option>
		</Select>
		<Spacer h={10} />
		<Select placeholder="None" disabled allowXSS={true}>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
			<Option value={3}>Option 3</Option>
		</Select>
		<Spacer h={10} />
		<Select bind:value={selectedBuilding} allowXSS={true}>
			{#each buildings as [name, building] (name)}
				<Option value={name}>{building.name}</Option>
			{/each}
		</Select>
		<Spacer h={10} />
		<Select bind:value={selectedArea} allowXSS={true}>
			{#if selectedBuildingObject}
				{#each selectedBuildingObject.areas as area (area.name)}
					<Option value={area.name}>{area.name}</Option>
				{/each}
			{/if}
		</Select>
		<Spacer h={10} />
		<Select bind:value={selectedMachine} allowXSS={true}>
			{#if selectedAreaObject}
				{#each selectedAreaObject.machines as machine (machine.name)}
					<Option value={machine.name}>{machine.name}</Option>
				{/each}
			{/if}
		</Select>
		<Spacer h={10} />
		<Select placeholder="Choose one" allowNone allowXSS={true} noIcon>
			<Option value={1}><Dot style="margin-right: 6px;" type="success" />Option 1</Option>
			<Option value={2}><Dot style="margin-right: 6px;" type="warning" />Option 2</Option>
			<Divider />
			<Option value={3}><Dot style="margin-right: 6px;" type="error" />Option 3</Option>
		</Select>
		<Spacer h={10} />
		<Select placeholder="Choose one" allowNone allowXSS={true} shadow>
			<Option value={1}><Dot style="margin-right: 6px;" type="success" />Option 1</Option>
			<Option value={2}><Dot style="margin-right: 6px;" type="warning" />Option 2</Option>
			<Divider />
			<Option value={3}><Dot style="margin-right: 6px;" type="error" />Option 3</Option>
		</Select>
	</div>
	<Divider />
	<div>
		<div class="flex flex-col gap-2 w-full place-items-center justify-center">
			<Badge type="default" size="xs">1</Badge>
			<Badge type="default" size="sm">2</Badge>
			<Badge type="default" size="md">3</Badge>
			<Badge type="default" size="lg">4</Badge>
			<Badge type="default" size="xl">5</Badge>
		</div>
		<Spacer h={10} />
		<Badge type="default">Default</Badge>
		<Badge type="success">Success</Badge>
		<Badge type="warning">Warning</Badge>
		<Badge type="error">Error</Badge>
		<Badge type="secondary">Secondary</Badge>
		<Badge type="default" ghost>Default</Badge>
		<Badge type="success" ghost>Success</Badge>
		<Badge type="warning" ghost>Warning</Badge>
		<Badge type="error" ghost>Error</Badge>
		<Badge type="secondary" ghost>Secondary</Badge>
	</div>
	<Divider />
	<div>
		<Button on:click={() => modalRef.toggleShow()}>Show Modal</Button>
		<Modal bind:this={modalRef} class="h-3/4 sm:w-[640px] sm:h-[522px]" />
	</div>
	<Divider />
	<div class="w-full px-4 flex place-items-center justify-center flex-col">
		<TextArea placeholder="console.log('Welcome');" />
		<Spacer h={10} />
		<TextArea placeholder="console.log('Welcome');" disabled />
		<Spacer h={10} />
		<TextArea
			placeholder="console.log('Welcome');"
			width="100%"
			height="50px"
			bind:value={textAreaValue}
		/>
		<Text>{textAreaValue}</Text>
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
		<Dot /><Text>Secondary</Text>
		<Dot style="margin-left: 5px; margin-right: 5px;" type="success" /><Text>Success</Text>
		<Dot style="margin-left: 5px; margin-right: 5px;" type="go" /><Text>Success</Text>
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
