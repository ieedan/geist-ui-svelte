<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Link from "$lib/link/Link.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import RadioTabs from "$lib/radiotabs/RadioTabs.svelte";
	import RadioTab from "$lib/radiotabs/RadioTab.svelte";
	import { onMount } from "svelte";

	const PACKAGE_MANAGER_KEY = "package-manager";

	type PackageManager = "npm" | "pnpm" | "bun";
	type PackageManagerRunCommand = "npx" | "pnpm dlx" | "bunx";

	// Assign npm as default value
	let packageManager: PackageManager = "npm";
	let runCommand: PackageManagerRunCommand;

	// Reactively set runCommand based on packageManager
	$: {
		switch (packageManager) {
			case "npm":
				runCommand = "npx";
				break;
			case "pnpm":
				runCommand = "pnpm dlx";
				break;
			case "bun":
				runCommand = "bunx";
				break;
		}
	}

	/* eslint-disable no-useless-escape */
	const importExample = `<script lang="ts">
	import "geist-ui-svelte/styles/geist-ui-svelte.css";
<\/script>

<slot/>`;

	/* eslint-disable no-useless-escape */
	const darkModeExample = `<script lang="ts">
	import "geist-ui-svelte/styles/geist-ui-svelte.css";
	import { ModeWatcher } from "mode-watcher";
<\/script>

<ModeWatcher />
<slot/>`;

	const savePreference = () => {
		localStorage.setItem(PACKAGE_MANAGER_KEY, packageManager);
	};

	onMount(() => {
		packageManager = (localStorage.getItem(PACKAGE_MANAGER_KEY) as PackageManager) ?? "npm";
	});
</script>

<Text type="h3">Installation</Text>
<Spacer h={10} />
<RadioTabs bind:selected={packageManager} on:change={savePreference}>
	<RadioTab id="npm">npm</RadioTab>
	<RadioTab id="pnpm">pnpm</RadioTab>
	<RadioTab id="bun">bun</RadioTab>
</RadioTabs>
<Spacer h={10} />
<Text type="h4">Project Setup</Text>
<Spacer h={10} />
<Text>Initialize a new SvelteKit project</Text>
<Spacer h={10} />
<Snippet
	width="550px"
	text={[`${packageManager} create vite@latest my-project`, "cd my-project"]}
	type="lite"
/>
<Spacer h={20} />
<Text>Setup TailwindCSS</Text>
<Spacer h={10} />
<Snippet
	width="550px"
	text={[
		`${packageManager} i -D tailwindcss postcss autoprefixer`,
		`${runCommand} tailwindcss init -p`,
	]}
	type="lite"
/>
<Spacer h={20} />
<Text>Configure TailwindCSS with our recommended settings.</Text>
<Spacer h={10} />
<Code
	lang="svelte"
	edits={[
		{ start: 4, end: 5, type: "add" },
		{ start: 9, end: 30, type: "add" },
	]}
	code={`/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/geist-ui-svelte/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				gray: {
					0: "#ffffff",
					50: "#f9f9f9",
					100: "#f2f2f2",
					200: "#d9d9d9",
					300: "#bfbfbf",
					400: "#a6a6a6",
					500: "#8c8c8c",
					600: "#737373",
					700: "#595959",
					800: "#404040",
					900: "#262626",
					925: "#1d1d1d",
					950: "#141414",
					999: "#000000",
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};`}
/>
<Spacer h={20} />
<Text>Install geist-ui-svelte</Text>
<Spacer h={10} />
<Snippet width="550px" text="{packageManager} i geist-ui-svelte" type="lite" />
<Spacer h={20} />
<Text>Import our CSS into <code>`/routes/+layout.svelte`</code></Text>
<Spacer h={10} />
<Code lang="ts" edits={[{ number: 2, type: "add" }]} code={importExample} />
<Spacer h={20} />
<Text>Setup Dark Mode (Optional)</Text>
<Spacer h={10} />
<Snippet width="550px" text="{packageManager} i mode-watcher" type="lite" />
<Spacer h={20} />
<Text>Add ModeWatcher component to <code>`/routes/+layout.svelte`</code></Text>
<Spacer h={10} />
<Code
	lang="ts"
	edits={[
		{ number: 3, type: "add" },
		{ number: 6, type: "add" },
	]}
	code={darkModeExample}
/>
<Spacer h={20} />
<Text>
	See additional docs for <code>`mode-watcher`</code>
	<Link to="https://github.com/svecosystem/mode-watcher" target="_blank" color>here</Link>. If you
	want to see an example of how to implement dark mode switching see
	<Link to="/components/lightswitch" color>here</Link>.
</Text>
<Spacer h={20} />
<Text>Now you're ready to start using our <Link to="/components" color>components!</Link></Text>
