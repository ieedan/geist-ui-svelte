<script lang="ts">
	import Button from "$lib/button/Button.svelte";
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import DesktopIcon from "$lib/icons/DesktopIcon.svelte";
	import { setMode, mode } from "mode-watcher";
	import Dropdown from "$lib/dropdown/Dropdown.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import type { Placement } from "$lib/util/place.js";

	$: currentMode = $mode;

	export let noIcon = false;
	export let border = false;
	export let placement: Placement = "bottom-end";
	let buttonRef: HTMLButtonElement;

	let expanded = false;

	const selectMode = (m: "light" | "dark" | "system") => {
		setMode(m);
		expanded = false;
	};
</script>

<button
	bind:this={buttonRef}
	type="button"
	on:click={() => (expanded = !expanded)}
	data-border={border}
	class="flex place-items-center justify-center hover:bg-gui-component-background-active
    transition-all text-gui-foreground-primary size-9 rounded-md data-[border='true']:border
    border-gui-border"
>
	{#if currentMode == "light"}
		<SunIcon size={22} />
	{:else if currentMode == "dark"}
		<MoonIcon size={22} />
	{/if}
</button>
<Dropdown
	anchor={buttonRef}
	{placement}
	bind:visible={expanded}
	class="p-1 w-36"
	offset={{ x: 0, y: 2 }}
>
	<Button
		color="tab"
		align="start"
		class="px-1"
		width="100%"
		on:click={() => selectMode("light")}
	>
		{#if !noIcon}
			<div class="size-5 flex place-items-center justify-center">
				<SunIcon size={16} />
			</div>
			<Spacer inline w={8} />
		{/if}
		Light
	</Button>
	<Button color="tab" align="start" class="px-1" width="100%" on:click={() => selectMode("dark")}>
		{#if !noIcon}
			<div class="size-5 flex place-items-center justify-center">
				<MoonIcon size={16} />
			</div>
			<Spacer inline w={8} />
		{/if}
		Dark
	</Button>
	<Button
		color="tab"
		align="start"
		class="px-1"
		width="100%"
		on:click={() => selectMode("system")}
	>
		{#if !noIcon}
			<div class="size-5 flex place-items-center justify-center">
				<DesktopIcon size={18} />
			</div>
			<Spacer inline w={8} />
		{/if}
		System
	</Button>
</Dropdown>

<!--
@component
A component to allow the user to select their dark mode preference.

[See Docs](https://geist-ui-svelte.dev/components/modeselector) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
