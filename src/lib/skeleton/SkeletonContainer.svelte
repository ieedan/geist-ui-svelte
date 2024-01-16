<script lang="ts">
	export let loading: boolean = false;
	let className: string = "";
	export { className as class };
</script>

<div data-show={loading} class="data-[show=false]:hidden {className}">
	<slot />
</div>
