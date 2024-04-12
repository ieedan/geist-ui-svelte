<script lang="ts">
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import Dot from "$lib/dot/Dot.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Dot</Text>
<Spacer h={10} />
<Text>A circle component great as a status indicator.</Text>
<Spacer h={20} />
<Snippet width="400px" type="transparent" text={`import { Dot } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2 place-items-end"
	code={`<Dot/>
<Dot size={16}/>
<Dot size={20}/>
<Dot size={24}/>`}
>
	<Dot />
	<Dot size={16} />
	<Dot size={20} />
	<Dot size={24} />
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2"
	code={`<Dot/>
<Dot type="success"/>
<Dot type="warning"/>
<Dot type="error"/>
<Dot type="secondary"/>
<Dot type="go"/>`}
>
	<Dot />
	<Dot type="success" />
	<Dot type="warning" />
	<Dot type="error" />
	<Dot type="secondary" />
	<Dot type="go" />
</Playground>
<Spacer h={30} />
<Text type="h4">Custom Color</Text>
<Spacer h={10} />
<Playground code={`<Dot color="#ff00ff"/>`}>
	<Dot color="#ff00ff" />
</Playground>
