<script lang="ts">
	import { page } from "$app/stores";
	import { createEventDispatcher, onMount } from "svelte";

	const dispatch = createEventDispatcher();

	export let href: string | undefined = undefined;
	export let initialSelected: boolean = false;
	let selected: boolean = initialSelected;
	export let disabled: boolean = false;
	export let activeForSubdirectories = true;
	let ref: HTMLElement;

	$: isHash = href ? href.startsWith("#") : false;

	$: to = href ? trimLink(href) : null;

	$: active =
		href === $page.url.pathname ||
		(activeForSubdirectories && $page.url.pathname.startsWith(href ?? "")) ||
		(isHash &&
			($page.url.hash == href || ((href == "#" || href == "#/") && $page.url.hash == "")));

	const trimLink = (link: string) => {
		if (link[link.length - 1] == "/") {
			let slice = link.slice(0, link.length - 1);

			return slice;
		}

		return link;
	};

	const select = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		const parent = target.parentElement;

		if (!parent) return;

		const children = Array.from(parent.children);

		children.forEach((child) => {
			if (child.hasAttribute("aria-selected")) {
				child.setAttribute("aria-selected", "false");
			}
		});

		target.setAttribute("aria-selected", "true");

		dispatch("clicked");
	};

	const clicked = (e: MouseEvent) => {
		if (disabled) e.preventDefault();
	};
</script>

{#if to == undefined}
	<button
		type="button"
		bind:this={ref}
		class="z-[1] flex place-items-center justify-center px-3 py-3 text-sm text-gray-500
		transition-all hover:text-black aria-selected:text-black
		dark:text-gray-500 outline-none focus:outline-none
		dark:aria-selected:text-white disabled:hover:cursor-not-allowed disabled:!text-gray-300 disabled:dark:!text-gray-700
		dark:aria-[selected='false']:hover:text-white text-nowrap"
		on:click={select}
		{disabled}
		role="tab"
		aria-selected={selected}
	>
		<slot />
	</button>
{:else}
	<a
		{href}
		bind:this={ref}
		on:click={clicked}
		data-active={active}
		aria-disabled={disabled}
		class="z-[1] flex place-items-center justify-center px-3 py-3 text-sm text-gray-500
	transition-all hover:text-black data-[active=true]:text-black dark:text-gray-500 aria-disabled:hover:cursor-not-allowed
	aria-disabled:!text-gray-300 aria-disabled:dark:!text-gray-700 dark:data-[active=true]:text-white
	dark:data-[active=false]:hover:text-white text-nowrap outline-none focus:outline-none"
	>
		<slot />
	</a>
{/if}

<!--
@component
The tab component for the Tabs component.

[See Docs](https://geist-ui-svelte.dev/components/tabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
