<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Image from "$lib/image/Image.svelte";
	import exampleDark from "$lib/assets/demo-dark.png";
	import exampleLight from "$lib/assets/demo-light.png";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Image</Text>
<Spacer h={10} />
<Text>Displays an image.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Image } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	class="place-items-center justify-center"
	code={`<Image 
	src={exampleDark} 
	alt="An example image" 
	width="575px" 
	height="auto" />`}>
	<Image src={exampleLight} alt="An example image" width="400px" height="auto" />
</Playground>
<Spacer h={30} />
<Text type="h4">Browser Window</Text>
<Spacer h={5} />
<Text>
	Sometimes you want to put your image in a browser window all you need to do is set the
	<code>`browserURL`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	class="place-items-center justify-center"
	code={`<Image
	browserURL="https://geist-ui-svelte.dev"
	src={exampleLight}
	alt="An example image"
	width="575px"
	height="auto"
/>`}>
	<Image
		browserURL="https://geist-ui-svelte.dev"
		src={exampleLight}
		alt="An example image"
		width="575px"
		height="auto" />
</Playground>
<Spacer h={30} />
<Text type="h4">Invert Colors</Text>
<Spacer h={5} />
<Text>Change the browser theme with `browserInvert`.</Text>
<Spacer h={10} />
<Playground
	class="place-items-center justify-center"
	code={`<Image
	browserURL="https://geist-ui-svelte.dev"
	src={exampleDark}
	alt="An example image"
	width="575px"
	height="auto"
	browserInvert
/>`}>
	<Image
		browserURL="https://geist-ui-svelte.dev"
		src={exampleDark}
		alt="An example image"
		width="575px"
		height="auto"
		browserInvert />
</Playground>
<Spacer h={30} />
<Text type="h4">Lock Responds to URL</Text>
<Spacer h={5} />
<Text>
	Notice how the <code>`http`</code> url does not have the lock but the <code>`https`</code> url does.
	Not very important but kinda fun.
</Text>
<Spacer h={10} />
<Playground
	class="place-items-center justify-center"
	code={`<Image
	browserURL="http://geist-ui-svelte.dev"
	src={exampleDark}
	alt="An example image"
	width="400px"
	height="auto"
/>
<Spacer h={10} />
<Image
	browserURL="https://geist-ui-svelte.dev"
	src={exampleDark}
	alt="An example image"
	width="400px"
	height="auto"
/>`}>
	<Image
		browserURL="http://geist-ui-svelte.dev"
		src={exampleDark}
		alt="An example image"
		width="400px"
		height="auto" />
	<Spacer h={10} />
	<Image
		browserURL="https://geist-ui-svelte.dev"
		src={exampleDark}
		alt="An example image"
		width="400px"
		height="auto" />
</Playground>
