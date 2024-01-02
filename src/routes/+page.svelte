<script>
	import Button from "$lib/button/Button.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
</script>

<div
	class="flex h-screen flex-col place-items-center justify-center gap-5 bg-white dark:bg-gray-999"
>
	<button
		on:click={() => {
			document.documentElement.classList.toggle("dark");
		}}
		class="dark:text-white"
	>
		Toggle Mode
	</button>
	<div class="flex place-items-center justify-center flex-col gap-3">
		<div class="flex place-items-center justify-center gap-3">
			<Button style="default">Default</Button>
			<Button style="secondary">Start Deploying</Button>
			<Button ghost style="secondary">See docs</Button>
			<Button loading>Do thing</Button>
			<Button disabled style="secondary">Disabled</Button>
			<Button ghost size="xs">xs</Button>
			<Button ghost size="sm">sm</Button>
			<Button ghost size="md">md</Button>
			<Button ghost size="lg">lg</Button>
			<Button ghost size="xl">xl</Button>
		</div>
		<div class="flex flex-wrap place-items-center justify-center gap-3">
			<Button style="success">Success</Button>
			<Button style="warning">Warning</Button>
			<Button style="error">Error</Button>
			<Button style="abort">Abort</Button>
			<Button style="secondary-light">Secondary Light</Button>
			<Button style="success" ghost>Success</Button>
			<Button style="warning" ghost>Warning</Button>
			<Button style="error" ghost>Error</Button>
			<Button style="abort" ghost>Abort</Button>
			<Button style="secondary-light" ghost>Secondary Light</Button>
		</div>
	</div>
	<FieldSet>
		<h2>Heading</h2>
		<p>Some content here whatever you want really</p>
		<div slot="footer" class="w-full flex justify-between place-items-center">
			<small>Error</small>
			<Button style="error" size="xs" ghost>Delete</Button>
		</div>
	</FieldSet>
</div>
