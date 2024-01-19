<script lang="ts">
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import type { Color } from "$lib/types.js";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let checked = false;
	export let id: string | undefined = undefined;
	export let color: Color = "default";
	export let disabled: boolean = false;
	export let ring: boolean = false;

	const toggle = () => {
		checked = !checked;
		dispatch("click");
		dispatch("change", { checked });
	};
</script>

<input {...$$restProps} on:click on:change class="hidden" type="checkbox" bind:checked={checked}>
<label
	for={id}
	class="flex place-items-center gap-2 group aria-disabled:hover:cursor-not-allowed select-none hover:cursor-pointer"
	aria-disabled={disabled}
>
	<button
		type="button"
		on:click|preventDefault|stopPropagation={toggle}
		{id}
		role="checkbox"
		aria-checked={checked}
		data-color={color}
		{disabled}
		class="flex place-items-center justify-center border aria-[checked=false]:border-gray-200 dark:aria-[checked=false]:border-gray-800 rounded-md size-4
		data-[color='default']:aria-checked:border-gray-999 data-[color='default']:dark:aria-checked:border-gray-0
		data-[color='success']:aria-checked:border-blue-600 data-[color='success']:aria-checked:dark:border-blue-600
        data-[color='warning']:aria-checked:border-orange-300 data-[color='secondary']:aria-checked:border-gray-200
        data-[color='secondary']:dark:aria-checked:border-gray-800 data-[ghost=true]:dark:aria-checked:border-gray-999
        data-[ghost=true]:aria-checked:border-gray-0 data-[color='warning']:dark:aria-checked:border-orange-400
        data-[color='error']:dark:aria-checked:border-red-600 aria-checked:bg-gray-999 dark:aria-checked:bg-gray-0
        data-[color='success']:aria-checked:bg-blue-600 data-[color='warning']:aria-checked:bg-orange-300
		data-[color='success']:aria-checked:dark:bg-blue-600
        data-[color='secondary']:aria-checked:bg-gray-200 data-[color='secondary']:dark:aria-checked:bg-gray-800
        data-[ghost=true]:dark:aria-checked:bg-gray-999 data-[ghost=true]:aria-checked:bg-gray-0
        data-[color='warning']:dark:aria-checked:bg-orange-400 data-[color='error']:aria-checked:bg-red-500
        data-[color='error']:dark:aria-checked:bg-red-600 data-[color='error']:aria-checked:border-red-500
		disabled:bg-gray-50 disabled:hover:cursor-not-allowed disabled:aria-checked:data-[color]:bg-gray-300
		disabled:aria-checked:data-[color]:border-gray-300 disabled:dark:bg-gray-950 group
		disabled:dark:aria-checked:data-[color]:bg-gray-700 disabled:dark:aria-checked:data-[color]:border-gray-700
		text-gray-0 dark:text-gray-999 transition-all relative outline-none focus:outline-none
		data-[color='success']:text-gray-0 data-[color='success']:dark:text-gray-0
		data-[color='warning']:text-gray-0 data-[color='warning']:dark:text-gray-0
		data-[color='error']:text-gray-0 data-[color='error']:dark:text-gray-0
		data-[color='secondary']:text-gray-0 data-[color='secondary']:dark:text-gray-0"
	>
		{#if ring}
			<div
				class="absolute size-6 rounded-lg border-2 left-1/2 top-1/2 transition-all
			-translate-y-1/2 -translate-x-1/2 group-focus:opacity-100 opacity-0
			group-data-[color='success']:border-blue-600 group-data-[color='success']:dark:border-blue-600
			dark:border-gray-0 border-gray-999
			group-data-[color='warning']:border-orange-300 dark:group-data-[color='warning']:border-orange-400
			group-data-[color='error']:border-red-500 dark:group-data-[color='error']:border-red-600
			group-data-[color='secondary']:border-gray-200 dark:group-data-[color='secondary']:border-gray-800"
			></div>
		{/if}
		{#if checked}
			<CheckMarkIcon size={16} />
		{/if}
	</button>
	<span class="flex place-items-center justify-start"><slot /></span>
</label>
