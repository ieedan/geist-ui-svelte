<script lang="ts">
	import { page } from "$app/stores";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import type { Route } from "$lib/types.js";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let name: string;
	export let slug: string;
	export let routes: Route[] | undefined = undefined;
	export let expanded = false;
	export let nested = false;
	export let hidden = false;

	$: active = routes
		? $page.url.pathname.startsWith(slug)
		: $page.url.href.replace($page.url.origin, "") == slug;

	const toggleExpanded = () => (expanded = !expanded);
</script>

<div
	class="flex w-full flex-col data-[hidden=true]:hidden data-[nested=true]:pl-4"
	data-nested={nested}
	data-hidden={hidden}
>
	<div class="group flex place-items-center justify-between">
		<a
			href={slug}
			data-active={active}
			on:click={() => dispatch("navigated")}
			class="w-full rounded-md px-2 py-2 text-gui-foreground-muted transition-all
    		data-[active=true]:text-gui-success"
		>
			{name}
		</a>
		{#if routes}
			<button on:click={toggleExpanded}>
				<div
					class="transition-all hover:text-gui-foreground-primary data-[show=false]:-rotate-90
					text-gui-foreground-muted data-[show=true]:text-gui-foreground-primary"
					data-show={expanded}
				>
					<ChevronIcon rotation="90deg" size={20} />
				</div>
			</button>
		{/if}
	</div>
	<div
		class="border-l data-[show=false]:hidden border-gui-border"
		data-show={expanded}
	>
		{#if routes}
			{#each routes as subRoute}
				<svelte:self
					on:navigated={() => dispatch("navigated")}
					{...{ ...subRoute, nested: true }}
				/>
			{/each}
		{/if}
	</div>
</div>
