<script lang="ts">
	export let h: number = 1;
	export let w: number = 1;
	export let inline: boolean = false;
</script>

<span
	{...$$restProps}
	data-inline={inline}
	style="height: {h}px; width: {w}px;"
	class="data-[inline=false]:block data-[inline=true]:inline-block"
></span>

<!--
@component
A layout component to space your content.

[See Docs](https://geist-ui-svelte.dev/components/spacer) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
