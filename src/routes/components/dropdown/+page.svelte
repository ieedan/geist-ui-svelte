<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
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
<Snippet width="450px" type="lite" text={`import { Dropdown } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="">
		<button bind:this={buttonRef} on:click={() => (showDropdown = true)}>
			Show dropdown
		</button>
		<Dropdown anchor={buttonRef} bind:visible={showDropdown} class="w-32 h-48">
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<button bind:this={buttonRef} on:click={() => (showDropdown = true)}>
	Show dropdown
</button>
<Dropdown anchor={buttonRef} bind:visible={showDropdown} class="w-32 h-48">
	This is a dropdown
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
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
<FieldSet>
	<div class="h-52">
		<Center class="h-full">
			<Select bind:value={placement}>
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
				on:click={() => (showUserExample = !showUserExample)}
				class="flex place-items-center justify-center">
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
			</Dropdown>
		</Center>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Shadow</Text>
<Spacer h={5} />
<Text>Add a shadow to the drop down.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="">
		<button bind:this={buttonRef2} on:click={() => (showDropdownExample2 = true)}>
			Show dropdown
		</button>
		<Dropdown
			anchor={buttonRef2}
			bind:visible={showDropdownExample2}
			class="w-32 h-48"
			placement="bottom"
			shadow>
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Overflow</Text>
<Spacer h={5} />
<Text>
	Even though we implemented our own functions for placement notice how the dropdown still reacts
	to overflow Try scrolling the page with the dropdown open and see the results.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="">
		<button bind:this={buttonRef3} on:click={() => (showDropdownExample3 = true)}>
			Show dropdown
		</button>
		<Dropdown
			anchor={buttonRef3}
			bind:visible={showDropdownExample3}
			class="w-32 h-48"
			placement="bottom">
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Anchor Binding</Text>
<Spacer h={5} />
<Text>
	You can bind a reference to an anchor or a query selector. This can be useful when working with
	something like context menus on dynamic list where you can't create a reference for each item in
	the list.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex place-items-center flex-wrap gap-4">
		<button id="anchor-id"> Show Dropdown </button>
		<Dropdown anchor="#anchor-id" event="click/click" class="w-32 h-48" placement="bottom">
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[{ number: 3, type: "add" }]}
				code={`<button id="anchor-id"> Show Dropdown </button>
<Dropdown 
	anchor="#anchor-id" 
	event="click/click" 
	class="w-32 h-48" 
	placement="bottom">
	This is a dropdown
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Anchor Events</Text>
<Spacer h={5} />
<Text>
	Sometimes it may be necessary or more convenient to create the event listener from the Dropdown
	itself for this you can use the <code>`event`</code> attribute.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex place-items-center flex-wrap gap-4">
		<button id="click-id"> Click To Show </button>
		<Dropdown anchor="#click-id" event="click/click" class="w-32 h-48" placement="bottom">
			This is a dropdown
		</Dropdown>
		<button id="focus-id"> Focus To Show </button>
		<Dropdown anchor="#focus-id" event="focus/blur" class="w-32 h-48" placement="bottom">
			This is a dropdown
		</Dropdown>
		<button id="hover-id"> Hover To Show </button>
		<Dropdown
			anchor="#hover-id"
			event="mouseenter/mouseleave"
			class="w-32 h-48"
			placement="bottom">
			This is a dropdown
		</Dropdown>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
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
</Dropdown>`} />
		</Details>
	</div>
</FieldSet>
