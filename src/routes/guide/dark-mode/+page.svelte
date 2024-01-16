<script lang="ts">
	import Link from "$lib/link/Link.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import { setMode, userPrefersMode } from "mode-watcher";

	$: currentPreference = $userPrefersMode;

    /* eslint-disable no-useless-escape */
	const darkModeExample = `<script lang="ts">
    import { setMode, userPrefersMode } from "mode-watcher";
    import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";

    $: currentPreference = $userPrefersMode;
<\/script>

<Select
	bind:value={currentPreference}
	on:change={(e) => {
		setMode(e.detail.value);
	}}
	allowNone
	noIcon
	width="125px">
	<Option value="light">☀️ Light</Option>
	<Option value="dark">🌙 Dark</Option>
	<Option value="system">🖥️ System</Option>
</Select>`;
</script>

<Text type="h3">How to implement dark mode switching</Text>
<Spacer h={20} />
<Text>
	If you've already followed our setup for dark mode <Link
		to="/guide/installation"
		target="_blank"
		color>here</Link> then you are all caught up. If not you can learn how to setup dark mode there.
</Text>
<Spacer h={10} />
<Text>Heres an example of how we would implement a simple 3 way dark mode switcher.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-wrap gap-2">
		<Select
			bind:value={currentPreference}
			on:change={(e) => {
				setMode(e.detail.value);
			}}
			allowNone
			noIcon
			width="125px">
			<Option value="light">☀️ Light</Option>
			<Option value="dark">🌙 Dark</Option>
			<Option value="system">🖥️ System</Option>
		</Select>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={darkModeExample} />
		</Details>
	</div>
</FieldSet>
