<!--(404)-->
<script>
	import { route } from "@sveltech/routify";
</script>

<style lang=scss>
	.Hi {
		text-align: center;
	}
</style>

<div class="Hi">
	<!-- <p>404error</p> -->
	<p><code>{$route.leftover}</code> was not found.</p>
</div>