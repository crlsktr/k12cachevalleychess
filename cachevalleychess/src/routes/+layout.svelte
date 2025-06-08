<script lang="ts">
	import '../app.css';
  import { AppBar, Navigation } from '@skeletonlabs/skeleton-svelte';


  import Paperclip from '@lucide/svelte/icons/paperclip';
  import Calendar from '@lucide/svelte/icons/calendar';
  import CircleUser from '@lucide/svelte/icons/circle-user';
  import {type Icon as IconType } from '@lucide/svelte';
  import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
  type MenuItem = {
    label: string;
    href: string;
    icon: typeof IconType;
  }
  const links = [
    { label: "Paperclip", href: `${base}/paper`, icon: Paperclip},
    { label: "Calendar", href: `${base}/calendar`, icon: Calendar},
    { label: "CircleUser", href: `${base}/user`, icon: CircleUser},
  ]
</script>
<style lang="postcss">
  .logo {
    animation: glow 5s linear infinite;
  }
  @keyframes glow {
    0% {
      fill: light-dark(var(--color-primary-600), var(--color-primary-400));
    }
    33% {
      fill: light-dark(var(--color-secondary-600), var(--color-secondary-400));
    }
    66% {
      fill: light-dark(var(--color-tertiary-600), var(--color-tertiary-400));
    }
    100% {
      fill: light-dark(var(--color-primary-600), var(--color-primary-400));
    }
  }
  @keyframes pulse {
    50% {
      transform: scale(1.5);
    }
  }
</style>
<div class="grid grid-rows-[auto_1fr_auto]">
  <!-- Header -->
  <header>
    <AppBar>
  {#snippet lead()}
    <Navigation.Tile href="{base}/" aspect="aspect-auto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 520 512" class="md:inline h-[3em]">
        <path class="logo" d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z"/>
      </svg>
      <span class="align-bottom text-center text-surface-900-100 md:text-3xl">Cache Chess</span>
      
    </Navigation.Tile>
    
    <!-- <House size={20}></House> -->
  {/snippet}
  {#snippet trail()}
    <Navigation.Bar>
      {#each links as {label, href, icon}}
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
  <div class="container mx-auto grid grid-cols-1 xl:grid-cols-[200px_minmax(0px,_1fr)_400px]">
    <!-- Sidebar (Left) -->
    <!-- NOTE: hidden in smaller screen sizes -->
    <aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">(sidebar)</aside>
    <!-- Main -->
    <main class="col-span-1 space-y-4 p-4">
      {@render children()}
    </main>
    <!-- Sidebar (Right) -->
    <!-- NOTE: hidden in smaller screen sizes -->
    <aside class="sticky top-0 col-span-1 hidden h-screen bg-yellow-500 p-4 xl:block">(sidebar)</aside>
  </div>
  <!-- Footer -->
  <footer class="bg-blue-500 p-4">(footer)</footer>
</div>