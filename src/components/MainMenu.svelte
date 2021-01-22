<script>
	import { url, isActive } from '@sveltech/routify';
</script>

<style lang=scss>
	.MainMenu{
		width: 100%;
		text-align: center;

		.ContainMe{
			max-width: 200px;
			margin: 0px auto;
			display: flex;
			grid-gap: 0px 3px;
			justify-content: space-between;

			a {
				border: 1px solid red;
				width: 100%;
				text-decoration: none;
				line-height: 2.4rem;
				font-size: 1.25rem;

				&:hover {
					font-size: 1.33rem;

				}
			}

			.Selected {
			}
		
		}
	}
</style>

<div class="MainMenu"> <!-- 100% width -->
	<div class="ContainMe"> <!-- max-width -->
		<a href={$url('/')} class:Selected={$isActive('/')}>Home</a>
		<a href={$url('./edit')} class:Selected={$isActive('./edit')}>Edit List</a>
	</div>
</div>
