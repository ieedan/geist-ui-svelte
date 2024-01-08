<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Link from "$lib/link/Link.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<Text type="h3">Installation</Text>
<Spacer h={30} />
<Text type="h4">Project Setup</Text>
<Spacer h={10} />
<Text>Initialize a new SvelteKit project</Text>
<Spacer h={5} />
<Snippet
	width="500px"
	text={["npm create svelte@latest my-project", "cd my-project"]}
	type="lite" />
<Spacer h={10} />
<Text>Setup TailwindCSS</Text>
<Spacer h={5} />
<Snippet
	width="500px"
	text={["npm install -D tailwindcss postcss autoprefixer", "npx tailwindcss init -p"]}
	type="lite" />
<Spacer h={10} />
<Text>Configure TailwindCSS with our recommended settings.</Text>
<Spacer h={5} />
<Code
	>{@html `/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/geist-ui-svelte/**/*.{html,js,svelte,ts}",
	],
	theme: {
		fontFamily: {
			serif: ["JetBrains Mono", "Monospace"],
			sans: ["Inter", "sans-serif"],
		},
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
};`}</Code>
<Spacer h={10} />
<Text>Configure App.css</Text>
<Spacer h={5} />
<Code
	>{@html `@tailwind base;
@tailwind components;
@tailwind utilities;
	
/* Sets scroll bar to dark when in dark mode */
html.dark {
	color-scheme: dark;
}
	
/* Prevents layout shift when scrollbar is hidden */
html {
	scrollbar-gutter: stable;
}`}</Code>
<Spacer h={10} />
<Text>Install geist-ui-svelte</Text>
<Spacer h={5} />
<Snippet width="500px" text="npm i geist-ui-svelte" type="lite" />
<Spacer h={10} />
<Text>Now you're ready to start using our <Link to="/components" color>components</Link>!</Text>
