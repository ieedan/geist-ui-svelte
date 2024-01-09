<script lang="ts">
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import ChevronIcon from "$lib/icons/ChevronIcon.svelte";
	import PlusIcon from "$lib/icons/PlusIcon.svelte";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import MenuIcon from "$lib/icons/MenuIcon.svelte";
	import LockIcon from "$lib/icons/LockIcon.svelte";
	import SearchIcon from "$lib/icons/SearchIcon.svelte";
	import Text from "$lib/text/Text.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Note from "$lib/note/Note.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Card from "$lib/card/Card.svelte";
	import Center from "$lib/center/Center.svelte";
	import Search from "$lib/search/Search.svelte";
	import Modal from "$lib/modal/Modal.svelte";
	import type { ComponentType } from "svelte";

	type Icon = {
		name: string;
		component: ComponentType;
	};

	const icons: Icon[] = [
		{
			name: "CheckMark",
			component: CheckMarkIcon,
		},
		{
			name: "Chevron",
			component: ChevronIcon,
		},
		{
			name: "Plus",
			component: PlusIcon,
		},
		{
			name: "Clone",
			component: CloneIcon,
		},
		{
			name: "Menu",
			component: MenuIcon,
		},
		{
			name: "Lock",
			component: LockIcon,
		},
		{
			name: "Search",
			component: SearchIcon,
		},
		{
			name: "Github",
			component: GithubIcon,
		},
	];

	let currentIcon: Icon | undefined = undefined;
	let search: string = "";
	let showModal = false;

	$: foundIcons = icons.filter(
		(a) =>
			a.name.toLowerCase().startsWith(search.toLowerCase()) ||
			a.name.toLowerCase() == search.toLowerCase(),
	);

	const selectIcon = (icon: Icon) => {
		currentIcon = icon;
		showModal = true;
	};
</script>

<Text type="h3">Icons</Text>
<Spacer h={10} />
<Text>Symbols to represent different actions.</Text>
<Spacer h={20} />
<Note color="warning">
	The icons included only represent what is necessary to support the components in this library.
</Note>
<Spacer h={20} />
<Card>
	<div class="px-1 pb-4">
		<Search placeholder="Search icons..." bind:value={search} />
	</div>
	<div class="flex flex-wrap justify-evenly gap-5">
		{#each foundIcons as icon}
			<button
				on:click={() => selectIcon(icon)}
				class="flex place-items-center justify-center hover:border-gray-100 hover:dark:border-gray-900
			border border-transparent size-28 rounded-lg transition-all"
			>
				<Center class="gap-2">
					<div><svelte:component this={icon.component} size={28} /></div>
					<Text type="small" color="secondary">{icon.name}</Text>
				</Center>
			</button>
		{/each}
	</div>
</Card>
<Modal
	bind:visible={showModal}
	class="md:h-56 md:w-[525px] flex place-items-center justify-center px-4 py-4"
>
	<div class="flex flex-col justify-center place-items-center gap-3">
		{#if currentIcon}
			<Card class="w-full flex place-items-center justify-center">
				<svelte:component this={currentIcon.component} size={100} />
			</Card>
			<div class="hidden md:block">
				<Snippet
					width="500px"
					type="lite"
					text={`import { ${currentIcon.name}Icon } from 'geist-ui-svelte'`}
				/>
			</div>
		{/if}
	</div>
</Modal>
