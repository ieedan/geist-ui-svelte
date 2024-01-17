<script lang="ts">
	import Loading from "$lib/loading/Loading.svelte";
	import type { ButtonColor, Size } from "$lib/types.js";
	import type { HTMLButtonAttributes } from "svelte/elements";

	export let disabled = false;
	export let color: ButtonColor = "default";
	export let loading: boolean = false;
	export let ghost: boolean = false;
	export let size: Size = "md";
	export let type: HTMLButtonAttributes["type"] = "button";
	export let href: string | undefined = undefined;
	export let width: string = "fit-content";
	export let square: boolean = false;
	export let proportional = false;
	let actualProportional = square ? false : proportional;
</script>

{#if href != undefined}
	<a
		{href}
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
		data-style={color}
		data-size={size}
		data-ghost={ghost}
		data-loading={loading}
		data-proportional={actualProportional}
		data-square={square}
		style="width: {width};"
		class="transition-all rounded-md border px-4 data-[proportional=true]:p-1 group relative
		flex place-items-center justify-center text-nowrap whitespace-nowrap data-[square=true]:p-0

		data-[size='lg']:min-h-[40px] data-[size='md']:min-h-[36px] data-[size='sm']:min-h-[32px]
		data-[size='xl']:min-h-[44px] data-[size='xs']:min-h-[28px] data-[size='lg']:text-lg data-[size='sm']:text-sm
		data-[size='xl']:text-2xl data-[size='xs']:text-xs

		data-[square=true]:data-[size='lg']:min-w-[40px] data-[square=true]:data-[size='md']:min-w-[36px]
		data-[square=true]:data-[size='sm']:min-w-[32px] data-[square=true]:data-[size='xs']:min-w-[28px]
		data-[square=true]:data-[size='xl']:min-w-[44px]

		data-[style='default']:bg-gray-0 data-[style='default']:text-gray-999 data-[style='default']:border-gray-100
		data-[style='default']:hover:bg-gray-100 data-[style='default']:dark:bg-gray-999
		data-[style='default']:dark:border-gray-900 data-[style='default']:hover:dark:bg-gray-900
		data-[style='default']:dark:text-gray-0

		data-[style='secondary']:bg-gray-999 data-[style='secondary']:text-gray-0 data-[style='secondary']:border-gray-999
		data-[style='secondary']:hover:bg-gray-0 data-[style='secondary']:hover:text-gray-999
		data-[style='secondary']:dark:bg-gray-0 data-[style='secondary']:dark:text-gray-999
		data-[style='secondary']:hover:dark:bg-gray-999 data-[style='secondary']:dark:border-gray-0
		data-[style='secondary']:hover:dark:text-gray-0

		data-[style='secondary']:data-[ghost=true]:bg-gray-0 data-[style='secondary']:data-[ghost=true]:text-gray-999
		data-[style='secondary']:data-[ghost=true]:hover:bg-gray-999 data-[style='secondary']:data-[ghost=true]:hover:text-gray-0
		data-[style='secondary']:data-[ghost=true]:dark:bg-gray-999 data-[style='secondary']:data-[ghost=true]:dark:text-gray-0
		data-[style='secondary']:data-[ghost=true]:hover:dark:bg-gray-0 data-[style='secondary']:data-[ghost=true]:hover:dark:text-gray-999

		data-[style='secondary-light']:border-gray-999 data-[style='secondary-light']:bg-gray-999
		data-[style='secondary-light']:text-gray-0 data-[style='secondary-light']:hover:bg-gray-900
		data-[style='secondary-light']:dark:bg-gray-0 data-[style='secondary-light']:dark:border-gray-0
		data-[style='secondary-light']:dark:text-gray-999 data-[style='secondary-light']:hover:dark:bg-gray-100

		data-[style='secondary-light']:data-[ghost=true]:bg-gray-0 data-[style='secondary-light']:data-[ghost=true]:text-gray-999
		data-[style='secondary-light']:data-[ghost=true]:hover:bg-gray-999 data-[style='secondary-light']:data-[ghost=true]:hover:text-gray-0
		data-[style='secondary-light']:data-[ghost=true]:dark:bg-gray-999 data-[style='secondary-light']:data-[ghost=true]:dark:text-gray-0
		data-[style='secondary-light']:data-[ghost=true]:hover:dark:bg-gray-0 data-[style='secondary-light']:data-[ghost=true]:hover:dark:text-gray-999

		data-[style='success']:bg-blue-600 data-[style='success']:text-gray-0 data-[style='success']:border-blue-600
		data-[style='success']:hover:bg-gray-0 data-[style='success']:hover:text-blue-600 data-[style='success']:hover:dark:bg-gray-999

		data-[style='success']:data-[ghost=true]:bg-gray-0 data-[style='success']:data-[ghost=true]:text-blue-600 data-[style='success']data-[ghost=true]::border-blue-600
		data-[style='success']:hover:data-[ghost=true]:bg-blue-600 data-[style='success']:hover:data-[ghost=true]:text-gray-0 data-[style='success']:data-[ghost=true]:dark:bg-gray-999

		data-[style='success-light']:bg-blue-600 data-[style='success-light']:text-gray-0 data-[style='success-light']:border-blue-600
		data-[style='success-light']:hover:bg-blue-500 data-[style='success-light']:hover:border-blue-500

		data-[style='success-light']:data-[ghost=true]:bg-gray-0 data-[style='success-light']:data-[ghost=true]:text-blue-600 data-[style='success-light']data-[ghost=true]::border-blue-600
		data-[style='success-light']:hover:data-[ghost=true]:bg-blue-600 data-[style='success-light']:hover:data-[ghost=true]:text-gray-0 data-[style='success-light']:data-[ghost=true]:dark:bg-gray-999

		data-[style='warning']:bg-orange-300 data-[style='warning']:text-gray-0 data-[style='warning']:hover:bg-gray-0
		data-[style='warning']:border-orange-300 data-[style='warning']:hover:text-orange-300
		data-[style='warning']:dark:bg-orange-400 data-[style='warning']:dark:text-gray-0 data-[style='warning']:hover:dark:bg-gray-999
		data-[style='warning']:dark:border-orange-400 data-[style='warning']:hover:dark:text-orange-400

		data-[style='warning']:data-[ghost=true]:bg-gray-0 data-[style='warning']:data-[ghost=true]:text-orange-300
		data-[style='warning']:data-[ghost=true]:hover:text-gray-0 data-[style='warning']:data-[ghost=true]:hover:bg-orange-300
		data-[style='warning']:data-[ghost=true]:dark:bg-gray-999 data-[style='warning']:data-[ghost=true]:dark:text-orange-400
		data-[style='warning']:data-[ghost=true]:hover:dark:text-gray-0 data-[style='warning']:data-[ghost=true]:hover:dark:bg-orange-400

		data-[style='warning-light']:bg-orange-300 data-[style='warning-light']:text-gray-0 data-[style='warning-light']:hover:bg-orange-200
		data-[style='warning-light']:border-orange-300 data-[style='warning-light']:hover:border-orange-200
		data-[style='warning-light']:dark:bg-orange-400 data-[style='warning-light']:dark:text-gray-0 data-[style='warning-light']:hover:dark:bg-orange-300
		data-[style='warning-light']:dark:border-orange-400 data-[style='warning-light']:hover:dark:border-orange-300

		data-[style='warning-light']:data-[ghost=true]:bg-gray-0 data-[style='warning-light']:data-[ghost=true]:text-orange-300
		data-[style='warning-light']:data-[ghost=true]:hover:text-gray-0 data-[style='warning-light']:data-[ghost=true]:hover:bg-orange-300
		data-[style='warning-light']:data-[ghost=true]:dark:bg-gray-999 data-[style='warning-light']:data-[ghost=true]:dark:text-orange-400
		data-[style='warning-light']:data-[ghost=true]:hover:dark:text-gray-0 data-[style='warning-light']:data-[ghost=true]:hover:dark:bg-orange-400

		data-[style='error']:bg-red-500 data-[style='error']:text-gray-0 data-[style='error']:hover:text-red-500
		data-[style='error']:border-red-500 data-[style='error']:hover:bg-gray-0 data-[style='error']:hover:dark:bg-gray-999
		data-[style='error']:dark:border-red-600 data-[style='error']:dark:bg-red-600

		data-[style='error']:data-[ghost=true]:bg-gray-0 data-[style='error']:data-[ghost=true]:text-red-500 data-[style='error']:data-[ghost=true]:hover:text-gray-0
		data-[style='error']:data-[ghost=true]:border-red-500 data-[style='error']:data-[ghost=true]:hover:bg-red-500 data-[style='error']:data-[ghost=true]:dark:bg-gray-999
		data-[style='error']:data-[ghost=true]:hover:dark:bg-red-600 data-[style='error']:data-[ghost=true]:dark:text-red-600 data-[style='error']:data-[ghost=true]:dark:border-red-600

		data-[style='error-light']:bg-red-500 data-[style='error-light']:text-gray-0
		data-[style='error-light']:border-red-500 data-[style='error-light']:hover:bg-red-400 data-[style='error-light']:hover:border-red-400
		data-[style='error-light']:hover:dark:bg-red-500 data-[style='error-light']:hover:dark:border-red-500
		data-[style='error-light']:dark:border-red-600 data-[style='error-light']:dark:bg-red-600

		data-[style='error-light']:data-[ghost=true]:bg-gray-0 data-[style='error-light']:data-[ghost=true]:text-red-500 data-[style='error-light']:data-[ghost=true]:hover:text-gray-0
		data-[style='error-light']:data-[ghost=true]:border-red-500 data-[style='error-light']:data-[ghost=true]:hover:bg-red-500 data-[style='error-light']:data-[ghost=true]:dark:bg-gray-999
		data-[style='error-light']:data-[ghost=true]:hover:dark:bg-red-600 data-[style='error-light']:data-[ghost=true]:dark:text-red-600 data-[style='error-light']:data-[ghost=true]:dark:border-red-600

		data-[style='abort']:bg-transparent data-[style='abort']:dark:bg-transparent data-[style='abort']:hover:bg-transparent
		data-[style='abort']:hover:dark:bg-transparent data-[style='abort']:border-transparent
		data-[style='abort']:text-gray-400 data-[style='abort']:dark:text-gray-600"
	>
		{#if loading}
			<Loading
				size="sm"
				class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
			/>
		{/if}
		<div class="group-data-[loading=true]:opacity-0 flex place-items-center justify-center">
			<slot />
		</div>
	</a>
{:else}
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
		data-style={color}
		data-size={size}
		data-ghost={ghost}
		data-loading={loading}
		data-proportional={actualProportional}
		data-square={square}
		style="width: {width};"
		class="transition-all rounded-md border px-4 data-[proportional=true]:p-1 group relative data-[square=true]:p-0

		data-[size='lg']:min-h-[40px] data-[size='md']:min-h-[36px] data-[size='sm']:min-h-[32px]
		data-[size='xl']:min-h-[44px] data-[size='xs']:min-h-[28px] data-[size='lg']:text-lg data-[size='sm']:text-sm
		data-[size='xl']:text-2xl data-[size='xs']:text-xs

		data-[square=true]:data-[size='lg']:min-w-[40px] data-[square=true]:data-[size='md']:min-w-[36px]
		data-[square=true]:data-[size='sm']:min-w-[32px] data-[square=true]:data-[size='xs']:min-w-[28px]
		data-[square=true]:data-[size='xl']:min-w-[44px]

		disabled:data-[loading=false]:dark:border-gray-900 disabled:data-[loading=false]:dark:bg-gray-925
		disabled:data-[loading=false]:dark:text-gray-600 disabled:data-[loading=false]:cursor-not-allowed
		disabled:data-[loading=false]:border-gray-100 disabled:data-[loading=false]:bg-gray-50
		disabled:data-[loading=false]:text-gray-300

		data-[style='default']:bg-gray-0 data-[style='default']:text-gray-999 data-[style='default']:border-gray-100
		data-[style='default']:enabled:hover:bg-gray-100 data-[style='default']:dark:bg-gray-999
		data-[style='default']:dark:border-gray-900 data-[style='default']:enabled:hover:dark:bg-gray-900
		data-[style='default']:dark:text-gray-0

		data-[style='secondary']:bg-gray-999 data-[style='secondary']:text-gray-0 data-[style='secondary']:border-gray-999
		data-[style='secondary']:enabled:hover:bg-gray-0 data-[style='secondary']:enabled:hover:text-gray-999
		data-[style='secondary']:dark:bg-gray-0 data-[style='secondary']:dark:text-gray-999
		data-[style='secondary']:enabled:hover:dark:bg-gray-999 data-[style='secondary']:dark:border-gray-0
		data-[style='secondary']:enabled:hover:dark:text-gray-0

		data-[style='secondary']:data-[ghost=true]:bg-gray-0 data-[style='secondary']:data-[ghost=true]:text-gray-999
		data-[style='secondary']:data-[ghost=true]:enabled:hover:bg-gray-999 data-[style='secondary']:data-[ghost=true]:enabled:hover:text-gray-0
		data-[style='secondary']:data-[ghost=true]:dark:bg-gray-999 data-[style='secondary']:data-[ghost=true]:dark:text-gray-0
		data-[style='secondary']:data-[ghost=true]:enabled:hover:dark:bg-gray-0 data-[style='secondary']:data-[ghost=true]:enabled:hover:dark:text-gray-999

		data-[style='secondary-light']:border-gray-999 data-[style='secondary-light']:bg-gray-999
		data-[style='secondary-light']:text-gray-0 data-[style='secondary-light']:enabled:hover:bg-gray-900
		data-[style='secondary-light']:dark:bg-gray-0 data-[style='secondary-light']:dark:border-gray-0
		data-[style='secondary-light']:dark:text-gray-999 data-[style='secondary-light']:enabled:hover:dark:bg-gray-100

		data-[style='secondary-light']:data-[ghost=true]:bg-gray-0 data-[style='secondary-light']:data-[ghost=true]:text-gray-999
		data-[style='secondary-light']:data-[ghost=true]:enabled:hover:bg-gray-999 data-[style='secondary-light']:data-[ghost=true]:enabled:hover:text-gray-0
		data-[style='secondary-light']:data-[ghost=true]:dark:bg-gray-999 data-[style='secondary-light']:data-[ghost=true]:dark:text-gray-0
		data-[style='secondary-light']:data-[ghost=true]:enabled:hover:dark:bg-gray-0 data-[style='secondary-light']:data-[ghost=true]:enabled:hover:dark:text-gray-999

		data-[style='success']:bg-blue-600 data-[style='success']:text-gray-0 data-[style='success']:border-blue-600
		data-[style='success']:enabled:hover:bg-gray-0 data-[style='success']:enabled:hover:text-blue-600 data-[style='success']:enabled:hover:dark:bg-gray-999

		data-[style='success']:data-[ghost=true]:bg-gray-0
		data-[style='success']:data-[ghost=true]:text-blue-600
		data-[style='success']data-[ghost=true]::border-blue-600
		data-[style='success']:enabled:hover:data-[ghost=true]:bg-blue-600
		data-[style='success']:enabled:hover:data-[ghost=true]:text-gray-0
		data-[style='success']:data-[ghost=true]:dark:text-blue-600
		data-[style='success']data-[ghost=true]:dark:border-blue-600
		data-[style='success']:enabled:hover:data-[ghost=true]:dark:bg-blue-600
		data-[style='success']:enabled:hover:data-[ghost=true]:dark:text-gray-0
		data-[style='success']:data-[ghost=true]:dark:bg-gray-999

		data-[style='success-light']:bg-blue-600 data-[style='success-light']:text-gray-0 data-[style='success-light']:border-blue-600
		data-[style='success-light']:enabled:hover:bg-blue-500 data-[style='success-light']:enabled:hover:border-blue-500

		data-[style='success-light']:data-[ghost=true]:bg-gray-0
		data-[style='success-light']:data-[ghost=true]:text-blue-600
		data-[style='success-light']data-[ghost=true]::border-blue-600
		data-[style='success-light']:enabled:hover:data-[ghost=true]:bg-blue-600
		data-[style='success-light']:enabled:hover:data-[ghost=true]:text-gray-0
		data-[style='success-light']:data-[ghost=true]:dark:text-blue-600
		data-[style='success-light']data-[ghost=true]:dark:border-blue-600
		data-[style='success-light']:enabled:hover:data-[ghost=true]:dark:bg-blue-600
		data-[style='success-light']:enabled:hover:data-[ghost=true]:dark:text-gray-0
		data-[style='success-light']:data-[ghost=true]:dark:bg-gray-999

		data-[style='warning']:bg-orange-300 data-[style='warning']:text-gray-0 data-[style='warning']:enabled:hover:bg-gray-0
		data-[style='warning']:border-orange-300 data-[style='warning']:enabled:hover:text-orange-300
		data-[style='warning']:dark:bg-orange-400 data-[style='warning']:dark:text-gray-0 data-[style='warning']:enabled:hover:dark:bg-gray-999
		data-[style='warning']:dark:border-orange-400 data-[style='warning']:enabled:hover:dark:text-orange-400

		data-[style='warning']:data-[ghost=true]:bg-gray-0 data-[style='warning']:data-[ghost=true]:text-orange-300
		data-[style='warning']:data-[ghost=true]:enabled:hover:text-gray-0 data-[style='warning']:data-[ghost=true]:enabled:hover:bg-orange-300
		data-[style='warning']:data-[ghost=true]:dark:bg-gray-999 data-[style='warning']:data-[ghost=true]:dark:text-orange-400
		data-[style='warning']:data-[ghost=true]:enabled:hover:dark:text-gray-0 data-[style='warning']:data-[ghost=true]:enabled:hover:dark:bg-orange-400

		data-[style='warning-light']:bg-orange-300 data-[style='warning-light']:text-gray-0 data-[style='warning-light']:enabled:hover:bg-orange-200
		data-[style='warning-light']:border-orange-300 data-[style='warning-light']:enabled:hover:border-orange-200
		data-[style='warning-light']:dark:bg-orange-400 data-[style='warning-light']:dark:text-gray-0 data-[style='warning-light']:enabled:hover:dark:bg-orange-300
		data-[style='warning-light']:dark:border-orange-400 data-[style='warning-light']:enabled:hover:dark:border-orange-300

		data-[style='warning-light']:data-[ghost=true]:bg-gray-0 data-[style='warning-light']:data-[ghost=true]:text-orange-300
		data-[style='warning-light']:data-[ghost=true]:enabled:hover:text-gray-0 data-[style='warning-light']:data-[ghost=true]:enabled:hover:bg-orange-300
		data-[style='warning-light']:data-[ghost=true]:dark:bg-gray-999 data-[style='warning-light']:data-[ghost=true]:dark:text-orange-400
		data-[style='warning-light']:data-[ghost=true]:enabled:hover:dark:text-gray-0 data-[style='warning-light']:data-[ghost=true]:enabled:hover:dark:bg-orange-400

		data-[style='error']:bg-red-500 data-[style='error']:text-gray-0 data-[style='error']:enabled:hover:text-red-500
		data-[style='error']:border-red-500 data-[style='error']:enabled:hover:bg-gray-0 data-[style='error']:enabled:hover:dark:bg-gray-999
		data-[style='error']:dark:border-red-600 data-[style='error']:dark:bg-red-600

		data-[style='error']:data-[ghost=true]:bg-gray-0 data-[style='error']:data-[ghost=true]:text-red-500 data-[style='error']:data-[ghost=true]:enabled:hover:text-gray-0
		data-[style='error']:data-[ghost=true]:border-red-500 data-[style='error']:data-[ghost=true]:enabled:hover:bg-red-500 data-[style='error']:data-[ghost=true]:dark:bg-gray-999 data-[style='error']:data-[ghost=true]:enabled:hover:dark:bg-red-600
		data-[style='error']:data-[ghost=true]:dark:text-red-600 data-[style='error']:data-[ghost=true]:dark:border-red-600

		data-[style='error-light']:bg-red-500 data-[style='error-light']:text-gray-0
		data-[style='error-light']:border-red-500 data-[style='error-light']:enabled:hover:bg-red-400 data-[style='error-light']:enabled:hover:border-red-400
		data-[style='error-light']:enabled:hover:dark:bg-red-500 data-[style='error-light']:enabled:hover:dark:border-red-500
		data-[style='error-light']:dark:border-red-600 data-[style='error-light']:dark:bg-red-600

		data-[style='error-light']:data-[ghost=true]:bg-gray-0 data-[style='error-light']:data-[ghost=true]:text-red-500 data-[style='error-light']:data-[ghost=true]:enabled:hover:text-gray-0
		data-[style='error-light']:data-[ghost=true]:border-red-500 data-[style='error-light']:data-[ghost=true]:enabled:hover:bg-red-500 data-[style='error-light']:data-[ghost=true]:dark:bg-gray-999 data-[style='error-light']:data-[ghost=true]:enabled:hover:dark:bg-red-600
		data-[style='error-light']:data-[ghost=true]:dark:text-red-600 data-[style='error-light']:data-[ghost=true]:dark:border-red-600

		data-[style='abort']:bg-transparent data-[style='abort']:dark:bg-transparent data-[style='abort']:hover:bg-transparent
		data-[style='abort']:hover:dark:bg-transparent data-[style='abort']:border-transparent
		data-[style='abort']:text-gray-400 data-[style='abort']:dark:text-gray-600"
	>
		{#if loading}
			<Loading
				size="sm"
				class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
			/>
		{/if}
		<div class="group-data-[loading=true]:opacity-0 flex place-items-center justify-center">
			<slot />
		</div>
	</button>
{/if}
