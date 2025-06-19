<script lang="ts">
	const rules = [
		{
			summary: 'Play all your games',
			description: 'In order to win any prize money or trophy, you must play all rounds'
		},
		{
			summary: 'Have lived in Cache Valley',
			description: 'You must have lived in Cache Valley sometime in your life and can prove it'
		},
		{ summary: 'Ties', description: 'If there is a tie, USCF tie break system will be used' },
		{
			summary: 'Tournament Directors',
			description:
				'USCF rules will apply unless the TD (Tournament Director) decides differently due to our unique tournament'
		},
		{
			summary: 'Tricky calls',
			description: 'In any unclear situation, the Tournament Director will make the final decision'
		},
		{ summary: 'Clocks', description: 'Chess clocks may be used at TD discretion' }
	];
</script>

<article>
	<header>
		<h2 class="h2 text-center">Rules for our tournaments</h2>
	</header>
	<div class="card">
		<section class="space-y-4">
			<div class="text-token card w-full space-y-4 p-4">
				<dl class="list-dl">
					{#each rules as rule, index}
						<div class="flex p-4">
							<span class="badge-icon preset-filled-primary-200-800 p-4">{index}</span>
							<span class="flex-auto">
								<dt class="font-bold">{rule.summary}</dt>
								<dd class="text-sm opacity-50">{rule.description}</dd>
							</span>
						</div>
					{/each}
				</dl>
			</div>
		</section>
	</div>
</article>
