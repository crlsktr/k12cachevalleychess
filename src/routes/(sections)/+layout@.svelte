<script lang="ts">
	import Socialfeed from '$lib/socialfeed.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<!-- Page -->
<div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_400px]">
	<!-- Sidebar (Left) -->
	<!-- NOTE: hidden in smaller screen sizes -->
	<aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block"></aside>
	<!-- Main -->
	<main class="col-span-1 space-y-4 p-4">
		{@render children()}
	</main>
	<!-- Sidebar (Right) -->
	<!-- NOTE: hidden in smaller screen sizes -->
	<aside class="sticky top-0 col-span-1 hidden h-screen p-4 xl:block">
		<Socialfeed></Socialfeed>
	</aside>
</div>
