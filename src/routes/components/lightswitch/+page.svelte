<script lang="ts">
	import LightSwitch from "$lib/lightswitch/LightSwitch.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Link from "$lib/link/Link.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">LightSwitch</Text>
<Spacer h={10} />
<Text>A component to allow the user to toggle light/dark mode.</Text>
<Spacer h={20} />
<Snippet width="500px" type="transparent" text={`import { LightSwitch } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>
	If you haven't already setup dark mode like we have in our
	<Link to="/guide/installation" color>installation guide</Link> then you should do that before you
	continue.
</Text>
<Spacer h={10} />
<Playground code={`<LightSwitch />`}>
	<LightSwitch />
</Playground>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>Border.</Text>
<Spacer h={10} />
<Playground code={`<LightSwitch border/>`}>
	<LightSwitch border />
</Playground>
