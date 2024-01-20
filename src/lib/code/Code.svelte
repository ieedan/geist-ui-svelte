<script lang="ts">
	import { onMount } from "svelte";
	import { getHighlighter, type BundledLanguage } from "shikiji";
	import CloneIcon from "$lib/icons/CloneIcon.svelte";
	import CheckMarkIcon from "$lib/icons/CheckMarkIcon.svelte";
	import { scale } from "svelte/transition";
	import dark from "./dark-theme.js";
	import light from "./light-theme.js";

	type EditType = "add" | "remove";

	type Edit = {
		number?: number;
		/** Start line number if no end is specified will highlight to the end */
		start?: number;
		/** End line number */
		end?: number;
		type: EditType;
	};

	type SimpleEdit = {
		number: number;
		type: EditType;
	};

	export let edits: Edit[] = [];

	$: editsMap = parseEdits(edits, lines.length);

	const parseEdits = (es: Edit[], linesLength: number): Map<number, SimpleEdit> => {
		const map = new Map<number, SimpleEdit>();
		for (let i = 0; i < es.length; i++) {
			const e = es[i];

			if (e.number) {
				map.set(e.number, { number: e.number, type: e.type });
			} else if (e.start) {
				let end = linesLength;
				if (e.end) {
					end = e.end;
				}

				for (let l = e.start; l < end + 1; l++) {
					map.set(l, { number: l, type: e.type });
				}
			}
		}

		return map;
	};

	export let lang: BundledLanguage = "javascript";
	export let code: string;
	/** When true displays line numbers */
	export let lineNumbers: boolean = true;
	let highlightedCode: string;
	let fontSize = 14;
	let editorRef: HTMLDivElement;
	let editorWidth: number = 0;

	let copied = false;
	let copyText = () => {
		navigator.clipboard.writeText(code).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 1000);
		});
	};

	type Line = {
		number: number;
	};

	$: lines = getLines(code);

	const getLines = (c: string): Line[] => {
		const l = c.split("\n");
		const linesArr = [];
		for (let i = 1; i < l.length + 1; i++) {
			linesArr.push({ number: i });
		}
		return linesArr;
	};

	const resize = () => {
		const children = Array.from(editorRef.children);

		let element: HTMLElement | undefined = undefined;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];

			if (child.hasAttribute("data-code")) {
				element = child as HTMLElement;
				break;
			}
		}

		if (element == undefined) return;

		element.style.width = "100%";
		element.style.outline = "None";

		editorWidth = element.offsetWidth + 20;
	};

	onMount(async () => {
		const highlighter = await getHighlighter({
			themes: [light, dark],
			langs: [lang],
		});

		highlightedCode = highlighter.codeToHtml(code, {
			lang,
			themes: {
				dark: "geist-dark",
				light: "geist",
			},
		});

		setTimeout(resize, 0);
	});
</script>

<svelte:window on:resize={resize} />

<div
	bind:this={editorRef}
	class="rounded-lg px-4 py-4 relative bg-gray-0 dark:bg-gray-999
	flex place-items-start selection:bg-blue-400 selection:bg-opacity-30"
>
	{#if lineNumbers}
		<div class="flex min-w-[40px] flex-col place-items-start justify-center">
			{#each lines as line}
				<div
					class="h-[20px] min-w-[20px] select-none text-gray-600 dark:text-gray-400 relative"
					style="font-size: {fontSize}px;"
				>
					{line.number}
					<div class="w-5">
						{#if editsMap.has(line.number)}
							{#if editsMap.get(line.number)?.type == "add"}
								<div
									style="width: {editorWidth}px;"
									class="absolute top-0 left-full text-gray-999 bg-opacity-25 transition-all
								bg-blue-200 dark:bg-blue-500 dark:text-gray-0 dark:bg-opacity-25 px-1 pointer-events-none"
								>
									+
								</div>
							{:else}
								<div
									style="width: {editorWidth}px;"
									class="absolute top-0 left-full text-gray-999 bg-red-600 transition-all
								dark:bg-red-400 dark:text-gray-0 bg-opacity-25 dark:bg-opacity-25 px-1 pointer-events-none"
								>
									-
								</div>
							{/if}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{/if}
	<div data-code class="overflow-x-auto scrollbar-hide">
		{@html highlightedCode ?? ""}
	</div>
	<button type="button" class="absolute top-2 right-2 hidden sm:flex" on:click={copyText}>
		{#if copied}
			<div in:scale={{ duration: 200 }}>
				<CheckMarkIcon size={16} />
			</div>
		{:else}
			<div
				class="hover:text-gray-999 transition-all dark:hover:text-gray-0 text-gray-600 dark:text-gray-400"
				in:scale={{ duration: 100 }}
			>
				<CloneIcon size={16} />
			</div>
		{/if}
	</button>
</div>

<!--
@component
A component to display highlighted code.

[See Docs](https://geist-ui-svelte.dev/components/code) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
