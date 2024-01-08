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
		"GETTING STARTED",
		{
			name: "Introduction",
			slug: "/guide/introduction",
		},
		{
			name: "Code Principals",
			slug: "/guide/core-principals",
		},
		{
			name: "Installation",
			slug: "/guide/installation",
		},
	];

	$: currentDoc = getCurrentDoc(routes, $page.url.href.replace($page.url.origin, ""));

	let next: ShortRoute | undefined;
	let last: ShortRoute | undefined;
	$: {
		if (currentDoc && currentDoc.index) {
			const l = routes[currentDoc.index - 1];
			if (!l || typeof l === "string") {
				last = undefined;
			} else {
				last = { slug: l.slug, name: l.name };
			}
			const n = routes[currentDoc.index + 1];
			if (!n || typeof n === "string") {
				next = undefined;
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
				if (!ogIndex) ogIndex = i;
				r.index = ogIndex;
				return r;
			}

			if (!r.routes) continue;

			if (!ogIndex) ogIndex = i;

			const doc = getCurrentDoc(r.routes, path, ogIndex);

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
	on:click={handleDocClick} />

<svelte:head>
	<title>{currentDoc?.name} - geist-ui-svelte</title>
</svelte:head>

<div class="flex min-h-svh justify-center">
	<div class="flex w-full max-w-5xl">
		<nav
			bind:this={navigationRef}
			class="fixed bottom-0 z-40 flex max-h-screen w-full flex-col place-items-end overflow-y-auto
			border-t border-gray-100 bg-white px-4
			py-3 md:top-[79px] md:w-[300px] md:border-0 md:bg-transparent dark:border-gray-900
			dark:bg-gray-999 md:dark:bg-transparent scrollbar-hide">
			<div
				class="w-full flex-col data-[show=false]:hidden md:data-[show=false]:flex"
				data-show={navigationExpanded}>
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
				class="flex w-full place-items-center justify-between rounded-md border border-gray-100
			px-2 py-1 md:hidden dark:border-gray-900"
				on:click={toggleNavigationExpanded}>
				<div class="flex place-items-center gap-2">
					{currentDoc?.name}
				</div>
				<div
					class="transition-all data-[show=false]:rotate-180 text-blue-500"
					data-show={navigationExpanded}>
					<ChevronIcon rotation="90deg" />
				</div>
			</button>
		</nav>
		<div class="slot-width relative w-full max-w-3xl md:left-[300px]">
			<Spacer h={30} />
			<slot />
			<ArrowNavigation {next} {last}/>
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
