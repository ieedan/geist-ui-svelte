<script lang="ts">
	export let to: string;
	export let underline: boolean = false;
	export let color: boolean = false;
	export let block: boolean = false;
</script>

<a
	{...$$restProps}
	href={to}
	data-underline={underline}
	data-color={color}
	data-block={block}
	class="data-[underline=true]:hover:underline transition-all text-gray-999 w-fit data-[block=true]:text-blue-500 geist-ui-link
    dark:text-gray-0 data-[color=true]:text-blue-500 inline-flex place-items-center rounded-md px-[1px] bg-opacity-5">
	<slot />
</a>

<style lang="postcss">
	.geist-ui-link:hover[data-block=true] {
		background-color: rgb(13 27 44);
	}
</style>