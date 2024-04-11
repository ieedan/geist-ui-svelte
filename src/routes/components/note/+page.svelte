<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Note from "$lib/note/Note.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Note</Text>
<Spacer h={10} />
<Text>A comment that stands out to the user.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Note } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<Note>This is a basic note</Note>`}>
	<Note>This is a basic note</Note>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Note>Elephants can outrun you.</Note>
<Note color="success">Elephants can outswim you.</Note>
<Note color="warning">Elephants can throw objects at you.</Note>
<Note color="error">Elephants do not think you are cute.</Note>
<Note color="secondary">Elephants are very emotional.</Note>`}>
	<Note>Elephants can outrun you.</Note>
	<Note color="success">Elephants can outswim you.</Note>
	<Note color="warning">Elephants can throw objects at you.</Note>
	<Note color="error">Elephants do not think you are cute.</Note>
	<Note color="secondary">Elephants are very emotional.</Note>
</Playground>
<Spacer h={30} />
<Text type="h4">Custom Label</Text>
<Spacer h={10} />
<Playground
	code={`<Note>
	<Text slot="label" b>Warning:</Text>
	Elephants remember.
</Note>`}>
	<Note>
		<Text slot="label" b>Warning:</Text>
		Elephants remember.
	</Note>
</Playground>
<Spacer h={30} />
<Text type="h4">Without Label</Text>
<Spacer h={10} />
<Playground code={`<Note label={false}>Without label.</Note>`}>
	<Note label={false}>Without label.</Note>
</Playground>
<Spacer h={30} />
<Text type="h4">Block</Text>
<Spacer h={10} />
<Playground class="gap-2"
	code={`<Note block>Default block.</Note>
<Note color="success" block>Success block.</Note>
<Note color="warning" block>Warning block.</Note>
<Note color="error" block>Error block.</Note>
<Note color="secondary" block>Secondary block.</Note>`}>
	<Note block>Default block.</Note>
	<Note color="success" block>Success block.</Note>
	<Note color="warning" block>Warning block.</Note>
	<Note color="error" block>Error block.</Note>
	<Note color="secondary" block>Secondary block.</Note>
</Playground>
