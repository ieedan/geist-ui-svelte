<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Text from "$lib/text/Text.svelte";
	import Tabs from "$lib/tabs/Tabs.svelte";
	import TabItem from "$lib/tabs/TabItem.svelte";
	import Dropdown from "$lib/dropdown/Dropdown.svelte";
	import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
	import "../app.css";
	import Button from "$lib/button/Button.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
	import Page from "$lib/page/Page.svelte";

	let modeButtonRef: HTMLButtonElement;
	let modeVisible = false;
	let menuVisible = false;
</script>

<main>
	<Header sticky>
		<div class="flex place-items-center justify-between w-full px-6 max-w-5xl py-2">
			<a href="/"><Text type="h5">geist-ui-svelte</Text></a>
			<div class="hidden md:flex place-items-center">
				<Tabs border={false}>
					<TabItem href="/" activeForSubdirectories={false}>Home</TabItem>
					<TabItem href="/guide">Guide</TabItem>
					<TabItem href="/components">Components</TabItem>
				</Tabs>
			</div>
			<div>
				<div class="hidden md:flex place-items-center">
					<button
						bind:this={modeButtonRef}
						on:click={() => {
							modeVisible = true;
						}}
						class="dark:text-white">
						Mode
					</button>
					<Dropdown anchorRef={modeButtonRef} bind:visible={modeVisible}>
						<DropdownItem
							on:click={() => {
								document.documentElement.classList.add("dark");
							}}>
							Dark
						</DropdownItem>
						<DropdownItem
							on:click={() => {
								document.documentElement.classList.remove("dark");
							}}>
							Light
						</DropdownItem>
					</Dropdown>
				</div>
			</div>
			<div class="flex place-items-center md:hidden">
				<Button color="abort" on:click={() => (menuVisible = true)}
					><MenuIcon size={18} /></Button>
			</div>
		</div>
	</Header>
	<slot />
</main>
<Page bind:visible={menuVisible}>
	<div class="flex flex-col">
		<div
			class="flex w-full place-items-center justify-between px-6 py-4 border-b-transparent border-b">
			<a href="/"><Text type="h5">geist-ui-svelte</Text></a>
			<Button color="abort" on:click={() => (menuVisible = false)}
				><MenuIcon size={18} /></Button>
		</div>
		<a
			href="/"
			on:click={() => menuVisible = false}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
			dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Home</a>
		<a
			href="/guide"
			on:click={() => menuVisible = false}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Guide</a>
		<a
			href="/components"
			on:click={() => menuVisible = false}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Components</a>
	</div>
</Page>
