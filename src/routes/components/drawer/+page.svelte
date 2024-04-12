<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Button from "$lib/button/Button.svelte";
	import Drawer from "$lib/drawer/Drawer.svelte";
	import Note from "$lib/note/Note.svelte";
	import Playground from "$lib/docs-components/playground/index.js";

	let showDefaultExample = false;
	let showLeft = false;
	let showRight = false;
	let showTop = false;
	let showBottom = false;
</script>

<Text type="h3">Drawer</Text>
<Spacer h={10} />
<Text>A component to hide / show content as a sidebar pop-up.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Drawer } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Default</Text>
<Spacer h={5} />
<Text>By default the drawer will take up 1/4 of the screen.</Text>
<Spacer h={20} />
<Note color="warning">
	Drawers generally do not work very well on mobile so consider having a different method for
	mobile users to access the content of your drawers.
</Note>
<Spacer h={20} />
<Playground
	code={`<Button on:click={() => (showDefaultExample = true)}>
	Show drawer
</Button>
<Drawer bind:visible={showDefaultExample}>
	This is a drawer
</Drawer>`}
>
	<Button on:click={() => (showDefaultExample = true)}>Show drawer</Button>
	<Drawer bind:visible={showDefaultExample}>This is a drawer</Drawer>
</Playground>
<Spacer h={30} />
<Text type="h4">Positioning</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<Button on:click={() => (showLeft = true)}>
	Show left
</Button>
<Drawer placement="left" bind:visible={showLeft}>
	This is a drawer
</Drawer>
<Button on:click={() => (showRight = true)}>
	Show right
</Button>
<Drawer placement="right" bind:visible={showRight}>
	This is a drawer
</Drawer>
<Button on:click={() => (showTop = true)}>
	Show top
</Button>
<Drawer placement="right" bind:visible={showTop}>
	This is a drawer
</Drawer>
<Button on:click={() => (showBottom = true)}>
	Show bottom
</Button>
<Drawer placement="right" bind:visible={showBottom}>
	This is a drawer
</Drawer>`}
>
	<Button on:click={() => (showLeft = true)}>Show left</Button>
	<Drawer placement="left" bind:visible={showLeft}>This is a drawer</Drawer>
	<Button on:click={() => (showRight = true)}>Show right</Button>
	<Drawer placement="right" bind:visible={showRight}>This is a drawer</Drawer>
	<Button on:click={() => (showTop = true)}>Show top</Button>
	<Drawer placement="top" bind:visible={showTop}>This is a drawer</Drawer>
	<Button on:click={() => (showBottom = true)}>Show bottom</Button>
	<Drawer placement="bottom" bind:visible={showBottom}>This is a drawer</Drawer>
</Playground>
