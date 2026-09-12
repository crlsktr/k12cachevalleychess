<script lang="ts">
	import { assets, base } from '$app/paths';
	import Socialfeed from '$lib/socialfeed.svelte';
	import Brucebohmsguide from '$lib/brucebohmsguide.svelte';
</script>

<article>
	<header class="flex justify-center">
		<div class="place-content-center p-12 md:inline-block">
			<h2 class="h1 text-primary-500 md:align-middle">Cache Chess</h2>
			<span>Home of the Warren Pugh Chess Tournament</span>
		</div>
	</header>

	<div class="flex flex-col gap-4 md:flex-row-reverse md:justify-center md:justify-items-start">
		<Socialfeed></Socialfeed>
		<Brucebohmsguide></Brucebohmsguide>
	</div>
</article>
