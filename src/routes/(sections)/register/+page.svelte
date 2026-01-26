<script>
	const current_tournament = true;
	const tournament = {};
</script>

{#if current_tournament}
	<div class="items-top container mx-auto flex h-full justify-center">
		<div class="flex flex-col items-center space-y-10">
			
			<div class="card card-hover overflow-hidden p-4 text-center">
				<header class="flex flex-col items-center mb-4">
					<!-- <img {src} class="bg-black/50 aspect-[21/9]" alt="kids/playing" /> -->
					 <h2 class="h2 text-center text-primary-800-200">Register Now!</h2>
				</header>
				<hr class="hr"/>
				<div class="space-y-4 p-4">
					<h4 class="h4" data-toc-ignore>9th Warren Pugh Memorial K-12 Chess Tournament</h4>

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
						<div class="grid grid-cols-10 m-4 gap-4">
							
								<a
									class="btn btn-lg col-span-5 preset-outlined-primary-200-800 variant-filled-primary"
									href="https://forms.gle/jev5oQsUTHnuFCGY9">Elementary</a
								>
							
							
							
								<a
									class="btn btn-lg col-span-5 preset-outlined-primary-200-800 variant-filled-primary"
									href="https://forms.gle/t5CrbxMMsKhVYsKh7">Secondary</a
								>
							
						</div>
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
