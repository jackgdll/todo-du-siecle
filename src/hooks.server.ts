import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import { GITHUB_ID, GITHUB_SECRET, DISCORD_ID, DISCORD_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import type { Provider } from '@auth/core/providers';

export const handle = sequence(
  SvelteKitAuth({
    providers: [
      GitHub({
        clientId: GITHUB_ID,
        clientSecret: GITHUB_SECRET,
      }),
      Discord({
        clientId: DISCORD_ID,
        clientSecret: DISCORD_SECRET,
      }),
    ] as Provider[], // !: https://github.com/nextauthjs/next-auth/issues/6174
  }),
  createTRPCHandle({
    router,
    createContext,
    onError: ({ type, path, error }) =>
      console.error(`Encountered error while trying to process ${type} @ ${path}:`, error),
  }),
) satisfies Handle;
