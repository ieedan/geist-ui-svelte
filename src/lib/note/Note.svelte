<script lang="ts">
	import type { Color } from "$lib/types.js";

	export let color: Color = "default";
	export let label = true;
</script>

<span
	data-style={color}
	class="border block px-2 py-2 rounded-md border-gray-100 dark:border-gray-900 text-gray-600 dark:text-gray-400
    
    data-[style='success']:border-blue-600 data-[style='success']:text-blue-600
	data-[style='success']:dark:border-blue-600 data-[style='success']:dark:text-blue-600
    
    data-[style='warning']:border-orange-300 data-[style='warning']:text-orange-300
    data-[style='warning']:dark:border-orange-400 data-[style='warning']:dark:text-orange-400
    
    data-[style='error']:border-red-500 data-[style='error']:text-red-500
    data-[style='error']:dark:border-red-600 data-[style='error']:dark:text-red-600
    
    data-[style='secondary']:border-gray-999 data-[style='secondary']:text-gray-999
    data-[style='secondary']:dark:border-gray-0 data-[style='secondary']:dark:text-gray-0"
>
	{#if label}
		NOTE:
	{/if}
	<slot />
</span>

<!--
@component
A comment that stands out to the user.

[See Docs](https://geist-ui-svelte.dev/components/note) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->