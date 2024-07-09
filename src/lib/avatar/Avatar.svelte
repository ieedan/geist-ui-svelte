<script lang="ts">
	export let img: string | undefined = undefined;
	export let name: string;
	export let details: string | undefined = undefined;
	export let detail: boolean = false;
	export let href: string | undefined = undefined;
	export let size: number = 28;

	$: shortName = getShortName(name);

	const getShortName = (n: string | undefined) => {
		if (!n) return "";

		const names = n.split(" ");

		if (names.length > 1) {
			let final = "";
			names.forEach((a) => {
				if (a.length > 0) {
					final += a[0].toUpperCase();
				}
			});
			return final;
		} else {
			return n[0].toUpperCase();
		}
	};
</script>

{#if href != undefined}
	<div class="inline-flex place-items-center gap-2">
		<a
			{href}
			{...$$restProps}
			class="inline-flex place-items-center gap-2 rounded-full overflow-hidden
			data-[border=true]:border border-gray-100 dark:border-gray-900"
			style="width: {size}px; height: {size}px;"
			data-border={img == undefined}
		>
			{#if img != undefined}
				<img class="h-full object-cover" src={img} alt="{name}'s avatar" />
			{:else}
				<div class="text-xs flex place-items-center justify-center w-full h-full">
					<span>
						{shortName}
					</span>
				</div>
			{/if}
		</a>
		{#if detail}
			<div class="flex flex-col">
				<span class="text-sm font-medium">{name}</span>
				{#if details != undefined}
					<small class="text-xs text-gray-600 dark:text-gray-500">{details}</small>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<div class="inline-flex place-items-center gap-2">
		<div
			class="inline-flex place-items-center gap-2 rounded-full overflow-hidden
			data-[border=true]:border border-gray-100 dark:border-gray-900"
			style="width: {size}px; height: {size}px;"
			data-border={img == undefined}
			{...$$restProps}
		>
			{#if img != undefined}
				<img class="h-full object-cover" src={img} alt="{name}'s avatar" />
			{:else}
				<div class="text-xs flex place-items-center justify-center w-full h-full">
					<span>
						{shortName}
					</span>
				</div>
			{/if}
		</div>
		{#if detail}
			<div class="flex flex-col">
				<span class="text-sm font-medium">{name}</span>
				{#if details != undefined}
					<small class="text-xs text-gray-600 dark:text-gray-500">{details}</small>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<!--
@component
A layout component to display a user.

[See Docs](https://geist-ui-svelte.dev/components/avatar) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues/new)
-->
