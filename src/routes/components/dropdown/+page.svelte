<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Dropdown from "$lib/dropdown/Dropdown.svelte";
	import Note from "$lib/note/Note.svelte";

	let showDropdown = false;
	let buttonRef: HTMLButtonElement;
</script>

<Text type="h3">Dropdown</Text>
<Spacer h={10} />
<Text>Displays a popup around an anchor component.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Dropdown } from 'geist-ui-svelte';`} />
<Spacer h={20} />
<Note color="warning">This component is unstable and should be avoided for now.</Note>
<Spacer h={20} />
<Text type="h4">Basic</Text>
<Spacer h={20} />
<Note color="success"
	>In a future release this should integrate with components like <code>`Button`</code>.</Note>
<Spacer h={20} />
<FieldSet>
	<div class="">
		<button bind:this={buttonRef} on:click={() => (showDropdown = true)}>
			Show dropdown
		</button>
		<Dropdown bind:anchorRef={buttonRef} bind:visible={showDropdown}>
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<button bind:this={buttonRef} 
	on:click={() => (showDropdown = true)}>
		Show dropdown
</button>
<Dropdown 
	bind:anchorRef={buttonRef} 
	bind:visible={showDropdown}>
	This is a dropdown
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>