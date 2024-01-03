<script lang="ts">
	export let type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" = "p";

	export let i = false;
	export let b = false;
	export let del = false;

	export let style: "default" | "secondary" | "success" | "warning" | "error" | "abort" =
		"default";
</script>

<svelte:element
	this={type}
	data-i={i}
	data-b={b}
	data-del={del}
	data-style={style}
	class="text-gray-999 dark:text-gray-0 geist-ui-text data-[i=true]:italic data-[b=true]:font-bold
    data-[del=true]:line-through data-[style='secondary']:text-gray-500 data-[style='success']:text-blue-600
    data-[style='warning']:text-orange-300 data-[style='warning']:dark:text-orange-400 data-[style='error']:text-red-500
    data-[style='error']:dark:text-red-600 data-[style='abort']:text-gray-300 data-[style='abort']:dark:text-gray-700">
	<slot />
</svelte:element>

<style lang="postcss">
	small.geist-ui-text {
		@apply text-xs;
	}

	p,
	span.geist-ui-text {
		@apply text-base;
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
