<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Input from "$lib/input/Input.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Fieldset</Text>
<Spacer h={10} />
<Text>An organizational layout component to group related information.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Fieldset } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<FieldSet>
	<div class="py-2">
		<Text type="h4">Team Name</Text>
		<Spacer h={5} />
		<Text class="text-sm">
			This is your team's visible name within geist-ui-svelte. For example, the name
			of your company or department.
		</Text>
		<Spacer h={10} />
		<Input value="Team Name" />
	</div>
	<div slot="footer" class="flex justify-between place-items-center">
		<Text type="small" color="secondary">Please use 32 characters at maximum.</Text>
		<Button color="secondary-light" size="sm">Save</Button>
	</div>
</FieldSet>`}
>
	<FieldSet>
		<div class="py-2">
			<Text type="h4">Team Name</Text>
			<Spacer h={5} />
			<Text class="text-sm">
				This is your team's visible name within geist-ui-svelte. For example, the name of
				your company or department.
			</Text>
			<Spacer h={10} />
			<Input value="Team Name" />
		</div>
		<div slot="footer" class="flex justify-between place-items-center">
			<Text type="small" color="secondary">Please use 32 characters at maximum.</Text>
			<Button color="secondary-light" size="sm">Save</Button>
		</div>
	</FieldSet>
</Playground>
<Spacer h={30} />
<Text type="h4">Colors</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<FieldSet>
	<div class="py-2">
		<Spacer h={10}/>
	</div>
	<div slot="footer" class="flex place-items-center py-1">
		<Spacer h={10}/>
	</div>
</FieldSet>
<FieldSet color="success">
	<div class="py-2">
		<Spacer h={10}/>
	</div>
	<div slot="footer" class="flex place-items-center py-1">
		<Spacer h={10}/>
	</div>
</FieldSet>
<FieldSet color="warning">
	<div class="py-2">
		<Spacer h={10}/>
	</div>
	<div slot="footer" class="flex place-items-center py-1">
		<Spacer h={10}/>
	</div>
</FieldSet>
<FieldSet color="error">
	<div class="py-2">
		<Spacer h={10}/>
	</div>
	<div slot="footer" class="flex place-items-center py-1">
		<Spacer h={10}/>
	</div>
</FieldSet>
<FieldSet color="secondary">
	<div class="py-2">
		<Spacer h={10}/>
	</div>
	<div slot="footer" class="flex place-items-center py-1">
		<Spacer h={10}/>
	</div>
</FieldSet>`}
>
	<FieldSet>
		<div class="py-2">
			<Spacer h={10} />
		</div>
		<div slot="footer" class="flex place-items-center py-1">
			<Spacer h={10} />
		</div>
	</FieldSet>
	<FieldSet color="success">
		<div class="py-2">
			<Spacer h={10} />
		</div>
		<div slot="footer" class="flex place-items-center py-1">
			<Spacer h={10} />
		</div>
	</FieldSet>
	<FieldSet color="warning">
		<div class="py-2">
			<Spacer h={10} />
		</div>
		<div slot="footer" class="flex place-items-center py-1">
			<Spacer h={10} />
		</div>
	</FieldSet>
	<FieldSet color="error">
		<div class="py-2">
			<Spacer h={10} />
		</div>
		<div slot="footer" class="flex place-items-center py-1">
			<Spacer h={10} />
		</div>
	</FieldSet>
	<FieldSet color="transparent">
		<div class="py-2">
			<Spacer h={10} />
		</div>
		<div slot="footer" class="flex place-items-center py-1">
			<Spacer h={10} />
		</div>
	</FieldSet>
</Playground>
