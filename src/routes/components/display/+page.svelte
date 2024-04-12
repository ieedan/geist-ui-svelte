<script lang="ts">
	import Display from "$lib/display/Display.svelte";
	import Image from "$lib/image/Image.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import exampleImage from "$lib/assets/demo-page.png";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Display</Text>
<Spacer h={10} />
<Text>A layout component to add a caption to your content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Display } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Display caption="geist-ui-svelte makes building 
pretty, interactive applications easy">
	<Image src={exampleImage} alt="Thing" width="400px" height="auto"/>
</Display>`}
>
	<Display
		caption="geist-ui-svelte makes building 
pretty, interactive applications easy"
	>
		<Image src={exampleImage} alt="Thing" width="400px" height="auto" />
	</Display>
</Playground>
