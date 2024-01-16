<script lang="ts">
	export let sticky: boolean = false;
	export let fixed: boolean = false;
	export let transparent: boolean = true;
</script>

<header
	data-sticky={sticky}
	data-fixed={fixed}
	data-transparent={transparent}
	class="w-full flex justify-center place-items-center py-2 data-[sticky=true]:sticky data-[fixed=true]:fixed
    data-[sticky=true]:z-10 data-[sticky=true]:top-0 data-[fixed=true]:z-10 data-[fixed=true]:top-0
    border-b bg-gray-0 dark:bg-gray-999 border-gray-100
    dark:border-gray-900 data-[transparent=true]:backdrop-blur-sm
	data-[transparent=true]:dark:bg-opacity-90 data-[transparent=true]:bg-opacity-90"
>
	<slot />
</header>
