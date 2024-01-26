<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import findAncestor from "$lib/util/find-ancestor.js";
	import { createPopper } from "@popperjs/core";
	import { createEventDispatcher, onMount } from "svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";
	export let initialShow = false;
	let show = initialShow;

	const dispatch = createEventDispatcher();

	type ValueType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";

	let dropDownRef: HTMLDivElement;
	let buttonRef: HTMLButtonElement;
	export let value: HTMLOptionAttributes["value"] = undefined;
	let selectedHTML: string = "";
	let selectedInnerText: string = "";
	export let disabled = false;
	export let placeholder: string = "";
	export let width: string = "184px";
	export let allowNone: boolean = false;
	/** Enabling this will opt you into dangerous XSS behavior but will allow the HTML in your
	 * option to be rendered as the displayed selection */
	export let allowXSS: boolean = false;
	export let noIcon: boolean = false;
	export let shadow: boolean = false;
	export let iconRotation: boolean = true;
	export let maxHeight: number = 240;

	const toggleShow = () => {
		show = !show;
	};

	const hide = () => {
		show = false;
	};

	const docClick = (e: MouseEvent) => {
		if (buttonRef.contains(e.target as Node)) return;

		hide();
	};

	$: {
		if (dropDownRef) {
			const option = findOption(value);
			if (option) selectOption(option);
		}
	}

	const handleMutation = () => {
		// Check if value is still in list
		const option = findOption(value);
		if (allowNone) {
			value = undefined;
			selectedHTML = "";
		} else {
			if (!option) selectFirstOption();
		}
	};

	const selected = (e: MouseEvent) => {
		const target = findAncestor(e.target as Node, (a) => {
			return a?.tagName == "BUTTON" && a?.hasAttribute("data-value");
		});

		if (!target) return;

		selectOption(target);

		dispatch("change", { value });
	};

	const selectOption = (option: HTMLElement) => {
		// Clear all other options
		const options = Array.from(dropDownRef.children);
		options.forEach((a) => {
			if (a.tagName == "BUTTON" && a.hasAttribute("data-value")) {
				a.setAttribute("aria-selected", "false");
			}
		});

		// get value

		const v = option.getAttribute("data-value");

		const type = option.getAttribute("data-type") as ValueType;

		if (v == null) {
			value = v;
		} else if (type == "number") {
			value = parseFloat(v);
		} else if (type == "boolean") {
			value = v == "true";
		} else {
			value = v;
		}	

		// Get html of selected option
		selectedHTML = option.innerHTML;
		selectedInnerText = option.innerText;

		// Set selected

		option.setAttribute("aria-selected", "true");
	};

	const selectFirstOption = () => {
		const children = Array.from(dropDownRef.children);
		for (let i = 0; i < children.length; i++) {
			const child = children[i] as HTMLElement;
			if (child.tagName == "BUTTON" && child.hasAttribute("data-value")) {
				selectOption(child);
				break;
			}
		}
	};

	const findOption = (val: HTMLOptionAttributes["value"]): HTMLElement | undefined => {
		const children = Array.from(dropDownRef.children);
		for (let i = 0; i < children.length; i++) {
			const child = children[i] as HTMLElement;
			if (child.tagName != "BUTTON" || !child.hasAttribute("data-value")) continue;
			const v = child.getAttribute("data-value");

			if (v == val) return child;
		}

		return undefined;
	};

	onMount(() => {
		dropDownRef.style.width = buttonRef.offsetWidth + "px";

		const observer = new MutationObserver(handleMutation);

		const config = { childList: true, subtree: true };

		// Observe the list for content changes
		observer.observe(dropDownRef, config);

		const popper = createPopper(buttonRef, dropDownRef, {
			placement: "bottom-end",
			modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
		});

		dropDownRef.addEventListener("click", selected);

		if (value == undefined && !allowNone) {
			selectFirstOption();
		} else {
			const option = findOption(value);
			if (option) {
				selectOption(option);
			} else {
				if (!allowNone) selectFirstOption();
			}
		}

		return () => {
			popper.destroy();
			dropDownRef.removeEventListener("click", selected);
			observer.disconnect();
		};
	});
</script>

<svelte:document on:click={docClick} />
<svelte:window
	on:resize={() => {
		dropDownRef.style.width = buttonRef.offsetWidth + "px";
	}}
/>

<button
	type="button"
	on:click={toggleShow}
	bind:this={buttonRef}
	style="width: {width};"
	{disabled}
	data-place-holder={value == undefined}
	class="flex justify-between h-9 place-items-center w-full bg-gray-0 dark:bg-gray-999 py-1 pr-1 border focus:border-gray-200 focus:dark:border-gray-800
  disabled:bg-gray-50 dark:disabled:bg-gray-925 disabled:hover:cursor-not-allowed transition-all enabled:hover:border-gray-999
  border-gray-100 dark:border-gray-900 rounded-md data-[place-holder=true]:text-gray-300 enabled:hover:dark:border-gray-0
  data-[place-holder=true]:dark:text-gray-700 disabled:text-gray-300 dark:disabled:text-gray-700"
>
	<div class="px-2">
		{#if value == undefined}
			<span>{placeholder}</span>
		{:else if allowXSS}
			{@html selectedHTML}
		{:else}
			<span>{selectedInnerText}</span>
		{/if}
	</div>
	{#if !noIcon}
		<div
			data-show={show}
			data-rotate={iconRotation}
			class="data-[rotate=true]:data-[show=true]:rotate-180 transition-all dark:text-gray-700 text-gray-300 flex place-items-center justify-center"
		>
			<slot name="icon"><ChevronIcon rotation="90deg" size={16} /></slot>
		</div>
	{/if}
</button>
<div
	role="listbox"
	aria-label="listbox dialog"
	data-shadow={shadow}
	data-show={show}
	style="width: {width}; max-height: {maxHeight}px;"
	bind:this={dropDownRef}
	class="absolute bg-gray-0 dark:bg-gray-999 border border-gray-100 dark:border-gray-900 z-[1] transition-all
         rounded-md data-[show=false]:opacity-0 data-[show=false]:pointer-events-none data-[shadow=true]:shadow-sm 
		 dark:shadow-gray-999 overflow-y-auto"
>
	<slot />
</div>

<!--
@component
A drop down list component.

[See Docs](https://geist-ui-svelte.dev/components/select) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
