<script lang="ts">
	import { assets, base } from '$app/paths';
	import Socialfeed from '$lib/socialfeed.svelte';
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
		<div
			class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y border-[1px] p-8 lg:max-w-4xl"
		>
			<h2 class="h2 text-center">We're ready for the 2026 Tournament!</h2>
		</div>
	</div>
</article>
