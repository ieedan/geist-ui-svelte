<script lang="ts">
	let className: string = "";
	export { className as class };
</script>

<div {...$$restProps} class="flex flex-col justify-center place-items-center {className}">
	<slot />
</div>

<!--
@component
[Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
#### Description
A layout component for centering content.
##### Example:
```svelte
<Center>
    <Text type="h1">Geist-UI-Svelte</Text>    
<Center/>
```
-->
