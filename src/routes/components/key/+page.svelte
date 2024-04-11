<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Key from "$lib/key/Key.svelte";
	import CommandIcon from "$lib/icons/CommandIcon.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Key</Text>
<Spacer h={10} />
<Text>A component to signify to the user a keyboard command.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Key } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground class="flex-row gap-2"
	code={`<Key><CommandIcon size={16}/></Key>
<Key>K</Key>`}>
	<Key><CommandIcon size={16} /></Key>
	<Key>K</Key>
</Playground>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<Playground class="flex-row place-items-end gap-2"
	code={`<Key size="xs">K</Key>
<Key size="sm">K</Key>
<Key >K</Key>
<Key size="lg">K</Key>
<Key size="xl">K</Key>`}>
	<Key size="xs">K</Key>
	<Key size="sm">K</Key>
	<Key>K</Key>
	<Key size="lg">K</Key>
	<Key size="xl">K</Key>
</Playground>
