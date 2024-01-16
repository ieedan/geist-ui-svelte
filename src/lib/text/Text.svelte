<script lang="ts">
	import type { TextAlignment } from "$lib/types.js";

	export let type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" = "p";

	type TextSize =
		| "xs"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl"
		| "default";

	/** Size of text by default */
	export let size: TextSize = "default";
	/** Size of text above 640px */
	export let smSize: TextSize = "default";
	/** Size of text above 768px */
	export let mdSize: TextSize = "default";
	/** Size of text above 1024px */
	export let lgSize: TextSize = "default";

	export let i = false;
	export let b = false;
	export let del = false;
	export let blockquote = false;
	export let align: TextAlignment = "initial";
	export let style: string = "";
	let className = "";
	export { className as class };

	export let color: "inherit" | "dark" | "secondary" | "success" | "warning" | "error" | "abort" =
		"inherit";
</script>

<svelte:element
	this={type}
	style="text-align: {align};{style}"
	data-i={i}
	data-b={b}
	data-del={del}
	data-blockquote={blockquote}
	data-style={color}
	data-size={size}
	data-sm-size={smSize}
	data-md-size={mdSize}
	data-lg-size={lgSize}
	data-type={type}
	class="data-[style='inherit']:text-inherit data-[style='dark']:text-gray-999 
	data-[style='dark']:dark:text-gray-0 geist-ui-text data-[i=true]:italic 
	data-[b=true]:font-bold data-[blockquote=true]:flex justify-between place-items-center
    data-[del=true]:line-through data-[style='secondary']:text-gray-500 data-[style='success']:text-blue-600 
	data-[style='success']:dark:text-blue-600 data-[style='secondary']:dark:text-gray-500
    data-[style='warning']:text-orange-300 data-[style='warning']:dark:text-orange-400 data-[style='error']:text-red-500
    data-[style='error']:dark:text-red-600 data-[style='abort']:text-gray-300 data-[style='abort']:dark:text-gray-700
    data-[blockquote=true]:bg-gray-50 data-[blockquote=true]:border-gray-100 data-[blockquote=true]:dark:bg-gray-950
    data-[blockquote=true]:dark:border-gray-900 data-[blockquote=true]:border data-[blockquote=true]:px-2 
	data-[blockquote=true]:py-1 data-[blockquote=true]:rounded-md p-0 m-0
	
	data-[size='xs']:!text-xs data-[size='sm']:!text-sm data-[size='md']:!text-base
	data-[size='lg']:!text-lg data-[size='xl']:!text-xl data-[size='2xl']:!text-2xl data-[size='3xl']:!text-3xl
	data-[size='4xl']:!text-4xl data-[size='5xl']:!text-5xl data-[size='6xl']:!text-6xl data-[size='7xl']:!text-7xl
	data-[size='8xl']:!text-8xl data-[size='9xl']:!text-9xl

	data-[sm-size='xs']:sm:!text-xs data-[sm-size='sm']:sm:!text-sm data-[sm-size='md']:sm:!text-base
	data-[sm-size='lg']:sm:!text-lg data-[sm-size='xl']:sm:!text-xl data-[sm-size='2xl']:sm:!text-2xl data-[sm-size='3xl']:sm:!text-3xl
	data-[sm-size='4xl']:sm:!text-4xl data-[sm-size='5xl']:sm:!text-5xl data-[sm-size='6xl']:sm:!text-6xl data-[sm-size='7xl']:sm:!text-7xl
	data-[sm-size='8xl']:sm:!text-8xl data-[sm-size='9xl']:sm:!text-9xl

	data-[md-size='xs']:md:!text-xs data-[md-size='sm']:md:!text-sm data-[md-size='md']:md:!text-base
	data-[md-size='lg']:md:!text-lg data-[md-size='xl']:md:!text-xl data-[md-size='2xl']:md:!text-2xl data-[md-size='3xl']:md:!text-3xl
	data-[md-size='4xl']:md:!text-4xl data-[md-size='5xl']:md:!text-5xl data-[md-size='6xl']:md:!text-6xl data-[md-size='7xl']:md:!text-7xl
	data-[md-size='8xl']:md:!text-8xl data-[md-size='9xl']:md:!text-9xl

	data-[lg-size='xs']:lg:!text-xs data-[lg-size='sm']:lg:!text-sm data-[lg-size='md']:lg:!text-base
	data-[lg-size='lg']:lg:!text-lg data-[lg-size='xl']:lg:!text-xl data-[lg-size='2xl']:lg:!text-2xl data-[lg-size='3xl']:lg:!text-3xl
	data-[lg-size='4xl']:lg:!text-4xl data-[lg-size='5xl']:lg:!text-5xl data-[lg-size='6xl']:lg:!text-6xl data-[lg-size='7xl']:!lg:text-7xl
	data-[lg-size='8xl']:lg:!text-8xl data-[lg-size='9xl']:lg:!text-9xl

	data-[type='small']:inline data-[type='p']:inline data-[type='span']:inline

	data-[type='small']:text-xs data-[type='p']:text-base data-[type='span']:text-base
	 data-[type='p']:font-normal data-[type='span']:font-normal
	
	data-[type='h1']:font-bold data-[type='h1']:text-7xl data-[type='h2']:font-bold data-[type='h2']:text-5xl data-[type='h3']:font-bold data-[type='h3']:text-3xl
	data-[type='h4']:font-bold data-[type='h4']:text-2xl data-[type='h5']:font-bold data-[type='h5']:text-xl data-[type='h6']:font-bold data-[type='h6']:text-lg

	{className}"
>
	<slot />
</svelte:element>
