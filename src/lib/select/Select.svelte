<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import findAncestor from "$lib/util/find-ancestor.js";
	import { createPopper } from "@popperjs/core";
	import { toArray } from "$lib/util/to-array.js";
	import { createEventDispatcher, onMount } from "svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";
	import XIcon from "$lib/icons/XIcon.svelte";
	export let initialShow = false;
	let show = initialShow;

	const dispatch = createEventDispatcher();

	type ValueType =
		| "string"
		| "number"
		| "bigint"
		| "boolean"
		| "symbol"
		| "undefined"
		| "object"
		| "function";

	let dropDownRef: HTMLDivElement;
	let buttonRef: HTMLButtonElement;
	let selectedHTML: string = "";
	let selectedInnerText: string = "";
	export let multiSelect = false;
	export let value: HTMLOptionAttributes["value"] | HTMLOptionAttributes["value"][] = undefined;
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
	export let readonly = false;

	let allowedOptionsWidth = 0;

	let preMount = true;

	// Maps the value of the selection the the HTML/text content
	let valuesMap = new Map<HTMLOptionAttributes["value"], string>();

	type Selection = {
		value: HTMLOptionAttributes["value"];
		content: string;
	};

	// Should not run before mounting so values don't get wiped out
	$: if (!preMount) {
		// Assigns the value and content display

		if (multiSelect) {
			value = toArray(valuesMap, (k) => k);
		} else {
			let selected = toArray<HTMLOptionAttributes["value"], string, Selection>(
				valuesMap,
				(v, content) => {
					return {
						value: v,
						content,
					};
				},
			)[0];

			if (selected == undefined) selected = { value: undefined, content: "" };

			value = selected.value;

			if (allowXSS) {
				selectedHTML = selected.content;
			} else {
				selectedInnerText = selected.content;
			}
		}
	}

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
			if (!multiSelect) {
				const option = findOption(value);
				if (option) selectOption(option);
			} else if (Array.isArray(value)) {
				for (let i = 0; i < value.length; i++) {
					if (!valuesMap.has(value[i])) findAndSelect(value[i]);
				}
			}
		}
	}

	const handleMutation = () => {
		// Check if value is still in list
		if (!multiSelect) {
			const option = findOption(value);
			if (allowNone) {
				value = undefined;
				selectedHTML = "";
			} else {
				if (!option) selectFirstOption();
			}
		} else {
			const tempMap = new Map(valuesMap);
			for (const [k] of tempMap) {
				const option = findOption(k);
				if (!option) valuesMap.delete(k);
			}
			valuesMap = valuesMap;
		}
	};

	const selected = (e: MouseEvent) => {
		if (readonly) return;
		const target = findAncestor(e.target as Node, (a) => {
			return a?.tagName == "BUTTON" && a?.hasAttribute("data-value");
		});

		if (!target) return;

		selectOption(target);
	};

	const findAndSelect = (v: HTMLOptionAttributes["value"]) => {
		const option = findOption(v);
		if (option) selectOption(option);
	};

	const selectOption = (option: HTMLElement) => {
		const initialSelected = option.getAttribute("aria-selected") == "true";

		// No need to change selection if the selection has already been made
		if (!multiSelect && initialSelected) return;

		if (!multiSelect) {
			// Clear all other options
			const options = Array.from(dropDownRef.children);
			options.forEach((a) => {
				if (a.tagName == "BUTTON" && a.hasAttribute("data-value")) {
					a.setAttribute("aria-selected", "false");
				}
			});

			valuesMap.clear();
			valuesMap = valuesMap;
		}

		// get value

		const v = option.getAttribute("data-value");

		const type = option.getAttribute("data-type") as ValueType;

		const content = allowXSS ? option.innerHTML : option.innerText;

		if (!multiSelect) {
			if (v == null) {
				valuesMap.set(v, content);
			} else if (type == "number") {
				valuesMap.set(parseFloat(v), content);
			} else if (type == "boolean") {
				valuesMap.set(v == "true", content);
			} else {
				valuesMap.set(v, content);
			}

			if (allowXSS) {
				selectedHTML = content;
			} else {
				selectedInnerText = content;
			}

			option.setAttribute("aria-selected", "true");
		} else if (initialSelected) {
			if (v == null) {
				valuesMap.delete(v);
			} else if (type == "number") {
				valuesMap.delete(parseFloat(v));
			} else if (type == "boolean") {
				valuesMap.delete(v == "true");
			} else {
				valuesMap.delete(v);
			}

			option.setAttribute("aria-selected", "false");
		} else if (!initialSelected) {
			if (v == null) {
				valuesMap.set(v, content);
			} else if (type == "number") {
				valuesMap.set(parseFloat(v), content);
			} else if (type == "boolean") {
				valuesMap.set(v == "true", content);
			} else {
				valuesMap.set(v, content);
			}

			option.setAttribute("aria-selected", "true");
		}

		valuesMap = valuesMap;

		dispatch("change");
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
		allowedOptionsWidth = buttonRef.offsetWidth - 38;

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
			if (!multiSelect) {
				selectFirstOption();
			} else {
				value = [];
			}
		} else {
			if (multiSelect) {
				if (!Array.isArray(value))
					throw new Error(
						"When using a multiselect you must provide an Array as a value",
					);

				for (let i = 0; i < value.length; i++) {
					const option = findOption(value[i]);

					if (option) selectOption(option);
				}
			} else {
				const option = findOption(value);
				if (option) {
					selectOption(option);
				} else {
					if (!allowNone) selectFirstOption();
				}
			}
		}

		preMount = false;

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
	data-place-holder={value == undefined || (multiSelect && value && value.length == 0)}
	class="flex justify-between h-9 place-items-center w-full bg-gray-0 dark:bg-gray-999 py-1 pr-1 border focus:border-gray-200 focus:dark:border-gray-800
  disabled:bg-gray-50 dark:disabled:bg-gray-925 disabled:hover:cursor-not-allowed transition-all enabled:hover:border-gray-999
  border-gray-100 dark:border-gray-900 rounded-md data-[place-holder=true]:text-gray-300 enabled:hover:dark:border-gray-0
  data-[place-holder=true]:dark:text-gray-700 disabled:text-gray-300 dark:disabled:text-gray-700"
