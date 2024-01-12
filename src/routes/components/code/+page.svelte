<script lang="ts">
	import Code from "$lib/code/Code.svelte";
	import Details from "$lib/details/Details.svelte";
	import FieldSet from "$lib/fieldset/FieldSet.svelte";
	import Link from "$lib/link/Link.svelte";
	import Snippet from "$lib/snippet/Snippet.svelte";
	import Spacer from "$lib/spacer/Spacer.svelte";
	import Text from "$lib/text/Text.svelte";
	import { Edit } from "$lib/types.js";
</script>

<Text type="h3">Code</Text>
<Spacer h={10} />
<Text>A component to display highlighted code.</Text>
<Spacer h={20} />
<Snippet width="450px" type="lite" text={`import { Code } from 'geist-ui-svelte';`} />
<Spacer h={30} />
<Text type="h4">Basic</Text>
<Spacer h={5} />
<Text>
	We use <Link to="https://shikiji.netlify.app/" target="_blank" color>shikiji</Link>
	under the hood for extremely accurate and beautiful syntax highlighting.
</Text>
<Spacer h={10} />
<FieldSet>
	<div class="flex flex-col justify-start">
		<Code
			lang="javascript"
			edits={[{lineNumber: 4, type: Edit.add}, {lineNumber: 9, type: Edit.remove}]}
			code={`const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
		
	const middle = Math.floor(arr.length / 2);
		
	const leftHalf = mergeSort(arr.slice(0, middle));
	const rightHalf = mergeSort(arr.slice(middle));
		
	return merge(leftHalf, rightHalf);
};
		
const merge = (leftHalf, rightHalf) => {
	const mergedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;
		
	while (leftIndex < leftHalf.length || rightIndex < rightHalf.length) {
		if (leftIndex >= leftHalf.length){
			mergedArr.push(rightHalf[rightIndex]);
			rightIndex++;
			break;
		}
		
		if (rightIndex >= rightHalf.length){
			mergedArr.push(leftHalf[leftIndex]);
			leftIndex++;
			break;
		}
		
		if (leftHalf[leftIndex] < rightHalf[rightIndex]){
			mergedArr.push(leftHalf[leftIndex]);
			leftIndex++;
		} else {
			mergedArr.push(rightHalf[rightIndex]);
			rightIndex++;
		}
	}
		
	return mergedArr;
};`}
		/>
	</div>
	<div slot="footer">
		<Details label="Code">
			<Code lang="svelte" code={`<Code lang="js" code={\`...\`}/>`} />
		</Details>
	</div>
</FieldSet>
