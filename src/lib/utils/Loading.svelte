<script lang="ts">
	let className: string = "";
	export { className as class };
</script>

<div class="flex gap-1 loading-container {className}">
	<span class="h-[6px] w-[6px] rounded-full bg-gray-200 transition-all animate-loading-blink"
	></span>
	<span class="h-[6px] w-[6px] rounded-full bg-gray-200 transition-all animate-loading-blink"
	></span>
	<span class="h-[6px] w-[6px] rounded-full bg-gray-200 transition-all animate-loading-blink"
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
