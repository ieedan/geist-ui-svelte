<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Page from "$lib/page/Page.svelte";
	import Center from "$lib/center/Center.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	let showPage = false;
</script>

<Text type="h3">Page</Text>
<Spacer h={10} />
<Text>Displays a page over the original content.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Page } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>
	A page can be great for layouts that include a mobile menu. If you need a practical example
	shrink this page to a mobile view and click the menu icon.
</Text>
<Spacer h={10} />
<Playground
	code={`<Button on:click={() => (showPage = true)}>Show page</Button>
<Page bind:visible={showPage}>
	<Center class="h-full">
		<Button on:click={() => showPage = false}>
			Click here or press <code>\`Esc\`</code> to exit
		</Button>
	</Center>
</Page>`}
>
	<Button on:click={() => (showPage = true)}>Show page</Button>
	<Page bind:visible={showPage}>
		<Center class="h-full">
			<Button on:click={() => (showPage = false)}>
				Click here or press <code>`Esc`</code> to exit
			</Button>
		</Center>
	</Page>
</Playground>
