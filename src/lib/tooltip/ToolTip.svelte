<script lang="ts">
	import "tippy.js/dist/tippy.css";
	import "tippy.js/dist/border.css";
	import tippy, { type Instance, type Props, type Placement } from "tippy.js";

	export let anchor: string | HTMLElement;
	export let placement: Placement = "top";
	export let hideOnClick: boolean = true;
	let anchorRef: HTMLElement;
	let dummyRef: HTMLElement;
	export let config: Props | undefined = undefined;

	let instance: Instance<Props>;

	export let content: string;

	// dummyRef is here as a check for 'mounted'
	// This will ensure that even if the anchor is not undefined (such as during SSR)
	// that the code will not run until the document is accessible
	$: if (anchor != undefined && dummyRef) {
		if (typeof anchor === "string") {
			const element = document.querySelector(anchor) as HTMLElement;

			if (!element)
				throw new Error(`There was no element found with the query selector: '${anchor}'`);

			anchorRef = element;
		} else {
			anchorRef = anchor;
		}

		if (!instance) {
			if (config) {
				instance = tippy(anchorRef, {
					...config,
					placement,
					hideOnClick,
					content: content,
					theme: "dark",
					arrow: true,
				});
			} else {
				instance = tippy(anchorRef, {
					placement,
					hideOnClick,
					content: content,
					theme: "dark",
					arrow: true,
				});
			}
		}
	}

	$: {
		if (instance) {
			instance.setContent(content);
		}
	}
</script>

<div class="hidden" bind:this={dummyRef} />
