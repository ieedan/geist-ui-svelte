<script lang="ts">
	import type { TextAlignment } from "$lib/types.js";

	export let type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" = "p";

	export let i = false;
	export let b = false;
	export let del = false;
	export let blockquote = false;
	export let align: TextAlignment = "initial";
	export let style: string = "";
	let className = "";
	export { className as class };

	export let color: "default" | "secondary" | "success" | "warning" | "error" | "abort" =
		"default";
</script>

<svelte:element
	this={type}
	style="text-align: {align};{style}"
	data-i={i}
	data-b={b}
	data-del={del}
	data-blockquote={blockquote}
	data-style={color}
	class="text-gray-999 dark:text-gray-0 geist-ui-text data-[i=true]:italic data-[b=true]:font-bold data-[blockquote=true]:flex justify-between place-items-center
    data-[del=true]:line-through data-[style='secondary']:text-gray-500 data-[style='success']:text-blue-600
    data-[style='warning']:text-orange-300 data-[style='warning']:dark:text-orange-400 data-[style='error']:text-red-500
    data-[style='error']:dark:text-red-600 data-[style='abort']:text-gray-300 data-[style='abort']:dark:text-gray-700
    data-[blockquote=true]:bg-gray-50 data-[blockquote=true]:border-gray-100 data-[blockquote=true]:dark:bg-gray-950
    data-[blockquote=true]:dark:border-gray-900 data-[blockquote=true]:border data-[blockquote=true]:px-2 data-[blockquote=true]:py-1
    data-[blockquote=true]:rounded-md p-0 m-0 {className}"
>
	<slot />
</svelte:element>

<style lang="postcss">
	small,
	p,
	span.geist-ui-text {
		@apply inline;
	}

	small.geist-ui-text {
		@apply text-xs font-normal;
	}

	p,
	span.geist-ui-text {
		@apply text-base font-normal;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6.geist-ui-text {
		@apply font-bold;
	}

	h1.geist-ui-text {
		@apply text-7xl;
	}

	h2.geist-ui-text {
		@apply text-5xl;
	}

	h3.geist-ui-text {
		@apply text-3xl;
	}

	h4.geist-ui-text {
		@apply text-2xl;
	}

	h4.geist-ui-text {
		@apply text-xl;
	}

	h5.geist-ui-text {
		@apply text-lg;
	}
</style>
