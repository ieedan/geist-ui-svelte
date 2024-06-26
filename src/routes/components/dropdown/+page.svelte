<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Dropdown from "$lib/dropdown/Dropdown.svelte";
	import User from "$lib/avatar/Avatar.svelte";
	import Divider from "$lib/divider/Divider.svelte";
	import LightSwitch from "$lib/lightswitch/LightSwitch.svelte";
	import Button from "$lib/button/Button.svelte";
	import Center from "$lib/center/Center.svelte";
	import Select from "$lib/select/Select.svelte";
	import Option from "$lib/select/Option.svelte";
	import Note from "$lib/note/Note.svelte";
	import type { Placement } from "$lib/util/place.js";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	type UserType = {
		name: string;
		username: string;
	};

	const user: UserType = {
		name: "Aidan Bleser",
		username: "ieedan",
	};

	let placement: Placement = "bottom";

	let userRef: HTMLButtonElement;
	let showUserExample = false;

	let showDropdown = false;
	let buttonRef: HTMLButtonElement;

	let showDropdownExample2 = false;
	let buttonRef2: HTMLButtonElement;

	let showDropdownExample3 = false;
	let buttonRef3: HTMLButtonElement;
</script>

<Text type="h3">Dropdown</Text>
<Spacer h={10} />
<Text>Displays a popup around an anchor component.</Text>
<Spacer h={20} />
<Snippet width="450px" type="transparent" text={`import { Dropdown } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground
	code={`<button bind:this={buttonRef} on:click={() => (showDropdown = true)}>
	Show dropdown
</button>
<Dropdown anchor={buttonRef} bind:visible={showDropdown} class="w-32 h-48">
	This is a dropdown
</Dropdown>`}
>
	<Center>
		<button bind:this={buttonRef} on:click={() => (showDropdown = !showDropdown)}>
			Show dropdown
		</button>
		<Dropdown anchor={buttonRef} bind:visible={showDropdown} class="w-32 h-48">
			This is a dropdown
		</Dropdown>
	</Center>
</Playground>
<Spacer h={30} />
<Note color="warning">
	Be careful when working with containers that use <code>`position: relative;`</code> as it can mess
	with the placement.
</Note>
<Spacer h={20} />
<Text type="h4">Placement</Text>
<Spacer h={5} />
<Text>
	The dropdown has different placement options that can be used to adjust the positioning of the
	dropdown. Notice how the dropdown also animates based on the placement. This is made possible
	through our custom placement functions. The default placement is <code class="text-nowrap"
		>`bottom-start`</code
	>.
</Text>
<Spacer h={10} />
<Playground
	code={`<Select bind:value={placement}>
	<Option value="bottom">Bottom</Option>
	<Option value="bottom-end">Bottom End</Option>
	<Option value="bottom-start">Bottom Start</Option>
	<Option value="top">Top</Option>
	<Option value="top-end">Top End</Option>
	<Option value="top-start">Top Start</Option>
</Select>
<Spacer h={20} />
<button
	bind:this={userRef}
	on:click={() => (show = !show)}
	class="flex place-items-center justify-center">
	<User name={user.name} />
</button>
<Dropdown anchor={userRef} bind:visible={show} {placement} class="w-60">
	<div class="flex flex-col p-2">
		<User name={user.name} detail details="@{user.username}" />
		<Spacer h={10} />
		<Divider />
		<Spacer h={5} />
		<a
			href="/dashboard"
			class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
			hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all">
			Dashboard
		</a>
		<a
			href="/dashboard/settings"
			class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
			hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all">
			Settings
		</a>
		<Spacer h={5} />
		<Divider />
		<Spacer h={5} />
		<a
			href="/"
			class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
			hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all">
			Homepage
		</a>
		<Spacer h={5} />
		<Divider />
		<Spacer h={5} />
		<div class="flex place-items-center gap-2">
			<LightSwitch />
			<Button href="/dashboard/logout">Sign Out</Button>
		</div>
	</div>
</Dropdown>`}
>
	<Center class="h-full">
		<Select bind:value={placement}>
			<Option value="bottom">Bottom</Option>
			<Option value="bottom-end">Bottom End</Option>
			<Option value="bottom-start">Bottom Start</Option>
			<Option value="top">Top</Option>
			<Option value="top-end">Top End</Option>
			<Option value="top-start">Top Start</Option>
			<Option value="right">Right</Option>
			<Option value="right-end">Right End</Option>
			<Option value="right-start">Right Start</Option>
			<Option value="left">Left</Option>
			<Option value="left-end">Left End</Option>
			<Option value="left-start">Left Start</Option>
		</Select>
		<Spacer h={20} />
		<button
			bind:this={userRef}
			on:click={() => (showUserExample = !showUserExample)}
			class="flex place-items-center justify-center"
		>
			<User name={user.name} />
		</button>
		<Dropdown anchor={userRef} bind:visible={showUserExample} {placement} class="w-60">
			<div class="flex flex-col p-2">
				<User name={user.name} detail details="@{user.username}" />
				<Spacer h={10} />
				<Divider />
				<Spacer h={5} />
				<a
					href="/dashboard"
					class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
							hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all"
				>
					Dashboard
				</a>
				<a
					href="/dashboard/settings"
					class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
							hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all"
				>
					Settings
				</a>
				<Spacer h={5} />
				<Divider />
				<Spacer h={5} />
				<a
					href="/"
					class="rounded-md px-2 py-2 text-gray-500 hover:text-gray-999
							hover:dark:text-gray-0 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all"
				>
					Homepage
				</a>
				<Spacer h={5} />
				<Divider />
				<Spacer h={5} />
				<div class="flex place-items-center gap-2">
					<LightSwitch />
					<Button href="/dashboard/logout">Sign Out</Button>
				</div>
			</div>
		</Dropdown>
	</Center>
</Playground>
<Spacer h={30} />
<Text type="h4">Shadow</Text>
<Spacer h={5} />
<Text>Add a shadow to the drop down.</Text>
<Spacer h={10} />
<Playground
	code={`<button bind:this={buttonRef2} on:click={() => (showDropdownExample2 = true)}>
	Show dropdown
</button>
<Dropdown
	anchor={buttonRef2}
	bind:visible={showDropdownExample2}
	class="w-32 h-48"
	placement="bottom"
	shadow>
	This is a dropdown
</Dropdown>`}
>
	<button bind:this={buttonRef2} on:click={() => (showDropdownExample2 = !showDropdownExample2)}>
		Show dropdown
	</button>
	<Dropdown
		anchor={buttonRef2}
		bind:visible={showDropdownExample2}
		class="w-32 h-48"
		placement="bottom"
		shadow
	>
		This is a dropdown
	</Dropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Overflow</Text>
<Spacer h={5} />
<Text>
	Even though we implemented our own functions for placement notice how the dropdown still reacts
	to overflow Try scrolling the page with the dropdown open and see the results.
</Text>
<Spacer h={10} />
<Playground
	code={`<button bind:this={buttonRef3} on:click={() => (showDropdownExample3 = true)}>
	Show dropdown
</button>
<Dropdown
	anchor={buttonRef3}
	bind:visible={showDropdownExample3}
	class="w-32 h-48"
	placement="bottom"
	shadow>
	This is a dropdown
</Dropdown>`}
>
	<button bind:this={buttonRef3} on:click={() => (showDropdownExample3 = !showDropdownExample3)}>
		Show dropdown
	</button>
	<Dropdown
		anchor={buttonRef3}
		bind:visible={showDropdownExample3}
		class="w-32 h-48"
		placement="bottom"
	>
		This is a dropdown
	</Dropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Anchor Binding</Text>
<Spacer h={5} />
<Text>
	You can bind a reference to an anchor or a query selector. This can be useful when working with
	something like context menus on dynamic list where you can't create a reference for each item in
	the list.
</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 3, type: "add" }]}
	code={`<button id="anchor-id"> Show Dropdown </button>
<Dropdown 
	anchor="#anchor-id" 
	event="click/click" 
	class="w-32 h-48" 
	placement="bottom">
	This is a dropdown
</Dropdown>`}
>
	<button id="anchor-id"> Show Dropdown </button>
	<Dropdown anchor="#anchor-id" event="click/click" class="w-32 h-48" placement="bottom">
		This is a dropdown
	</Dropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Anchor Events</Text>
<Spacer h={5} />
<Text>
	Sometimes it may be necessary or more convenient to create the event listener from the Dropdown
	itself for this you can use the <code>`event`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	class="flex-row gap-2"
	edits={[
		{ number: 4, type: "add" },
		{ number: 12, type: "add" },
		{ number: 20, type: "add" },
	]}
	code={`<button id="click-id"> Click To Show </button>
<Dropdown 
	anchor="#click-id" 
	event="click/click" 
	class="w-32 h-48" 
	placement="bottom">
	This is a dropdown
</Dropdown>
<button id="focus-id"> Focus To Show </button>
<Dropdown 
	anchor="#focus-id" 
	event="focus/blur" 
	class="w-32 h-48" 
	placement="bottom">
	This is a dropdown
</Dropdown>
<button id="hover-id"> Hover To Show </button>
<Dropdown
	anchor="#hover-id"
	event="mouseenter/mouseleave"
	class="w-32 h-48"
	placement="bottom">
	This is a dropdown
</Dropdown>`}
>
	<button id="click-id"> Click To Show </button>
	<Dropdown anchor="#click-id" event="click/click" class="w-32 h-48" placement="bottom">
		This is a dropdown
	</Dropdown>
	<button id="focus-id"> Focus To Show </button>
	<Dropdown anchor="#focus-id" event="focus/blur" class="w-32 h-48" placement="bottom">
		This is a dropdown
	</Dropdown>
	<button id="hover-id"> Hover To Show </button>
	<Dropdown anchor="#hover-id" event="mouseenter/mouseleave" class="w-32 h-48" placement="bottom">
		This is a dropdown
	</Dropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Animation</Text>
<Spacer h={5} />
<Text>
	Because dropdown keeps track of the position the drop down ends up at it can animate the in and
	out. You can disable this using the <code>`animate`</code> attribute.
</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 6, type: "add" }]}
	code={`<button id="animate-id"> Click To Show </button>
<Dropdown
	anchor="#animate-id"
	event="click/click"
	class="w-32 h-48"
	animate={false}>
	This is a dropdown
</Dropdown>`}
>
	<Center>
		<button id="animate-id"> Click To Show </button>
		<Dropdown anchor="#animate-id" event="click/click" class="w-32 h-48" animate={false}>
			This is a dropdown
		</Dropdown>
	</Center>
</Playground>
<Spacer h={30} />
<Text type="h4">Offsets</Text>
<Spacer h={5} />
<Text>You can use offsets to add space between the anchor and the dropdown.</Text>
<Spacer h={10} />
<Playground
	edits={[{ number: 9, type: "add" }]}
	code={`<Button id="offset-id">
	{\`offset={{ x: 10, y: 10 }}\`}
</Button>
<Dropdown
	anchor="#offset-id"
	event="click/click"
	class="w-32 h-48" 
	placement="bottom"
	offset={{ x: 10, y: 10 }}>
	This is a dropdown
</Dropdown>`}
>
	<Button id="offset-id">
		{`offset={{ x: 10, y: 10 }}`}
	</Button>
	<Dropdown
		anchor="#offset-id"
		event="click/click"
		class="w-32 h-48"
		placement="bottom"
		offset={{ x: 10, y: 10 }}
	>
		This is a dropdown
	</Dropdown>
</Playground>
<Spacer h={30} />
<Text type="h4">Scroll Lock</Text>
<Spacer h={5} />
<Text
	>Sometimes you may want to lock scroll when a popup is open add the <code>`lockScroll`</code> attribute
	to hide the scrollbar when visible.</Text
>
<Spacer h={20} />
<Note color="success"
	>Remember to use <code>`scrollbar-gutter: stable;`</code> to prevent layout shift when using this
	feature.</Note
>
<Spacer h={20} />
<Playground
	edits={[{ number: 8, type: "add" }]}
	code={`<Button id="lock-id">Lock my scroll</Button>
<Dropdown
	anchor="#lock-id"
	event="click/click"
	class="w-32 h-48"
	placement="bottom"
	offset={{ x: 0, y: 2 }}
	lockScroll>
	This is a dropdown
</Dropdown>`}
>
	<Button id="lock-id">Lock my scroll</Button>
	<Dropdown
		anchor="#lock-id"
		event="click/click"
		class="w-32 h-48"
		placement="bottom"
		offset={{ x: 0, y: 2 }}
		lockScroll
	>
		This is a dropdown
	</Dropdown>
</Playground>
