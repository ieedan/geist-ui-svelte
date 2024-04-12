<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

	const dispatch = createEventDispatcher();

	$: {
		if (visible) {
			dispatch("opened");
		} else {
			dispatch("closed");
		}
	}

	export let ariaLabel: string = "modal";
	export let visible = false;
	/** Customize the width of the modal here
	 *
	 *  ```svelte
	 *      <Modal ... class="h-3/4 sm:w-[640px] sm:h-[522px]"/>
	 *  ```
	 */
	let className: string = "";
	export { className as class };

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
		if (e.key == "Escape" && visible) hide();
	};

	onMount(() => {
		if (visible) {
			document.body.classList.add("overflow-hidden");
		}
	});
</script>

<svelte:document on:keydown={docKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	data-show={visible}
	on:click={hide}
	class="fixed left-0 top-0 z-[49] h-screen w-full bg-gui-background transition-all
    data-[show=false]:pointer-events-none data-[show=false]:opacity-0
    data-[show=true]:opacity-80 print:hidden"
></div>

<div
	data-show={visible}
	aria-label={ariaLabel}
	role="dialog"
	class="bg-gui-background border-gui-border border-t max-w-full w-full bottom-0 left-0 fixed sm:top-1/2 transition-all
    sm:-translate-x-1/2 sm:left-1/2 sm:-translate-y-1/2 z-50 data-[show=false]:opacity-0 data-[show=false]:sm:scale-90
	data-[show=false]:pointer-events-none data-[show=false]:scale-95 sm:rounded-xl sm:border {className}"
>
	<slot />
</div>

<!--
@component
Shows a popup and fades the background.

[See Docs](https://geist-ui-svelte.dev/components/modal) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
