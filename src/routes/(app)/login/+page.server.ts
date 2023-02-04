import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
  const { session } = await event.parent();
  if (session) throw redirect(307, '/tasks');

  return {};
}) satisfies PageServerLoad;
