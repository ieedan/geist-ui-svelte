<script lang="ts">
	export let to: string;
	export let underline: boolean = false;
	export let color: boolean = false;
</script>

<a
	{...$$restProps}
	href={to}
	data-underline={underline}
	data-color={color}
	class="data-[underline=true]:hover:underline transition-all text-gray-999 w-fit
    dark:text-gray-0 data-[color=true]:text-blue-500 inline-flex place-items-center"
	><slot /></a
>
