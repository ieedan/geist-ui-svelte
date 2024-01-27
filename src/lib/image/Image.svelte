<script lang="ts">
	import LockIcon from "$lib/icons/LockIcon.svelte";
	import type { HTMLImgAttributes } from "svelte/elements";
	export let src: string;
	export let alt: string;
	export let width: HTMLImgAttributes["width"];
	export let height: HTMLImgAttributes["height"];
	/** When set displays the image as if it was the page in a browser window */
	export let browserURL: string | undefined = undefined;
	$: url = browserURL ? new URL(browserURL).hostname : "";
	$: isHttps = browserURL ? new URL(browserURL).protocol == "https:" : false;
	/** Changes the theme of the browser window */
	export let browserInvert: boolean = false;
</script>

{#if browserURL != undefined}
	<div
		class="border border-gray-100 rounded-lg overflow-hidden shadow-lg dark:shadow-none dark:border-gray-900"
	>
		<div
			data-invert={browserInvert}
			class="flex place-items-center justify-between border-b group h-10
            bg-gray-0 border-gray-100 dark:bg-gray-999 text-gray-999 dark:text-gray-0
			data-[invert=true]:dark:bg-gray-0 data-[invert=true]:dark:text-gray-999
			dark:border-gray-900 data-[invert=true]:dark:border-gray-100 font-light px-4
			data-[invert=true]:bg-gray-999 data-[invert=true]:text-gray-0 data-[invert=true]:border-gray-900"
		>
			<div class="flex place-items-center gap-2">
				<div class="size-3 rounded-full bg-red-500"></div>
				<div class="size-3 rounded-full bg-orange-300"></div>
				<div class="size-3 rounded-full bg-green-500"></div>
			</div>
			<a
				href={browserURL}
				target="_blank"
				class="text-xs flex place-items-center gap-[2px] px-4 py-1 bg-gray-50
				group-data-[invert=true]:bg-gray-925 dark:bg-gray-925 group-data-[invert=true]:dark:bg-gray-50 rounded-sm"
			>
				{#if isHttps}
					<LockIcon size={10} />
				{/if}
				{url}
			</a>
			<div class="w-[58px] h-1"></div>
		</div>
		<img {...$$restProps} {width} {height} {src} {alt} />
	</div>
{:else}
	<img {...$$restProps} {width} {height} {src} {alt} />
{/if}

<!--
@component
Displays an image.

[See Docs](https://geist-ui-svelte.dev/components/image) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
