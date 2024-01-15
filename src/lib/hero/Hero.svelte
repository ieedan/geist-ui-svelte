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
[Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
#### Description
A layout component for creating a "hero" page. 
Has a height of 100svh and width 100% and automatically centers its content.
##### Example:
```svelte
<Hero>
	<Text type="h1">Geist-UI-Svelte</Text>
	<Spacer h={20} />
	<div class="flex place-items-center gap-2">
		<Button color="secondary-light">Get Started</Button>
		<Button>See Docs</Button>
	</div>
</Hero>
```
-->
