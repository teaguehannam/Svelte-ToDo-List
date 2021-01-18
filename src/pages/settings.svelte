<script>	
	import Notifications from '../components/Notifications.svelte';

	// Load theme
	let currentTheme = "./style/themes/";
	!document.cookie ? document.cookie = 'theme=default' : false;
	currentTheme += document.cookie.split('=')[1] += ".scss";

	let selected;

	const loadTheme = () => {
		document.cookie = `theme=${selected}`;
		console.log("set",document.cookie);
	}

	const saveSettings = () => {
		console.log("didnt save:", selected);
	}

	const themes = ['default', 'vapor', 'darkCity', 'darkMtn', 'oled'];
	
</script>

<div class="Settings">
	
	<!-- <Font-Sizer /> -->
	<div class="Theme">
		<h2>Font</h2>
		<div class="DisplayUnit">
			<p>Font1</p>
			<p>Font2</p>
			<p>Font3</p>
		</div>
	</div>

	<!-- <ThemeSwitcher /> -->
	<div class="Theme">
		<h2>Theme</h2>
		<div class="DisplayUnit">
			{#each themes as theme}
				<div class="Box">
					<!-- Thumbnail? -->
					<p>{theme}</p>
				</div>
			{/each}
		</div>
	</div>

</div>

<Notifications />