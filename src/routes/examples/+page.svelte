<script lang="ts">
	import Text from "$lib/text/Text.svelte";
	import Center from "$lib/center/Center.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Card from "$lib/card/Card.svelte";
	import Image from "$lib/image/Image.svelte";

	type Example = {
		href: string;
		image: string;
		name: string;
		description: string;
	};

	const examples: Example[] = [
		{
			href: "/examples/login-form",
			image: "",
			name: "Login Form",
			description: "A simple login form",
		},
	];
</script>

<Center class="px-6">
	<Spacer h={100} />
	<Text type="h1" style="max-width: 700px;" align="center"
		>Look your best in <span class="hidden dark:inline">black</span><span class="dark:hidden"
			>white</span
		>.</Text>
	<Spacer h={75} />
	<div class="flex flex-wrap justify-center place-items-center gap-8">
		{#each examples as example}
			<a href={example.href}>
				<Card class="flex flex-col gap-4 p-6" color="abort" hoverable>
					<Image src={example.image} alt="{example.name} {example.description}" width="300px" height="200px" />
					<div class="flex flex-col">
						<Text b>{example.name}</Text>
						<Text type="small">{example.description}</Text>
					</div>
				</Card>
			</a>
		{/each}
	</div>
    <Spacer h={32} />
</Center>
