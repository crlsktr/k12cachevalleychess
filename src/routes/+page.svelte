<script>

	import { Accordion, AccordionItem, TreeView, TreeViewItem } from "@skeletonlabs/skeleton";
	import {prizes} from "$lib/prize-list";
	const rules = [
		{summary:"Play all your games", description: "In order to win any prize money or trophy, you must play all rounds"},
		{summary:"Have lived in Cache Valley", description: "You must have lived in Cache Valley sometime in your life and can prove it"},
		{summary:"Ties", description: "If there is a tie, USCF tie break system will be used"},
		{summary:"Tournament Directors", description: "USCF rules will apply unless the TD (Tournament Director) decides differently due to our unique tournament"},
		{summary:"Tricky calls", description: "In any unclear situation, the Tournament Director will make the final decision"},
		{summary:"Clocks", description: "Chess clocks may be used at TD discretion"},
	]
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 flex flex-col items-center">
		
		<figure>
			<section class="img-bg" />
			<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z"/></svg>
		</figure>
		
		<h2 class="h2 text-center">6th Annual Warren Pugh Memorial K-12 Chess Tournament</h2>
		<h3 class="h3 text-center">Welcome to our tournament! Here you will find all the information you need to play with us!</h3>
		<article class="text-center">
			<p class="text-primary-400">November 10 & 11, 2023</p>
			<p>1st Presbyterian Church 200 W Center St, Logan UT</p>
		</article>
		
		<!-- <hr /> -->
		
		<!-- Animated Logo -->
		
		<!-- / -->
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></svelte:fragment>
				<svelte:fragment slot="summary">Rules</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="card">
						<section class="space-y-4">
							<div class="w-full text-token card p-4 space-y-4">
								<dl class="list-dl">
									{#each rules as rule, index}
									<div>
										<span class="badge-icon p-4 variant-soft-secondary">1</span>
										<span class="flex-auto">
											<dt class="font-bold">{rule.summary}</dt>
											<dd class="text-sm opacity-50">{rule.description}</dd>
										</span>
									</div>
									{/each}
								</dl>
							</div>
						</section>
						<footer class="card-footer"></footer>
					</div>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg></svelte:fragment>
				<svelte:fragment slot="summary">Prizes</svelte:fragment>
				<svelte:fragment slot="content">
					<div class="w-full max-w-[480px]">
						There are guaranteed prizes for every grade!
						<TreeView>
							{#each prizes as division, i}
							<TreeViewItem>
								<svelte:fragment slot="default">
									<h5>{division.division}</h5>
									<ol>
										{#each division.top as divisionTop, i}
											<li class="capitalize">{divisionTop.place} Place: {divisionTop.prize}</li>
										{/each}
									</ol>
								</svelte:fragment>
								<svelte:fragment slot="children">
										{#each division.grades as grade, i}
											<TreeViewItem>
												<h6 class="capitalize">{grade.grade}</h6>
												<ol>
													{#each grade.top as gradeTop, i}
														<li>{gradeTop.place}: {gradeTop.prize}</li>
													{/each}
												</ol>
											</TreeViewItem>
										{/each}
								</svelte:fragment>
							</TreeViewItem>
							{/each}
						</TreeView>
					</div>
					
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
</div>

<style lang="postcss">
	* {
		max-width: 100%;
		white-space: unset;
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
