import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
  const { session } = await event.parent();
  if (!session) throw redirect(307, '/login');
  const tasks = await router.createCaller(await createContext(event)).tasks.all();

  return {
    session,
    tasks,
  };
}) satisfies LayoutServerLoad;
