<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Link from "$lib/link/Link.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";

	/* eslint-disable no-useless-escape */
	const importExample = `<script lang="ts">
	import "geist-ui-svelte/styles/geist-ui-svelte.css";
<\/script>`;
</script>

<Text type="h3">Installation</Text>
<Spacer h={30} />
<Text type="h4">Project Setup</Text>
<Spacer h={10} />
<Text>Initialize a new SvelteKit project</Text>
<Spacer h={10} />
<Snippet width="550px" text={["npm create vite@latest my-project", "cd my-project"]} type="lite" />
<Spacer h={20} />
<Text>Setup TailwindCSS</Text>
<Spacer h={10} />
<Snippet
	width="550px"
	text={["npm install -D tailwindcss@3.4.0 postcss autoprefixer", "npx tailwindcss init -p"]}
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
<Snippet width="550px" text="npm i geist-ui-svelte" type="lite" />
<Spacer h={20} />
<Text>Import our CSS into <code>`/routes/+layout.svelte`</code></Text>
<Spacer h={10} />
<Code lang="ts" edits={[{ number: 2, type: "add" }]} code={importExample} />
<Spacer h={20} />
<Text>Now you're ready to start using our <Link to="/components" color>components!</Link></Text>
