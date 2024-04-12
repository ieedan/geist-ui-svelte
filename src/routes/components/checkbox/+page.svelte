<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Checkbox from "$lib/checkbox/Checkbox.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Checkbox</Text>
<Spacer h={10} />
<Text>An input with a true / false state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Checkbox } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<Checkbox>Notifications</Checkbox>`}>
	<Checkbox>Notifications</Checkbox>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<Playground
	code={`<Checkbox>Notifications</Checkbox>
<Checkbox disabled>Notifications</Checkbox>
<Checkbox disabled checked={true}>Notifications</Checkbox>`}
>
	<Checkbox>Notifications</Checkbox>
	<Checkbox disabled>Notifications</Checkbox>
	<Checkbox disabled checked={true}>Notifications</Checkbox>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	code={`<Checkbox checked={true}>Default</Checkbox>
<Checkbox color="success" checked={true}>Success</Checkbox>
<Checkbox color="warning" checked={true}>Warning</Checkbox>
<Checkbox color="error" checked={true}>Error</Checkbox>
<Checkbox color="secondary" checked={true}>Secondary</Checkbox>`}
>
	<Checkbox checked={true}>Default</Checkbox>
	<Checkbox color="success" checked={true}>Success</Checkbox>
	<Checkbox color="warning" checked={true}>Warning</Checkbox>
	<Checkbox color="error" checked={true}>Error</Checkbox>
	<Checkbox color="secondary" checked={true}>Secondary</Checkbox>
</Playground>
<Spacer h={30} />
<Text type="h4">Ring</Text>
<Spacer h={5} />
<Text>
	Add a ring around the checkbox when focused by adding the <code>`ring`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	code={`<Checkbox ring checked={true}>Default</Checkbox>
<Checkbox ring color="success" checked={true}>Success</Checkbox>
<Checkbox ring color="warning" checked={true}>Warning</Checkbox>
<Checkbox ring color="error" checked={true}>Error</Checkbox>
<Checkbox ring color="secondary" checked={true}>Secondary</Checkbox>`}
>
	<Checkbox ring checked={true}>Default</Checkbox>
	<Checkbox ring color="success" checked={true}>Success</Checkbox>
	<Checkbox ring color="warning" checked={true}>Warning</Checkbox>
	<Checkbox ring color="error" checked={true}>Error</Checkbox>
	<Checkbox ring color="secondary" checked={true}>Secondary</Checkbox>
</Playground>
