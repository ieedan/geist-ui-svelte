<script lang="ts">
	let showHoverBackground = false;
	let hoverBackgroundRef: HTMLDivElement;
	let elementRef: HTMLElement;

	let lastElement: HTMLElement;

	const hover = (e: MouseEvent) => {
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

	const scroll = (e: Event) => {
		hoverBackgroundRef.style.top = elementRef.offsetTop + 4 + "px";
		hoverBackgroundRef.style.height = lastElement.offsetHeight - 8 + "px";
		hoverBackgroundRef.style.width = lastElement.offsetWidth + "px";

		const scrollLeft = elementRef.scrollLeft;
		let offset = lastElement.offsetLeft - scrollLeft;

		hoverBackgroundRef.style.left = offset + "px";
	}
</script>

<div
	class="flex place-items-center border-b px-2 border-gray-100 overflow-hidden w-full
dark:border-gray-900 relative">
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<nav
		bind:this={elementRef}
		class="flex place-items-center transition-all overflow-x-auto scrollbar-hide"
		on:mouseover={hover}
		on:scroll={scroll}
		on:mouseleave={() => (showHoverBackground = false)}>
		<slot />
	</nav>
	<div
		bind:this={hoverBackgroundRef}
		class="absolute z-[0] rounded-md bg-gray-100 transition-all data-[show=false]:opacity-0 dark:bg-gray-900"
		data-show={showHoverBackground}></div>
</div>
