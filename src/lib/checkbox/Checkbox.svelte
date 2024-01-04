<script lang="ts">
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import type { IconColor } from "$lib/types.js";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let checked = false;
	export let id: string = "";
	export let color: IconColor = "default";

	const toggle = () => {
		checked = !checked;
		dispatch("click");
		dispatch("change", { checked });
	};
</script>

<div class="flex place-items-center gap-2">
	<button
		on:click={toggle}
		{id}
		role="checkbox"
		aria-checked={checked}
		data-color={color}
		class="flex place-items-center justify-center border border-gray-200 dark:border-gray-800 rounded-md size-4 aria-checked:border-gray-999
        dark:aria-checked:border-gray-0 data-[color='success']:aria-checked:border-blue-500
        data-[color='warning']:aria-checked:border-orange-300 data-[color='secondary']:aria-checked:border-gray-200
        data-[color='secondary']:dark:aria-checked:border-gray-800 data-[ghost=true]:dark:aria-checked:border-gray-999
        data-[ghost=true]:aria-checked:border-gray-0 data-[color='warning']:dark:aria-checked:border-orange-400
        data-[color='error']:dark:aria-checked:border-red-600 aria-checked:bg-gray-999 dark:aria-checked:bg-gray-0
        data-[color='success']:aria-checked:bg-blue-500 data-[color='warning']:aria-checked:bg-orange-300
        data-[color='secondary']:aria-checked:bg-gray-200 data-[color='secondary']:dark:aria-checked:bg-gray-800
        data-[ghost=true]:dark:aria-checked:bg-gray-999 data-[ghost=true]:aria-checked:bg-gray-0
        data-[color='warning']:dark:aria-checked:bg-orange-400 data-[color='error']:aria-checked:bg-red-500
        data-[color='error']:dark:aria-checked:bg-red-600 data-[color='error']:aria-checked:border-red-500"
	>
		{#if checked}
			<CheckMarkIcon size={16} ghost />
		{/if}
	</button>
	<label for={id}><slot /></label>
</div>
