<script lang="ts">
	import type { Column, DataItem } from "$lib/types.js";
	import { fly } from "svelte/transition";

	export let columns: Column[];
	export let data: DataItem[];
	export let animate = false;
	$: duration = animate ? 250 : 0;
</script>

<div role="table" class="w-full">
	<div
		class="border border-gray-100 dark:border-gray-900
        py-3 rounded-md px-2 dark:bg-gray-950 bg-gray-50"
	>
		<div role="row" class="flex place-items-center">
			{#each columns as column}
				<div class="w-full text-gray-600 dark:text-gray-600 font-light text-xs">
					{column.label.toUpperCase()}
				</div>
			{/each}
		</div>
	</div>
	<div>
		<!-- need to find a way to do keying in a user friendly way -->

		{#each data as row}
			<div
				transition:fly={{ y: 2, duration: duration }}
				role="row"
				class="flex place-items-center px-2 py-2 border-b
                border-gray-100 dark:border-gray-900 hover:bg-gray-50
                hover:dark:bg-gray-950 transition-all"
			>
				{#each columns as column}
					<div class="w-full text-gray-600 dark:text-gray-600">
						{row[column.property]}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
