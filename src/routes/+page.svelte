<script>
	import Button from "$lib/button/Button.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Text from "$lib/text/Text.svelte";
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
			<Button>Default</Button>
			<Button style="secondary">Start Deploying</Button>
			<Button ghost style="secondary">See docs</Button>
			<Button loading>Do thing</Button>
			<Button disabled style="secondary">Disabled</Button>
			<Button size="xs">xs</Button>
			<Button size="sm">sm</Button>
			<Button size="md">md</Button>
			<Button size="lg">lg</Button>
			<Button size="xl">xl</Button>
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
	<div>
		<Text type="h1">heading</Text>
		<Text type="h2">heading</Text>
		<Text type="h3">heading</Text>
		<Text type="h4">heading</Text>
		<Text type="h5">heading</Text>
		<Text type="h6">heading</Text>
		<Text type="p">paragraph</Text>
		<Text type="p" blockquote>paragraph blockquote</Text>
		<Text type="span">span</Text>
		<Text type="small">small</Text>
		<Text type="small" style="secondary">small secondary</Text>
		<Text type="small" style="success">small success</Text>
		<Text type="small" style="warning">small warning</Text>
		<Text type="small" style="error">small error</Text>
		<Text type="small" style="abort">small abort</Text>
	</div>
	<FieldSet>
		<Text type="h5">Heading</Text>
		<Text type="p">Some content here whatever you want really</Text>
		<div slot="footer" class="w-full flex justify-between place-items-center">
			<Text type="small">There was an error with the request</Text>
			<Button style="error" size="xs" ghost>Delete</Button>
		</div>
	</FieldSet>
</div>
