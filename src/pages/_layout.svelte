<script>
	import MainMenu from '../components/MainMenu.svelte';


	// Theme changer
	// localstorage.set('theme', 'litCity')

</script>

<style lang=scss>
	.App {
		height: 100vh;
	}
</style>

<div class="App">
	<MainMenu />
	<slot />
</div>