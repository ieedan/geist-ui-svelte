<script lang="ts">
	import { onMount } from "svelte";

	export let visible = false;
	export let ariaLabel: string = "page";

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
	aria-label={ariaLabel}
	data-show={visible}
	role="dialog"
	class="bg-gray-0 dark:bg-gray-999 max-w-full w-full bottom-0
	 fixed top-0 left-0 transition-all z-50 data-[show=false]:opacity-0 data-[show=false]:pointer-events-none"
>
	<slot />
</div>

<!--
@component
Displays a page over the original content.

[See Docs](https://geist-ui-svelte.dev/components/page) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
