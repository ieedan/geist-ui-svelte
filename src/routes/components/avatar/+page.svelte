<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Avatar from "$lib/avatar/Avatar.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Avatar</Text>
<Spacer h={10} />
<Text>A layout component to display a user.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Avatar } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>When there is no image supplied it will use the user's initials for your `Avatar`.</Text>
<Spacer h={10} />
<Playground
	code={`<Avatar name="Aidan" />
<Avatar name="Aidan Bleser" />
<Avatar name="Aidan R Bleser" />
<Avatar name="Eva Rivera" />`}>
	<div class="flex place-items-center gap-2">
		<Avatar name="Aidan" />
		<Avatar name="Aidan Bleser" />
		<Avatar name="Aidan R Bleser" />
		<Avatar name="Eva Rivera" />
	</div>
</Playground>
<Spacer h={30} />
<Text type="h4">Size</Text>
<Spacer h={10} />
<Playground
	code={`<Avatar name="Aidan Bleser" size={24}/>
<Avatar name="Aidan Bleser" />
<Avatar name="Aidan Bleser" size={34}/>
<Avatar name="Aidan Bleser" size={50}/>`}>
	<div class="flex place-items-center gap-2">
		<Avatar name="Aidan Bleser" size={24} />
		<Avatar name="Aidan Bleser" />
		<Avatar name="Aidan Bleser" size={34} />
		<Avatar name="Aidan Bleser" size={50} />
	</div>
</Playground>
<Spacer h={30} />
<Text type="h4">With Image</Text>
<Spacer h={10} />
<Playground
	code={`<Avatar 
name="Aidan"
img="https://avatars.githubusercontent.com/u/117548273?v=4"/>`}>
	<Avatar name="Aidan" img="https://avatars.githubusercontent.com/u/117548273?v=4" />
</Playground>
<Spacer h={30} />
<Text type="h4">With Name</Text>
<Spacer h={5} />
<Text>Add <code>`detail`</code> attribute to expose the name.</Text>
<Spacer h={10} />
<Playground
	code={`<Avatar 
	name="Aidan" 
	img="https://avatars.githubusercontent.com/u/117548273?v=4" 
	detail/>`}>
	<Avatar name="Aidan" img="https://avatars.githubusercontent.com/u/117548273?v=4" detail />
</Playground>
<Spacer h={30} />
<Text type="h4">With Description</Text>
<Spacer h={5} />
<Text>
	Add <code>`details`</code> attribute to add extra description below the name. This does require
	the <code>`detail`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	code={`<Avatar
	name="Aidan"
	img="https://avatars.githubusercontent.com/u/117548273?v=4"
	detail
	details="Trash Dev" />`}>
	<Avatar
		name="Aidan"
		img="https://avatars.githubusercontent.com/u/117548273?v=4"
		detail
		details="Trash Dev" />
</Playground>
