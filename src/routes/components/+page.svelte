<script lang="ts">
	import Hero from "$lib/hero/Hero.svelte";
	import Link from "$lib/link/Link.svelte";

</script>

<Hero exclusionHeight={79}>
	If you haven't already been redirected click <Link to="/components/text" color>Here</Link>
</Hero>