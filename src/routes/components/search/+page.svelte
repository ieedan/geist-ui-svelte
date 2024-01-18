<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Search from "$lib/search/Search.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";

	let loading = false;
	let requestMade = false;
</script>

<Text type="h3">Search</Text>
<Spacer h={10} />
<Text>A component for searching.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Search } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Search placeholder="Find what you need here" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Search placeholder="Find what you need here" />`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Clearable</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Search placeholder="Find what you need here" clearable value={"A better UI library"} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{ number: 4, type: "add" }]}
				code={`<Search 
	placeholder="Find what you need here" 
	value={"A better UI library"} 
	clearable/>`}
			/>
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
		<Search
			placeholder="Type something here"
			on:input={() => (requestMade = false)}
			debounce={1000}
			on:debounce={() => (requestMade = true)}
		/>
		{#if requestMade}
			Finished
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{ start: 4, end: 5, type: "add" }]}
				code={`<Search
	placeholder="Find what you need here"
	on:input={() => (requestMade = false)}
	debounce={1000}
	on:debounce={() => (requestMade = true)} />
{#if requestMade}
	Finished
{/if}`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Loading</Text>
<Spacer h={5} />
<Text>
	Building on the last example you may want to add a more friendly indicator thats where the
	<code>`loading`</code> attribute comes in.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Search
			placeholder="Type something here"
			on:input={() => (loading = true)}
			debounce={1000}
			on:debounce={() => (loading = false)}
			bind:loading
		/>
		{#if !loading}
			Results
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{ number: 6, type: "add" }]}
				code={`<Search
	placeholder="Type something here"
	on:input={() => (loading = true)}
	debounce={1000}
	on:debounce={() => (loading = false)} 
	bind:loading={loading}/>
{#if !loading}
	Results
{/if}`}
			/>
		</Details>
	</div>
</FieldSet>
