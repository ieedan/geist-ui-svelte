<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	// Redirects to introduction
	onMount(() => {
		if (window.location.pathname === "/guide") {
			goto("/guide/introduction");
		}
	});
</script>
