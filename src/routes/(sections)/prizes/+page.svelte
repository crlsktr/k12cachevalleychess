<script lang="ts">
	import { Trophy, type Icon as IconType } from '@lucide/svelte';
	const rules = [
		{
			summary: 'Prize Distribution',
			description: 'We have two sections for playing but prizes are awarded per each grade'
		},
		{
			summary: 'Prize fund with larger class groups',
			description:
				'The Tournament Director may increase the prize fund for a class that has more than 5 players'
		}
	];
</script>

<article>
	<header>
		<h2 class="h2 text-center text-primary-400-600"><Trophy class="inline text-primary-400-600"/> Prize Information</h2>
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

	<div class="card">
		<section class="space-y-4">
			<div class="text-token card w-full space-y-4 p-4">
				<h2 class="h2">Prize List</h2>
				<ul>
					<div class="p-4">
						<dt class="font-bold">K-5 Section</dt>
						<dd>Each grade gets: 1st Place $120 & Trophy, 2nd Place $60 & Trophy, 3rd Place $20 & Trophy </dd>
					</div>
					<div class="p-4">
						<dt class="font-bold">6-12 Section</dt>
						<dd>Each grade gets: 1st Place $120 & Trophy, 2nd Place $70 , 3rd Place $30</dd>
					</div>
				<ul>
			</div>
		</section>
	</div>
</article>
