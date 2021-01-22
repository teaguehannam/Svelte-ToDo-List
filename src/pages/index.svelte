<script>
	import { List } from '../stores/List.js';
</script>

<style lang=scss>
	.Home { // List
		text-align: center;
		display: grid;

		p { // List Item

		}

		.Unset {
			font-size: 2rem;
			font-weight: 500;
			a {
				text-decoration: none;
				animation-name: glowLink;
				animation-delay: -0.15s;
				animation-duration: 2s;
				animation-iteration-count: infinite;
			}
		}
	}

	@keyframes glowLink {
		0% {color:rgba(19,19,19,0.25);}
		33% {color:rgba(19,19,19,1);}
		77% {color:rgba(19,19,19,1);}
		100% {color:rgba(19,19,19,0.25);}
	}
</style>

<div class="Home">
	{#if Object.keys($List[0]).length}
		{#each {length: Object.keys($List[0]).length} as _, i}
			<p>{$List[0][i]}</p>
		{/each}
	{:else}
		<h4 class="Unset">Add items to your
			<a class="link" href='./edit'>list</a>
		</h4>
	{/if}
</div>
