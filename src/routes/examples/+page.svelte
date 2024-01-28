<script lang="ts">
	import Text from "$lib/text/Text.svelte";
	import Center from "$lib/center/Center.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Card from "$lib/card/Card.svelte";
	import loginForm from "$lib/assets/login-form.png";
	import loginFormLight from "$lib/assets/login-form-light.png";
	import deleteConfirmationLight from "$lib/assets/delete-confirmation-light.png";
	import deleteConfirmation from "$lib/assets/delete-confirmation.png";

	type Example = {
		href: string;
		image: string;
		imageDark: string;
		title: string;
		description: string;
	};

	const examples: Example[] = [
		{
			href: "/examples/login-form",
			image: loginFormLight,
			imageDark: loginForm,
			title: "Login Form",
			description: "A simple login form",
		},
		{
			href: "/examples/delete-confirmation",
			image: deleteConfirmationLight,
			imageDark: deleteConfirmation,
			title: "Delete Confirmation",
			description: "A dialog to confirm the deletion of an asset.",
		},
	];
</script>

<svelte:head>
	<title>Examples - geist-ui-svelte</title>
</svelte:head>

<Center class="px-6">
	<Spacer h={100} />
	<Text type="h1" class="max-w-[700px]" align="center"
		>Look your best in <span class="hidden dark:inline">black</span><span class="dark:hidden"
			>white</span
		>.</Text
	>
	<Spacer h={75} />
	<div class="flex flex-wrap justify-center place-items-center gap-8">
		{#each examples as example}
			<a href={example.href}>
				<Card class="flex flex-col gap-4 p-6" color="abort" hoverable>
					<Center
						class="bg-gray-0 dark:bg-gray-999 w-[300px] h-[225px] rounded-lg overflow-hidden"
					>
						<img
							src={example.image}
							alt="{example.title} {example.description}"
							class="rounded-xl block dark:hidden"
							width="300px"
							height="200px"
						/>
						<img
							src={example.imageDark}
							alt="{example.title} {example.description}"
							class="rounded-xl hidden dark:block"
							width="300px"
							height="200px"
						/>
					</Center>
					<div class="flex flex-col">
						<Text b>{example.title}</Text>
						<Text type="small">{example.description}</Text>
					</div>
				</Card>
			</a>
		{/each}
	</div>
	<Spacer h={32} />
</Center>
