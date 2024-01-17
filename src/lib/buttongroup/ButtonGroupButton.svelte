<script lang="ts">
	export let disabled = false;
</script>

<button
	{disabled}
	{...$$restProps}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	class="px-3 py-2 border-y first:border-l border-r last:border-l-0 last:rounded-r-md first:rounded-l-md
disabled:dark:border-gray-900 disabled:dark:bg-gray-925
disabled:dark:text-gray-600 disabled:cursor-not-allowed transition-all
disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-300

group-data-[size='lg']/gbd:text-lg group-data-[size='sm']/gbd:text-sm 
group-data-[size='xl']/gbd:text-2xl group-data-[size='xs']/gbd:text-xs

bg-gray-0 text-gray-999 border-gray-100 enabled:hover:bg-gray-100 dark:bg-gray-999
dark:border-gray-900 enabled:hover:dark:bg-gray-900 dark:text-gray-0

group-data-[style='secondary']/gbd:bg-gray-999 group-data-[style='secondary']/gbd:text-gray-0
group-data-[style='secondary']/gbd:border-gray-999 group-data-[style='secondary']/gbd:enabled:hover:bg-gray-0
group-data-[style='secondary']/gbd:enabled:hover:text-gray-999 group-data-[style='secondary']/gbd:dark:bg-gray-0
group-data-[style='secondary']/gbd:dark:text-gray-999 group-data-[style='secondary']/gbd:enabled:hover:dark:bg-gray-999
group-data-[style='secondary']/gbd:dark:border-gray-0 group-data-[style='secondary']/gbd:enabled:hover:dark:text-gray-0

group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:text-gray-999
group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-gray-999 group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0
group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999 group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:dark:text-gray-0
group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-gray-0 group-data-[style='secondary']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:text-gray-999

group-data-[style='secondary-light']/gbd:border-gray-999 group-data-[style='secondary-light']/gbd:bg-gray-999
group-data-[style='secondary-light']/gbd:text-gray-0 group-data-[style='secondary-light']/gbd:enabled:hover:bg-gray-900
group-data-[style='secondary-light']/gbd:dark:bg-gray-0 group-data-[style='secondary-light']/gbd:dark:border-gray-0
group-data-[style='secondary-light']/gbd:dark:text-gray-999 group-data-[style='secondary-light']/gbd:enabled:hover:dark:bg-gray-100

group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:text-gray-999
group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-gray-999 group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0
group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999 group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:dark:text-gray-0
group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-gray-0 group-data-[style='secondary-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:text-gray-999

group-data-[style='success']/gbd:bg-blue-600 group-data-[style='success']/gbd:text-gray-0 group-data-[style='success']/gbd:border-blue-600
group-data-[style='success']/gbd:enabled:hover:bg-gray-0 group-data-[style='success']/gbd:enabled:hover:text-blue-600 group-data-[style='success']/gbd:enabled:hover:dark:bg-gray-999

group-data-[style='success']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='success']/gbd:group-data-[ghost=true]/gbd:text-blue-600
group-data-[style='success']group-data-[ghost=true]/gbd::border-blue-600 group-data-[style='success']/gbd:enabled:hover:group-data-[ghost=true]/gbd:bg-blue-600
group-data-[style='success']/gbd:enabled:hover:group-data-[ghost=true]/gbd:text-gray-0 group-data-[style='success']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999

group-data-[style='success-light']/gbd:bg-blue-600 group-data-[style='success-light']/gbd:text-gray-0 group-data-[style='success-light']/gbd:border-blue-600
group-data-[style='success-light']/gbd:enabled:hover:bg-blue-500 group-data-[style='success-light']/gbd:enabled:hover:border-blue-500

group-data-[style='success-light']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='success-light']/gbd:group-data-[ghost=true]/gbd:text-blue-600
group-data-[style='success-light']group-data-[ghost=true]/gbd::border-blue-600 group-data-[style='success-light']/gbd:enabled:hover:group-data-[ghost=true]/gbd:bg-blue-600
group-data-[style='success-light']/gbd:enabled:hover:group-data-[ghost=true]/gbd:text-gray-0 group-data-[style='success-light']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999

