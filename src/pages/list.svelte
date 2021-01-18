<script>
	import { onMount } from 'svelte';
	import { List } from '../stores/List.js';
	import ListItem from '../components/ListItem.svelte';
	
	let inputHere;
	onMount(() => inputHere.focus());

	let ListLength = Object.keys($List[0]).length;

	let item = ""; let newItem;
	let i;
	const hdlEnter = (e) => e.key === "Enter" ? hdlAdd() : false; 
	const hdlAdd = () => {
		if (item) {
			List.addItem(item);
			location.reload();
		}
	
	}
	const hdlClear = () => {
		localStorage.clear();
		location.reload();  // refresh on state change
	}

</script>

<div class="List">
	<div class="Add">
		<input	type="text" placeholder="New item" 	bind:value={item} 
				bind:this={inputHere} on:keyup={hdlEnter} />
		<button on:click={hdlAdd}>Add</button>
	</div>

	{#if ListLength > 0}
		<div class="Display">
			{#each {length: ListLength} as _, i}
				<div class="ListItemList">
					<ListItem data={$List[0][i]} />
				</div>
			{/each}
			<button on:click={hdlClear}>Delete List</button>
		</div>
	{/if}
</div>