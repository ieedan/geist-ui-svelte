<script lang="ts">
	import ButtonDropdownItem from "$lib/buttondropdown/ButtonDropdownItem.svelte";
	import ButtonDropdown from "$lib/buttondropdown/ButtonDropdown.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import PlusIcon from "$lib/icons/PlusIcon.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
</script>

<Text type="h3">ButtonDropdown</Text>
<Spacer h={10} />
<Text>Display related but alternate actions for a button.</Text>
<Spacer h={20} />
<Snippet
	width="100%"
	type="transparent"
	text={`import { ButtonDropdown, ButtonDropdownItem } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonDropdown>
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
>
	<ButtonDropdown>
		<span slot="main">Default Action</span>
		<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
		<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
	</ButtonDropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonDropdown disabled>
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
>
	<ButtonDropdown disabled>
		<span slot="main">Default Action</span>
		<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
		<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
	</ButtonDropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Disabled Option</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonDropdown >
	<span slot="main">Default Action</span>
	<ButtonDropdownItem disabled>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
>
	<ButtonDropdown>
		<span slot="main">Default Action</span>
		<ButtonDropdownItem disabled>Secondary Action</ButtonDropdownItem>
		<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
	</ButtonDropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Custom Icon</Text>
<Spacer h={10} />
<Playground
	code={`<ButtonDropdown >
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
	<PlusIcon slot="icon" size={12}/>
</ButtonDropdown>`}
>
	<ButtonDropdown>
		<span slot="main">Default Action</span>
		<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
		<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
		<PlusIcon slot="icon" size={12} />
	</ButtonDropdown>
</Playground>
