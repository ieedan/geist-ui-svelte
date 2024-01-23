<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Skeleton from "$lib/skeleton/Skeleton.svelte";
	import SkeletonContainer from "$lib/skeleton/SkeletonContainer.svelte";
	import Button from "$lib/button/Button.svelte";
	import User from "$lib/avatar/Avatar.svelte";
	import { onMount } from "svelte";

	let loading = true;

	const startLoading = () => {
		loading = true;

		setTimeout(() => {
			loading = false;
		}, 3000);
	};

	/* eslint-disable no-useless-escape */
	const exampleCode = `<script lang="ts">
	import Skeleton from "$lib/skeleton/Skeleton.svelte";
	import SkeletonContainer from "$lib/skeleton/SkeletonContainer.svelte";
	import Button from "$lib/button/Button.svelte";
	import User from "$lib/user/User.svelte";
	import { onMount } from "svelte";
	
	let loading = true;

	const startLoading = () => {
		loading = true;

		setTimeout(() => {
			loading = false;
		}, 3000);
	};

	onMount(() => {
		startLoading();
	});
<\/script>

<Button 
  on:click={startLoading} 
  bind:loading={loading}>
	Refresh
</Button>
<SkeletonContainer 
  bind:loading 
  class="flex place-items-center gap-2">
	<Skeleton class="size-10 rounded-full" />
	<div class="flex flex-col gap-2">
		<Skeleton class="w-14 h-4 rounded-md" />
		<Skeleton class="w-24 h-4 rounded-md" />
	</div>
</SkeletonContainer>
{#if !loading}
	<div class="flex place-items-center gap-2">
		<User name="Aidan" detail details="Trash dev" />
	</div>
{/if}`;

	let secondExampleLoading = true;
	let promise: Promise<boolean>;

	const createPromise = () => {
		secondExampleLoading = true;
		promise = new Promise<boolean>((res) => {
			setTimeout(() => res(true), 3000);
		});
		promise.then(() => (secondExampleLoading = false));
	};

	onMount(() => {
		createPromise();
		startLoading();
	});

	/* eslint-disable no-useless-escape */
	const secondExampleCode = `<script lang="ts">
	import Skeleton from "$lib/skeleton/Skeleton.svelte";
	import SkeletonContainer from "$lib/skeleton/SkeletonContainer.svelte";
	import Button from "$lib/button/Button.svelte";
	import User from "$lib/user/User.svelte";
	import { onMount } from "svelte";
	
	let loading = true;
	let promise: Promise<boolean>;

	const createPromise = () => {
		loading = true;
		promise = new Promise<boolean>((res) => {
			setTimeout(() => res(true), 3000);
		});
		promise.then(() => loading = false);
	};

	onMount(() => {
		createPromise();
	});
<\/script>

<Button
	on:click={createPromise}
	bind:loading>
	Refresh
</Button>
{#await promise}
	<SkeletonContainer loading 
	class="flex place-items-center gap-2">
		<Skeleton class="size-10 rounded-full" />
		<div class="flex flex-col gap-2">
			<Skeleton class="w-14 h-4 rounded-md" />
			<Skeleton class="w-24 h-4 rounded-md" />
		</div>
	</SkeletonContainer>
{:then}
	<div class="flex place-items-center gap-2">
		<User name="Aidan" detail details="Trash dev" />
	</div>
{/await}`;
</script>

<Text type="h3">Skeleton</Text>
<Spacer h={10} />
<Text>A placeholder layout component to indicate a content loading state.</Text>
<Spacer h={20} />
<Snippet
	width="600px"
	type="lite"
	text={`import { Skeleton, SkeletonContainer } from 'geist-ui-svelte';`}
/>
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>
	Use the Skeleton container component to contain your skeleton content. When
	<code>`loading`</code> is false the container will hide.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Button on:click={startLoading} bind:loading>Refresh</Button>
		<SkeletonContainer bind:loading class="flex place-items-center gap-2">
			<Skeleton class="size-10 rounded-full" />
			<div class="flex flex-col gap-2">
				<Skeleton class="w-14 h-4 rounded-md" />
				<Skeleton class="w-24 h-4 rounded-md" />
			</div>
		</SkeletonContainer>
		{#if !loading}
			<div class="flex place-items-center gap-2">
				<User name="Aidan" detail details="Trash dev" />
			</div>
		{/if}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={exampleCode} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With promise</Text>
<Spacer h={5} />
<Text>Use a promise to show / hide skeleton content.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start gap-2">
		<Button on:click={createPromise} bind:loading={secondExampleLoading}>Refresh</Button>
		{#await promise}
			<SkeletonContainer loading class="flex place-items-center gap-2">
				<Skeleton class="size-10 rounded-full" />
				<div class="flex flex-col gap-2">
					<Skeleton class="w-14 h-4 rounded-md" />
					<Skeleton class="w-24 h-4 rounded-md" />
				</div>
			</SkeletonContainer>
		{:then}
			<div class="flex place-items-center gap-2">
				<User name="Aidan" detail details="Trash dev" />
			</div>
		{/await}
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={secondExampleCode} />
		</Details>
	</div>
</FieldSet>
