<script lang="ts">
	import type { Size } from "$lib/types.js";

	export let type: "secondary" | "success" | "warning" | "error" = "secondary";
	export let size: Size = "md";
</script>

<span
	{...$$restProps}
	data-size={size}
	data-type={type}
	class="rounded-full data-[size='xs']:size-1 data-[size='sm']:size-2 data-[size='md']:size-3
	data-[size='lg']:size-4 data-[size='xl']:size-5 bg-gray-200 data-[type='success']:bg-blue-500
  data-[type='warning']:bg-orange-300
  data-[type='warning']:dark:bg-orange-400 data-[type='error']:bg-red-500
    data-[type='error']:dark:bg-red-600 inline-block"
></span>
