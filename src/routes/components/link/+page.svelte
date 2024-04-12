<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Link from "$lib/link/Link.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">Link</Text>
<Spacer h={10} />
<Text>A simple link component.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Link } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<Link
	to="https://github.com/ieedan/geist-ui-svelte" 
	target="_blank">
	Check out the geist-ui-svelte source here
</Link>`}
>
	<Link to="https://github.com/ieedan/geist-ui-svelte" target="_blank">
		Check out the geist-ui-svelte source here
	</Link>
</Playground>
<Spacer h={30} />
<Text type="h4">Highlight</Text>
<Spacer h={10} />
<Playground
	code={`<Link 
	to="https://github.com/ieedan/geist-ui-svelte" 
	target="_blank" 
	color>
	Check out the geist-ui-svelte source here
</Link>`}
>
	<Link to="https://github.com/ieedan/geist-ui-svelte" target="_blank" color>
		Check out the geist-ui-svelte source here
	</Link>
</Playground>
<Spacer h={30} />
<Text type="h4">Underline</Text>
<Spacer h={10} />
<Playground
	code={`<Link 
	to="https://github.com/ieedan/geist-ui-svelte" 
	target="_blank" 
	underline>
	Check out the geist-ui-svelte source here
</Link>
<Link 
	to="https://github.com/ieedan/geist-ui-svelte"
	target="_blank" 
	color 
	underline>
	Check out the geist-ui-svelte source here
</Link>`}
>
	<Link to="https://github.com/ieedan/geist-ui-svelte" target="_blank" underline>
		Check out the geist-ui-svelte source here
	</Link>
	<Link to="https://github.com/ieedan/geist-ui-svelte" target="_blank" color underline>
		Check out the geist-ui-svelte source here
	</Link>
</Playground>
<Spacer h={30} />
<Text type="h4">Block</Text>
<Spacer h={10} />
<Playground
	code={`<Link 
	to="https://github.com/ieedan/geist-ui-svelte" 
	target="_blank" 
	block>
	Check out the geist-ui-svelte source here
</Link>`}
>
	<Link to="https://github.com/ieedan/geist-ui-svelte" target="_blank" block>
		Check out the geist-ui-svelte source here
	</Link>
</Playground>
