<script>
	import { url, isActive } from '@sveltech/routify';

	// const stor = window.localStorage;

</script>

<div class="MainMenu">
	<div class="ContainMe">
		<div class="Logo">
			<a href='/'><h1>ToDo List</h1></a>
		</div>
		<nav>
			<a href={$url('./list')} class:Selected={$isActive('./list')}>
				Edit List
			</a>
			<a href={$url('./settings')} class:Selected={$isActive('./settings')}>
				Settings
			</a>
		</nav>
	</div>
</div>