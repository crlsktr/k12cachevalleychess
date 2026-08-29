import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			fallback: 'index'
		}),
		paths: {
			base: Deno.env.get('BASE_PATH') || ''
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
