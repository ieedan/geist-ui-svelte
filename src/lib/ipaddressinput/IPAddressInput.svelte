<script lang="ts">
	import { IPAddress, type IPV4Address, type Octets } from "$lib/util/ip-address.js";

	/** '.' or ' ' separated IP address ex: '172.16.100.10' or '172 16 100 10' */
	export let value: IPV4Address = "192 168 010 501";
	export let noDot: boolean = false;

	let octets: Octets = IPAddress.parseIPV4(value);

	let firstOctetRef: HTMLInputElement;
	let secondOctetRef: HTMLInputElement;
	let thirdOctetRef: HTMLInputElement;
	let fourthOctetRef: HTMLInputElement;

    const isValid = (num: string) => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(num);

    const isAlpha = (char: string) => /^[A-Za-z]+$/.test(char);

	const focusAndSelectAll = (element: HTMLInputElement) => {
		element.focus();
		element.select();
	};

    const focusAndGoToStart = (element: HTMLInputElement) => {
        element.focus();
        element.selectionStart = 0;
    }

	const firstOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == " ") {
			e.preventDefault();
			secondOctetRef.focus();
			return;
		}

        if (e.key.length == 1 && isAlpha(e.key)) {
            e.preventDefault();
        }

		if (e.key == "ArrowRight") {
			if (firstOctetRef.selectionEnd == 3) {
				focusAndGoToStart(secondOctetRef);
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
			return;
		}
	};

	const secondOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			firstOctetRef.focus();
			return;
		}

		if (e.key == " ") {
			e.preventDefault();
			thirdOctetRef.focus();
			return;
		}
	};

	const thirdOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			secondOctetRef.focus();
			return;
		}

		if (e.key == " ") {
			e.preventDefault();
			fourthOctetRef.focus();
			return;
		}
	};

	const fourthOctetKeydown = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (!target) return;
		if (e.key == "Backspace" && target.value.length == 0) {
			thirdOctetRef.focus();
			return;
		}
	};
</script>

<div
	class="flex place-items-center border border-gray-100 dark:border-gray-900 w-fit rounded-md py-1 px-1">
	<input
		min="0"
		max="255"
        maxlength="3"
		type="text"
		on:input={firstOctetInput}
		on:keydown={firstOctetKeydown}
		bind:this={firstOctetRef}
		bind:value={octets[0]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
        maxlength="3"
		type="text"
		bind:this={secondOctetRef}
		on:keydown={secondOctetKeydown}
		bind:value={octets[1]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
        maxlength="3"
		type="text"
		bind:this={thirdOctetRef}
		on:keydown={thirdOctetKeydown}
		bind:value={octets[2]}
		class="min-w-0 bg-transparent w-10 hide-spinner outline-none text-center selection:bg-gray-999 selection:text-gray-0 selection:dark:bg-gray-0 selection:dark:text-gray-999" />
	{#if !noDot}
		<span>.</span>
	{/if}
	<input
		min="0"
		max="255"
        maxlength="3"
		type="text"
		bind:this={fourthOctetRef}
		on:keydown={fourthOctetKeydown}
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
