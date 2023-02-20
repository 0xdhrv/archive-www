import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// NOTE: using svelte-preprocess https://github.com/sveltejs/svelte-preprocess
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		// NOTE: using adapter vercel https://kit.svelte.dev/docs/adapter-vercel
		adapter: adapter()
	}
};

export default config;
