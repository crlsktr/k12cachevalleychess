<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[100px_minmax(0px,_1fr)_100px]">
	<main class="col-span-1 space-y-4 p-4">
		{@render children()}
	</main>
</div>
