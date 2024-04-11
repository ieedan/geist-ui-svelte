<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Key from "$lib/key/Key.svelte";
	import CommandIcon from "$lib/icons/CommandIcon.svelte";
</script>

<Text type="h3">Key</Text>
<Spacer h={10} />
<Text>A component to signify to the user a keyboard command.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Key } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex justify-start gap-2">
		<Key><CommandIcon size={16} /></Key>
		<Key>K</Key>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Key><CommandIcon size={16}/></Key>
<Key>K</Key>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex justify-start gap-2">
		<Key size="xs">K</Key>
		<Key size="sm">K</Key>
		<Key>K</Key>
		<Key size="lg">K</Key>
		<Key size="xl">K</Key>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Key size="xs">K</Key>
<Key size="sm">K</Key>
<Key >K</Key>
<Key size="lg">K</Key>
<Key size="xl">K</Key>`}
			/>
		</Details>
	</div>
</FieldSet>
