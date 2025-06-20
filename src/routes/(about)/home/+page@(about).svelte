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
			class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y border-[1px] p-4 lg:max-w-4xl"
		>
			<h2 class="h2 text-center">Bruce Bohm's Guide for Chess beginners</h2>
			<h3 class="h3 p-2">Where do I start?</h3>
			<span>
				Start by listening to the following video:
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube-nocookie.com/embed/ej_fnsdsksA?si=cucg8NSNeOgpMY_x"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</span>

			<h3 class="h3 p-2">Pieces Value</h3>
			<p>
				Realize the value of each piece (the higher the number, the greater value of the piece):
			</p>
			<ul class="list-disc">
				<li>Pawn is worth 1</li>
				<li>Knight is worth 3</li>
				<li>Bishop is worth 3.25</li>
				<li>Rook is worth 5</li>
				<li>Queen is worth 9</li>
				<li>King is worth the whole game; but is about 3 in strength</li>
			</ul>
			<p>
				Realize that a pawn when it reaches the other side of the board can become another queen
				(you can have a number of queens on the board at the same time if pawns are promoted by
				moving to the opposite side of the board). A pawn may be worth only 1 initially. However, a
				pawn may become a queen and be worth 9!
			</p>

			<h3 class="h3 p-2">Special moves</h3>
			<p>Learn how to castle and what makes castling impossible. You cannot castle if:</p>
			<ul class="list-disc">
				<li>The king is in check at the moment you want to castle</li>
				<li>The king cannot cross a square when he would be in check if he remained there</li>
				<li>You cannot castle if you move the king</li>
				<li>You cannot castle if the rook you want to castle with has moved before</li>
				<li>You cannot castle if there are other pieces between the king and rook</li>
			</ul>

			<h3 class="h3 p-2">Play a lot</h3>
			<p>
				Play a lot of chess games and try to learn from your mistakes. There's really no substitute
				for practice!
			</p>

			<h3 class="h3 p-2">Notation</h3>
			<p>
				It is very useful to learn chess notation that is found in chess books and on the Internet
				and record your games. Then you can play them over and over again and learn from your
				mistakes. See the following to learn how:
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube-nocookie.com/embed/RbCKgjYh8So?si=sHgRgA45xDn_Y_lX"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</p>
			<p>
				Search for chess on YouTube and study the free videos. Some videos are better than others,
				but you usually cannot go wrong if the author is a grandmaster (Usually abbreviated as GM;
				they are tried and tested and are very good chess players). Nelson Lopez has a great series
				of chess videos. I especially like the one on his playlist “Beginner to master rating climb
				2004”:
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube-nocookie.com/embed/Y9-xotChwmE?si=MnJHe1deOo_HXtYj"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</p>

			<h3 class="h3 p-2">Other sources</h3>
			<p>
				<a class="text-primary-500" href="https://www.chess.com" target="_blank">Chess.com</a> and
				<a class="text-primary-500" href="https://lichess.org" target="_blank">lichess.org</a> are two
				very reliable sources of chess videos.
			</p>

			<h3 class="h3 p-2">Strategy</h3>
			<p>
				Here is a sample video that teaches about this subject:<br />
				<iframe
					width="100%"
					height="315"
					src="https://www.youtube-nocookie.com/embed/Ohf79-nlekc?si=Q12HMWrELva1ZAEl"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</p>

			<h3 class="h3 p-2">An amazing resource!</h3>
			<p>
				All issues of <strong>Chess Life & Review</strong> that are at least one year old are now available
				online for free! You can download the PDF for each month. This is just awesome! You can learn
				so much from this magazine and now these older issues are free. I recommend that everyone download
				the Oct. 1979 issue and learn how to checkmate with a bishop and knight alone. It is found on
				page 581-583. Access to this archive is like someone just gave you $500+ towards your chess education!!
				Please visit the following website and enjoy this resource:
			</p>
			<a
				class="text-primary-500"
				href="https://new.uschess.org/chess-life-digital-archives"
				target="_blank">Chess Life and Review Magazine Archive</a
			>
		</div>
	</div>
</article>
