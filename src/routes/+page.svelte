<script>
	import Button from "$lib/button/Button.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
</script>

<svelte:head>
	<title>Home - geist-ui-svelte</title>
</svelte:head>

<div class="hero-height flex flex-col place-items-center justify-center">
	<Text type="h1" align="center">geist-ui-svelte</Text>
	<Spacer h={20} />
	<div class="flex place-items-center">
		<Button href="/guide" color="secondary-light">Get Started</Button>
		<Spacer w={10} />
		<Button href="/components">Components</Button>
	</div>
	<Spacer h={20} />
	<div class="hidden md:block">
		<Snippet type="lite" text="npm i geist-ui-svelte" />
	</div>
</div>

<style lang="postcss">
	.hero-height {
		height: calc(100svh - 79px);
	}
</style>
