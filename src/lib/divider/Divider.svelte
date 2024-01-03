<script lang="ts">
	export let height = "1px";
	export let margin: "none" | "xs" | "sm" | "md" | "lg" | "xl" = "none";
</script>

<hr
	style="height: {height};"
	data-margin={margin}
	class="w-full bg-gray-100 dark:bg-gray-900 border-none
    data-[margin='xs']:my-1 data-[margin='sm']:my-2 data-[margin='md']:my-3 
    data-[margin='lg']:my-4 data-[margin='xl']:my-5" />
