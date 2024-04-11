<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Badge from "$lib/badge/Badge.svelte";
	import Avatar from "$lib/avatar/Avatar.svelte";
</script>

<Text type="h3">Badge</Text>
<Spacer h={10} />
<Text>A simple component for status indicators or notification markers.</Text>
<Spacer h={20} />
<Snippet width="425px" type="transparent" text={`import { Badge } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Sizes</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex gap-2 place-items-end justify-start">
		<Badge size="xs">xs</Badge>
		<Badge size="sm">sm</Badge>
		<Badge size="md">md</Badge>
		<Badge size="lg">lg</Badge>
		<Badge size="xl">xl</Badge>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Badge size="xs">xs</Badge>
<Badge size="sm">sm</Badge>
<Badge size="md">md</Badge>
<Badge size="lg">lg</Badge>
<Badge size="xl">xl</Badge>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Badge size="xs">Default</Badge>
		<Badge size="xs" color="success">Success</Badge>
		<Badge size="xs" color="warning">Warning</Badge>
		<Badge size="xs" color="error">Error</Badge>
		<Badge size="xs" color="secondary">Secondary</Badge>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Badge size="xs">Default</Badge>
<Badge size="xs" type="success">Success</Badge>
<Badge size="xs" type="warning">Warning</Badge>
<Badge size="xs" type="error">Error</Badge>
<Badge size="xs" type="secondary">Secondary</Badge>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Ghost</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Badge size="xs" ghost>Default</Badge>
		<Badge size="xs" color="success" ghost>Success</Badge>
		<Badge size="xs" color="warning" ghost>Warning</Badge>
		<Badge size="xs" color="error" ghost>Error</Badge>
		<Badge size="xs" color="secondary" ghost>Secondary</Badge>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Badge size="xs" ghost>Default</Badge>
<Badge size="xs" type="success" ghost>Success</Badge>
<Badge size="xs" type="warning" ghost>Warning</Badge>
<Badge size="xs" type="error" ghost>Error</Badge>
<Badge size="xs" type="secondary" ghost>Secondary</Badge>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Padding</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<Badge size="xs" padding={false}>No padding</Badge>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Badge size="xs" ghost>Default</Badge>
<Badge size="xs" type="success" ghost>Success</Badge>
<Badge size="xs" type="warning" ghost>Warning</Badge>
<Badge size="xs" type="error" ghost>Error</Badge>
<Badge size="xs" type="secondary" ghost>Secondary</Badge>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Class</Text>
<Spacer h={5} />
<Text>
	Apply new styles or override existing styles with <code>`class`</code>.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2 justify-start">
		<div class="relative">
			<Avatar name="Aidan Bleser" size={32} />
			<Badge padding={false} color="error" size="xs" class="absolute -top-1 -right-1"
				>5+</Badge
			>
		</div>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<div class="relative">
	<Avatar name="Aidan Bleser" size={32}/>
	<Badge class="absolute -top-1 -right-1" 
	  padding={false} 
	  color="error" 
	  size="xs">
		5+
	</Badge>
</div>`}
			/>
		</Details>
	</div>
</FieldSet>
