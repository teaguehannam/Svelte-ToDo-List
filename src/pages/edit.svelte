<script>
	import { onMount } from 'svelte';
	import { List } from '../stores/List.js';
	
	let inputHere;
	onMount(() => inputHere.focus());

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
		location.reload();
	}

</script>


<!-- Style -->
<style lang=scss>
	$vspacing: 32px;
	.List {
		text-align: center;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: $vspacing 0px;
		padding: $vspacing 0px;

		.Delete {
			button {
				font-size: 0.9rem;
				line-height: 1rem;
			}
		}

		.Add {
			input {
				line-height: 2.2rem;

			}
			button {
				font-size: 0.9rem;
				line-height: 1.8rem;
			}
		}

		.Display {
			width: 100%;
			max-width: 800px;
			margin: 0px auto;
			background-color: rgba(19,19,19,0.2);			
			
			p {
				font-size: 1.5rem;
				line-height: 1.5rem;
			}
		}

	}
</style>


<!-- HTML -->
<div class="List">

	<div class="Delete">
		<button on:click={hdlClear}>Delete List</button>
	</div>

	<div class="Add">
		<input type="text" 
			placeholder="New item" 
			bind:value={item} bind:this={inputHere} 
			on:keyup={hdlEnter} />
		<button on:click={hdlAdd}>Add new</button>
	</div>

	{#if Object.keys($List[0]).length}
		<div class="Display">
			{#each {length: Object.keys($List[0]).length} as _, i}
				<p>{$List[0][i]}</p>
			{/each}
		</div>
	{/if}

</div>