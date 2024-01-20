<script lang="ts">
	export let loading: boolean = false;
	let className: string = "";
	export { className as class };
</script>

<div data-show={loading} class="data-[show=false]:hidden {className}">
	<slot />
</div>

<!--
@component
The container component for the Skeleton component.

[See Docs](https://geist-ui-svelte.dev/components/skeleton) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->