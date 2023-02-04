import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
  try {
    const session = await event.locals.getSession();
    return { session };
  } catch {
    return { session: null };
  }
}

export type Context = inferAsyncReturnType<typeof createContext>;
