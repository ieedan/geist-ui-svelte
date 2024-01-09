<script lang="ts">
	import NavRoute from "$lib/nav-route/NavRoute.svelte";
	import { page } from "$app/stores";
	import type { Route, ShortRoute } from "$lib/types.js";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import Text from "$lib/text/Text.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import ArrowNavigation from "$lib/arrow-navigation/ArrowNavigation.svelte";
	let navigationExpanded = false;

	let navigationRef: HTMLElement;

	const routes: (Route | string)[] = [
		"GENERAL",
		{
			name: "Text",
			slug: "/components/text",
		},
		{
			name: "Button",
			slug: "/components/button",
		},
		{
			name: "Icons",
			slug: "/components/icons",
		},
		"INPUTS",
		{
			name: "Input",
			slug: "/components/input",
		},
		{
			name: "TextArea",
			slug: "/components/textarea",
		},
		{
			name: "Select",
			slug: "/components/select",
			routes: [
				{
					name: "Option",
					slug: "/components/select#option",
				},
			],
		},
		{
			name: "Checkbox",
			slug: "/components/checkbox",
		},
		{
			name: "Toggle",
			slug: "/components/toggle",
		},
		{
			name: "ButtonDropdown",
			slug: "/components/buttondropdown",
			routes: [
				{
					name: "ButtonDropdownItem",
					slug: "/components/buttondropdown#buttondropdownitem",
				},
			],
		},
		{
			name: "Search",
			slug: "/components/search",
		},
		"LAYOUT",
		{
			name: "Card",
			slug: "/components/card",
		},
		{
			name: "Fieldset",
			slug: "/components/fieldset",
		},
		{
			name: "Hero",
			slug: "/components/hero",
		},
		{
			name: "Center",
			slug: "/components/center",
		},
		{
			name: "Display",
			slug: "/components/display",
		},
		{
			name: "Divider",
			slug: "/components/divider",
		},
		{
			name: "Spacer",
			slug: "/components/spacer",
		},
		{
			name: "Header",
			slug: "/components/header",
		},
		{
			name: "Tabs",
			slug: "/components/tabs",
			routes: [
				{
					name: "TabItem",
					slug: "/components/tabs#tabitem",
				},
			],
		},
		{
			name: "Badge",
			slug: "/components/badge",
		},
		{
			name: "User",
			slug: "/components/user",
		},
		{
			name: "Image",
			slug: "/components/image",
		},
		{
			name: "Dot",
			slug: "/components/dot",
		},
		{
			name: "Link",
			slug: "/components/link",
		},
		{
			name: "Note",
			slug: "/components/note",
		},
		"INTERACTIVITY",
		{
			name: "Modal",
			slug: "/components/modal",
		},
		{
			name: "Drawer",
			slug: "/components/drawer",
		},
		{
			name: "Page",
			slug: "/components/page",
		},
		{
			name: "Dropdown",
			slug: "/components/dropdown",
			routes: [
				{
					name: "DropdownItem",
					slug: "/components/dropdown#dropdownitem",
				},
			],
		},
		{
			name: "Details",
			slug: "/components/details",
		},
		"UTILITIES",
		{
			name: "Key",
			slug: "/components/key",
		},
		{
			name: "Loading",
			slug: "/components/loading",
		},
		"CODE",
		{
			name: "Code",
			slug: "/components/code",
		},
		{
			name: "Snippet",
			slug: "/components/snippet",
		},
	];

	$: currentDoc = getCurrentDoc(routes, $page.url.href.replace($page.url.origin, ""));

	let next: ShortRoute | undefined;
	let last: ShortRoute | undefined;
	$: {
		if (currentDoc && currentDoc.index) {
			let l = routes[currentDoc.index - 1];
			if (!l || typeof l === "string") {
				last = undefined;
				// Skips over titles if encountered
				l = routes[currentDoc.index - 2];
				if (l && typeof l !== "string") {
					last = { slug: l.slug, name: l.name };
				}
			} else {
				last = { slug: l.slug, name: l.name };
			}
			let n = routes[currentDoc.index + 1];
			if (!n || typeof n === "string") {
				next = undefined;
				// Skips over titles if encountered
				n = routes[currentDoc.index + 2];
				if (n && typeof n !== "string") {
					next = { slug: n.slug, name: n.name };
				}
			} else {
				next = { slug: n.slug, name: n.name };
			}
		}
	}

	interface CurrentRoute extends Route {
		index?: number;
	}

	const getCurrentDoc = (
		rs: (CurrentRoute | string)[],
		path: string,
		ogIndex: number | undefined = undefined,
	): CurrentRoute | undefined => {
		for (let i = 0; i < rs.length; i++) {
			const r = rs[i];

			if (typeof r === "string") continue;

			const slug =
				r.slug[r.slug.length - 1] == "/" ? r.slug.slice(0, r.slug.length - 1) : r.slug;
			const newPath = path[path.length - 1] == "/" ? path.slice(0, path.length - 1) : path;

			if (slug.toLowerCase() == newPath.toLowerCase()) {
				r.index = i;
				return r;
			}

			if (!r.routes) continue;

			const doc = getCurrentDoc(r.routes, path, ogIndex ? ogIndex : i);

			if (doc) return doc;
		}
	};

	const handleDocClick = (e: Event) => {
		if (!e.target) return;

		if (!navigationRef.contains(e.target as Node)) {
			navigationExpanded = false;
		}
	};

	const toggleNavigationExpanded = () => (navigationExpanded = !navigationExpanded);
