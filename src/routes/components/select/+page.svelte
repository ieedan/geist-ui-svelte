<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
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
</script>

<Text type="h3">Select</Text>
<Spacer h={10} />
<Text>A drop down list component.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { Select, Option } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Allow None</Text>
<Spacer h={5} />
<Text>
	By default the the select component will automatically select the first option if the value is
	left undefined. To opt out of this behavior set <code>`allowNone`</code>.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Select placeholder="Select one" allowNone>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select placeholder="Select one" allowNone>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-1">
		<Select disabled>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select disabled>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled Option</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-1">
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2} disabled>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2} disabled>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Select width="100%">
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select width="100%">
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Without Icon</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Select noIcon>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select width="100%">
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Icon</Text>
<Spacer h={5} />
<Text>
	Add a custom icon by adding your icon to the <code>`icon`</code> slot. You can also disable the
	icon rotation by setting <code>`iconRotation`</code> to false.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
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
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Select>`} />
		</Details>
	</div>
</FieldSet>
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
<FieldSet>
	<div class="flex flex-col gap-2">
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
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Dividers / Headers</Text>
<Spacer h={5} />
<Text>You can put any valid HTML inside of the select component.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Select>
			<Option value={1}>Option 1</Option>
			<Option value={2}>Option 2</Option>
			<Text class="px-2" type="small" color="abort">Group 2</Text>
			<Divider />
			<Option value={3}>Option 3</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Select>
	<Option value={1}>Option 1</Option>
	<Option value={2}>Option 2</Option>
	<Text class="px-2" type="small" color="abort">Group 2</Text>
	<Divider/>
	<Option value={3}>Option 3</Option>
</Select>`} />
		</Details>
	</div>
</FieldSet>
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
<FieldSet>
	<div class="flex flex-col gap-2">
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
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="ts"
				code={`const countries = toMap(
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
		],
		(a) => {
			return { key: a.name, value: a };
		},
	);

let selectedCountry = "United States";
let selectedState = "California";
let selectedCity = "San Diego";
$: selectedCountryObject = countries.get(selectedCountry);
$: selectedStateObject = countries
	.get(selectedCountry)
	?.states.find((a) => a.name == selectedState);`} />
			<Code
				lang="svelte"
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
</Select>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Scrollable</Text>
<Spacer h={5} />
<Text>
	Larger lists will scroll automatically by default at <code>`240px`</code> you can adjust this by
	setting the <code>`maxHeight`</code> attribute.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
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
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[
					{ number: 6, type: "add" },
				]}
				code={`<Select>
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>
<Select maxHeight={150}>
	{#each alphabet as letter}
		<Option value={letter}>{letter}</Option>
	{/each}
</Select>`} />
		</Details>
	</div>
</FieldSet>
