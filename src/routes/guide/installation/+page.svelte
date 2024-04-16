<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Link from "$lib/link/Link.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import RadioTabs from "$lib/radiotabs/RadioTabs.svelte";
	import RadioTab from "$lib/radiotabs/RadioTab.svelte";
	import Card from "$lib/card/Card.svelte";
	import { onMount } from "svelte";

	const PACKAGE_MANAGER_KEY = "package-manager";

	let packageManager: keyof PackageManager = "npm";

	type PackageManager = {
		npm: string;
		bun: string;
		pnpm: string;
		yarn: string;
	};

	let packageManagers: PackageManager = {
		npm: "npx",
		bun: "bunx",
		pnpm: "pnpm dlx",
		yarn: "yarn dlx",
	};

	$: runCommand = packageManagers[packageManager];

	/* eslint-disable no-useless-escape */
	const importExample = `<script lang="ts">
	import "../app.pcss";
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
		packageManager =
			(localStorage.getItem(PACKAGE_MANAGER_KEY) as keyof PackageManager) ?? "npm";
	});
</script>

<Text type="h3">Installation</Text>
<Spacer h={10} />
<RadioTabs bind:selected={packageManager} on:change={savePreference} color="secondary">
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
	text={[`${packageManager} create svelte@latest my-project`, "cd my-project"]}
	type="transparent"
/>
<Spacer h={20} />
<Text>Setup TailwindCSS</Text>
<Spacer h={10} />
<Snippet width="550px" text={[`${runCommand} svelte-add@latest tailwindcss`]} type="transparent" />
<Spacer h={20} />
<Text>Configure TailwindCSS with our recommended settings.</Text>
<Spacer h={10} />
<Card>
	<Code
		lang="svelte"
		edits={[
			{ start: 5, end: 24, type: "add" },
			{ number: 28, type: "add" },
		]}
		code={`/** @type {import('tailwindcss').Config}*/
const config = {
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
};

module.exports = config;`}
	/>
</Card>
<Spacer h={20} />
<Text>Install geist-ui-svelte</Text>
<Spacer h={10} />
<Snippet width="550px" text="{packageManager} i geist-ui-svelte" type="transparent" />
<Spacer h={20} />
<Text>Import our CSS into <code>`/routes/+layout.svelte`</code></Text>
<Spacer h={10} />
<Card>
	<Code lang="ts" edits={[{ number: 3, type: "add" }]} code={importExample} />
</Card>
<Spacer h={20} />
<Text>Setup Dark Mode (Optional)</Text>
<Spacer h={10} />
<Snippet width="550px" text="{packageManager} i mode-watcher" type="transparent" />
<Spacer h={20} />
<Text>Add ModeWatcher component to <code>`/routes/+layout.svelte`</code></Text>
<Spacer h={10} />
<Card>
	<Code
		lang="ts"
		edits={[
			{ number: 3, type: "add" },
			{ number: 6, type: "add" },
		]}
		code={darkModeExample}
	/>
</Card>
<Spacer h={20} />
<Text>
	See additional docs for <code>`mode-watcher`</code>
	<Link to="https://github.com/svecosystem/mode-watcher" target="_blank" color>here</Link>. If you
	want to see an example of how to implement dark mode switching see
	<Link to="/components/lightswitch" color>here</Link>.
</Text>
<Spacer h={20} />
<Text>Now you're ready to start using our <Link to="/components" color>components!</Link></Text>
