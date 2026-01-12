<script>
	const current_tournament = true;
	const tournament = {};
</script>

{#if current_tournament}
	<div class="items-top container mx-auto flex h-full justify-center">
		<div class="flex flex-col items-center space-y-10">
			<h2 class="h2 text-center">Register Now!</h2>
			<div class="card card-hover overflow-hidden p-4 text-center">
				<header class="flex flex-col items-center">
					<!-- <img {src} class="bg-black/50 aspect-[21/9]" alt="kids/playing" /> -->
				</header>
				<div class="space-y-4 p-4">
					<h6 class="h6" data-toc-ignore>9th Warren Pugh Memorial K-12 Chess Tournament</h6>

					<article class="text-center">
						<p class="text-primary-400">March 7, 2026</p>
						<p>Logan Library 285 N Main St. Logan, UT</p>
						<p><small>not a library sponsored activity</small></p>
					</article>
					<article>
						<p>
							Registration is free<sup>1</sup> and closes February 28, 2026
						</p>
						<p>You can register:</p>
						<ul>
							<li>
								<a
									class="btn btn-sm preset-outlined-primary-200-800 variant-filled-primary"
									href="https://forms.gle/jev5oQsUTHnuFCGY9">Elementary</a
								>
							</li>
							<li>or</li>
							<li>
								<a
									class="btn btn-sm preset-outlined-primary-200-800 variant-filled-primary"
									href="https://forms.gle/t5CrbxMMsKhVYsKh7">Secondary</a
								>
							</li>
						</ul>
						or by emailing<a
							class="text-primary-500"
							href="mailto:bruce@cachechess.com?subject=7th%20Warren%20Pugh%20Memorial%20K-12%20Chess%20Tournament&body=Full%20name%3A%0ABirthdate%3A%0AGrade%3A%0AAddress%3A%0APhone%20Number%3A"
							>bruce@cachechess.com</a
						>.

						<p>There will <strong>not</strong> be on site registration</p>
					</article>
					<article>
						This event is generously sponsored by <a
							class="text-primary-500"
							href="https://www.cvmrotary.org/">Cache Valley Morning Rotary</a
						>
					</article>
				</div>

				<hr class="opacity-50" />
				<footer class="flex items-center justify-start space-x-4 p-4">
					<div class="flex items-center justify-between">
						<p>
							<small
								>While registration is free, we strongly suggest that you donate to <a
									class="text-primary-500"
									href="https://cachefood.org/">Cache Community Food Pantry</a
								>.</small
							>
						</p>
						&nbsp;
						<p>
							<small
								>You can bring a can of food to the event or <a
									class="text-primary-500"
									href="https://cachefood.org/donate">donate directly.</a
								></small
							>
						</p>
					</div>
				</footer>
			</div>
		</div>
	</div>
{:else}
	<h2 class="h2 text-center">Look for new tournaments in our announcements!</h2>
{/if}

<style lang="postcss">
	* {
		max-width: 100%;
		white-space: unset;
	}
</style>
