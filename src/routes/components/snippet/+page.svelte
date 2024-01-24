<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Snippet</Text>
<Spacer h={10} />
<Text>Displays a code snippet.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Snippet } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Snippet text="npm i geist-ui-svelte" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Snippet text="npm i geist-ui-svelte"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Snippet text="npm i geist-ui-svelte" />
		<Snippet type="success" text="npm i geist-ui-svelte" />
		<Snippet type="warning" text="npm i geist-ui-svelte" />
		<Snippet type="error" text="npm i geist-ui-svelte" />
		<Snippet type="secondary" text="npm i geist-ui-svelte" />
		<Snippet type="subtle" text="npm i geist-ui-svelte" />
		<Snippet type="transparent" text="npm i geist-ui-svelte" />
		<Snippet type="dark" text="npm i geist-ui-svelte" />
		<Snippet type="lite" text="npm i geist-ui-svelte" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Snippet text="npm i geist-ui-svelte"/>
<Snippet type="success" text="npm i geist-ui-svelte"/>
<Snippet type="warning" text="npm i geist-ui-svelte"/>
<Snippet type="error" text="npm i geist-ui-svelte"/>
<Snippet type="secondary" text="npm i geist-ui-svelte"/>
<Snippet type="subtle" text="npm i geist-ui-svelte"/>
<Snippet type="transparent" text="npm i geist-ui-svelte" />
<Snippet type="dark" text="npm i geist-ui-svelte"/>
<Snippet type="lite" text="npm i geist-ui-svelte"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Multi-Line</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Snippet type="lite" text={["npm create vite@latest", "npm i geist-ui-svelte"]} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Snippet 
	type="lite" 
	text={["npm create vite@latest", "npm i geist-ui-svelte"]}/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Symbol</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Snippet type="lite" text="npm i geist-ui-svelte" symbol=">" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Snippet type="lite" text="npm i geist-ui-svelte" symbol=">"/>`}
			/>
		</Details>
	</div>
</FieldSet>
