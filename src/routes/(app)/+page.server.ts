import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const { session } = await event.parent();
  throw redirect(301, session ? '/tasks' : '/login');
}) satisfies PageServerLoad;
