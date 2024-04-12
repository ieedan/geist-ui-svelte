<script lang="ts">
	import EyeIcon from "$lib/icons/EyeIcon.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ToggleButton from "$lib/togglebutton/ToggleButton.svelte";
	import EyeSlashIcon from "$lib/icons/EyeSlashIcon.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">ToggleButton</Text>
<Spacer h={10} />
<Text>A button component that stays solid or transparent based on its toggled state.</Text>
<Spacer h={20} />
<Snippet
	width="500px"
	type="transparent"
	text={`import { ToggleButton } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<ToggleButton>
    Click Me
</ToggleButton>`}
>
	<ToggleButton>Click Me</ToggleButton>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="flex-row flex-wrap gap-2"
	code={`<ToggleButton toggled={true}>Click Me</ToggleButton>
<ToggleButton toggled={true} color="secondary">Click Me</ToggleButton>
<ToggleButton toggled={true} color="success">Click Me</ToggleButton>
<ToggleButton toggled={true} color="warning">Click Me</ToggleButton>
<ToggleButton toggled={true} color="error">Click Me</ToggleButton>`}
>
	<ToggleButton toggled={true}>Click Me</ToggleButton>
	<ToggleButton toggled={true} color="secondary">Click Me</ToggleButton>
	<ToggleButton toggled={true} color="success">Click Me</ToggleButton>
	<ToggleButton toggled={true} color="warning">Click Me</ToggleButton>
	<ToggleButton toggled={true} color="error">Click Me</ToggleButton>
</Playground>
<Spacer h={30} />
<Text type="h4">Slots</Text>
<Spacer h={5} />
<Text>Use different slots for toggled / un-toggled.</Text>
<Spacer h={10} />
<Playground
	code={`<ToggleButton>
    <EyeIcon slot="on"/>
    <EyeSlashIcon slot="off"/>
</ToggleButton>`}
>
	<ToggleButton>
		<EyeIcon slot="on" />
		<EyeSlashIcon slot="off" />
	</ToggleButton>
</Playground>
