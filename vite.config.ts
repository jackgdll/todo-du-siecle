import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  ssr: {
    external: ['@prisma/client'],
  },
};

export default config;
