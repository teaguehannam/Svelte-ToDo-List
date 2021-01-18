<!-- this is '/' -->
<script>
	import { List } from '../stores/List.js';
	import ListItem from '../components/ListItem.svelte';
	var listLength = Object.keys($List[0]).length;
	let Highlighted; // false
</script>

<div class="Home">
	<div class="DisplayListHome">
		{#if listLength}
			{#each {length: listLength} as _, i}
				<div class="ListItemHome" class:Show={Highlighted}>
				    <ListItem data={$List[0][i]} />
				</div>
			{/each}
		{:else}
			<p class="Unset">Add items to your
				<a class="link" href='./list'>list</a>
			</p>
		{/if}
	</div>
</div>
