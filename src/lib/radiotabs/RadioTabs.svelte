<script lang="ts">
	import { onMount } from "svelte";

	let tabsRef: HTMLDivElement;
	export let selected: string = "";

	const setDefault = () => {
		const children = Array.from(tabsRef.children);

		let found = false;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (selected != "") {
				if (selected == child.id) {
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
			selected = children[0].id;
			children[0].setAttribute("aria-selected", "true");
		}
	};

	const clicked = (e: MouseEvent) => {
		const target = e.target as HTMLElement;

		if (!target) return;

		if (target.tagName != "BUTTON" || target.getAttribute("role") != "tab") return;

		selected = target.id;
	};

	onMount(() => {
		setDefault();

		tabsRef.addEventListener("click", clicked);
	});
</script>

<div
	bind:this={tabsRef}
	role="tablist"
	class="border border-gray-100 dark:border-gray-900 bg-gray-0
    dark:bg-gray-999 rounded-md p-1 w-fit flex place-items-center gap-1"
>
	<slot />
</div>
