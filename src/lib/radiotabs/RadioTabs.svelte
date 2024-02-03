<script lang="ts">
	import { cn } from "$lib/util/utils.js";
	import { createEventDispatcher, onMount } from "svelte";

	const dispatch = createEventDispatcher();

	let tabsRef: HTMLDivElement;
	export let selected: string = "";
	export let color: "primary" | "secondary" = "primary";
	let className: string = "";
	export { className as class };
	export let height = "48px";

	$: {
		if (tabsRef) {
			setDefault(selected);
		}
	}

	const setDefault = (v: string) => {
		const children = Array.from(tabsRef.children);

		let found = false;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (v != "") {
				if (v == child.id) {
					found = true;
					child.setAttribute("aria-selected", "true");
				} else {
					child.setAttribute("aria-selected", "false");
				}
			} else {
				if (child.getAttribute("aria-selected") == "true") {
					found = true;
					break;
				}
			}
		}

		if (!found) {
			v = children[0].id;
			children[0].setAttribute("aria-selected", "true");
		}
	};

	const clicked = (e: MouseEvent) => {
		const target = e.target as HTMLElement;

		if (!target) return;

		if (target.tagName != "BUTTON" || target.getAttribute("role") != "tab") return;

		selected = target.id;

		dispatch("change");
	};

	onMount(() => {
		setDefault(selected);

		tabsRef.addEventListener("click", clicked);
	});
</script>

<div
	bind:this={tabsRef}
	style="height: {height};"
	data-color={color}
	role="tablist"
	class={cn(
		`border border-gray-100 dark:border-gray-900 bg-gray-0 dark:bg-gray-999 
	rounded-md p-1 w-fit flex place-items-center gap-1 group`,
		className,
	)}
>
	<slot />
</div>

<!--
@component
A component for tab navigation.

[See Docs](https://geist-ui-svelte.dev/components/radiotabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
