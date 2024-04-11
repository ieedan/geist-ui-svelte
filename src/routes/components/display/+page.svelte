<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import Display from "$lib/display/Display.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Image from "$lib/image/Image.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import exampleImage from "$lib/assets/demo-page.png";
</script>

<Text type="h3">Display</Text>
<Spacer h={10} />
<Text>A layout component to add a caption to your content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Display } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Display
			caption="geist-ui-svelte makes building 
		pretty, interactive applications easy"
		>
			<Image src={exampleImage} alt="Thing" width="400px" height="auto" />
		</Display>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Display caption="geist-ui-svelte makes building 
pretty, interactive applications easy">
	<Image src={exampleImage} alt="Thing" width="400px" height="auto"/>
</Display>`}
			/>
		</Details>
	</div>
</FieldSet>
