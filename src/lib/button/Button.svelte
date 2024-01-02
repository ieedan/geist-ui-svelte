<script lang="ts">
	import type { ColorState } from "$lib/types.js";

    export let disabled = false;

    export let type: ColorState = 'primary'; 

    //data-[type='default']:
</script>

<button {disabled} data-type={type} class="rounded-md border px-2 py-1">
    <slot/>
</button>

<!--
@component
To do: Docs 
-->