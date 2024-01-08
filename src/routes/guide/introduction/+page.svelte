<script lang="ts">
	import Link from "$lib/link/Link.svelte";
	import Note from "$lib/note/Note.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Introduction</Text>
<Spacer h={30} />
<Text type="h4">About</Text>
<Text>
	<Text b>geist-ui-svelte</Text> is a <Link to="https://svelte.dev" target="_blank" color
		>Svelte</Link> UI library taking inspiration from the
	<Link to="https://vercel.com" target="_blank" color>Vercel</Link> design.
</Text>
<Spacer h={16} />
<Text
	>We built <Text b>geist-ui-svelte</Text> around TailwindCSS and SvelteKit to make it easy to make
	interactive websites and web applications that look good.</Text>
<Spacer h={30} />
<Note color="warning">This project is not associated with Vercel, Svelte, or Geist-UI.</Note>
<Spacer h={30} />
