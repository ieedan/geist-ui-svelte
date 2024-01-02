<script>
	import Button from "$lib/button/Button.svelte";
</script>

<div
	class="flex h-screen flex-col place-items-center justify-center gap-5 bg-white dark:bg-gray-999">
	<button
		on:click={() => {
			document.documentElement.classList.toggle("dark");
		}}
		class="dark:text-white">
		Toggle Mode
	</button>
	<div class="flex place-items-center justify-center flex-grow gap-5">
		<Button type="primary">Start Deploying</Button>
		<Button type="secondary">See docs</Button>
		<Button loading type="secondary"></Button>
		<Button type="secondary" size="xs">xs</Button>
		<Button type="secondary" size="sm">sm</Button>
		<Button type="secondary" size="md">md</Button>
		<Button type="secondary" size="lg">lg</Button>
		<Button type="secondary" size="xl">xl</Button>
	</div>
</div>
