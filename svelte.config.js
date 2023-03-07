import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        'script-src': ['self'],
        'require-sri-for': ['script style'],
        'frame-ancestors': ["'self'"],
      },
    },
  },
  trailingSlash: 'always',
};

export default config;
