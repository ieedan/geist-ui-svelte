<script lang="ts">
	import type { Color, Size } from "$lib/types.js";

	export let type: Color = "default";
	export let background: string = "auto";
	export let text: string = "auto";
	export let size: Size = "md";

	export let ghost: boolean = false;
</script>

<span
	style="background-color: {background}; color: {text};"
	data-color={type}
	data-ghost={ghost}
	data-size={size}
	class="bg-gray-999 text-gray-0 dark:text-gray-0 dark:bg-gray-0 border
     data-[color='success']:bg-blue-500 data-[color='success']:border-blue-500
     data-[color='warning']:bg-orange-300 data-[color='warning']:border-orange-300
     data-[color='secondary']:bg-gray-200 data-[color='secondary']:border-gray-200
     data-[color='secondary']:dark:bg-gray-800 data-[color='secondary']:dark:border-gray-800
     data-[color='secondary']:dark:text-gray-0 data-[ghost=true]:dark:bg-gray-999
     data-[ghost=true]:bg-gray-0 data-[ghost=true]:data-[color='default']:border-gray-999
     data-[color='warning']:dark:bg-orange-400 data-[color='warning']:dark:border-orange-400
     data-[color='error']:bg-red-500 data-[color='error']:border-red-500
     data-[color='error']:dark:bg-red-600 data-[color='error']:dark:border-red-600
     data-[color='error']:data-[ghost=true]:dark:text-red-600 data-[color='error']:data-[ghost=true]:text-red-500
     data-[color='success']:data-[ghost=true]:dark:text-blue-500 data-[color='success']:data-[ghost=true]:text-blue-500
     data-[color='warning']:data-[ghost=true]:dark:text-orange-400 data-[color='warning']:data-[ghost=true]:text-orange-300
     data-[color='secondary']:data-[ghost=true]:dark:text-gray-800 data-[color='secondary']:data-[ghost=true]:text-gray-300
     data-[ghost=true]:data-[color='default']:text-gray-999 data-[ghost=true]:data-[color='default']:dark:text-gray-0
     data-[ghost=true]:data-[color='default']:dark:border-gray-0 data-[color='default']:dark:text-gray-999 border-gray-999
       rounded-2xl px-3 py-[2px] w-fit data-[size='lg']:text-lg data-[size='lg']:rounded-3xl data-[size='sm']:text-sm
       data-[size='xl']:text-2xl data-[size='xs']:text-xs data-[size='xl']:rounded-3xl data-[size='sm']:rounded-2xl"
	><slot /></span
>
