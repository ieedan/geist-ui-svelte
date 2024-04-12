<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Modal from "$lib/modal/Modal.svelte";
	import Button from "$lib/button/Button.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	let showFirstExample = false;
</script>

<Text type="h3">Modal</Text>
<Spacer h={10} />
<Text>Shows a popup and fades the background.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Modal } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>
	Use <code>`sm:h-[]`</code> / <code>`sm:w-[]`</code> to customize the height and width of the modal
	when the screen width is greater than 640px.
</Text>
<Spacer h={10} />
<Playground
	code={`<Button on:click={() => (showFirstExample = true)}>
	Show modal
</Button>
<Modal 
	bind:visible={showFirstExample}
 	class="sm:w-[640px]">
	<div 
	class="p-4 flex flex-col place-items-center
	 justify-center h-full">
		<Text align="center">
			This is a modal notice how it goes 
			to the bottom of the screen on a smaller
			view.
		</Text>
		<Spacer h={30} />
		<Text 
	align="center" color="secondary">
		Click outside the modal or press 
		<code>\`Esc\`</code>.
		</Text>
	</div>
</Modal>`}
>
	<Button on:click={() => (showFirstExample = true)}>Show modal</Button>
	<Modal bind:visible={showFirstExample} class="sm:w-[640px]">
		<div class="p-4 flex flex-col place-items-center justify-center h-full">
			<Text align="center">
				This is a modal notice how it goes to the bottom of the screen on a smaller view.
			</Text>
			<Spacer h={30} />
			<Text align="center" color="secondary">
				Click outside the modal or press <code>`Esc`</code>.
			</Text>
		</div>
	</Modal>
</Playground>
