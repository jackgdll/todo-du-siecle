import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import { GITHUB_ID, GITHUB_SECRET, DISCORD_ID, DISCORD_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
  SvelteKitAuth({
    providers: [
      // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      GitHub({
        clientId: GITHUB_ID,
        clientSecret: GITHUB_SECRET,
      }),
      // @ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      Discord({
        clientId: DISCORD_ID,
        clientSecret: DISCORD_SECRET,
      }),
    ],
  }),
  createTRPCHandle({
    router,
    createContext,
    onError: ({ type, path, error }) =>
      console.error(`Encountered error while trying to process ${type} @ ${path}:`, error),
  }),
) satisfies Handle;
