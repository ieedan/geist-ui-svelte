<script lang="ts">
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";

	let show = false;
	export let label: string;
</script>

<div data-show={show} class="group/details flex flex-col gap-2">
	<button
		on:click={() => (show = !show)}
		class="flex place-items-center gap-2 text-sm text-gray-600 dark:text-gray-500"
	>
		<div class="data-[show=true]:rotate-90">
			<ChevronIcon size={16} />
		</div>
		{label}
	</button>
	<div class="hidden group-data-[show=true]/details:block">
		<slot />
	</div>
</div>
