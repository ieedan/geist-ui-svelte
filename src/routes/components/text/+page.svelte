<script lang="ts">
	import Card from "$lib/card/Card.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Note from "$lib/note/Note.svelte";
	import LightSwitch from "$lib/lightswitch/LightSwitch.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Text</Text>
<Spacer h={10} />
<Text>Displays non-interactive text.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Text } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Type</Text>
<Spacer h={5} />
<Text>
	Thanks to <code>{`<svelte:element>`}</code> the text component renders with different html tags.
</Text>
<Spacer h={10} />
<Playground
	code={`<Text type="h1">Text</Text>
<Text type="h2">Text</Text>
<Text type="h3">Text</Text>
<Text type="h4">Text</Text>
<Text type="h5">Text</Text>
<Text type="h6">Text</Text>
<Text>Text</Text>
<Text type="span">Text</Text>
<Text type="small">Text</Text>`}
>
	<Text type="h1">Text</Text>
	<Text type="h2">Text</Text>
	<Text type="h3">Text</Text>
	<Text type="h4">Text</Text>
	<Text type="h5">Text</Text>
	<Text type="h6">Text</Text>
	<Text>Text</Text>
	<Text type="span">Text</Text>
	<Text type="small">Text</Text>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={5} />
<Text>Text elements can come in a few different colors.</Text>
<Spacer h={10} />
<Playground
	code={`<Text color="inherit">Text</Text>
<Text color="secondary">Text</Text>
<Text color="success">Text</Text>
<Text color="error">Text</Text>
<Text color="warning">Text</Text>
<Text color="abort">Text</Text>`}
>
	<Text color="inherit">Text</Text>
	<Text color="secondary">Text</Text>
	<Text color="success">Text</Text>
	<Text color="error">Text</Text>
	<Text color="warning">Text</Text>
	<Text color="abort">Text</Text>
</Playground>
<Spacer h={30} />
<Text type="h4">Default Size</Text>
<Spacer h={5} />
<Text>
	The text component has a default font size of inherit for <code>`p`</code> and
	<code>`span`</code> types. It also has a default font weight of inherit.
</Text>
<Spacer h={10} />
<Playground
	code={`<Text type="h5" b>geist-<Text>ui</Text>-svelte</Text>
<Text type="h5" b>geist-<Text type="span">ui</Text>-svelte</Text>`}
>
	<Text type="h5" b>geist-<Text>ui</Text>-svelte</Text>
	<Text type="h5" b>geist-<Text type="span">ui</Text>-svelte</Text>
</Playground>
<Spacer h={30} />
<Text type="h4">Default Color</Text>
<Spacer h={5} />
<Text>
	The Text component has a text color of <code>`inherit`</code> this means it will take its
	container's
	<code>`text-color`</code> value. Because of this it is best practice to include the following classes
	somewhere higher in the DOM tree.
</Text>
<Spacer h={10} />
<Snippet
	width="500px"
	type="transparent"
	text={'class="text-gray-999 dark:text-gray-0"'}
	symbol=""
/>
<Spacer h={10} />
<Text>
	This enables setting the text color from the container which can be useful when dealing with a
	container with a solid color background that doesn't change between light and dark mode. If
	you'd like to keep your text white on black and black on white you can use the color
	<code>`dark`</code>.
</Text>
<Spacer h={20} />
<Note color="success">
	Notice how when you set the text color to <code>`dark`</code> it breaks the layout in light mode.
</Note>
<Spacer h={20} />
<Text>Put your sunglasses on for this part 🕶️.</Text>
<Spacer h={10} />
<Playground
	code={`<Card color="success">
	<Text>Success</Text>
</Card>
<Card color="success">
	<Text color="dark">Success</Text>
</Card>`}
>
	<div class="flex place-items-center gap-2">
		<Card color="success">
			<Text>Success</Text>
		</Card>
		<Card color="success">
			<Text color="dark">Success</Text>
		</Card>
		<LightSwitch />
	</div>
</Playground>
<Spacer h={30} />
<Text type="h4">Blockquote</Text>
<Spacer h={10} />
<Playground code={`<Text blockquote>The best text is less text</Text>`}>
	<Text blockquote>The best text is less text</Text>
</Playground>
<Spacer h={30} />
<Text type="h4">Additional Attributes</Text>
<Spacer h={5} />
<Text>
	You can use <code>`b`</code> for bold, <code>`i`</code> for italics, <code>`del`</code> for line
	through, and <code>`serif`</code> for your serif font style.
</Text>
<Spacer h={10} />
<Playground
	code={`<Text>
	<Text b color="abort" serif>geist</Text>
	<Text color="success">-</Text>
	<Text color="warning" i>ui</Text>
	<Text color="success">-</Text>
	<Text color="error" del>svelte</Text>
</Text>`}
>
	<Text>
		<Text b color="abort" serif>geist</Text>
		<Text color="success">-</Text>
		<Text color="warning" i>ui</Text>
		<Text color="success">-</Text>
		<Text color="error" del>svelte</Text>
	</Text>
</Playground>
<Spacer h={30} />
<Text type="h4">Responsive Sizing</Text>
<Spacer h={5} />
<Text>
	There are times you will need to resize your text for smaller screens. Instead of rendering a
	different tag which is not accessible and changes the meaning of your page. Use responsive size
	attributes <code>`size`, `smSize`, `mdSize`, `lgSize`</code>. Try it out by opening your dev
	tools and resizing the screen.
</Text>
<Spacer h={10} />
<Playground
	code={`<Text 
	type="h1" 
	size="2xl" 
	smSize="4xl" 
	mdSize="6xl" 
	lgSize="9xl">
	geist-ui-svelte
</Text>`}
>
	<Text type="h1" size="2xl" smSize="4xl" mdSize="6xl" lgSize="9xl">geist-ui-svelte</Text>
</Playground>
