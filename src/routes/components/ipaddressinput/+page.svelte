<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import IPAddressInput from "$lib/ipaddressinput/IPAddressInput.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";

	let valid: boolean;
	let debounced = false;
</script>

<Text type="h3">IPAddressInput</Text>
<Spacer h={10} />
<Text>An input component to display and retrieve IPV4 addresses.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { IPAddressInput } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 100" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<IpAddressInput value="172 16 10 100"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Dot</Text>
<Spacer h={5} />
<Text>Remove the dot between octets.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 100" noDot />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<IpAddressInput value="172 16 10 100"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Mouse-less</Text>
<Spacer h={5} />
<Text>The input works with both <code>`space`</code> and <code>`tab`</code>.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 100" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<IpAddressInput value="172 16 10 100"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Validation</Text>
<Spacer h={5} />
<Text>Validating the IP is easy just bind to <code>`valid`</code>.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput value="172 16 10 -1" bind:valid />
		{#if !valid}
			<Text color="error">Invalid!</Text>
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<IpAddressInput value="172 16 10 100"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Debounce</Text>
<Spacer h={5} />
<Text>
	Sometimes when working with data from a server you want to wait for the user to finish typing
	before making a request. The built in <code>`debounce`</code> property and
	<code>`on:debounce`</code> event make this easy. Try it out below.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<IPAddressInput
			on:input={() => (debounced = false)}
			debounce={1000}
			on:debounce={() => (debounced = true)}
		/>
		{#if debounced}
			Debounced
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<IPAddressInput
	on:input={() => (debounced = false)}
	debounce={1000}
	on:debounce={() => (debounced = true)}
/>
{#if debounced}
	Debounced
{/if}`}
			/>
		</Details>
	</div>
</FieldSet>
