<script lang="ts">
	export let type: "default" | "secondary" = "default";

	let className: string = "";
	export { className as class };
	/** Set this attribute to have this height subtracted from the hero height */
	export let exclusionHeight = 0;
</script>

<section
	{...$$restProps}
	data-type={type}
	style="height: calc(100svh - {exclusionHeight}px);"
	class="flex flex-col place-items-center justify-center w-full
	 bg-gray-0 dark:bg-gray-999 data-[type='secondary']:bg-gray-50
	 data-[type='secondary']:dark:bg-gray-950 {className}"
>
	<slot />
</section>

<!--
@component
A layout component to help you create your hero pages.

[See Docs](https://geist-ui-svelte.dev/components/hero) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
