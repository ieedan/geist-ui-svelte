<script lang="ts">
	export let visible = false;
	export let placement: "top" | "bottom" | "right" | "left" = "right";

	const hide = () => {
		visible = false;
	};

	const docKeydown = (e: KeyboardEvent) => {
		if (e.key == "Escape") hide();
	};
</script>

<svelte:document on:keydown={docKeydown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	data-show={visible}
	on:click={hide}
	class="fixed left-0 top-0 z-[49] h-screen w-full bg-gray-0 transition-all
    data-[show=false]:pointer-events-none data-[show=false]:opacity-0
    data-[show=true]:opacity-80 print:hidden dark:bg-gray-999"></div>

<div
	data-show={visible}
	data-placement={placement}
	class="fixed data-[show=false]:pointer-events-none data-[show=false]:opacity-0 z-50
    data-[show=false]:data-[placement='left']:-translate-x-2 data-[show=false]:data-[placement='right']:translate-x-2
    data-[show=false]:data-[placement='top']:-translate-y-2 data-[show=false]:data-[placement='bottom']:translate-y-2
    transition-all data-[placement='top']:w-full data-[placement='top']:h-1/4 data-[placement='bottom']:w-full 
    data-[placement='bottom']:h-1/4 w-1/4 bg-gray-0 dark:bg-gray-999 h-svh data-[placement='bottom']:bottom-0
    data-[placement='bottom']:left-0 data-[placement='top']:left-0 data-[placement='top']:top-0 
    data-[placement='left']:left-0 data-[placement='left']:top-0 border-gray-100 dark:border-gray-900
    data-[placement='right']:right-0 data-[placement='right']:top-0
    data-[placement='left']:border-r data-[placement='right']:border-l
    data-[placement='bottom']:border-t data-[placement='top']:border-b">
	<slot />
</div>
