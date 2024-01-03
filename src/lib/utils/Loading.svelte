<script lang="ts">
	let className: string = "";
	export { className as class };

	export let size: "xs" | "sm" | "md" | "lg" | "xl" = "md";
</script>

<div class="flex gap-1 loading-container group/loading {className}" data-size={size}>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all animate-loading-blink"
	></span>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all animate-loading-blink"
	></span>
	<span
		class="group-data-[size='xs']/loading:size-0.5 group-data-[size='sm']/loading:size-1 group-data-[size='md']/loading:size-1.5
		group-data-[size='lg']/loading:size-2 group-data-[size='xl']/loading:size-2.5 rounded-full bg-gray-200 transition-all animate-loading-blink"
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
