<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import EyeIcon from "$lib/icons/EyeIcon.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import ToggleButton from "$lib/togglebutton/ToggleButton.svelte";
	import EyeSlashIcon from "$lib/icons/EyeSlashIcon.svelte";
</script>

<Text type="h3">ToggleButton</Text>
<Spacer h={10} />
<Text>A button component that stays solid or transparent based on its toggled state.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { ToggleButton } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<ToggleButton>Click Me</ToggleButton>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ToggleButton>
    Click Me
</ToggleButton>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap place-items-center justify-start gap-2">
		<ToggleButton toggled={true}>Click Me</ToggleButton>
		<ToggleButton toggled={true} color="secondary">Click Me</ToggleButton>
		<ToggleButton toggled={true} color="success">Click Me</ToggleButton>
		<ToggleButton toggled={true} color="warning">Click Me</ToggleButton>
		<ToggleButton toggled={true} color="error">Click Me</ToggleButton>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ToggleButton toggled={true}>Click Me</ToggleButton>
<ToggleButton toggled={true} color="secondary">Click Me</ToggleButton>
<ToggleButton toggled={true} color="success">Click Me</ToggleButton>
<ToggleButton toggled={true} color="warning">Click Me</ToggleButton>
<ToggleButton toggled={true} color="error">Click Me</ToggleButton>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Slots</Text>
<Spacer h={5} />
<Text>Use different slots for toggled / un-toggled.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<ToggleButton>
			<EyeIcon slot="on" />
			<EyeSlashIcon slot="off" />
		</ToggleButton>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<ToggleButton>
    <EyeIcon slot="on"/>
    <EyeSlashIcon slot="off"/>
</ToggleButton>`}
			/>
		</Details>
	</div>
</FieldSet>
