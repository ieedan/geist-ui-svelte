<script lang="ts">
	let showHoverBackground = false;
	let hoverBackgroundRef: HTMLDivElement;
	let elementRef: HTMLElement;

	const handleNavBarMouseOver = (e: MouseEvent) => {
		const node = e.target as HTMLElement;
		if (!node.hasAttribute("aria-selected") && !node.hasAttribute("data-active")) {
			showHoverBackground = false;
			return;
		}

		hoverBackgroundRef.style.top = elementRef.offsetTop + 4 + "px";
		hoverBackgroundRef.style.height = node.offsetHeight - 8 + "px";
		hoverBackgroundRef.style.width = node.offsetWidth + "px";

		let offset = node.offsetLeft;

		hoverBackgroundRef.style.left = offset + "px";

		showHoverBackground = true;
	};
</script>

<div
	class="scrollbar-hide flex place-items-center overflow-x-auto overflow-y-hidden border-b px-2 border-gray-100
dark:border-gray-900">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<nav
		bind:this={elementRef}
		class="flex place-items-center transition-all"
		on:mouseover={handleNavBarMouseOver}
		on:mouseleave={() => (showHoverBackground = false)}>
		<slot />
	</nav>
	<div
		bind:this={hoverBackgroundRef}
		class="absolute z-[0] rounded-md bg-gray-100 transition-all data-[show=false]:opacity-0 dark:bg-gray-900"
		data-show={showHoverBackground}></div>
</div>
