import { createTRPCClient } from 'trpc-sveltekit';
import type { TRPCClientInit } from 'trpc-sveltekit';
import type { Router } from './router';
import { svelteQueryWrapper } from '../trpc-svelte-query/src';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export const trpc = (init?: TRPCClientInit) => {
  if (typeof window === 'undefined') return createTRPCClient<Router>({ init });
  if (!browserClient) browserClient = createTRPCClient<Router>();
  return browserClient;
};

export const trpcWithQuery = svelteQueryWrapper<Router>(trpc);
