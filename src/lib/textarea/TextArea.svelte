<script lang="ts">
	export let width: string | undefined = undefined;
	export let height: string | undefined = undefined;

	export let value: string = "";
</script>

<textarea
	{...$$restProps}
	style="width: {width ? width : ''}; height: {height ? height : ''};"
	bind:value
	on:click
	on:change
	on:keydown
	on:keyup
	on:input
	on:touchstart|passive
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
	class="resize-none bg-gray-0 dark:bg-gray-999 border border-gray-100
	px-2 py-1 disabled:dark:bg-gray-950 disabled:bg-gray-50
    placeholder:text-gray-300 text-gray-999 dark:placeholder:text-gray-600
	dark:text-gray-0 disabled:hover:cursor-not-allowed
    dark:border-gray-900 outline-none focus:border-gray-200
	dark:focus:border-gray-800 transition-all rounded-md w-fit min-w-0"
/>

<!--
@component
A multi-line text input.

[See Docs](https://geist-ui-svelte.dev/components/textarea) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->