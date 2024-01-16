<script lang="ts">
	export let hoverable = false;
	export let shadow = false;
	let className: string = "";
	export { className as class };

	export let color: "transparent" | "dark" | "secondary" | "success" | "warning" | "error" | "abort" = "transparent";
</script>

<div
	data-hoverable={hoverable}
	data-shadow={shadow}
	data-color={color}
	class="border rounded-lg ring-gray-100 dark:ring-gray-900 border-gray-100 dark:border-gray-900 
	p-4 data-[hoverable=true]:hover:ring-2 transition-all
    data-[shadow=true]:shadow-md data-[shadow=true]:border-transparent
	data-[shadow=true]:dark:border-gray-900 
	
	data-[color='dark']:bg-gray-999 data-[color='dark']:border-gray-999 
	data-[color='dark']:dark:bg-gray-0 data-[color='dark']:dark:border-gray-0
	data-[color='dark']:text-gray-0 data-[color='dark']:dark:text-gray-999
	data-[color='dark']:ring-gray-800 data-[color='dark']:dark:ring-gray-200

	data-[color='secondary']:bg-gray-700 data-[color='secondary']:border-gray-700
	data-[color='secondary']:dark:bg-gray-300 data-[color='secondary']:dark:border-gray-300
	data-[color='secondary']:text-gray-0 data-[color='secondary']:dark:text-gray-999
	data-[color='secondary']:ring-gray-500 data-[color='secondary']:dark:ring-gray-500

	data-[color='success']:bg-blue-600 data-[color='success']:border-blue-600
	data-[color='success']:dark:bg-blue-600 data-[color='success']:dark:border-blue-600
	data-[color='success']:text-gray-0 data-[color='success']:dark:text-gray-0
	data-[color='success']:ring-blue-500 data-[color='success']:dark:ring-blue-500

	data-[color='warning']:bg-orange-300 data-[color='warning']:border-orange-300
	data-[color='warning']:dark:bg-orange-400 data-[color='warning']:dark:orange-red-400
	data-[color='warning']:text-gray-0 data-[color='warning']:dark:text-gray-0
	data-[color='warning']:ring-orange-500 data-[color='warning']:dark:ring-orange-500

	data-[color='error']:bg-red-500 data-[color='error']:border-red-500
	data-[color='error']:dark:bg-red-600 data-[color='error']:dark:border-red-600
	data-[color='error']:text-gray-0 data-[color='error']:dark:text-gray-0
	data-[color='error']:ring-red-600 data-[color='error']:dark:ring-red-700

	data-[color='abort']:bg-gray-50 data-[color='abort']:border-gray-50
	data-[color='abort']:dark:bg-gray-950 data-[color='abort']:dark:border-gray-950
	data-[color='abort']:text-gray-999 data-[color='abort']:dark:text-gray-0
	data-[color='abort']:ring-gray-100 data-[color='abort']:dark:ring-gray-900

	{className}"
>
	<slot />
</div>
