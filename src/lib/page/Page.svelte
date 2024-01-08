<script lang="ts">
	import { onMount } from "svelte";

	let pageRef: HTMLDivElement;
	export let visible = false;

	$: {
		if (typeof window !== "undefined" && document) {
			document.body.classList.toggle("overflow-hidden", visible);
		}
	}

	const hide = () => {
		visible = false;
		document.body.classList.toggle("overflow-hidden", visible);
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (e.key == "Escape") hide();
	};

	onMount(() => {
		if (visible) {
			document.body.classList.add("overflow-hidden");
		}
	});
</script>

<svelte:document on:keydown={docKeydown} />

<div
	data-show={visible}
	role="dialog"
	bind:this={pageRef}
	class="bg-gray-0 dark:bg-gray-999 max-w-full w-full bottom-0
	 fixed top-0 left-0 transition-all z-50 data-[show=false]:opacity-0 data-[show=false]:pointer-events-none
    border-gray-100 border dark:border-gray-900">
	<slot />
</div>
