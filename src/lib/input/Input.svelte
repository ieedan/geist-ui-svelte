<script lang="ts">
	import EyeIcon from "$lib/icons/EyeIcon.svelte";
	import EyeSlashIcon from "$lib/icons/EyeSlashIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
	import type { Color } from "$lib/types.js";
	import { createEventDispatcher, onDestroy } from "svelte";
	import type { HTMLInputAttributes } from "svelte/elements";
	import Label from "$lib/label/Label.svelte";

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
	export let color: Color = "default";
	export let noBorder = false;
	export let required: boolean | undefined = undefined;
	/** The symbol shown when the `required` prop is set to true @default "*" */
	export let requiredSymbol = "*";

	let inputRef: HTMLInputElement;

	let passwordShown = false;

	$: {
		if (inputRef != undefined) {
			inputRef.value = value;
		}
	}

	export const focus = () => inputRef.focus();

	const change = (e: Event | null = null) => {
		const target = e?.target as HTMLInputElement;
		if (target) {
			if (type == "number") {
				value = parseFloat(target.value);
			} else {
				value = target.value;
			}
		}

		dispatch("change", { value });
	};

	let debounceTimeout: number;

	const input = () => {
		if (type == "number") {
			value = parseFloat(inputRef.value);
		} else {
			value = inputRef.value;
		}

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

<div style="width: {width ? width : ''};">
	<Label for={id} {required} {requiredSymbol}>
		<slot />
	</Label>
	<div
		style="width: {width ? width : ''};"
		data-placement={labelPlacement}
		data-has-value={value != null && value != undefined && value.length > 0}
		data-has-label={label != undefined}
		data-size={size}
		data-color={color}
		data-border={!noBorder}
		aria-disabled={disabled}
		class="group/geist-input grid grid-flow-col relative data-[border=true]:data-[has-label=false]:border rounded-md
		border-gray-100 overflow-hidden aria-disabled:bg-gray-50 aria-disabled:dark:bg-gray-950
		dark:border-gray-900 w-fit data-[color='default']:data-[has-label=false]:focus-within:border-gray-200
		data-[color='default']:data-[has-label=false]:focus-within:dark:border-gray-800 transition-all

		data-[color='secondary']:border-gray-800 data-[color='secondary']:focus-within:border-gray-500
		data-[color='secondary']:dark:border-gray-200 data-[color='secondary']:focus-within:dark:border-gray-500
		data-[color='success']:border-blue-600 data-[color='success']:focus-within:border-blue-800
		data-[color='success']:dark:border-blue-600 data-[color='success']:focus-within:dark:border-blue-800
		data-[color='warning']:border-orange-300 data-[color='warning']:focus-within:border-orange-500
		data-[color='warning']:dark:border-orange-400 data-[color='warning']:focus-within:dark:border-orange-600
		data-[color='error']:border-red-500 data-[color='error']:focus-within:border-red-700
		data-[color='error']:dark:border-red-600 data-[color='error']:focus-within:dark:border-red-800"
	>
		{#if label}
			<span
				class="order-1 group-data-[placement='end']/geist-input:order-7
				group-data-[placement='end']/geist-input:border-r group-data-[placement='end']/geist-input:rounded-r-md
				group-data-[placement='start']/geist-input:border-l group-data-[placement='start']/geist-input:rounded-l-md
			  bg-gray-50 dark:bg-gray-950 border-gray-100 border-y dark:border-gray-900 py-1 px-2
			    flex place-items-center justify-center text-gray-300 dark:text-gray-700 text-sm h-full
				group-data-[size='sm']/geist-input:text-xs group-data-[size='lg']/geist-input:text-base
				group-data-[size='xl']/geist-input:text-lg"
			>
				{label}
			</span>
		{/if}
		<div
			class="flex place-items-center group-data-[border=true]/geist-input:group-data-[has-label=true]/geist-input:border order-2
			group-data-[placement='end']/geist-input:rounded-l-md group-data-[placement='start']/geist-input:rounded-r-md
			focus-within:border-gray-200 dark:focus-within:border-gray-800 transition-all border-gray-100
			dark:border-gray-900 overflow-hidden

			group-data-[color='secondary']/geist-input:border-gray-800 group-data-[color='secondary']/geist-input:focus-within:border-gray-500
			group-data-[color='secondary']/geist-input:dark:border-gray-200 group-data-[color='secondary']/geist-input:focus-within:dark:border-gray-500
			group-data-[color='success']/geist-input:border-blue-600 group-data-[color='success']/geist-input:focus-within:border-blue-800
			group-data-[color='success']/geist-input:dark:border-blue-600 group-data-[color='success']/geist-input:focus-within:dark:border-blue-800
			group-data-[color='warning']/geist-input:border-orange-300 group-data-[color='warning']/geist-input:focus-within:border-orange-500
			group-data-[color='warning']/geist-input:dark:border-orange-400 group-data-[color='warning']/geist-input:focus-within:dark:border-orange-600
			group-data-[color='error']/geist-input:border-red-500 group-data-[color='error']/geist-input:focus-within:border-red-700
			group-data-[color='error']/geist-input:dark:border-red-600 group-data-[color='error']/geist-input:focus-within:dark:border-red-800"
		>
			<div
				class="flex place-items-center justify-center pl-2 empty:hidden
				order-2 text-gray-300 dark:text-gray-700
				
				group-data-[color='success']/geist-input:text-blue-600 group-data-[color='success']/geist-input:dark:text-blue-600
				group-data-[color='warning']/geist-input:text-orange-300 group-data-[color='warning']/geist-input:dark:text-orange-400
				group-data-[color='error']/geist-input:text-red-500 group-data-[color='error']/geist-input:dark:text-red-600"
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
				{required}
				{disabled}
				{readonly}
				class="bg-transparent order-3 min-w-0 text-gray-999 dark:text-gray-0
				disabled:dark:border-gray-900 disabled:dark:bg-gray-925 disabled:dark:text-gray-700
				disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-300
				disabled:placeholder:text-gray-300 disabled:dark:placeholder:text-gray-700
				outline-none focus:outline px-2 py-1 w-full rounded-none disabled:hover:cursor-not-allowed
				group-data-[size='sm']/geist-input:text-sm
				group-data-[size='lg']/geist-input:text-lg group-data-[size='xl']/geist-input:text-xl
				placeholder:text-gray-200 dark:placeholder:text-gray-600
				group-data-[color='success']/geist-input:text-blue-600 group-data-[color='success']/geist-input:dark:text-blue-600
				group-data-[color='warning']/geist-input:text-orange-300 group-data-[color='warning']/geist-input:dark:text-orange-400
				group-data-[color='error']/geist-input:text-red-500 group-data-[color='error']/geist-input:dark:text-red-600"
			/>
			<div
				class="flex place-items-center justify-center pr-2 empty:hidden
				order-4 text-gray-300 dark:text-gray-700
				
				group-data-[color='success']/geist-input:text-blue-600 group-data-[color='success']/geist-input:dark:text-blue-600
				group-data-[color='warning']/geist-input:text-orange-300 group-data-[color='warning']/geist-input:dark:text-orange-400
				group-data-[color='error']/geist-input:text-red-500 group-data-[color='error']/geist-input:dark:text-red-600"
			>
				<slot name="iconEnd" />
			</div>
			{#if clearable}
				<button
					type="button"
					tabindex="-1"
					class="order-5 flex place-items-center h-full justify-center px-2
					transition-all hover:text-gray-999 dark:hover:text-gray-0
				  text-gray-400 dark:text-gray-600 group-data-[has-value=false]/geist-input:opacity-0"
					on:click={() => {
						inputRef.value = "";
						value = "";
						change();
					}}
				>
					<XIcon size={14} />
				</button>
			{/if}
			{#if type == "password"}
				<button
					type="button"
					tabindex="-1"
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

<!--
@component
Captures user input.

[See Docs](https://geist-ui-svelte.dev/components/input) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->

<style lang="postcss">
	input[type="password"]::-ms-reveal {
		display: none;
	}
</style>
