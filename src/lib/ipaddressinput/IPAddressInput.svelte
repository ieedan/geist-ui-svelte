<script lang="ts">
	import type { IPV4Address, Octets } from "$lib/types.js";
	import { IPAddress } from "$lib/util/ip-address.js";
	import { createEventDispatcher, onDestroy } from "svelte";

	const dispatch = createEventDispatcher();

	/** '.' or ' ' separated IP address ex: '172.16.100.10' or '172 16 100 10' */
	export let value: IPV4Address = "0 0 0 0";
	export let noDot: boolean = false;
	export let valid: boolean = false;
	export let debounce: number = 0;

	let octets: Octets = IPAddress.parseIPV4(value);

	$: valid = IPAddress.validIP(value);
	$: value = IPAddress.toString(octets, noDot);

	let firstOctetRef: HTMLInputElement;
	let secondOctetRef: HTMLInputElement;
	let thirdOctetRef: HTMLInputElement;
	let fourthOctetRef: HTMLInputElement;

	const isAlpha = (char: string) => /^[A-Za-z]+$/.test(char);

	const focusAndSelectAll = (element: HTMLInputElement) => {
		element.focus();
		element.select();
	};

	const focusAndGoToStart = (element: HTMLInputElement) => {
		element.setSelectionRange(0, 0);
		element.focus();
	};

	const focusAndGoToEnd = (element: HTMLInputElement) => {
		element.setSelectionRange(element.value.length, element.value.length);
		element.focus();
	};

	/** Checks if the next entry would be valid */
	const canEnter = (e: KeyboardEvent): boolean => {
		const target = e.target as HTMLInputElement;
		if (!target) return false;

		if (e.key.length == 1 && isAlpha(e.key)) {
			return false;
		} else if (e.key.length == 1 && !isNaN(parseInt(e.key))) {
			const num = parseInt(e.key);

			const next = `${target.value}${num}`;

			const nextValue = parseInt(next);

			if (nextValue > 255 || nextValue < 0) {
				return false;
			}
		} else if (isNaN(parseInt(e.key)) && e.key.length == 1) {
			return false;
		}

		return true;
	};

	const firstOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == " " || e.key == ".") {
			e.preventDefault();
			secondOctetRef.focus();
			return;
		}

		if (!canEnter(e)) e.preventDefault();

		if (e.key == "ArrowRight") {
			if (target.selectionStart == target.value.length) {
				focusAndSelectAll(secondOctetRef);
			}
			return;
		}
	};

	const firstOctetInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;

		const newValue = target.value;
		const oldValue = octets[0].toString();

		// Check if the last number was typed
		if (newValue.length == 3 && oldValue.length == 2) {
			focusAndSelectAll(secondOctetRef);
		}

		input();
	};

	const secondOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			focusAndGoToEnd(firstOctetRef);
			return;
		}

		if (!canEnter(e)) e.preventDefault();

		if (e.key == " " || e.key == ".") {
			e.preventDefault();
			thirdOctetRef.focus();
			return;
		}

		if (e.key == "ArrowRight") {
			if (target.selectionStart == target.value.length) {
				focusAndGoToStart(thirdOctetRef);
			}
			return;
		}

		if (e.key == "ArrowLeft") {
			if (target.selectionStart == 0) {
				focusAndGoToEnd(firstOctetRef);
			}
			return;
		}
	};

	const secondOctetInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;

		const newValue = target.value;
		const oldValue = octets[1].toString();

		// Check if the last number was typed
		if (newValue.length == 3 && oldValue.length == 2) {
			focusAndSelectAll(thirdOctetRef);
		}

		input();
	};

	const thirdOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			focusAndGoToEnd(secondOctetRef);
			return;
		}

		if (!canEnter(e)) e.preventDefault();

		if (e.key == " " || e.key == ".") {
			e.preventDefault();
			fourthOctetRef.focus();
			return;
		}

		if (e.key == "ArrowRight") {
			if (target.selectionStart == target.value.length) {
				focusAndGoToStart(fourthOctetRef);
			}
			return;
		}

		if (e.key == "ArrowLeft") {
			if (target.selectionStart == 0) {
				focusAndGoToEnd(secondOctetRef);
			}
			return;
		}
	};

	const thirdOctetInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;

		const newValue = target.value;
		const oldValue = octets[2].toString();

		// Check if the last number was typed
		if (newValue.length == 3 && oldValue.length == 2) {
			focusAndSelectAll(fourthOctetRef);
		}

		input();
	};

	const fourthOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			focusAndGoToEnd(thirdOctetRef);
			return;
		}

		if (!canEnter(e)) e.preventDefault();

		if (e.key == "ArrowLeft") {
			if (target.selectionStart == 0) {
				focusAndGoToEnd(thirdOctetRef);
			}
			return;
		}
	};

	const fourthOctetInput = () => {
		input();
	};

	let debounceTimeout: number;

	const input = () => {
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

<div
	class="flex place-items-center border border-gray-100 dark:border-gray-900 w-fit rounded-md py-1 px-1"
>
	<input
		min="0"
		max="255"
		maxlength="3"
		type="text"
		on:input={firstOctetInput}
		on:keydown={firstOctetKeydown}
		bind:this={firstOctetRef}
		bind:value={octets[0]}
		class="min-w-0 bg-transparent w-10 hide-ramp outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999"
	/>
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		maxlength="3"
		type="text"
		bind:this={secondOctetRef}
		on:input={secondOctetInput}
		on:keydown={secondOctetKeydown}
		bind:value={octets[1]}
		class="min-w-0 bg-transparent w-10 hide-ramp outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999"
	/>
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		maxlength="3"
		type="text"
		bind:this={thirdOctetRef}
		on:input={thirdOctetInput}
		on:keydown={thirdOctetKeydown}
		bind:value={octets[2]}
		class="min-w-0 bg-transparent w-10 hide-ramp outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999"
	/>
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
		maxlength="3"
		type="text"
		bind:this={fourthOctetRef}
		on:input={fourthOctetInput}
		on:keydown={fourthOctetKeydown}
		bind:value={octets[3]}
		class="min-w-0 bg-transparent w-10 hide-ramp outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999"
	/>
</div>

<!--
@component
An input component to display and retrieve IPV4 addresses.

[See Docs](https://geist-ui-svelte.dev/components/ipaddressinput) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->

<style lang="postcss">
	.hide-ramp::-webkit-inner-spin-button,
	.hide-ramp::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
