<script lang="ts">
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import type { HTMLOptionAttributes } from "svelte/elements";

	export let value: HTMLOptionAttributes["value"];
	export let disabled: boolean = false;
</script>

<button
	type="button"
	role="option"
	data-value={value}
	data-type={typeof value}
	aria-selected={false}
	data-focused={false}
	{disabled}
	class="enabled:hover:cursor-pointer disabled:cursor-not-allowed px-2 enabled:hover:bg-gray-50
	enabled:hover:text-gray-999 enabled:hover:dark:text-gray-0 gap-1
    enabled:dark:hover:bg-gray-925 data-[focused=true]:text-gray-999 text-gray-300 dark:text-gray-700
    transition-all py-1 data-[focused=true]:bg-gray-100 data-[focused=true]:dark:text-gray-0 z-[11]
    data-[focused=true]:dark:bg-gray-900 flex justify-start place-items-center w-full
	disabled:bg-gray-50 disabled:dark:bg-gray-950 group-aria-readonly:hover:cursor-default group rounded-md"
>
	<div class="size-4 flex justify-center place-items-center">
		<div class="hidden group-aria-selected:flex place-items-center justify-center">
			<CheckMarkIcon size={16} />
		</div>
	</div>
	<div class="flex place-items-center justify-start" data-html>
		<slot />
	</div>
</button>

<!--
@component
The option component for the Select component.

[See Docs](https://geist-ui-svelte.dev/components/select) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
