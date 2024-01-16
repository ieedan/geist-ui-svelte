<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import Text from "$lib/text/Text.svelte";
	import Tabs from "$lib/tabs/Tabs.svelte";
	import TabItem from "$lib/tabs/TabItem.svelte";
	import "../app.css";
	import "$lib/styles/geist-ui-svelte.css";
	import Button from "$lib/button/Button.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
	import Page from "$lib/page/Page.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import favicon from "$lib/assets/favicon.svg";
	import Modal from "$lib/modal/Modal.svelte";
	import Search from "$lib/search/Search.svelte";
	import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import CommandIcon from "$lib/icons/CommandIcon.svelte";
	import { goto } from "$app/navigation";
	import { ModeWatcher, setMode, userPrefersMode } from "mode-watcher";
	import { onMount } from "svelte";

	type Component = {
		slug: string;
		name: string;
	};

	const components: Component[] = process.env.COMPONENTS;

	let menuVisible = false;
	let currentPreference: "light" | "dark" | "system" = $userPrefersMode;
	let searchVisible = false;
	let search = "";
	let searchRef: Search;
	let searchDivRef: HTMLDivElement;

	$: foundComponents = components.filter(
		(a) =>
			(a.name.toLowerCase().startsWith(search.toLowerCase()) ||
				a.name.toLowerCase() == search.toLowerCase()) &&
			search != "",
	);

	const setPreference = (preference: "light" | "dark" | "system") => {
		setMode(preference);
	};

	const navigateSearch = (up: boolean) => {
		const children = Array.from(searchDivRef.children);

		let startIndex: number = -1;

		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.getAttribute("data-selected") == "true") {
				startIndex = i;
				child.setAttribute("data-selected", "false");
				break;
			}
		}

		let i = startIndex;

		if (up) {
			i--;
			if (i < 0) i = children.length - 1;
		} else {
			i++;
			if (i >= children.length) i = 0;
		}

		children[i].setAttribute("data-selected", "true");
	};

	const searchEnter = () => {
		const children = Array.from(searchDivRef.children) as HTMLAnchorElement[];

		children.forEach((child) => {
			if (child.getAttribute("data-selected") == "true") {
				goto(child.href);
				searchVisible = false;
				return;
			}
		});
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (e.ctrlKey && e.key.toLowerCase() == "k") {
			e.preventDefault();
			searchVisible = true;
		}

		if ((e.key == "ArrowDown" || e.key == "ArrowUp") && searchVisible) {
			e.preventDefault();
			navigateSearch(e.key == "ArrowUp");
		}

		if (e.key == "Enter" && searchVisible) {
			e.preventDefault();
			searchEnter();
		}
	};

	onMount(() => {
		currentPreference = $userPrefersMode;
	})
</script>

<svelte:document on:keydown={docKeydown} />

<ModeWatcher />
<main class="bg-gray-0 dark:bg-gray-999 min-h-svh">
	<Header sticky>
		<div
			class="flex justify-between place-items-center md:grid md:grid-cols-3 w-full px-6 max-w-5xl py-2 md:place-items-stretch md:justify-start">
			<div class="col-start-1 flex place-items-center justify-start">
				<a href="/" class="flex place-items-center gap-2">
					<img
						src={favicon}
						alt="geist-ui-svelte logo"
						class="size-6 rounded-full border border-gray-0 dark:border-gray-900" />
					<Text type="h5"
						>geist-ui-svelte <Text class="!hidden sm:!inline-block" type="small"
							>v{process.env.PACKAGE_VERSION}</Text
						></Text>
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
				<div
					class="hidden lg:flex place-items-center gap-1 text-gray-300 dark:text-gray-700 hover:cursor-help px-2">
					<CommandIcon size={16} />
					<Text color="secondary">K</Text>
				</div>
				<Button href="https://github.com/ieedan/geist-ui-svelte" target="_blank">
					<GithubIcon size={16} />
				</Button>
				<Select
					bind:value={currentPreference}
					on:change={(e) => {
						setPreference(e.detail.value);
					}}
					allowNone
					noIcon
					width="125px">
					<Option value="light">☀️ Light</Option>
					<Option value="dark">🌙 Dark</Option>
					<Option value="system">🖥️ System</Option>
				</Select>
			</div>
			<div class="flex place-items-center md:hidden col-start-2">
				<Button color="abort" on:click={() => (menuVisible = true)}>
					<MenuIcon size={18} />
				</Button>
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
			<Button color="abort" on:click={() => (menuVisible = false)}>
				<MenuIcon size={18} />
			</Button>
		</div>
		<a
			href="/"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
			dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Home
		</a>
		<a
			href="/guide"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Guide
		</a>
		<a
			href="/components"
			on:click={() => (menuVisible = false)}
			class="border-b border-gray-100 px-6 py-2 dark:border-gray-900 hover:bg-gray-50 transition-all
		dark:hover:bg-gray-950 text-gray-600 hover:text-gray-999 dark:text-gray-600 dark:hover:text-gray-0"
			>Components
		</a>
		<div class="flex place-items-center py-2 gap-2 px-6">
			<Button href="https://github.com/ieedan/geist-ui-svelte" target="_blank">
				<GithubIcon size={16} />
			</Button>
			<Select
				bind:value={currentPreference}
				on:change={(e) => {
					setPreference(e.detail.value);
				}}
				allowNone
				noIcon
				width="125px">
				<Option value="light">☀️ Light</Option>
				<Option value="dark">🌙 Dark</Option>
				<Option value="system">🖥️ System</Option>
			</Select>
		</div>
	</div>
</Page>
<Modal
	on:closed={() => (search = "")}
	on:opened={() => searchRef.focus()}
	bind:visible={searchVisible}
	class="md:w-[500px] md:h-fit py-2 px-2 md:top-1/4 md:translate-y-0">
	<Search bind:this={searchRef} placeholder="Search components..." bind:value={search} />
	{#if foundComponents.length > 0}
		<Spacer h={8} />
		<div
			bind:this={searchDivRef}
			class="flex flex-col pt-2 border-t border-gray-100 dark:border-gray-900">
			{#each foundComponents as { name, slug } (name)}
				<a
					data-key={name}
					data-selected={false}
					on:click={() => (searchVisible = false)}
					class="py-3 px-3 data-[selected=true]:dark:bg-gray-950
					data-[selected=true]:bg-gray-50 hover:bg-gray-50
					dark:hover:bg-gray-950 text-gray-400 hover:text-gray-999
					rounded-lg transition-all flex place-items-center gap-2 data-[selected=true]:text-gray-999
					dark:text-gray-600 dark:hover:text-gray-0 dark:data-[selected=true]:text-gray-0"
					href={slug}>
					<SvelteIcon size={16} />
					{name}
				</a>
			{/each}
		</div>
	{/if}
</Modal>
