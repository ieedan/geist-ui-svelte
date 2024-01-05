<script lang="ts">
	import { page } from "$app/stores";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let href: string | undefined = undefined;
	export let initialSelected: boolean = false;
	let selected: boolean = initialSelected;
	export let disabled: boolean = false;

	$: to = href ? trimLink(href) : null;

	$: active = href === $page.url.pathname;

	const trimLink = (link: string) => {
		if (link[link.length - 1] == "/") {
			let slice = link.slice(0, link.length - 1);

			return slice;
		}

		return link;
	};

	const click = (e: MouseEvent) => {
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
</script>

{#if to == undefined}
	<button
		class="z-[1] flex place-items-center justify-center border-b-2 border-transparent px-3 py-3 text-sm text-gray-600
		transition-all hover:text-black aria-selected:border-b-black aria-selected:text-black
		dark:text-gray-400 dark:aria-selected:border-b-white dark:aria-selected:text-white
		dark:aria-[selected='false']:hover:text-white text-nowrap"
		on:click={click}
		{disabled}
		role="tab"
		aria-selected={selected}>
		<slot />
	</button>
{:else}
	<a
		{href}
		aria-disabled={disabled}
		data-active={active}
		class="z-[1] flex place-items-center justify-center border-b-2 border-transparent px-3 py-3 text-sm text-gray-600
	transition-all hover:text-black data-[active=true]:border-b-black data-[active=true]:text-black
	dark:text-gray-400 dark:data-[active=true]:border-b-white dark:data-[active=true]:text-white
	dark:data-[active=false]:hover:text-white text-nowrap">
		<slot />
	</a>
{/if}
