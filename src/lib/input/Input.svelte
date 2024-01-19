<script lang="ts">
	import EyeIcon from "$lib/icons/EyeIcon.svelte";
	import EyeSlashIcon from "$lib/icons/EyeSlashIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
	import { createEventDispatcher, onDestroy } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";

	const dispatch = createEventDispatcher();

	export let id: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let labelPlacement: "start" | "end" = "start";
	export let value: HTMLInputAttributes["value"] = "";
	export let type: HTMLInputAttributes["type"] = "text";
	export let debounce: number = 0;
	export let disabled: boolean = false;
	export let readonly: boolean = false;
	export let clearable: boolean = false;
	export let placeholder: string = "";
	export let width: string | undefined = undefined;
	export let size: "base" | "sm" | "lg" | "xl" = "base";

	let inputRef: HTMLInputElement;
	let debounceTimeout: number;

	let passwordShown = false;

	$: {
		if (inputRef != undefined) {
			inputRef.value = value;
		}
	}

	export const focus = () => inputRef.focus();

	const change = (e: Event) => {
		value = (e.target as HTMLInputElement).value;
		dispatch("change", { value });
	};

	const input = () => {
		value = inputRef.value;

		clearTimeout(debounceTimeout);

		dispatch("input", { value });

		debounceTimeout = setTimeout(db, debounce);
	};

	const db = () => {
		dispatch("debounce", { value });
	};

	onDestroy(() => {
		clearTimeout(debounceTimeout);
	});
</script>

<div class="w-full">
	<label for={id}>
		<slot />
	</label>
	<div
		style="width: {width ? width : ''};"
		data-placement={labelPlacement}
		data-has-value={value.length > 0}
		data-has-label={label != undefined}
		data-size={size}
		class="group/geist-input grid grid-flow-col relative data-[has-label=false]:border rounded-md
		border-gray-100 overflow-hidden aria-disabled:bg-gray-50 aria-disabled:dark:bg-gray-950
		dark:border-gray-900 w-fit data-[has-label=false]:focus-within:border-gray-200
		data-[has-label=false]:focus-within:dark:border-gray-800 transition-all"
		aria-disabled={disabled}
	>
		{#if label}
			<span
				class="order-1 group-data-[placement='end']/geist-input:order-7
				group-data-[placement='end']/geist-input:border-r group-data-[placement='end']/geist-input:rounded-r-md
				group-data-[placement='start']/geist-input:border-l group-data-[placement='start']/geist-input:rounded-l-md
			  bg-gray-50 dark:bg-gray-950 border-gray-100 border-y dark:border-gray-900 py-1 px-2
			    flex place-items-center justify-center text-gray-300 text-sm dark:text-gray-500 h-full
				group-data-[size='sm']/geist-input:text-xs group-data-[size='lg']/geist-input:text-base
				group-data-[size='xl']/geist-input:text-lg"
			>
				{label}
			</span>
		{/if}
		<div
			class="flex place-items-center group-data-[has-label=true]/geist-input:border order-2
			group-data-[placement='end']/geist-input:rounded-l-md group-data-[placement='start']/geist-input:rounded-r-md
			focus-within:border-gray-200 dark:focus-within:border-gray-800 transition-all border-gray-100
			dark:border-gray-900"
		>
			<div
				class="flex place-items-center justify-center pl-2 empty:hidden
				order-2 text-gray-800 dark:text-gray-200"
			>
				<slot name="icon" />
			</div>
			<input
				{...$$restProps}
				bind:this={inputRef}
				on:change={change}
				on:input={input}
				type={passwordShown ? "text" : type}
				{placeholder}
				{id}
				{disabled}
				{readonly}
				class="bg-transparent order-3 min-w-0 text-gray-999 dark:text-gray-0
				disabled:placeholder:text-gray-300 disabled:dark:placeholder:text-gray-600
				outline-none focus:outline px-2 py-1 w-full rounded-none disabled:hover:cursor-not-allowed
				disabled:text-gray-300 disabled:dark:text-gray-600 group-data-[size='sm']/geist-input:text-sm
				group-data-[size='lg']/geist-input:text-lg group-data-[size='xl']/geist-input:text-xl
				placeholder:text-gray-200 dark:placeholder:text-gray-600"
			/>
			<div
				class="flex place-items-center justify-center pr-2 empty:hidden
				order-4 text-gray-800 dark:text-gray-200"
			>
				<slot name="iconEnd" />
			</div>
			{#if clearable}
				<button type="button" tabindex="-1"
					class="order-5 flex place-items-center h-full justify-center px-2
					transition-all hover:text-gray-999 dark:hover:text-gray-0
				  text-gray-400 dark:text-gray-600 group-data-[has-value=false]/geist-input:opacity-0"
					on:click={() => {
						inputRef.value = "";
						value = "";
					}}
				>
					<XIcon size={14} />
				</button>
			{/if}
			{#if type == "password"}
				<button type="button" tabindex="-1"
					class="order-6 absolute px-2 right-0 flex h-full place-items-center
					justify-center group-aria-disabled/geist-input:opacity-0
					group-data-[has-value=false]/geist-input:opacity-0 transition-all"
					on:click={() => (passwordShown = !passwordShown)}
				>
					{#if passwordShown}
						<EyeSlashIcon size={21} />
					{:else}
						<EyeIcon size={21} />
					{/if}
				</button>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	input[type="password"]::-ms-reveal {
		display: none;
	}
</style>
