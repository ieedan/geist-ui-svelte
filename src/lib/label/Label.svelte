<script lang="ts">
	export let required = false;
	/** The symbol shown when the `required` prop is set to true @default "*" */
	export let requiredSymbol = "*";
	let f: string | undefined = undefined;
	export { f as for };
</script>

<label for={f} class="text-gray-500 dark:text-gray-500 text-xs">
	<slot />
	{#if required}
		{requiredSymbol}
	{/if}
</label>
