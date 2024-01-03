<script lang="ts">
	export let h: number | string = 1;
	export let w: number | string = 1;
	export let inline: boolean = false;
</script>

<span
	{...$$restProps}
	data-inline={inline}
	style="height: {h}px; width: {w}px;"
	class="data-[inline=false]:block data-[inline=true]:inline-block"></span>