group-data-[style='warning']/gbd:bg-orange-300 group-data-[style='warning']/gbd:text-gray-0 group-data-[style='warning']/gbd:enabled:hover:bg-gray-0
group-data-[style='warning']/gbd:border-orange-300 group-data-[style='warning']/gbd:enabled:hover:text-orange-300
group-data-[style='warning']/gbd:dark:bg-orange-400 group-data-[style='warning']/gbd:dark:text-gray-0 group-data-[style='warning']/gbd:enabled:hover:dark:bg-gray-999
group-data-[style='warning']/gbd:dark:border-orange-400 group-data-[style='warning']/gbd:enabled:hover:dark:text-orange-400

group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:text-orange-300
group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0 group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-orange-300
group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999 group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:dark:text-orange-400
group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:text-gray-0 group-data-[style='warning']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-orange-400

group-data-[style='warning-light']/gbd:bg-orange-300 group-data-[style='warning-light']/gbd:text-gray-0 group-data-[style='warning-light']/gbd:enabled:hover:bg-orange-200
group-data-[style='warning-light']/gbd:border-orange-300 group-data-[style='warning-light']/gbd:enabled:hover:border-orange-200
group-data-[style='warning-light']/gbd:dark:bg-orange-400 group-data-[style='warning-light']/gbd:dark:text-gray-0 group-data-[style='warning-light']/gbd:enabled:hover:dark:bg-orange-300
group-data-[style='warning-light']/gbd:dark:border-orange-400 group-data-[style='warning-light']/gbd:enabled:hover:dark:border-orange-300

group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:text-orange-300
group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0 group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-orange-300
group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999 group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:dark:text-orange-400
group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:text-gray-0 group-data-[style='warning-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-orange-400

group-data-[style='error']/gbd:bg-red-500 group-data-[style='error']/gbd:text-gray-0 group-data-[style='error']/gbd:enabled:hover:text-red-500
group-data-[style='error']/gbd:border-red-500 group-data-[style='error']/gbd:enabled:hover:bg-gray-0 group-data-[style='error']/gbd:enabled:hover:dark:bg-gray-999
group-data-[style='error']/gbd:dark:border-red-600 group-data-[style='error']/gbd:dark:bg-red-600

group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:text-red-500
group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0 group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:border-red-500
group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-red-500 group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999
group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-red-600 group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:dark:text-red-600
group-data-[style='error']/gbd:group-data-[ghost=true]/gbd:dark:border-red-600

group-data-[style='error-light']/gbd:bg-red-500 group-data-[style='error-light']/gbd:text-gray-0
group-data-[style='error-light']/gbd:border-red-500 group-data-[style='error-light']/gbd:enabled:hover:bg-red-400 group-data-[style='error-light']/gbd:enabled:hover:border-red-400
group-data-[style='error-light']/gbd:enabled:hover:dark:bg-red-500 group-data-[style='error-light']/gbd:enabled:hover:dark:border-red-500
group-data-[style='error-light']/gbd:dark:border-red-600 group-data-[style='error-light']/gbd:dark:bg-red-600

group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:bg-gray-0 group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:text-red-500
group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:text-gray-0 group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:border-red-500
group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:bg-red-500 group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:dark:bg-gray-999
group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:enabled:hover:dark:bg-red-600 group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:dark:text-red-600
group-data-[style='error-light']/gbd:group-data-[ghost=true]/gbd:dark:border-red-600

group-data-[style='abort']/gbd:bg-transparent group-data-[style='abort']/gbd:dark:bg-transparent group-data-[style='abort']/gbd:hover:bg-transparent
group-data-[style='abort']/gbd:hover:dark:bg-transparent group-data-[style='abort']/gbd:border-transparent
group-data-[style='abort']/gbd:text-gray-400 group-data-[style='abort']/gbd:dark:text-gray-600">
	<slot />
</button>

<!-- group-data-[color='secondary']/gbd: -->
