<script lang="ts">
	import { onMount } from "svelte";

	export let border: boolean = true;
	let showHoverBackground = false;
	let hoverBackgroundRef: HTMLDivElement;
	let selectedBorder: HTMLDivElement;
	let elementRef: HTMLElement;

	let lastElement: HTMLElement;

	const hover = (e: Event) => {
		const node = e.target as HTMLElement;
		if (!node.hasAttribute("aria-selected") && !node.hasAttribute("data-active")) {
			showHoverBackground = false;
			return;
		}

		lastElement = node;

		hoverBackgroundRef.style.top = elementRef.offsetTop + 4 + "px";
		hoverBackgroundRef.style.height = node.offsetHeight - 8 + "px";
		hoverBackgroundRef.style.width = node.offsetWidth + "px";

		const scrollLeft = elementRef.scrollLeft;
		let offset = node.offsetLeft - scrollLeft;

		hoverBackgroundRef.style.left = offset + "px";

		showHoverBackground = true;
	};

	const scroll = () => {
		hoverBackgroundRef.style.top = elementRef.offsetTop + 4 + "px";
		hoverBackgroundRef.style.height = lastElement.offsetHeight - 8 + "px";
		hoverBackgroundRef.style.width = lastElement.offsetWidth + "px";

		const scrollLeft = elementRef.scrollLeft;
		let offset = lastElement.offsetLeft - scrollLeft;

		hoverBackgroundRef.style.left = offset + "px";
	};

	const click = (e: MouseEvent) => {
		const node = e.target as HTMLElement;
		selectedTab(node);
	};

	const selectedTab = (node: HTMLElement) => {
		selectedBorder.style.top = elementRef.offsetTop + node.offsetHeight - 2 + "px";
		selectedBorder.style.width = node.offsetWidth + "px";

		const scrollLeft = elementRef.scrollLeft;
		let offset = node.offsetLeft - scrollLeft;

		selectedBorder.style.left = offset + "px";
	};

	onMount(() => {
		const children = Array.from(elementRef.children);

		for (let i = 0; i < children.length; i++) {
			const child = children[i] as HTMLElement;
			if (child.getAttribute("aria-selected") == "true") {
				selectedTab(child);
				return;
			}
		}
	});
</script>

<div
	data-border={border}
	class="flex place-items-center data-[border=true]:border-b border-gray-100 overflow-hidden
dark:border-gray-900 relative group/tabs"
>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<nav
		bind:this={elementRef}
		class="flex place-items-center transition-all overflow-x-auto scrollbar-hide"
		on:mouseover={hover}
		on:scroll={scroll}
		on:mouseleave={() => (showHoverBackground = false)}
		on:focusin={hover}
		on:focusout={() => (showHoverBackground = false)}
		on:click={click}
	>
		<slot />
	</nav>
	<div
		bind:this={selectedBorder}
		data-show={border}
		class="h-[2px] bg-gray-999 dark:bg-gray-0 transition-all absolute z-[0] hidden data-[show=true]:block"
	>
	</div>
	<div
		bind:this={hoverBackgroundRef}
		class="absolute z-[0] rounded-md bg-gray-100 transition-all data-[show=false]:opacity-0 dark:bg-gray-900"
		data-show={showHoverBackground}
	></div>
</div>

<!--
@component
A layout component for navigation.

[See Docs](https://geist-ui-svelte.dev/components/tabs) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
