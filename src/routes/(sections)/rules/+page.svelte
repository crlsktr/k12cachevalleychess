<script lang="ts">
	
	const rules = [
		{
			summary: 'Excellent Sportmanship',
			description: 'Throughout the entire tournament we expect all participants to exhibit respect for each other, our staff and the game itself'
		},
		{
			summary: 'Play all your games',
			description: 'In order to win any prize money or trophy, you must play all rounds'
		},
		{
			summary: 'Have lived in Cache Valley',
			description: 'You must have lived in Cache Valley sometime in your life and can prove it'
		},
		{ summary: 'Registration', description: 'You must pre-register to play. However, if we have a first round forfeit, the director may allow someone else to play in place of the person forfeiting their place' },
		{ summary: 'Ties', description: 'If there is a tie, USCF tie break system will be used' },
		{
			summary: 'Tournament Directors',
			description:
				'USCF rules (touch-move, castling, "en passant", pawn promotion, etc.) will apply unless the TD (Tournament Director) decides differently due to our unique tournament'
		},
		{
			summary: 'Tricky calls',
			description: 'In any unclear situation, the Tournament Director will make the final decision'
		},
		{ summary: 'Clocks', description: 'Chess clocks may be used at TD discretion on the remaining tables to help wrap up a round' }
	];
</script>

<article>
	<header>
		<h2 class="h2 text-center text-primary-400-600">Rules for our tournaments</h2>
	</header>
	<div class="card">
		<section class="space-y-4">
			<div class="text-token card w-full space-y-4 p-4">
				<dl class="list-dl">
					{#each rules as rule, index}
						<div class="grid grid-cols-12">
							<span class="badge-icon col-span-1 preset-filled-primary-200-800 p-4">{index}</span>
							<span class="flex-auto col-span-11 mb-6 ml-6">
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
