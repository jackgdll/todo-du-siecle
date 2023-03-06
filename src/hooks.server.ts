import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import Email, { type EmailConfig } from '@auth/core/providers/email';
import {
  GITHUB_ID,
  GITHUB_SECRET,
  DISCORD_ID,
  DISCORD_SECRET,
  EMAIL_FROM,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
} from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import type { Provider } from '@auth/core/providers';
import prisma from '$lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter"

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
      Email({
        server: {
          host: EMAIL_SERVER_HOST,
          port: EMAIL_SERVER_PORT,
          auth: {
            user: EMAIL_SERVER_USER,
            pass: EMAIL_SERVER_PASSWORD,
          },
        },
        from: EMAIL_FROM,
      } as EmailConfig),
    ] as Provider[], // !: https://github.com/nextauthjs/next-auth/issues/6174
    adapter: PrismaAdapter(prisma),
    session: {
      maxAge: 2 * 24 * 60 * 60, // 2 days
    },
  }),
  createTRPCHandle({
    router,
    createContext,
    onError: ({ type, path, error }) =>
      console.error(`Encountered error while trying to process ${type} @ ${path}:`, error),
  }),
) satisfies Handle;
