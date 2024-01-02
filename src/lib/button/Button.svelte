<script lang="ts">
	import Loading from "$lib/utils/Loading.svelte";
	import type { ButtonStyle, Size } from "$lib/types.js";
	import type { HTMLButtonAttributes } from "svelte/elements";

	export let disabled = false;
	export let style: ButtonStyle = "default";
	export let width: string | null = null;
	export let loading: boolean = false;
	export let ghost: boolean = false;
	export let size: Size = "md";
	export let type: HTMLButtonAttributes["type"] = "button";
</script>

<button
	{type}
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
	disabled={disabled || loading}
	data-style={style}
	data-size={size}
	data-ghost={ghost}
	data-loading={loading}
	style="width: {width ? width : 'auto'};"
	class="transition-all rounded-md border px-4 group relative
	
	data-[size='lg']:h-[40px] data-[size='md']:h-[36px] data-[size='sm']:h-[32px]
	data-[size='xl']:h-[44px] data-[size='xs']:h-[28px] data-[size='lg']:text-lg data-[size='sm']:text-sm
	data-[size='xl']:text-2xl data-[size='xs']:text-xs

	disabled:data-[loading=false]:dark:border-gray-900 disabled:data-[loading=false]:dark:bg-gray-925
	disabled:data-[loading=false]:dark:text-gray-600 disabled:data-[loading=false]:cursor-not-allowed
	disabled:data-[loading=false]:border-gray-100 disabled:data-[loading=false]:bg-gray-50 disabled:data-[loading=false]:text-gray-300

	bg-gray-0 text-gray-999 border-gray-100 enabled:hover:bg-gray-100 dark:bg-gray-999
	dark:border-gray-900 enabled:hover:dark:bg-gray-900 dark:text-gray-0

	data-[style='secondary']:bg-gray-999 data-[style='secondary']:text-gray-0 data-[style='secondary']:border-gray-999
	data-[style='secondary']:enabled:hover:bg-transparent data-[style='secondary']:enabled:hover:text-gray-999
	data-[style='secondary']:dark:bg-gray-0 data-[style='secondary']:dark:text-gray-999
	data-[style='secondary']:enabled:hover:dark:bg-transparent data-[style='secondary']:dark:border-gray-0
	data-[style='secondary']:enabled:hover:dark:text-gray-0

	data-[style='secondary']:data-[ghost=true]:bg-transparent data-[style='secondary']:data-[ghost=true]:text-gray-999
	data-[style='secondary']:data-[ghost=true]:enabled:hover:bg-gray-999 data-[style='secondary']:data-[ghost=true]:enabled:hover:text-gray-0
	data-[style='secondary']:data-[ghost=true]:dark:bg-transparent data-[style='secondary']:data-[ghost=true]:dark:text-gray-0
	data-[style='secondary']:data-[ghost=true]:enabled:hover:dark:bg-gray-0 data-[style='secondary']:data-[ghost=true]:enabled:hover:dark:text-gray-999

	data-[style='secondary-light']:border-gray-999 data-[style='secondary-light']:bg-gray-999
	data-[style='secondary-light']:text-gray-0 data-[style='secondary-light']:enabled:hover:bg-gray-900
	data-[style='secondary-light']:dark:bg-gray-0 data-[style='secondary-light']:dark:border-gray-0
	data-[style='secondary-light']:dark:text-gray-999 data-[style='secondary-light']:enabled:hover:dark:bg-gray-50

	data-[style='secondary-light']:data-[ghost=true]:bg-transparent data-[style='secondary-light']:data-[ghost=true]:text-gray-999
	data-[style='secondary-light']:data-[ghost=true]:enabled:hover:bg-gray-999 data-[style='secondary-light']:data-[ghost=true]:enabled:hover:text-gray-0
	data-[style='secondary-light']:data-[ghost=true]:dark:bg-transparent data-[style='secondary-light']:data-[ghost=true]:dark:text-gray-0
	data-[style='secondary-light']:data-[ghost=true]:enabled:hover:dark:bg-gray-0 data-[style='secondary-light']:data-[ghost=true]:enabled:hover:dark:text-gray-999

	data-[style='success']:bg-blue-600 data-[style='success']:text-gray-0 data-[style='success']:border-blue-600
	data-[style='success']:enabled:hover:bg-transparent data-[style='success']:enabled:hover:text-blue-600

	data-[style='success']:data-[ghost=true]:bg-transparent data-[style='success']:data-[ghost=true]:text-blue-600 data-[style='success']data-[ghost=true]::border-blue-600
	data-[style='success']:enabled:hover:data-[ghost=true]:bg-blue-600 data-[style='success']:enabled:hover:data-[ghost=true]:text-gray-0

	data-[style='warning']:bg-orange-300 data-[style='warning']:text-gray-0 data-[style='warning']:enabled:hover:bg-transparent
	data-[style='warning']:border-orange-300 data-[style='warning']:enabled:hover:text-orange-300
	data-[style='warning']:dark:bg-orange-400 data-[style='warning']:dark:text-gray-0 data-[style='warning']:enabled:hover:dark:bg-transparent
	data-[style='warning']:dark:border-orange-400 data-[style='warning']:enabled:hover:dark:text-orange-400

	data-[style='warning']:data-[ghost=true]:bg-transparent data-[style='warning']:data-[ghost=true]:text-orange-300
	data-[style='warning']:data-[ghost=true]:enabled:hover:text-gray-0 data-[style='warning']:data-[ghost=true]:enabled:hover:bg-orange-300
	data-[style='warning']:data-[ghost=true]:dark:bg-transparent data-[style='warning']:data-[ghost=true]:dark:text-orange-400
	data-[style='warning']:data-[ghost=true]:enabled:hover:dark:text-gray-0 data-[style='warning']:data-[ghost=true]:enabled:hover:dark:bg-orange-400

	data-[style='error']:bg-red-500 data-[style='error']:text-gray-0 data-[style='error']:enabled:hover:text-red-500
	data-[style='error']:border-red-500 data-[style='error']:enabled:hover:bg-transparent

	data-[style='error']:data-[ghost=true]:bg-transparent data-[style='error']:data-[ghost=true]:text-red-500 data-[style='error']:data-[ghost=true]:enabled:hover:text-gray-0
	data-[style='error']:data-[ghost=true]:border-red-500 data-[style='error']:enabled:hover:data-[ghost=true]:bg-red-500

	data-[style='abort']:bg-transparent data-[style='abort']:enabled:hover:bg-transparent data-[style='abort']:enabled:hover:dark:bg-transparent data-[style='abort']:border-transparent
	data-[style='abort']:text-gray-400 data-[style='abort']:dark:text-gray-600

  data-[ghost=true]:data-[type='secondary']:border-gray-100
    data-[type='abort']:border-transparent data-[type='secondary']:border-black data-[ghost=true]:data-[type='secondary']:bg-transparent
	data-[type='error']:bg-red-500 data-[type='secondary']:bg-black data-[type='success']:bg-blue-500 data-[type='warning']:bg-orange-300">
	{#if loading}
		<Loading class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
	{/if}
	<div class="group-data-[loading=true]:opacity-0">
		<slot />
	</div>
</button>

<!--
@component
To do: Docs 
-->
