<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let href: string | undefined = undefined;
	export let initialSelected: boolean = false;
	let selected: boolean = initialSelected;
	export let disabled: boolean = false;
	export let activeForSubdirectories = true;

	$: to = href ? trimLink(href) : null;

	$: active =
		href === $page.url.pathname ||
		(activeForSubdirectories && $page.url.pathname.startsWith(href ?? ""));

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
		const target = e.target as HTMLAnchorElement;

		if (disabled) return;

		goto(target.href);
	};
</script>

{#if to == undefined}
	<button
		type="button"
		class="z-[1] flex place-items-center justify-center px-3 py-3 text-sm text-gui-foreground-secondary
		transition-all hover:text-gui-foreground-primary aria-selected:text-gui-foreground-primary
		outline-none focus:outline-none disabled:hover:cursor-not-allowed disabled:text-gui-foreground-muted text-nowrap"
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
		on:click|preventDefault={clicked}
		data-active={active}
		aria-disabled={disabled}
		class="z-[1] flex place-items-center justify-center px-3 py-3 text-sm text-gui-foreground-secondary
		transition-all hover:text-gui-foreground-primary data-[active=true]:text-gui-foreground-primary 
		aria-disabled:hover:cursor-not-allowed aria-disabled:text-gui-foreground-secondary text-nowrap 
		outline-none focus:outline-none"
	>
		<slot />
	</a>
{/if}

<!--
@component
The tab component for the Tabs component.

[See Docs](https://geist-ui-svelte.dev/components/tabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
