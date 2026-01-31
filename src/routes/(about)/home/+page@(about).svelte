<script lang="ts">
	import { base } from '$app/paths';
	import cover from '$lib/assets/hand.jpg'
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
		<div
			class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y border-[1px] p-8 lg:max-w-4xl"
		>
			<header>
				<h2 class="h2 text-center">We're ready for the 2026 Tournament!</h2>
				
			</header>
			<article>
				<div class="">
					<p class="m-4">It's been an great year and we hope you're exicted about the 9th Warren Pugh Memorial Tournament as much as we are.</p>
					<p class="m-4">This year's tournament will be filled with exiting opportunities, fun new friends, and amazing prizes.</p>
					<p class="m-4">Come and join us on March 7th at the Logan Public Library</p>
				</div>
				<img class="aspemax-h-72 min-w-full object-cover object-left-top opacity-80" alt="child playing chess" src={cover} />
				
			</article>
		</div>
		<Socialfeed></Socialfeed>
		
	</div>
</article>
