<script lang="ts">
	export let img: string | undefined = undefined;
	export let name: string;
	export let details: string | undefined = undefined;
	export let detail: boolean = false;
	export let href: string | undefined = undefined;

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
	<a {href} {...$$restProps} class="inline-flex place-items-center gap-2">
		{#if img != undefined}
			<img class="size-7 rounded-full" src={img} alt="{name}'s avatar" />
		{:else}
			<div
				class="rounded-full text-xs flex place-items-center justify-center border size-7 border-gray-100 dark:border-gray-900"
				><span>{shortName}</span></div>
		{/if}
		{#if detail}
			<div class="flex flex-col">
				<span class="text-sm font-medium">{name}</span>
				{#if details != undefined}
					<small class="text-xs text-gray-600 dark:text-gray-500">{details}</small>
				{/if}
			</div>
		{/if}
	</a>
{:else}
	<div class="inline-flex place-items-center gap-2">
		{#if img != undefined}
			<img class="size-7 rounded-full" src={img} alt="{name}'s avatar" />
		{:else}
			<div
				class="rounded-full text-xs flex place-items-center justify-center border size-7 border-gray-100 dark:border-gray-900"
				><span>{shortName}</span></div>
		{/if}
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
