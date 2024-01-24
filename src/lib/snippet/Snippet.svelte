<script lang="ts">
	import { scale } from "svelte/transition";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import type { Color } from "$lib/types.js";

	export let text: string | string[];
	export let width: string = "300px";
	export let type: Color | "dark" | "lite" | "subtle" | "transparent" = "default";
	export let symbol: string = "$";

	let copied = false;

	const copy = () => {
		let txt = "";
		if (Array.isArray(text)) {
			for (let i = 0; i < text.length; i++) {
				if (i > 0) {
					txt = txt + "\n" + text[i];
				} else {
					txt = text[i];
				}
			}
		} else {
			txt = text;
		}

		navigator.clipboard.writeText(txt).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 1000);
		});
	};
</script>

<div
	style="width: {width}; max-width: 100%;"
	data-color={type}
	class="flex justify-between place-items-start font-serif border px-3 py-[10px] rounded-md
	border-gray-999 dark:border-gray-0 data-[color='success']:border-blue-600
	data-[color='success']:dark:border-blue-600
	data-[color='warning']:border-orange-300 transition-all
	data-[color='secondary']:border-gray-300 data-[color='secondary']:dark:border-gray-700
	data-[color='warning']:dark:border-orange-400 data-[color='error']:border-red-500
	data-[color='error']:dark:border-red-600 data-[color='dark']:bg-gray-999
	data-[color='dark']:border-gray-999 data-[color='dark']:dark:border-gray-0
	data-[color='dark']:dark:bg-gray-0 data-[color='lite']:dark:bg-gray-950
	data-[color='lite']:dark:border-gray-900 data-[color='lite']:bg-gray-50
	data-[color='lite']:border-gray-200 data-[color='subtle']:dark:border-gray-900
	data-[color='subtle']:dark:bg-gray-900 data-[color='subtle']:bg-gray-100
	data-[color='transparent']:dark:text-gray-100 data-[color='transparent']:border-gray-100 
	data-[color='transparent']:dark:border-gray-900"
>
	<code class="flex flex-col">
		{#if Array.isArray(text)}
			{#each text as line}
				<span
					data-style={type}
					class="text-gray-999 dark:text-gray-0 font-serif text-sm
				data-[style='secondary']:text-gray-300 data-[style='secondary']:dark:text-gray-700
				data-[style='success']:text-blue-600 data-[style='success']:dark:text-blue-600
				data-[style='dark']:dark:text-gray-999
				data-[style='warning']:text-orange-300 data-[style='warning']:dark:text-orange-400
				data-[style='error']:text-red-500 data-[style='error']:dark:text-red-600
				data-[style='dark']:text-gray-0 data-[style='subtle']:dark:text-gray-100
				data-[style='subtle']:text-gray-900 data-[style='subtle']:border-gray-100 
				data-[style='transparent']:text-gray-900"
				>
					{symbol}
					{line}
				</span>
			{/each}
		{:else}
			<span
				data-style={type}
				class="text-gray-999 dark:text-gray-0 font-serif text-sm
				data-[style='secondary']:text-gray-300 data-[style='secondary']:dark:text-gray-700
				data-[style='success']:text-blue-600 data-[style='dark']:dark:text-gray-999
				data-[style='warning']:text-orange-300 data-[style='warning']:dark:text-orange-400
				data-[style='error']:text-red-500 data-[style='error']:dark:text-red-600
				data-[style='dark']:text-gray-0 data-[style='subtle']:dark:text-gray-100
				data-[style='subtle']:text-gray-900 data-[style='subtle']:border-gray-100 
				data-[style='transparent']:text-gray-900"
			>
				{symbol} {text}</span
			>
		{/if}
	</code>
	<button
		type="button"
		on:click={copy}
		data-color={type}
		class="flex place-items-center justify-center h-[20px] text-gray-999 dark:text-gray-0 data-[color='success']:text-blue-600
	data-[color='warning']:text-orange-300 transition-all hover:text-gray-900 dark:hover:text-gray-200
	data-[color='secondary']:text-gray-300 data-[color='secondary']:hover:text-gray-400
	data-[color='secondary']:dark:text-gray-700 data-[color='secondary']:dark:hover:text-gray-800
	data-[color='warning']:hover:text-orange-400 data-[color='error']:text-red-500
	data-[color='warning']:dark:text-orange-400 data-[color='warning']:dark:hover:text-orange-500
	data-[color='error']:dark:text-red-600 data-[color='error']:hover:text-red-600
	data-[color='error']:dark:hover:text-red-700 data-[color='dark']:text-gray-0
	data-[color='dark']:hover:text-gray-200 data-[color='dark']:dark:text-gray-999
	data-[color='dark']:hover:dark:text-gray-900 data-[color='subtle']:dark:text-gray-100
	data-[color='subtle']:hover:dark:text-gray-200 data-[color='subtle']:text-gray-900
	data-[color='subtle']:hover:text-gray-800"
	>
		{#if copied}
			<div in:scale={{ duration: 200 }}>
				<CheckMarkIcon size={16} />
			</div>
		{:else}
			<div in:scale={{ duration: 100 }}>
				<CloneIcon size={16} />
			</div>
		{/if}
	</button>
</div>

<!--
@component
Displays a code snippet.

[See Docs](https://geist-ui-svelte.dev/components/snippet) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
