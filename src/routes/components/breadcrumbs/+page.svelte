<script lang="ts">
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import BreadCrumbs from "$lib/breadcrumbs/BreadCrumbs.svelte";
	import BreadCrumbsDemo from "$lib/breadcrumbs/BreadCrumbsDemo.svelte";
	import Input from "$lib/input/Input.svelte";
	import Playground from "$lib/docs-components/playground/playground.svelte";

	let url = "/dashboard/settings/general";
	let url2 = "/dashboard/components/bread-crumbs";
	let url3 = "/dashboard/users/aidan-bleser/profile";

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
<BreadCrumbs transform={capitalizeFirstLetter}/>`;
</script>

<Text type="h3">BreadCrumbs</Text>
<Spacer h={10} />
<Text>A component to show the current path.</Text>
<Spacer h={20} />
<Snippet width="500px" type="transparent" text={`import { BreadCrumbs } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={10} />
<Playground code={`<BreadCrumbs/>`}>
	<BreadCrumbs />
</Playground>
<Spacer h={30} />
<Text type="h4">Custom Separator</Text>
<Spacer h={10} />
<Playground code={`<BreadCrumbs/>`}>
	<BreadCrumbs separator=">" />
</Playground>
<Spacer h={30} />
<Text type="h4">Route Shortening</Text>
<Spacer h={10} />
<Playground
	class="gap-2"
	code={`<BreadCrumbs/>
<BreadCrumbs excludePrefix="/dashboard"/>`}>
	<Input bind:value={url} width="100%" />
	<BreadCrumbsDemo {url} />
	<BreadCrumbsDemo {url} excludePrefix="/dashboard" />
</Playground>
<Spacer h={30} />
<Text type="h4">Route Transforms</Text>
<Spacer h={5} />
<Text>
	Normally routes come in lowercase you can change the way the name is displayed by creating a
	custom transform for the name. Heres a transform I wrote to capitalize the first letter of each
	word separated with a <code>`-`</code>.
</Text>
<Spacer h={10} />
<Playground code={transformExampleCode} class="gap-2">
	<Input bind:value={url2} width="100%" />
	<BreadCrumbsDemo url={url2} />
	<BreadCrumbsDemo url={url2} transform={capitalizeFirstLetter} />
</Playground>
<Spacer h={30} />
<Text type="h4">Do Not Transform</Text>
<Spacer h={5} />
<Text>
	There are some cases which you may not want to transform the text of certain routes. Like when
	the slug for a route contains characters like <code>`-`</code> that should not be transformed. For
	this you can provide the parent route of the route that you don't want to be transformed and it will
	not transform that route.
</Text>
<Spacer h={10} />
<Playground class="gap-2"
	code={`<BreadCrumbsDemo 
	url={url} 
	transform={capitalizeFirstLetter}/>
<BreadCrumbsDemo 
	url={url} 
	transform={capitalizeFirstLetter} 
	doNotTransform={["/users"]}/>`}>
	<Input bind:value={url3} width="100%" />
	<BreadCrumbsDemo url={url3} transform={capitalizeFirstLetter} />
	<BreadCrumbsDemo url={url3} transform={capitalizeFirstLetter} doNotTransform={["/users"]} />
</Playground>
