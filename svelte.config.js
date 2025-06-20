import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

console.log('xkcd ------------------------> Deno.env.get(BASE_PATH)', Deno.env.get('BASE_PATH'));

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter(),
		paths: {
			base: Deno.env.get('BASE_PATH') || ''
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
