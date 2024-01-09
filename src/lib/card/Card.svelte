<script lang="ts">
	export let hoverable = false;
	export let shadow = false;
	let className: string = "";
	export { className as class };
</script>

<div
	data-hoverable={hoverable}
	data-shadow={shadow}
	class="border rounded-lg border-gray-100 ring-gray-100 dark:ring-gray-900
	dark:border-gray-900 p-4 data-[hoverable=true]:hover:ring-2 transition-all
    data-[shadow=true]:shadow-md data-[shadow=true]:border-transparent
	data-[shadow=true]:dark:border-gray-900 {className}"
>
	<slot />
</div>
