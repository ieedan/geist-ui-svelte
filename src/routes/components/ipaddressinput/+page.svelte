<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import IPAddressInput from "$lib/ipaddressinput/IPAddressInput.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">IPAddressInput</Text>
<Spacer h={10} />
<Text>An input component to display and retrieve IPV4 addresses.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { IPAddressInput } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 100"/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<IpAddressInput value="172 16 10 100"/>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Dot</Text>
<Spacer h={5}/>
<Text>Remove the dot between octets.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 100" noDot/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<IpAddressInput value="172 16 10 100"/>`}
			/>
		</Details>
	</div>
</FieldSet>