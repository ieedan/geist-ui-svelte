<script lang="ts">
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import type { Color } from "$lib/types.js";
	import Text from "$lib/text/Text.svelte";

	export let text: string | string[];
	export let width: string = "300px";
	export let type: Color = "default";
</script>

<div
	style="width: {width};"
	data-color={type}
	class="flex justify-between place-items-center font-serif border px-3 py-2 rounded-md border-gray-999 dark:border-gray-0 data-[color='success']:border-blue-500
	data-[color='warning']:border-orange-300 transition-all
	data-[color='secondary']:border-gray-200 data-[color='secondary']:dark:border-gray-800
	data-[ghost=true]:dark:border-gray-999 data-[ghost=true]:border-gray-0
	data-[color='warning']:dark:border-orange-400 data-[color='error']:border-red-500
	data-[color='error']:dark:border-red-600"
>
	<code class="flex flex-col">
		{#if Array.isArray(text)}
			{#each text as line}
				<Text type="span" color={type}><Text type="span" color={type}>$</Text>{line}</Text>
			{/each}
		{:else}
			<Text type="span" color={type}><Text type="span" color={type}>$</Text>{text}</Text>
		{/if}
	</code>
	<button>
		<CloneIcon size={16} {type} />
	</button>
</div>
