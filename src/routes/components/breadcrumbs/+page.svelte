<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import BreadCrumbs from "$lib/breadcrumbs/BreadCrumbs.svelte";
	import BreadCrumbsDemo from "$lib/breadcrumbs/BreadCrumbsDemo.svelte";
	import Input from "$lib/input/Input.svelte";

	let url = "/dashboard/settings/general";
	let url2 = "/dashboard/components/bread-crumbs";

	const capitalizeFirstLetter = (path: string): string => {
		const words = path.split("-");

		if (words.length == 0) return "";
		if (words[0] == "") return "";

		let final = "";
		for (let i = 0; i < words.length; i++) {
            if (words[i].length == 0) continue;
			words[i] = words[i][0].toUpperCase() + words[i].slice(1);
			final = final + words[i];
			if (i < words.length - 1) final += " ";
		}

		return final;
	};

    const transformExampleCode = `<script>
    const capitalizeFirstLetter = (path: string): string => {
		const words = path.split("-");

		if (words.length == 0) return "";
		if (words[0] == "") return "";

		let final = "";
		for (let i = 0; i < words.length; i++) {
            if (words[i].length == 0) continue;
			words[i] = words[i][0].toUpperCase() + words[i].slice(1);
			final = final + words[i];
			if (i < words.length - 1) final += " ";
		}

		return final;
	};
<\/script>
    
<BreadCrumbs/>
<BreadCrumbs transform={capitalizeFirstLetter}/>`
</script>

<Text type="h3">BreadCrumbs</Text>
<Spacer h={10} />
<Text>A component to show the current path.</Text>
<Spacer h={20} />
<Snippet width="500px" type="lite" text={`import { BreadCrumbs } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<BreadCrumbs />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<BreadCrumbs/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Custom Separator</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<BreadCrumbs separator=">" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<BreadCrumbs/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Route Shortening</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2 justify-start">
		<Input bind:value={url} width="100%"/>
		<BreadCrumbsDemo {url} />
		<BreadCrumbsDemo {url} excludePrefix="/dashboard" />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={`<BreadCrumbs/>
<BreadCrumbs excludePrefix="/dashboard"/>`} />
		</Details>
	</div>
</FieldSet>
<Spacer h={30} />
<Text type="h4">Route Transforms</Text>
<Spacer h={5} />
<Text>
	Normally routes come in lowercase you can change the way the name is displayed by creating a
	custom transform for the name. Heres a transform I wrote to capitalize the first letter of each word separated with a <code>`-`</code>.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col gap-2 justify-start">
		<Input bind:value={url2} width="100%"/>
		<BreadCrumbsDemo url={url2} />
		<BreadCrumbsDemo url={url2} transform={capitalizeFirstLetter} />
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code
				lang="svelte"
				code={transformExampleCode} />
		</Details>
	</div>
</FieldSet>