>
	<div class="px-2">
		{#if multiSelect}
			{#if value && value.length == 0}
				<span>{placeholder}</span>
			{:else}
				<ul
					style="width: {allowedOptionsWidth}px;"
					class="flex place-items-center gap-1 max-w-full overflow-x-auto scrollbar-hide"
				>
					{#each valuesMap as [v, content] (v)}
						<div
							class="flex justify-between place-items-center bg-gray-50 dark:bg-gray-950
							 px-1 rounded-md gap-1 text-nowrap whitespace-nowrap"
						>
							{#if allowXSS}
								{@html content}
							{:else}
								{content}
							{/if}
							<button
								{disabled}
								on:click={() => findAndSelect(v)}
								class="flex place-items-center justify-center text-gray-500 disabled:hover:cursor-not-allowed enabled:hover:text-gray-999
							dark:text-gray-500 dark:enabled:hover:text-gray-0 transition-all"
							>
								<XIcon size={12} />
							</button>
						</div>
					{/each}
				</ul>
			{/if}
		{:else if value == undefined}
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
	aria-readonly={readonly}
	style="width: {width}; max-height: {maxHeight}px;"
	bind:this={dropDownRef}
	class="absolute bg-gray-0 dark:bg-gray-999 border border-gray-100 dark:border-gray-900 z-[1] transition-all
         rounded-md data-[show=false]:opacity-0 data-[show=false]:pointer-events-none data-[shadow=true]:shadow-sm
		 dark:shadow-gray-999 overflow-y-auto group"
>
	<slot />
</div>

<!--
@component
A drop down list component.

[See Docs](https://geist-ui-svelte.dev/components/select) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
