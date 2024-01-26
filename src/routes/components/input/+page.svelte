<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Input from "$lib/input/Input.svelte";
	import Note from "$lib/note/Note.svelte";
	import SearchIcon from "$lib/icons/SearchIcon.svelte";

	let debounced = true;
</script>

<Text type="h3">Input</Text>
<Spacer h={10} />
<Text>Captures user input.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Input } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Input placeholder="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Input placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-1">
		<Input disabled placeholder="Some input" />
		<Input readonly value="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input disabled placeholder="Some input"/>
<Input readonly placeholder="Some input"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={5} />
<Text>
	Use the <code>`width`</code> attribute to adjust the width of the input.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input width="100%" placeholder="Some input" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Input width="100%" placeholder="Some input"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Size</Text>
<Spacer h={5} />
<Text>
	Use the <code>`size`</code> attribute to adjust the size of the input.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input placeholder="sm" size="sm" />
		<Input placeholder="base" size="base" />
		<Input placeholder="lg" size="lg" />
		<Input placeholder="xl" size="xl" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input placeholder="Some input" size="sm"/>
<Input placeholder="Some input" size="base"/>
<Input placeholder="Some input" size="lg"/>
<Input placeholder="Some input" size="xl"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Inline Label</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input label="username" placeholder="username" />
		<Input label=".com" labelPlacement="end" placeholder="https://github" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input label="username" placeholder="username"/>
<Input label=".com" 
labelPlacement="end" 
placeholder="https://github"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input placeholder="username" value="geist-ui-svelte" />
		<Input placeholder="username" value="geist-ui-svelte" color="secondary" />
		<Input placeholder="username" value="geist-ui-svelte" color="success" />
		<Input placeholder="username" value="geist-ui-svelte" color="warning" />
		<Input placeholder="username" value="geist-ui-svelte" color="error" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[
					{ number: 7, type: "add" },
					{ number: 11, type: "add" },
					{ number: 15, type: "add" },
					{ number: 19, type: "add" },
				]}
				code={`<Input 
  placeholder="username" 
  value="geist-ui-svelte" />
<Input 
  placeholder="username" 
  value="geist-ui-svelte" 
  color="secondary" />
<Input 
  placeholder="username" 
  value="geist-ui-svelte" 
  color="success" />
<Input 
  placeholder="username" 
  value="geist-ui-svelte" 
  color="warning" />
<Input 
  placeholder="username" 
  value="geist-ui-svelte" 
  color="error" />`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Input Types</Text>
<Spacer h={20} />
<Note color="warning">
	In some browsers (thanks Safari) failing to provide a default value will cause the date input to
	render incorrectly. Make sure you supply a default value to prevent this from happening.
</Note>
<Spacer h={20} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input type="password" placeholder="Your password" value="987654321" />
		<Input type="date" value="2024-12-25" />
		<Input type="number" value={10} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input type="password" 
	placeholder="Your password" 
	value="987654321" />
<Input type="date" value="2024-12-25" />
<Input type="number" value={10} />`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With label</Text>
<Spacer h={5} />
<Text>Add a label to the input using the <code>`{"<slot/>"}`</code></Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input type="email" placeholder="Email" width="250px">
			Email
		</Input>
		<Input type="password" placeholder="Password" width="250px">
			Password
		</Input>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input type="email" placeholder="Email" width="250px">
	Email
</Input>
<Input type="password" placeholder="Password" width="250px">
	Password
</Input>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Border</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input type="text" width="250px" placeholder="Type your stuff in here" noBorder />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{ number: 5, type: "add" }]}
				code={`<Input
	type="text"
	width="250px"
	placeholder="Type your stuff in here"
	noBorder
/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With icon</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input type="text" placeholder="Search" width="250px">
			<SearchIcon slot="icon" size={16} />
		</Input>
		<Input type="text" placeholder="Search" width="250px">
			<SearchIcon slot="iconEnd" size={16} />
		</Input>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input type="text" placeholder="Search" width="250px">
	<SearchIcon slot="icon" size={16}/>
</Input>
<Input type="text" placeholder="Search" width="250px">
	<SearchIcon slot="iconEnd" size={16}/>
</Input>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Clearable</Text>
<Spacer h={5} />
<Text>Add a clear button to the input.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2">
		<Input
			type="text"
			clearable
			width="250px"
			placeholder="geist-ui-svelte"
			value="Some value"
		/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input type="text" 
	clearable width="250px"
	placeholder="geist-ui-svelte" 
	value="Some value"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Debounce</Text>
<Spacer h={5} />
<Text>
	Sometimes when working with data from a server you want to wait for the user to finish typing
	before making a request. The built in <code>`debounce`</code> property and
	<code>`on:debounce`</code> event make this easy. Try it out below.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Input
			placeholder="Some input"
			on:input={() => (debounced = false)}
			debounce={1000}
			on:debounce={() => (debounced = true)}
		/>
		{#if debounced}
			Debounced
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input
	placeholder="Some input"
	debounce={1000}
	on:input={() => (debounced = false)}
	on:debounce={() => (debounced = true)} />
{#if debounced}
	Debounced
{/if}`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">EVERYTHING</Text>
<Spacer h={5} />
<Text>
	While not recommended you can put pretty every gadget on an input here is what that looks like.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Input label="everything" clearable placeholder="Everything">
			<SearchIcon slot="icon" size={16} />
			<SearchIcon slot="iconEnd" size={16} />
		</Input>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Input 
	label="everything"
	placeholder="Everything"
	clearable>
	<SearchIcon slot="icon" size={16}/>
	<SearchIcon slot="iconEnd" size={16}/>
</Input>`}
			/>
		</Details>
	</div>
</FieldSet>
