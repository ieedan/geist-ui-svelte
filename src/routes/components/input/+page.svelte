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
	import Playground from "$lib/docs-components/playground/playground.svelte";

	let debounced = true;
</script>

<Text type="h3">Input</Text>
<Spacer h={10} />
<Text>Captures user input.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Input } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<Input placeholder="Some input"/>`}>
	<Input placeholder="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled / Readonly</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Input disabled placeholder="Some input"/>
<Input readonly placeholder="Some input"/>`}>
	<Input disabled placeholder="Some input" />
	<Input readonly value="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">Width</Text>
<Spacer h={5} />
<Text>
	Use the <code>`width`</code> attribute to adjust the width of the input.
</Text>
<Spacer h={10} />
<Playground code={`<Input width="100%" placeholder="Some input"/>`}>
	<Input width="100%" placeholder="Some input" />
</Playground>
<Spacer h={30} />
<Text type="h4">Size</Text>
<Spacer h={5} />
<Text>
	Use the <code>`size`</code> attribute to adjust the size of the input.
</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Input placeholder="Some input" size="sm"/>
<Input placeholder="Some input" size="base"/>
<Input placeholder="Some input" size="lg"/>
<Input placeholder="Some input" size="xl"/>`}>
	<Input placeholder="sm" size="sm" />
	<Input placeholder="base" size="base" />
	<Input placeholder="lg" size="lg" />
	<Input placeholder="xl" size="xl" />
</Playground>
<Spacer h={30} />
<Text type="h4">Inline Label</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Input label="username" placeholder="username"/>
<Input label=".com" 
	labelPlacement="end" 
	placeholder="https://github"/>`}>
	<Input label="username" placeholder="username" />
	<Input label=".com" labelPlacement="end" placeholder="https://github" />
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
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
	color="error" />`}>
	<Input placeholder="username" value="geist-ui-svelte" />
	<Input placeholder="username" value="geist-ui-svelte" color="secondary" />
	<Input placeholder="username" value="geist-ui-svelte" color="success" />
	<Input placeholder="username" value="geist-ui-svelte" color="warning" />
	<Input placeholder="username" value="geist-ui-svelte" color="error" />
</Playground>
<Spacer h={30} />
<Text type="h4">Input Types</Text>
<Spacer h={20} />
<Note color="warning">
	In some browsers (thanks Safari) failing to provide a default value will cause the date input to
	render incorrectly. Make sure you supply a default value to prevent this from happening.
</Note>
<Spacer h={20} />
<Playground
	code={`<Input type="password" 
	placeholder="Your password" 
	value="987654321" />
<Input type="date" value="2024-12-25" />
<Input type="number" value={10} />`}>
	<Input type="password" placeholder="Your password" value="987654321" />
	<Input type="date" value="2024-12-25" />
	<Input type="number" value={10} />
</Playground>
<Spacer h={30} />
<Text type="h4">With label</Text>
<Spacer h={5} />
<Text>Add a label to the input using the <code>`{"<slot/>"}`</code></Text>
<Spacer h={10} />
<Playground
	code={`<Input type="email" placeholder="Email" width="250px">
	Email
</Input>
<Input type="password" placeholder="Password" width="250px">
	Password
</Input>`}
	class="gap-2">
	<Input type="email" placeholder="Email" width="250px">Email</Input>
	<Input type="password" placeholder="Password" width="250px">Password</Input>
</Playground>
<Spacer h={30} />
<Text type="h4">No Border</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 5, type: "add" }]}
	code={`<Input
type="text"
width="250px"
placeholder="Type your stuff in here"
noBorder
/>`}>
	<Input type="text" width="250px" placeholder="Type your stuff in here" noBorder />
</Playground>
<Spacer h={30} />
<Text type="h4">With icon</Text>
<Spacer h={10} />
<Playground
	code={`<Input type="text" placeholder="Search" width="250px">
	<SearchIcon slot="icon" size={16}/>
</Input>
<Input type="text" placeholder="Search" width="250px">
	<SearchIcon slot="iconEnd" size={16}/>
</Input>`}>
	<Input type="text" placeholder="Search" width="250px">
		<SearchIcon slot="icon" size={16} />
	</Input>
	<Input type="text" placeholder="Search" width="250px">
		<SearchIcon slot="iconEnd" size={16} />
	</Input>
</Playground>
<Spacer h={30} />
<Text type="h4">Clearable</Text>
<Spacer h={5} />
<Text>Add a clear button to the input.</Text>
<Spacer h={10} />
<Playground
	code={`<Input type="text" 
	clearable width="250px"
	placeholder="geist-ui-svelte" 
	value="Some value"/>`}>
	<Input type="text" clearable width="250px" placeholder="geist-ui-svelte" value="Some value" />
</Playground>
<Spacer h={30} />
<Text type="h4">Debounce</Text>
<Spacer h={5} />
<Text>
	Sometimes when working with data from a server you want to wait for the user to finish typing
	before making a request. The built in <code>`debounce`</code> property and
	<code>`on:debounce`</code> event make this easy. Try it out below.
</Text>
<Spacer h={10} />
<Playground
	code={`<Input
	placeholder="Some input"
	debounce={1000}
	on:input={() => (debounced = false)}
	on:debounce={() => (debounced = true)} />
{#if debounced}
	Debounced
{/if}`}>
	<Input
		placeholder="Some input"
		on:input={() => (debounced = false)}
		debounce={1000}
		on:debounce={() => (debounced = true)} />
	{#if debounced}
		Debounced
	{/if}
</Playground>
<Spacer h={30} />
<Text type="h4">Kitchen Sink</Text>
<Spacer h={5} />
<Text>
	While not recommended you can put pretty every gadget on an input here is what that looks like.
</Text>
<Spacer h={10} />
<Playground
	code={`<Input 
	label="everything"
	placeholder="Everything"
	clearable>
	<SearchIcon slot="icon" size={16}/>
	<SearchIcon slot="iconEnd" size={16}/>
</Input>`}>
	<Input label="everything" clearable placeholder="Everything">
		<SearchIcon slot="icon" size={16} />
		<SearchIcon slot="iconEnd" size={16} />
	</Input>
</Playground>
