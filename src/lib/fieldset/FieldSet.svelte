<div class="border border-gray-100 rounded-lg overflow-hidden dark:border-gray-900">
	<div class="px-4 py-3">
		<slot />
	</div>
	<div
		class="px-4 py-2 bg-gray-50 border-t border-gray-100 dark:border-gray-900 dark:bg-gray-950"
	>
		<slot name="footer" />
	</div>
</div>

<!--
@component
An organizational layout component to group related information.

[See Docs](https://geist-ui-svelte.dev/components/fieldset) | [Open Issue](https://github.com/ieedan/geist-ui-svelte/issues)
-->
