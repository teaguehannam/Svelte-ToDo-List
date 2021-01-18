<script>
	import { List } from '../stores/List.js';
	import ListItem from '../components/ListItem.svelte';
	var listLength = Object.keys($List[0]).length;
</script>

<div class="Home">
	<div class="List">
		{#if listLength}
			{#each {length: listLength} as _, i}
				<div class="ListItemHome">
				    <ListItem data={$List[0][i]} />
				</div>
			{/each}
		{:else}
			<p>Add items to your <a href='./list'>list</a></p>
		{/if}
	</div>
</div>
