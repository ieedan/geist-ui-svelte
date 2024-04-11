<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Loading from "$lib/loading/Loading.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Loading</Text>
<Spacer h={10} />
<Text>A component to indicate a loading state.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Loading } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2 place-items-end py-2"
	code={`<Loading size="xs"/>
<Loading size="sm"/>
<Loading size="md"/>
<Loading size="lg"/>
<Loading size="xl"/>`}>
	<Loading size="xs" />
	<Loading size="sm" />
	<Loading size="md" />
	<Loading size="lg" />
	<Loading size="xl" />
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2 py-2"
	code={`<Loading />
<Loading type="success"/>
<Loading type="warning"/>
<Loading type="error"/>`}>
	<Loading />
	<Loading type="success" />
	<Loading type="warning" />
	<Loading type="error" />
</Playground>
