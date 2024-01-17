<script lang="ts">
	let className: string = "";
	export { className as class };

	export let size: "xs" | "sm" | "md" | "lg" | "xl" = "md";

	export let type: "success" | "secondary" | "warning" | "error" = "secondary";
</script>

<div
	class="flex gap-1 loading-container group/loading {className}"
	data-size={size}
	data-type={type}
>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all
		animate-loading-blink group-data-[type='success']/loading:bg-blue-600 group-data-[type='warning']/loading:bg-orange-300
		group-data-[type='warning']/loading:dark:bg-orange-400 group-data-[type='error']/loading:bg-red-500
		group-data-[type='error']/loading:dark:bg-red-600"
	></span>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all
		animate-loading-blink group-data-[type='success']/loading:bg-blue-600 group-data-[type='warning']/loading:bg-orange-300
	  group-data-[type='warning']/loading:dark:bg-orange-400 group-data-[type='error']/loading:bg-red-500
	  group-data-[type='error']/loading:dark:bg-red-600"
	></span>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all
		animate-loading-blink group-data-[type='success']/loading:bg-blue-600 group-data-[type='warning']/loading:bg-orange-300
	  group-data-[type='warning']/loading:dark:bg-orange-400 group-data-[type='error']/loading:bg-red-500
	  group-data-[type='error']/loading:dark:bg-red-600"
	></span>
</div>

<style lang="postcss">
	.animate-loading-blink {
		animation: loading-blink 1.4s infinite both;
	}

	.loading-container span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.loading-container span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes loading-blink {
		0% {
			opacity: 0.2;
		}

		20% {
			opacity: 1;
		}

		100% {
			opacity: 0.2;
		}
	}
</style>
