<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import Dot from "$lib/dot/Dot.svelte";
	import Note from "$lib/note/Note.svelte";
	import Link from "$lib/link/Link.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import toMap from "$lib/util/to-map.js";
	import ChevronUpDownIcon from "$lib/icons/ChevronUpDownIcon.svelte";
	import Button from "$lib/button/Button.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	const countries = toMap(
		[
			{
				name: "United States",
				states: [
					{
						name: "Texas",
						cities: [
							{
								name: "San Antonio",
							},
							{
								name: "Houston",
							},
							{
								name: "Dallas",
							},
							{
								name: "Corpus Christi",
							},
						],
					},
					{
						name: "California",
						cities: [
							{
								name: "San Francisco",
							},
							{
								name: "Los Angeles",
							},
							{
								name: "San Diego",
							},
						],
					},
				],
			},
			{
				name: "Canada",
				states: [
					{
						name: "Alberta",
						cities: [
							{
								name: "Fort Saskatchewan",
							},
							{
								name: "Three Hills",
							},
						],
					},
					{
						name: "Ontario",
						cities: [
							{
								name: "Toronto",
							},
							{
								name: "Ottawa",
							},
							{
								name: "Thunder Bay",
							},
							{
								name: "London",
							},
						],
					},
				],
			},
			{
				name: "Brazil",
				states: [
					{
						name: "Bahia",
						cities: [
							{
								name: "Salvador",
							},
							{
								name: "Prado",
							},
						],
					},
					{
						name: "Alagoas",
						cities: [
							{
								name: "Maceio",
							},
							{
								name: "Piranhas",
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

	const alphabet: string[] = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	let selectedCountry = "United States";
	let selectedState = "California";
	let selectedCity = "San Diego";
	$: selectedCountryObject = countries.get(selectedCountry);
	$: selectedStateObject = countries
		.get(selectedCountry)
		?.states.find((a) => a.name == selectedState);

	const alphabet2: string[] = [
		"AA",
		"BB",
		"CC",
		"DD",
		"EE",
		"FF",
		"GG",
		"HH",
		"II",
		"JJ",
		"KK",
		"LL",
		"MM",
		"NN",
		"OO",
		"PP",
		"QQ",
		"RR",
		"SS",
		"TT",
		"UU",
		"VV",
		"WW",
		"XX",
		"YY",
		"ZZ",
	];

	let listOptions = alphabet;
	let toggledOptions = false;

	let arrValue = ["A", "B"];

	let value = "A";

	const toggleOptions = () => {
		if (toggledOptions) {
			listOptions = alphabet;
		} else {
			listOptions = alphabet2;
		}

		toggledOptions = !toggledOptions;
	};
</script>

<Text type="h3">Select</Text>
<Spacer h={10} />
<Text>A drop down list component.</Text>
<Spacer h={20} />
<Snippet
	width="500px"
	type="transparent"
	text={`import { Select, Option } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Allow None</Text>
<Spacer h={5} />
<Text>
	By default the the select component will automatically select the first option if the value is
	left undefined. To opt out of this behavior set <code>`allowNone`</code>.
</Text>
<Spacer h={10} />
<Playground
	code={`<Select placeholder="Select one" allowNone>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select placeholder="Select one" allowNone>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Select disabled>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>
<Select readonly>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select disabled>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
	<Select readonly>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled Option</Text>
<Spacer h={10} />
<Playground
	code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2} disabled>Option 2</Option>
</Select>`}>
	<Select>
		<Option value={1}>Option 1</Option>
		<Option value={2} disabled>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={10} />
<Playground
	code={`<Select width="100%">
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select width="100%">
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Without Icon</Text>
<Spacer h={10} />
<Playground
	code={`<Select width="100%">
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select noIcon>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Custom Icon</Text>
<Spacer h={5} />
<Text>
	Add a custom icon by adding your icon to the <code>`icon`</code> slot. You can also disable the
	icon rotation by setting <code>`iconRotation`</code> to false.
</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	edits={[
		{ number: 2, type: "add" },
		{ number: 6, type: "add" },
	]}
	code={`<Select>
	<ChevronUpDownIcon slot="icon" size={14}/>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>
<Select iconRotation={false}>
	<ChevronUpDownIcon slot="icon" size={14}/>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`}>
	<Select>
		<ChevronUpDownIcon slot="icon" size={14} />
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
	<Select iconRotation={false}>
		<ChevronUpDownIcon slot="icon" size={14} />
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">HTML Content</Text>
<Spacer h={5} />
<Text>
	You can display the HTML content from your options such as icons. To enable this specify
	<code>`allowXSS`</code>.
</Text>
<Spacer h={20} />
<Note color="warning">
	When enabling allowXSS make sure to sanitize user input to prevent
	<Link
		color
		underline
		target="_blank"
		to="https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"
		>XSS attacks
	</Link>.
</Note>
<Spacer h={20} />
<Playground
	class="gap-2"
	code={`<!-- Without allowXSS -->
<Select>
	<Option value={1}>
		<Dot type="success" size={10}/>
		<Spacer inline w={5}/>
		Option 1
	</Option>
	<Option value={2}>
		<Dot type="warning" size={10}/>
		<Spacer inline w={5}/>
		Option 2
	</Option>
</Select>
<!-- With allowXSS -->
<Select allowXSS>
	<Option value={1}>
		<Dot type="success" size={10}/>
		<Spacer inline w={5}/>
		Option 1
	</Option>
	<Option value={2}>
		<Dot type="warning" size={10}/>
		<Spacer inline w={5}/>
		Option 2
	</Option>
</Select>`}>
	<Select>
		<Option value={1}>
			<Dot type="success" size={10} />
			<Spacer inline w={5} />
			Option 1
		</Option>
		<Option value={2}>
			<Dot type="warning" size={10} />
			<Spacer inline w={5} />
			Option 2
		</Option>
	</Select>
	<Select allowXSS>
		<Option value={1}>
			<Dot type="success" size={10} />
			<Spacer inline w={5} />
			Option 1
		</Option>
		<Option value={2}>
			<Dot type="warning" size={10} />
			<Spacer inline w={5} />
			Option 2
		</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Dividers / Headers</Text>
<Spacer h={5} />
<Text>You can put any valid HTML inside of the select component.</Text>
<Spacer h={10} />
<Playground
	code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
	<Text class="px-2" type="small" color="abort">Group 2</Text>
	<Divider/>
	<Option value={3}>Option 3</Option>
</Select>`}>
	<Select>
		<Option value={1}>Option 1</Option>
		<Option value={2}>Option 2</Option>
		<Text class="px-2" type="small" color="abort">Group 2</Text>
		<Divider />
		<Option value={3}>Option 3</Option>
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Multiple Selects</Text>
<Spacer h={5} />
<Text>
	Using multiple selects that are dependent on each other is much easier thanks to the mutation
	observer on the select component. This updates the value to make sure it is contained in the new
	options when the options change.
</Text>
<Spacer h={20} />
<Note color="warning">
	Make sure to key your each blocks otherwise the mutation observer may not catch the change.
</Note>
<Spacer h={20} />
<Playground
	class="gap-2"
	code={`<Select bind:value={selectedCountry}>
	{#each countries as [name, country] (name)}
		<Option value={name}>{country.name}</Option>
	{/each}
</Select>
<Select bind:value={selectedState}>
	{#if selectedCountryObject}
		{#each selectedCountryObject.states as state (state.name)}
			<Option value={state.name}>{state.name}</Option>
		{/each}
	{/if}
</Select>
<Select bind:value={selectedCity}>
	{#if selectedStateObject}
		{#each selectedStateObject.cities as city (city.name)}
			<Option value={city.name}>{city.name}</Option>
		{/each}
	{/if}
</Select>`}>
	<Select bind:value={selectedCountry}>
		{#each countries as [name, country] (name)}
			<Option value={name}>{country.name}</Option>
		{/each}
	</Select>
	<Select bind:value={selectedState}>
		{#if selectedCountryObject}
			{#each selectedCountryObject.states as state (state.name)}
				<Option value={state.name}>{state.name}</Option>
			{/each}
		{/if}
	</Select>
	<Select bind:value={selectedCity}>
		{#if selectedStateObject}
			{#each selectedStateObject.cities as city (city.name)}
				<Option value={city.name}>{city.name}</Option>
			{/each}
		{/if}
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Scrollable</Text>
<Spacer h={5} />
<Text>
	Larger lists will scroll automatically by default at <code>`240px`</code> you can adjust this by
	setting the <code>`maxHeight`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	edits={[{ number: 6, type: "add" }]}
	code={`<Select>
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Select maxHeight={150}>
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>`}>
	<Select>
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Select maxHeight={150}>
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Multi-Select</Text>
<Spacer h={5} />
<Text>
	Allow multiple selections using the <code>`multiSelect`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	edits={[
		{ number: 2, type: "add" },
		{ number: 9, type: "add" },
	]}
	code={`<Select 
	multiSelect 
	placeholder="Select a letter">
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Select 
	multiSelect 
	value={["A", "C", "D"]} 
	placeholder="Select a letter">
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>`}>
	<Select multiSelect placeholder="Select a letter">
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Select multiSelect value={["A", "C", "D"]} placeholder="Select a letter">
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Selected Overflow</Text>
<Spacer h={5} />
<Text>
	Many UI libraries choose to overflow selections vertically thats not always the best for layout
	shift and also for style. Instead the selections will overflow horizontally and you can scroll
	through them using <code>`shift + scroll`</code> or other scroll methods.
</Text>
<Spacer h={10} />
<Playground
	edits={[
		{ number: 2, type: "add" },
		{ number: 9, type: "add" },
	]}
	code={`<Select 
multiSelect 
value={["A", "B", "C", "D", "E", "F", "G"]} 
placeholder="Select a letter">
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>`}>
	<Select multiSelect value={["A", "B", "C", "D", "E", "F", "G"]} placeholder="Select a letter">
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled Multi-Select</Text>
<Spacer h={5} />
<Text>
	Believe it or not, not everyone thinks of this but in our select the clear option is not enabled
	when the select is disabled. Scrolling is still enabled though.
</Text>
<Spacer h={10} />
<Playground
	edits={[
		{ number: 2, type: "add" },
		{ number: 9, type: "add" },
	]}
	code={`<Select
multiSelect
disabled
value={["A", "B", "C", "D", "E", "F", "G"]}
placeholder="Select a letter"
>
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>`}>
	<Select
		multiSelect
		disabled
		value={["A", "B", "C", "D", "E", "F", "G"]}
		placeholder="Select a letter">
		{#each alphabet as letter}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
</Playground>
<Spacer h={30} />
<Text type="h4">Change Options</Text>
<Spacer h={5} />
<Text>When you change the options the select will react to the change.</Text>
<Spacer h={10} />
<Playground class="gap-2" code={`<Select placeholder="Select a letter">
	{#each listOptions as letter (letter)}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Select
	multiSelect
	value={["A", "B", "C", "D", "E", "F", "G"]}
	placeholder="Select a letter"
>
	{#each listOptions as letter (letter)}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Button on:click={toggleOptions}>
	Change Options
</Button>`}>
	<Select placeholder="Select a letter">
		{#each listOptions as letter (letter)}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Select
		multiSelect
		value={["A", "B", "C", "D", "E", "F", "G"]}
		placeholder="Select a letter">
		{#each listOptions as letter (letter)}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Button on:click={toggleOptions}>Change Options</Button>
</Playground>
<Spacer h={30} />
<Text type="h4">Change Value</Text>
<Spacer h={5} />
<Text>When you change the value the select will react to the change.</Text>
<Spacer h={10} />
<Playground class="gap-2" code={`<Select placeholder="Select a letter" bind:value={value}>
	{#each alphabet as letter (letter)}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Select
	multiSelect
	bind:value={arrValue}
	placeholder="Select a letter"
>
	{#each alphabet as letter (letter)}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Button on:click={() => {
	arrValue = [...arrValue, "H"];
	value = "H";
}}>
	Select H
</Button>`}>
	<Select placeholder="Select a letter" bind:value>
		{#each alphabet as letter (letter)}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Select multiSelect bind:value={arrValue} placeholder="Select a letter">
		{#each alphabet as letter (letter)}
			<Option value={letter}>{letter}</Option>
		{/each}
	</Select>
	<Button
		on:click={() => {
			arrValue = [...arrValue, "H"];
			value = "H";
		}}>
		Select H
	</Button>
</Playground>
