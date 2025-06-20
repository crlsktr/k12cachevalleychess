<script lang="ts">
	import '../app.css';
	import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';

	import { BookOpenText, CircleUser, Dices, type Icon as IconType } from '@lucide/svelte';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
	const links = [
		{ label: 'Resources', href: `${base}/resources`, icon: Dices },
		{ label: 'Rules', href: `${base}/rules`, icon: BookOpenText },
		{ label: 'Register', href: `${base}/register`, icon: CircleUser }
	];
</script>

<div class="grid grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header>
		<AppBar>
			{#snippet lead()}
				<Navigation.Tile href="{base}/" aspect="aspect-auto">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 520 512" class="h-[3em] md:inline">
						<path
							class="logo"
							d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z"
						/>
					</svg>
					<span class="text-surface-900-100 text-center align-bottom md:text-3xl">Cache Chess</span>
				</Navigation.Tile>

				<!-- <House size={20}></House> -->
			{/snippet}
			{#snippet trail()}
				<Navigation.Bar classes="self-end" tilesClasses="justify-self-start">
					{#each links as { label, href, icon }}
						{@const Icon = icon}
						<Navigation.Tile {label} {href} selected={page.url.pathname === href}>
							<Icon></Icon>
						</Navigation.Tile>
					{/each}
				</Navigation.Bar>
			{/snippet}
			<!-- {#snippet headline()}

			{/snippet} -->
		</AppBar>
	</header>
	<!-- Page -->
	{@render children()}
	<!-- Footer -->
	<footer class="border-surface-500/20 border-t-[1px] px-4 py-4 xl:px-0">
		<div class="container mx-auto flex flex-col items-center justify-between gap-4 xl:flex-row">
			<div class="flex items-center gap-4">
				<!-- <Icon name="skeleton" size={20} /> -->
				<p class="text-xs opacity-60">
					Built with ❤, <a class="underline" href="https://www.skeleton.dev/" target="_blank">Skeleton</a>
					and 
					<a href="https://kit.svelte.dev/"
						target="_blank"
						class="underline">SvelteKit</a>.
				</p>
			</div>
			<!-- Social -->
			<nav class="flex items-center">
				<!-- <a
					class="btn-icon hover:preset-tonal"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					title="GitHub"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" data-icon="github">
						<use href="#ai:local:github"></use>
					</svg>
				</a><a
					class="btn-icon hover:preset-tonal"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					title="Discord"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" data-icon="discord">
						<use href="#ai:local:discord"></use>
					</svg>
				</a><a
					class="btn-icon hover:preset-tonal"
					href="https://bsky.app/profile/skeleton.dev"
					target="_blank"
					title="Bluesky"
				>
					<svg width="24" height="24" data-icon="bluesky">
						<symbol id="ai:local:bluesky" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"
							></path></symbol
						><use href="#ai:local:bluesky"></use>
					</svg>
				</a> -->
				<!-- <a
					aria-label="youtube"
					class="btn-icon hover:preset-tonal"
					href="https://www.youtube.com/@skeletonlabs"
					target="_blank"
					title="YouTube"
				>
					<svg width="24" height="24" data-icon="youtube">
						<symbol id="ai:local:youtube" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"
							></path></symbol
						><use href="#ai:local:youtube"></use>
					</svg>
				</a> -->
			</nav>
		</div>
	</footer>
</div>

<style lang="postcss">
	.logo {
		animation: glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			fill: light-dark(var(--color-primary-700), var(--color-primary-200));
		}
		33% {
			fill: light-dark(var(--color-primary-300), var(--color-primary-700));
		}
		66% {
			fill: light-dark(var(--color-primary-300), var(--color-primary-700));
		}
		100% {
			fill: light-dark(var(--color-primary-700), var(--color-primary-200));
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
