<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Skeleton from "$lib/skeleton/Skeleton.svelte";
	import SkeletonContainer from "$lib/skeleton/SkeletonContainer.svelte";
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
	<div class="flex flex-col justify-start">
		<SkeletonContainer loading={true} class="flex place-items-center gap-2">
			<Skeleton class="size-10 rounded-full" />
			<div class="flex flex-col gap-2">
				<Skeleton class="w-14 h-4 rounded-md" />
				<Skeleton class="w-24 h-4 rounded-md" />
			</div>
		</SkeletonContainer>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<SkeletonContainer
    loading={true} 
    class="flex place-items-center gap-2">
    <Skeleton class="size-10 rounded-full" />
    <div class="flex flex-col gap-2">
        <Skeleton class="w-14 h-4 rounded-md" />
        <Skeleton class="w-24 h-4 rounded-md" />
    </div>
</SkeletonContainer>`}
			/>
		</Details>
	</div>
</FieldSet>
