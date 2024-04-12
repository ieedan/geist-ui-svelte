<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import { mode, setMode } from "mode-watcher";

	$: currentMode = $mode;

	export let border = false;

	const toggleMode = () => {
		if (currentMode == "dark") {
			setMode("light");
		} else {
			setMode("dark");
		}
	};
</script>

<button
	type="button"
	data-border={border}
	class="flex place-items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900
    transition-all text-gray-999 dark:text-gray-0 size-9 rounded-md data-[border='true']:border
    border-gray-100 dark:border-gray-900"
	on:click={toggleMode}>
	{#if currentMode == "light"}
		<MoonIcon size={22} />
	{:else if currentMode == "dark"}
		<SunIcon size={22} />
	{/if}
</button>

<!--
@component
A component to allow the user to toggle light/dark mode.

[See Docs](https://geist-ui-svelte.dev/components/lightswitch) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