</script>

<svelte:document
	on:keydown={(e) => {
		if (e.key == "Escape") {
			navigationExpanded = false;
		}
	}}
	on:click={handleDocClick}
/>

<svelte:head>
	<title>{currentDoc ? currentDoc.name : "Components"} - geist-ui-svelte</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex w-full max-w-5xl">
		<nav
			bind:this={navigationRef}
			class="fixed bottom-0 z-40 flex max-h-screen w-full flex-col place-items-end overflow-y-auto
			border-t border-gray-100 bg-white px-4
			py-3 md:top-[79px] md:w-[250px] md:border-0 md:bg-transparent dark:border-gray-900
			dark:bg-gray-999 md:dark:bg-transparent scrollbar-hide"
		>
			<div
				class="w-full flex-col data-[show=false]:hidden md:data-[show=false]:flex"
				data-show={navigationExpanded}
			>
				<div class="block md:hidden"><Spacer h={30} /></div>
				{#each routes as route, i}
					{#if typeof route === "string"}
						{#if i > 0}
							<Spacer h={25} />
						{/if}
						<Text color="abort" type="small" class="px-2 font-light">{route}</Text>
						<Spacer h={5} />
					{:else}
						<NavRoute {...route} />
					{/if}
				{/each}
			</div>
			<section class="h-5 data-[show=false]:hidden md:hidden" data-show={navigationExpanded}
			></section>
			<button
				class="sticky bottom-0 bg-gray-0 dark:bg-gray-999 flex w-full place-items-center justify-between rounded-md border border-gray-100
			px-2 py-1 md:hidden dark:border-gray-900"
				on:click={toggleNavigationExpanded}
			>
				<div class="flex place-items-center gap-2">
					{currentDoc?.name}
				</div>
				<div
					class="transition-all data-[show=false]:rotate-180 text-blue-500"
					data-show={navigationExpanded}
				>
					<ChevronIcon rotation="90deg" />
				</div>
			</button>
		</nav>
		<div class="slot-width relative w-full max-w-3xl md:left-[300px] px-4">
			<Spacer h={30} />
			<slot />
			<ArrowNavigation {next} {last} />
			<div class="block md:hidden"><Spacer h={59} /></div>
		</div>
	</div>
</div>

<style lang="postcss">
	@media (min-width: 768px) {
		.slot-width {
			width: calc(100% - 300px);
		}
	}

	.scrollbar-hide {
		-ms-overflow-style: none; /* Internet Explorer and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none; /* Chrome, Safari, and Opera */
	}

	::-webkit-scrollbar-corner {
		background: rgba(0, 0, 0, 0);
	}
</style>
