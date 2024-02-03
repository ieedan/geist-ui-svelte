<script lang="ts">
    import Text from "$lib/text/Text.svelte";

	/** Can be used to exclude a path prefix EX: excludePrefix == '/dashboard' => route == '/dashboard/settings' => route == '/settings'*/
	export let excludePrefix: string | undefined = undefined;
	/** Allows you to apply a custom transform to the path name */
	export let transform: (pathName: string) => string = (pathName: string) => pathName;
    export let separator: string = "/";

	type BreadCrumb = {
		name: string;
		href: string;
	};

    export let url: string;

	$: breadCrumbs = getBreadCrumbs(url);

	const getBreadCrumbs = (path: string): BreadCrumb[] => {
		let p = path;
		if (excludePrefix) {
            if (excludePrefix.endsWith("/")) {
                excludePrefix = excludePrefix.slice(0, excludePrefix.length - 1);
            }

            p = p.replace(excludePrefix, "");
        }

		const routes = p.split("/");

		let currentPath = excludePrefix != undefined ? excludePrefix : "";
		const bcs: BreadCrumb[] = [];
        let lastBCIndex = 0;
		for (let i = 0; i < routes.length; i++) {
			if (routes[i] == "") {
                if (i == routes.length - 1 && bcs[lastBCIndex] != undefined) {
                    bcs[lastBCIndex].href = bcs[lastBCIndex].href + "/"
                }
                continue;
            }
			currentPath = currentPath + "/" + routes[i];
			bcs.push({
				name: transform(routes[i]),
				href: currentPath,
			});
            lastBCIndex = bcs.length - 1;
		}

		return bcs;
	};
</script>

<ul class="flex place-items-center gap-2 px-4">
	{#each breadCrumbs as { name, href }}
		<Text color="secondary" i>{separator}</Text>
		<a
			{href}
			data-active={url == href}
			class="font-medium data-[active=true]:text-gray-999 text-gray-500
            dark:text-gray-500 data-[active=true]:dark:text-gray-0
            dark:hover:bg-gray-925 dark:hover:text-gray-0 hover:text-gray-999 hover:bg-gray-50
            flex place-items-center gap-4 px-2 py-1 transition-all rounded-md"
		>
			{name}
		</a>
	{/each}
</ul>