<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Text from "$lib/text/Text.svelte";
	import Tabs from "$lib/tabs/Tabs.svelte";
	import TabItem from "$lib/tabs/TabItem.svelte";
	import "../app.css";
	import Button from "$lib/button/Button.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
	import Page from "$lib/page/Page.svelte";
	import { ColorPreference, changePreference, getCurrentPreference } from "$lib/TS/dark-mode.js";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import { onMount } from "svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";

	let menuVisible = false;
	let currentPreference: ColorPreference;

	const setPreference = (preference: ColorPreference) => {
		changePreference(preference);
	};

	onMount(() => {
		currentPreference = getCurrentPreference();
	});
</script>

<main class="bg-gray-0 dark:bg-gray-999 min-h-svh">
	<Header sticky>
		<div
			class="flex justify-between place-items-center md:grid md:grid-cols-3 w-full px-6 max-w-5xl py-2 md:place-items-stretch md:justify-start"
		>
			<div class="col-start-1 flex place-items-center justify-start">
				<a href="/">
					<Text type="h5">geist-ui-svelte</Text>
				</a>
			</div>
			<div class="hidden md:flex place-items-center w-full justify-center md:col-start-2">
				<Tabs border={false}>
					<TabItem href="/" activeForSubdirectories={false}>Home</TabItem>
					<TabItem href="/guide">Guide</TabItem>
					<TabItem href="/components">Components</TabItem>
				</Tabs>
			</div>
			<div class="md:col-start-3 hidden md:flex gap-2 place-items-center justify-end">
				<Button href="https://github.com/ieedan/geist-ui-svelte" target="_blank"
					><GithubIcon size={16} /></Button
				>
				<Select
					bind:value={currentPreference}
					on:change={(e) => {
						setPreference(e.detail.value);
					}}
					allowNone
					noIcon
					width="125px"
				>
					<Option value={ColorPreference.light}>☀️ Light</Option>
					<Option value={ColorPreference.dark}>🌙 Dark</Option>
					<Option value={ColorPreference.OS}>🖥️ System</Option>
				</Select>
			</div>
			<div class="flex place-items-center md:hidden col-start-2">
				<Button color="abort" on:click={() => (menuVisible = true)}
					><MenuIcon size={18} /></Button
				>
			</div>
		</div>
	</Header>
	<slot />
</main>
<Page bind:visible={menuVisible}>
	<div class="flex flex-col">
		<div
			class="flex w-full place-items-center justify-between px-6 py-4 border-b-transparent border-b"
		>
			<a href="/"><Text type="h5">geist-ui-svelte</Text></a>
			<Button color="abort" on:click={() => (menuVisible = false)}
				><MenuIcon size={18} /></Button
			>
		</div>
		<a
			href="/"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
			dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Home</a
		>
		<a
			href="/guide"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Guide</a
		>
		<a
			href="/components"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Components</a
		>
		<div class="flex place-items-center py-2 gap-2 px-6">
			<Button href="https://github.com/ieedan/geist-ui-svelte" target="_blank"
				><GithubIcon size={16} /></Button
			>
			<Select
				bind:value={currentPreference}
				on:change={(e) => {
					setPreference(e.detail.value);
				}}
				allowNone
				noIcon
				width="125px"
			>
				<Option value={ColorPreference.light}>☀️ Light</Option>
				<Option value={ColorPreference.dark}>🌙 Dark</Option>
				<Option value={ColorPreference.OS}>🖥️ System</Option>
			</Select>
		</div>
	</div>
</Page>
