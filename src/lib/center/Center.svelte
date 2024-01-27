<script lang="ts">
	let className: string = "";
	export { className as class };
</script>

<div {...$$restProps} class="flex flex-col justify-center place-items-center {className}">
	<slot />
</div>

<!--
@component
A layout component used to center content.

[See Docs](https://geist-ui-svelte.dev/components/center) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
