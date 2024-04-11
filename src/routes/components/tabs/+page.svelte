<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import Tabs from "$lib/tabs/Tabs.svelte";
	import TabItem from "$lib/tabs/TabItem.svelte";
	import GithubIcon from "$lib/icons/GithubIcon.svelte";
	import SvelteIcon from "$lib/icons/SvelteIcon.svelte";
</script>

<Text type="h3">Tabs</Text>
<Spacer h={10} />
<Text>A layout component for navigation.</Text>
<Spacer h={20} />
<Snippet width="500px" type="transparent" text={`import { Tabs, TabItem } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs>
			<TabItem>Home</TabItem>
			<TabItem initialSelected={true}>Guide</TabItem>
			<TabItem>Components</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Tabs>
	<TabItem>Home</TabItem>
	<TabItem initialSelected={true}>Guide</TabItem>
	<TabItem>Components</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Disabled</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs>
			<TabItem initialSelected={true}>Home</TabItem>
			<TabItem>Guide</TabItem>
			<TabItem disabled>Components</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Tabs>
	<TabItem>Home</TabItem>
	<TabItem initialSelected={true}>Guide</TabItem>
	<TabItem>Components</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">No Underline</Text>
<Spacer h={5} />
<Text>Remove the bottom border by setting <code>`border={false}`</code>.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs border={false}>
			<TabItem>Home</TabItem>
			<TabItem initialSelected={true}>Guide</TabItem>
			<TabItem>Components</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Tabs border={false}>
	<TabItem>Home</TabItem>
	<TabItem initialSelected={true}>Guide</TabItem>
	<TabItem>Components</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Horizontal Scrolling</Text>
<Spacer h={5} />
<Text>
	Tabs allows horizontal scrolling when it overflows and can be accessed through user agent
	scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.).
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs>
			<TabItem initialSelected={true}>Home</TabItem>
			<TabItem>Guide</TabItem>
			<TabItem>Components</TabItem>
			<TabItem>Hooks</TabItem>
			<TabItem>Blog</TabItem>
			<TabItem>Websites</TabItem>
			<TabItem>Users</TabItem>
			<TabItem>Settings</TabItem>
			<TabItem>Account</TabItem>
			<TabItem>About</TabItem>
			<TabItem>Contact Us</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Tabs>
	<TabItem initialSelected={true}>Home</TabItem>
	<TabItem>Guide</TabItem>
	<TabItem>Components</TabItem>
	<TabItem>Hooks</TabItem>
	<TabItem>Blog</TabItem>
	<TabItem>Websites</TabItem>
	<TabItem>Users</TabItem>
	<TabItem>Settings</TabItem>
	<TabItem>Account</TabItem>
	<TabItem>About</TabItem>
	<TabItem>Contact Us</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">With Icons</Text>
<Spacer h={5} />
<Text>No special configuration tabs allows any html content in its slot.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs>
			<TabItem initialSelected={true}>
				<GithubIcon size={16} />
				<Spacer w={10} />
				Github
			</TabItem>
			<TabItem>
				<SvelteIcon size={16} />
				<Spacer w={10} />
				Svelte
			</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<Tabs>
	<TabItem initialSelected={true}>
		<GithubIcon size={16} />
		<Spacer w={10} />
		Github
	</TabItem>
	<TabItem>
		<SvelteIcon size={16} />
		<Spacer w={10} />
		Svelte
	</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">As Links</Text>
<Spacer h={5} />
<Text>You can use tabs as links by using the <code>`href`</code> attribute.</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Tabs>
			<TabItem href="/components/tabs">Tabs</TabItem>
			<TabItem href="/components/badge">Badge</TabItem>
			<TabItem href="/components/avatar">Avatar</TabItem>
		</Tabs>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				edits={[
					{ number: 2, type: "add" },
					{ number: 5, type: "add" },
					{ number: 8, type: "add" },
				]}
				code={`<Tabs>
	<TabItem href="/components/tabs">
		Tabs
	</TabItem>
	<TabItem href="/components/badge">
		Badge
	</TabItem>
	<TabItem href="/components/avatar">
		Avatar
	</TabItem>
</Tabs>`}
			/>
		</Details>
	</div>
</FieldSet>
