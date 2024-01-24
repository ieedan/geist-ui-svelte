<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Button from "$lib/button/Button.svelte";
</script>

<Text type="h3">Button</Text>
<Spacer h={10} />
<Text>The button component is used to trigger an event.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Button } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button>Action</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button>Action</Button>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Loading</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button loading>Action</Button>
		<Spacer h={5} />
		<Button loading color="success">Action</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button loading>Action</Button>
<Spacer h={5}/>
<Button loading color="success">Action</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Button disabled>Action</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Button disabled>Action</Button>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Button color="secondary">Secondary</Button>
		<Button color="success">Success</Button>
		<Button color="warning">Warning</Button>
		<Button color="error">Error</Button>
		<Button color="abort">Abort</Button>
		<Button color="secondary-light">Secondary Light</Button>
		<Button color="success-light">Success Light</Button>
		<Button color="warning-light">Warning Light</Button>
		<Button color="error-light">Error Light</Button>
		<Button color="abort-active">Abort Active</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="error">Error</Button>
<Button color="abort">Abort</Button>
<Button color="secondary-light">Secondary Light</Button>
<Button color="success-light">Success Light</Button>
<Button color="warning-light">Warning Light</Button>
<Button color="error-light">Error Light</Button>
<Button color="abort-active">Abort Active</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Ghost</Text>
<Spacer h={5} />
<Text>Reverses the color fill.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Button color="secondary" ghost>Secondary</Button>
		<Button color="success" ghost>Success</Button>
		<Button color="warning" ghost>Warning</Button>
		<Button color="error" ghost>Error</Button>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Button color="secondary" ghost>Secondary</Button>
<Button color="success" ghost>Success</Button>
<Button color="warning" ghost>Warning</Button>
<Button color="error" ghost>Error</Button>`}
			/>
		</Details>
	</div>
</FieldSet>
