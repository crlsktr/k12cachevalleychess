<script lang="ts">
	import { assets, base } from "$app/paths";
	import Socialfeed from "$lib/socialfeed.svelte";
</script>

<article class="text-center">
	<header class="flex justify-evenly p-4">
		<div class="md:inline-block place-content-center ">
			<h2 class="h1 preset-glass-primary md:align-middle">Cache Chess</h2>
			<span>Home of the Warren Pugh Chess Tournament</span>
		</div>
		<img class="aspect-auto w-full md:max-w-1/4 md:inline rounded-4xl lg:self-center" alt="banner" src="{assets}/board.webp"/>
	</header>
	<div>
	  <h2 class="h2 text-center">Bruce Bohm's Guide for Chess beginners</h2>
	</div>
	<div class="p-4 flex justify-center">
		<Socialfeed></Socialfeed>
	</div>
</article>
