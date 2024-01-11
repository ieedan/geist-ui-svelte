<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Note from "$lib/note/Note.svelte";
</script>

<Text type="h3">Note</Text>
<Spacer h={10} />
<Text>A comment that stands out to the user.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Note } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Note>This is a basic note</Note>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Note>This is a basic note</Note>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Note>Elephants can outrun you.</Note>
		<Note color="success">Elephants can outswim you.</Note>
		<Note color="warning">Elephants can throw objects at you.</Note>
		<Note color="error">Elephants do not think you are cute.</Note>
		<Note color="secondary">Elephants are very emotional.</Note>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Note>Elephants can outrun you.</Note>
<Note color="success">Elephants can outswim you.</Note>
<Note color="warning">Elephants can throw objects at you.</Note>
<Note color="error">Elephants do not think you are cute.</Note>
<Note color="secondary">Elephants are very emotional.</Note>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Without Label</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Note label={false}>Elephants remember.</Note>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Note label={false}>Elephants remember.</Note>`} />
		</Details>
	</div>
</FieldSet>
