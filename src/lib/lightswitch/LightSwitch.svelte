<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { mode, setMode } from "mode-watcher";

	$: currentMode = $mode;

	const toggleMode = () => {
		if (currentMode == "dark") {
			setMode("light");
		} else {
			setMode("dark");
		}
	};
</script>

<Button type="button" square size="md" on:click={toggleMode}>
	{#if currentMode == "light"}
		<MoonIcon size={22} />
	{:else if currentMode == "dark"}
		<SunIcon size={22} />
	{/if}
</Button>

<!--
@component
A component to allow the user to toggle light/dark mode.

[See Docs](https://geist-ui-svelte.dev/components/lightswitch) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
