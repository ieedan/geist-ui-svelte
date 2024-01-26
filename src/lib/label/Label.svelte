<script lang="ts">
	let f: string | undefined = undefined;
	export { f as for };
</script>

<label for={f} class="text-gray-500 dark:text-gray-500 text-xs">
	<slot />
</label>
