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
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Details from "$lib/details/Details.svelte";
	import Code from "$lib/code/Code.svelte";
	import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
	import CommandIcon from "$lib/icons/CommandIcon.svelte";
	import EditIcon from "$lib/icons/EditIcon.svelte";
	import EyeIcon from "$lib/icons/EyeIcon.svelte";
	import EyeSlash from "$lib/icons/EyeSlashIcon.svelte";
	import XIcon from "$lib/icons/XIcon.svelte";
	import ChevronUpDownIcon from "$lib/icons/ChevronUpDownIcon.svelte";
	import SunIcon from "$lib/icons/SunIcon.svelte";
	import MoonIcon from "$lib/icons/MoonIcon.svelte";
	import DesktopIcon from "$lib/icons/DesktopIcon.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import EllipsisIcon from "$lib/icons/EllipsisIcon.svelte";
	import GridIcon from "$lib/icons/GridIcon.svelte";
	import { ListIcon } from "$lib/index.js";
	import Playground from "$lib/docs-components/playground/playground.svelte";

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
		{
			name: "Svelte",
			component: SvelteIcon,
		},
		{
			name: "Command",
			component: CommandIcon,
		},
		{
			name: "Edit",
			component: EditIcon,
		},
		{
			name: "Eye",
			component: EyeIcon,
		},
		{
			name: "EyeSlash",
			component: EyeSlash,
		},
		{
			name: "X",
			component: XIcon,
		},
		{
			name: "ChevronUpDown",
			component: ChevronUpDownIcon,
		},
		{
			name: "Sun",
			component: SunIcon,
		},
		{
			name: "Moon",
			component: MoonIcon,
		},
		{
			name: "Desktop",
			component: DesktopIcon,
		},
		{
			name: "Ellipsis",
			component: EllipsisIcon,
		},
		{
			name: "Grid",
			component: GridIcon,
		},
		{
			name: "List",
			component: ListIcon,
		},
	];

	export let data;

	let currentIcon: Icon | undefined = data.currentIcon
		? icons.find((a) => a.name.toLowerCase() == data.currentIcon?.toLowerCase())
		: undefined;
	let search: string = data.currentIcon ?? "";
	let showModal = currentIcon != undefined;

	$: foundIcons = icons.filter(
		(a) =>
			a.name.toLowerCase().startsWith(search.toLowerCase()) ||
			a.name.toLowerCase() == search.toLowerCase(),
	);

	const selectIcon = (icon: Icon) => {
		currentIcon = icon;
		showModal = true;

		$page.url.searchParams.set("icon", icon.name);
		goto($page.url.toString(), { noScroll: true });
	};

	const closed = () => {
		$page.url.searchParams.delete("icon");
		goto($page.url.toString(), { noScroll: true });
	};
</script>

<Text type="h3">Icons</Text>
<Spacer h={10} />
<Text>Symbols to represent different actions.</Text>
<Spacer h={30} />
<Text type="h4">Size</Text>
<Spacer h={5} />
<Text>
	Use the <code>`size`</code> attribute to size the icon.
</Text>
<Spacer h={10} />
<Playground
	code={`<SvelteIcon size={10}/>
<SvelteIcon size={15}/>
<SvelteIcon size={20}/>
<SvelteIcon size={25}/>
<SvelteIcon size={30}/>`}>
	<div class="flex place-items-end gap-2">
		<SvelteIcon size={10} />
		<SvelteIcon size={15} />
		<SvelteIcon size={20} />
		<SvelteIcon size={25} />
		<SvelteIcon size={30} />
	</div>
</Playground>
<Spacer h={30} />
<Text type="h4">Color</Text>
<Spacer h={5} />
<Text>The parent container will set the color of the icon from its text color.</Text>
<Spacer h={10} />
<Playground
	code={`<Text color="success"><SvelteIcon size={24}/></Text>
	<Text color="warning"><SvelteIcon size={24}/></Text>
	<Text color="error"><SvelteIcon size={24}/></Text>
	<Text color="abort"><SvelteIcon size={24}/></Text>`}>
	<div class="flex place-items-end gap-1">
		<Text color="success"><SvelteIcon size={24} /></Text>
		<Text color="warning"><SvelteIcon size={24} /></Text>
		<Text color="error"><SvelteIcon size={24} /></Text>
		<Text color="abort"><SvelteIcon size={24} /></Text>
	</div>
</Playground>
<Spacer h={20} />
<Note color="warning">
	The icons included only represent what is necessary to support the components in this library.
</Note>
<Spacer h={20} />
<Card>
	<div class="px-1 pb-4">
		<Search placeholder="Search icons..." bind:value={search} clearable />
	</div>
	<div class="flex flex-wrap justify-evenly gap-5">
		{#each foundIcons as icon}
			<button
				on:click={() => selectIcon(icon)}
				class="flex place-items-center justify-center hover:border-gray-100 hover:dark:border-gray-900
			border border-transparent size-28 rounded-lg transition-all">
				<Center class="gap-2">
					<div><svelte:component this={icon.component} size={28} /></div>
					<Text type="small" color="secondary">{icon.name}</Text>
				</Center>
			</button>
		{/each}
	</div>
</Card>
<Modal
	on:closed={closed}
	bind:visible={showModal}
	class="md:h-56 md:w-[525px] flex place-items-center justify-center px-4 py-4">
	<div class="flex flex-col justify-center place-items-center gap-3">
		{#if currentIcon}
			<Card class="w-full flex place-items-center justify-center">
				<svelte:component this={currentIcon.component} size={100} />
			</Card>
			<div class="hidden md:block">
				<Snippet
					width="500px"
					type="transparent"
					text={`import { ${currentIcon.name}Icon } from 'geist-ui-svelte'`} />
			</div>
		{/if}
	</div>
</Modal>
