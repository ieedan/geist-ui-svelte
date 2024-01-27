<script lang="ts">
	import type { ButtonColor, Size } from "$lib/types.js";

	export let ghost: boolean = false;
	export let color: ButtonColor = "default";

	export let size: Size = "md";
</script>

<div
	role="group"
	data-style={color}
	data-ghost={ghost}
	data-size={size}
	class="group/gbd flex place-items-center gap-0 justify-center rounded-md w-fit"
>
	<slot />
</div>

<!--
@component
A set of related buttons.

[See Docs](https://geist-ui-svelte.dev/components/buttongroup) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
