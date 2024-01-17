<script lang="ts">
	export let type: "default" | "secondary" | "success" | "warning" | "error" | "go" = "default";
	export let size: number = 12;
	export let style: string = "";
	export let color: string | undefined = undefined;
</script>

<span
	{...$$restProps}
	style="width: {size}px; height: {size}px; {color ? `background-color: ${color};` : ''}{style}"
	data-type={type}
	class="rounded-full bg-gray-999 dark:bg-gray-0 data-[type='secondary']:bg-gray-200
  data-[type='success']:bg-blue-600 data-[type='success']:dark:bg-blue-600 data-[type='error']:dark:bg-red-600
	inline-block data-[type='secondary']:dark:bg-gray-200
  data-[type='warning']:bg-orange-300 data-[type='go']:bg-green-600 data-[type='go']:dark:bg-green-700
  data-[type='warning']:dark:bg-orange-400 data-[type='error']:bg-red-500"
></span>
