<script lang="ts">
	import type { Size } from "$lib/types.js";

	export let size: Size = "md";
</script>

<kbd
	data-size={size}
	class="inline-flex justify-center place-items-center gap-1 font-serif border rounded-md bg-gray-50 dark:text-gray-600 dark:bg-gray-925 dark:border-gray-800 p-1 text-gray-700
    data-[size='xs']:min-w-6 data-[size='xs']:min-h-6
    data-[size='sm']:min-w-7 data-[size='sm']:min-h-7
    data-[size='md']:min-w-8 data-[size='md']:min-h-8
    data-[size='lg']:min-w-9 data-[size='lg']:min-h-9
    data-[size='xl']:min-w-10 data-[size='xl']:min-h-10
    data-[size='xs']:text-xs data-[size='sm']:text-sm data-[size='md']:text-md
    data-[size='lg']:text-lg data-[size='xl']:text-xl"
>
	<slot />
</kbd>

<!--
@component
A component to signify to the user a keyboard command.

[See Docs](https://geist-ui-svelte.dev/components/key) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
