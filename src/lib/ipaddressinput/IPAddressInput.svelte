<script lang="ts">
	import { IPAddress, type IPV4Address, type Octets } from "$lib/util/ip-address.js";
	import { onMount } from "svelte";

	/** '.' or ' ' separated IP address ex: '172.16.100.10' or '172 16 100 10' */
	export let value: IPV4Address = "192 168 010 501";
	export let noDot: boolean = false;

	let octets: Octets = IPAddress.parseIPV4(value);

	onMount(() => {
		console.log(octets);
	});
</script>

<div
	class="flex place-items-center border border-gray-100 dark:border-gray-900 w-fit rounded-md py-1 px-1">
	<input
		min="0"
		max="255"
		type="number"
		bind:value={octets[0]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		type="number"
		bind:value={octets[1]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		type="number"
		bind:value={octets[2]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		type="number"
		bind:value={octets[3]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
</div>

<style lang="postcss">
	.hide-spinner::-webkit-inner-spin-button,
	.hide-spinner::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
