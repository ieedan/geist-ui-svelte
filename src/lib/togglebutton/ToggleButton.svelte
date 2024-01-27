<script lang="ts">
	import type { Size } from "$lib/types.js";
	import { createEventDispatcher } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	const dispatch = createEventDispatcher();

	export let toggled = false;
	export let disabled = false;
	export let color: "default" | "secondary" | "success" | "warning" | "error" = "default";
	export let size: Size = "md";
	export let square: boolean = false;
	let className: string = "";
	export { className as class };
	export let type: HTMLButtonAttributes["type"] = "button";

	const toggle = () => {
		toggled = !toggled;
		dispatch("toggled", toggled);
	};
</script>

<button
	{...$$restProps}
	on:click={toggle}
	{type}
	{disabled}
	data-size={size}
	data-color={color}
	data-toggled={toggled}
	data-square={square}
	class="flex place-items-center justify-center transition-all w-fit px-2 py-2 rounded-md data-[toggled=true]:bg-gray-100 data-[toggled=true]:dark:bg-gray-900
    data-[toggled=false]:dark:text-gray-700 data-[toggled=false]:text-gray-300 data-[toggled=true]:text-gray-999 data-[toggled=true]:dark:text-gray-0
    
    data-[size='lg']:min-h-[40px] data-[size='md']:min-h-[36px] data-[size='sm']:min-h-[32px]
    data-[size='xl']:min-h-[44px] data-[size='xs']:min-h-[28px] data-[size='lg']:text-lg data-[size='sm']:text-sm
	data-[size='xl']:text-2xl data-[size='xs']:text-xs
    
    data-[square=true]:data-[size='lg']:min-w-[40px] data-[square=true]:data-[size='md']:min-w-[36px]
	data-[square=true]:data-[size='sm']:min-w-[32px] data-[square=true]:data-[size='xs']:min-w-[28px]
	data-[square=true]:data-[size='xl']:min-w-[44px]

    data-[color='secondary']:data-[toggled=true]:bg-gray-50 data-[color='secondary']:data-[toggled=true]:dark:bg-gray-950
    
    data-[color='success']:data-[toggled=true]:bg-blue-600 data-[color='success']:data-[toggled=true]:dark:bg-blue-600
    data-[color='success']:data-[toggled=true]:text-gray-0 data-[color='success']:data-[toggled=true]:dark:text-gray-0

    data-[color='warning']:data-[toggled=true]:bg-orange-300 data-[color='warning']:data-[toggled=true]:dark:bg-orange-400
    data-[color='warning']:data-[toggled=true]:text-gray-0 data-[color='warning']:data-[toggled=true]:dark:text-gray-0

    data-[color='error']:data-[toggled=true]:bg-red-500 data-[color='error']:data-[toggled=true]:dark:bg-red-600
    data-[color='error']:data-[toggled=true]:text-gray-0 data-[color='error']:data-[toggled=true]:dark:text-gray-0
	whitespace-nowrap
    
    {className}"
>
	{#if toggled}
		<slot name="on" />
	{:else}
		<slot name="off" />
	{/if}
	<slot />
</button>

<!--
@component
A button component that stays solid or transparent based on its toggled state.

[See Docs](https://geist-ui-svelte.dev/components/togglebutton) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
