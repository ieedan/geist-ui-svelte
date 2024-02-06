<script lang="ts">
	import ButtonDropdownItem from "$lib/buttondropdown/ButtonDropdownItem.svelte";
	import ButtonDropdown from "$lib/buttondropdown/ButtonDropdown.svelte";
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import PlusIcon from "$lib/icons/PlusIcon.svelte";
</script>

<Text type="h3">ButtonDropdown</Text>
<Spacer h={10} />
<Text>Display related but alternate actions for a button.</Text>
<Spacer h={20} />
<Snippet
	width="100%"
	type="lite"
	text={`import { ButtonDropdown, ButtonDropdownItem } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<ButtonDropdown>
			<span slot="main">Default Action</span>
			<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
			<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
		</ButtonDropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonDropdown>
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={1000}/>
<!-- <Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<ButtonDropdown disabled>
			<span slot="main">Default Action</span>
			<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
			<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
		</ButtonDropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonDropdown disabled>
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled Option</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<ButtonDropdown>
			<span slot="main">Default Action</span>
			<ButtonDropdownItem disabled>Secondary Action</ButtonDropdownItem>
			<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
		</ButtonDropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonDropdown >
	<span slot="main">Default Action</span>
	<ButtonDropdownItem disabled>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
</ButtonDropdown>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Icon</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<ButtonDropdown>
			<span slot="main">Default Action</span>
			<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
			<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
			<PlusIcon slot="icon" size={12} />
		</ButtonDropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ButtonDropdown >
	<span slot="main">Default Action</span>
	<ButtonDropdownItem>Secondary Action</ButtonDropdownItem>
	<ButtonDropdownItem>Tertiary Action</ButtonDropdownItem>
	<PlusIcon slot="icon" size={12}/>
</ButtonDropdown>`}
			/>
		</Details>
	</div>
</FieldSet> -->
