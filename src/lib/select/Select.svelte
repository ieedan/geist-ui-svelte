<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import findAncestor from "$lib/util/find-ancestor.js";
	import { createPopper } from "@popperjs/core";
	import { onMount } from "svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";
	export let initialShow = false;
	let show = initialShow;

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

	const handleMutation = () => {
		// Check if value is still in list
		const option = findOption();
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

		value = v;

		// Get html of selected option

		const children = Array.from(option.children);

		for (let i = 0; i < children.length; i++) {
			if (children[i].hasAttribute("data-option-html")) {
				selectedHTML = children[i].innerHTML;
				selectedInnerText = (children[i] as HTMLDivElement).innerText;
				break;
			}
		}

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

	const findOption = (): HTMLElement | undefined => {
		const children = Array.from(dropDownRef.children);
		for (let i = 0; i < children.length; i++) {
			const child = children[i] as HTMLElement;
			if (child.tagName != "BUTTON" || !child.hasAttribute("data-value")) continue;
			const v = child.getAttribute("data-value");

			if (v == value) return child;
		}

		return undefined;
	};

	onMount(() => {
		const observer = new MutationObserver(handleMutation);

		const config = { childList: true, subtree: true };

		// Observe the list for content changes
		observer.observe(dropDownRef, config);

		const popper = createPopper(buttonRef, dropDownRef, {
			placement: "bottom",
			modifiers: [{ name: "offset", options: { offset: [0, 2] } }],
		});

		dropDownRef.addEventListener("click", selected);

		if (value == undefined && !allowNone) {
			selectFirstOption();
		} else {
			const option = findOption();
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

<button
	role="listbox"
	on:click={toggleShow}
	bind:this={buttonRef}
	style="width: {width};"
	{disabled}
	data-place-holder={value == undefined}
	class="flex justify-between place-items-center w-full py-1 pr-1 border h-[34px] focus:border-gray-200 focus:dark:border-gray-800
  disabled:bg-gray-50 dark:disabled:bg-gray-925 disabled:hover:cursor-not-allowed transition-all
  border-gray-100 dark:border-gray-900 rounded-md data-[place-holder=true]:text-gray-300
  data-[place-holder=true]:dark:text-gray-700 disabled:text-gray-300 dark:disabled:text-gray-700">
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
		<div data-show={show} class="data-[show=true]:rotate-180 transition-all">
			<ChevronIcon rotation="90deg" color="secondary" size={16} />
		</div>
	{/if}
</button>
<div
	data-shadow={shadow}
	data-show={show}
	style="width: {width};"
	bind:this={dropDownRef}
	class="absolute bg-gray-0 dark:bg-gray-999 border border-gray-100 dark:border-gray-900 z-10 transition-all
         rounded-md data-[show=false]:opacity-0 data-[show=false]:pointer-events-none data-[shadow=true]:shadow-sm dark:shadow-gray-999">
	<slot />
</div>

<!--
@component
[Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
### Important Notes
Make sure to use keyed each blocks when working with lists that may be mutated.
##### Example:
```svelte
<Select bind:value={val}>
	{#each list as thing (thing.name)}
		<SelectOption value={thing.id}>
            {thing.name}
        </SelectOption>
	{/each}
</Select>
```
-->
