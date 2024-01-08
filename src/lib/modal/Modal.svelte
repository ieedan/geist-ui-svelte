<script lang="ts">
	let dialogRef: HTMLDivElement;
	export let initialVisibility: boolean = false;
	let shown = initialVisibility;
	/** Customize the width of the modal here
	 *
	 *  ```svelte
	 *      <Modal ... class="h-3/4 sm:w-[640px] sm:h-[522px]"/>
	 *  ```
	 */
	let className: string = "";
	export { className as class };

	export const toggleShow = () => {
		shown = !shown;
		document.body.classList.toggle("overflow-hidden", shown);
	};

	export const show = () => {
		shown = true;
		document.body.classList.toggle("overflow-hidden", shown);
	};

	export const hide = () => {
		shown = false;
		document.body.classList.toggle("overflow-hidden", shown);
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (e.key == "Escape") hide();
	};
</script>

<svelte:document on:keydown={docKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	data-show={shown}
	on:click={hide}
	class="fixed left-0 top-0 z-[49] h-screen w-full bg-gray-400 transition-all
    data-[show=false]:pointer-events-none data-[show=false]:opacity-0
    data-[show=true]:opacity-80 print:hidden dark:bg-gray-999"
></div>

<div
	data-show={shown}
	role="dialog"
	bind:this={dialogRef}
	class="bg-gray-0 dark:bg-gray-999 max-w-full w-full bottom-0 left-0 fixed sm:top-1/2 transition-all
    sm:-translate-x-1/2 sm:left-1/2 sm:-translate-y-1/2 z-50 data-[show=false]:opacity-0 data-[show=false]:pointer-events-none
    sm:rounded-xl border-gray-100 border dark:border-gray-900 data-[show=false]:translate-y-1 {className}"
>
	<slot />
</div>
